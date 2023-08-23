const { test, expect } = require('@playwright/test');




test('Flipkart Automation', async ({ page }) => {
    // load the github page
    await page.goto("https://www.flipkart.com/");
    var loginShown = false;
    if (await page.isVisible("button:has-text('✕')")) {
        loginShown = true;
        await page.locator("button:has-text('✕')").click();
    }

    //if (await page.isVisible("//div[@aria-label='Electronics']")) {
    if (!loginShown) {
        console.log("with out login page");


        await page.locator(".emupdz").nth(3).dispatchEvent('hover');
        await page.getByRole('link', { name: 'Laptop and Desktop' }).dispatchEvent('hover');
        await page.getByRole('link', { name: 'Laptops', exact: true }).first().dispatchEvent('click');

        await page.waitForLoadState('networkidle');

        
        const elements = await page.getByRole('img', { name: 'd', exact: true }).nth(1);
        await page.pause();
        if (await elements.isVisible()) {

            console.log("visible")
            const a = page.locator("div[data-tracking-id='Chromebooks'] ._37K3-p");
            const url = a.locator("a").all();
            for (let i = 0; i < url.length; i++) {
                const link = url[i];
                const laptopUrl = await page.evaluate(link => link.href, link);
                console.log('Laptop URL:', laptopUrl);
            }


        } else {
            console.log("not visible")
        }

    }
    else {
        console.log("with login page");
        await page.locator(".eFQ30H").nth(3).hover();
        await page.getByRole('link', { name: 'Laptop and Desktop' }).dispatchEvent('hover');
        await page.getByRole('link', { name: 'Laptops', exact: true }).first().dispatchEvent('click');
        await page.waitForLoadState('networkidle');
        const elements = await page.getByRole('img', { name: 'd', exact: true }).nth(1);

        if (await elements.isVisible()) {
            console.log("visible")
            const linkList = await page.locator("[data-tracking-id$='Chromebooks'] div._37K3-p >div>div>div>a");
            for(let i = 0; i < await linkList.count(); i++) {
                await linkList.nth(i).getAttribute('href');
                await page.goto("https://www.flipkart.com" + await linkList.nth(i).getAttribute('href') );
                const title = await page.locator(".aMaAEs .B_NuCI").allTextContents();
                const price = await page.locator(".aMaAEs .dyC4hf >div>div>div._30jeq3").allTextContents();
                console.log("Laptop Model = " + title)
                console.log("Price = " + price)
                await page.goBack();
              

            }
        } else {
            console.log("not visible")
        }
    }
   


});













