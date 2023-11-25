describe("Web automation real device", () => {
    it("Opening Website", async () => {
      browser.url("https://mfml.in/api/getInfo")
    });

    it("Changes color", async () => {
      var color = await $("id=resolution");
      await color.waitForDisplayed({ timeout: 30000 });
      await color.click();
      await color.click();
    });

    it('Should get all window handles', async () => {
         windowHandles = await browser.getWindowHandles();
         console.log(windowHandles);
    });
  
    it("Changes text", async () => {
      var text = await $("id=location");
      await text.waitForDisplayed({ timeout: 30000 });
      await text.click();
    });
  
    it("Toast", async () => {
      var toast = await $("id=details");
      await toast.waitForDisplayed({ timeout: 30000 });
      await toast.click();
    });
  
    it("Notification", async () => {
      var nf = await $("id=timezone");
      await nf.waitForDisplayed({ timeout: 30000 });
      await nf.click();
    });

  });
  