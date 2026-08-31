pipeline {
    agent any

    environment {
    LT_USERNAME   = credentials('LT_USERNAME')
    LT_ACCESS_KEY = credentials('LT_ACCESS_KEY')
    PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
}

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                dir('android-sample') { sh 'npm install' }
                dir('ios-sample') { sh 'npm install' }
            }
        }

        stage('Mobile Automation') {
            parallel {
                stage('Android Suite') {
                    steps {
                        dir('android-sample') {
                            sh 'npx wdio android_ltOptions_w3c/android-app-single-ltOptions-w3c.conf.js --spec ../specs/android-test.js || true'
                            sh 'npx wdio android_ltOptions_w3c/android-web-single-ltOptions-w3c.conf.js --spec ../specs/android-web-test.js || true'
                            sh 'npx wdio android-parallel.conf.js --spec ../specs/android-test.js || true'
                            sh 'npx wdio android-web-parallel.conf.js --spec ../specs/android-web-test.js || true'
                        }
                    }
                }
                stage('iOS Suite') {
                    steps {
                        dir('ios-sample') {
                            sh 'npx wdio ios_ltOptions_w3c/ios-app-single-ltOptions-w3c.conf.js --spec ../specs/ios-test.js || true'
                            sh 'npx wdio ios_ltOptions_w3c/ios-web-single-ltOptions-w3c.conf.js --spec ../specs/ios-web-test.js || true'
                            sh 'npx wdio ios-parallel.conf.js --spec ../specs/ios-test.js || true'
                            sh 'npx wdio ios-web-parallel.conf.js --spec ../specs/ios-web-test.js || true'
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/errorShots/*.png', allowEmptyArchive: true
            deleteDir()
        }
    }
}