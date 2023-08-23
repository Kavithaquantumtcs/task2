const { test, expect } = require('@playwright/test');




test.only('Github Automation', async ({ page }) => {
    // load the github page
    await page.goto("https://github.com/");
    // hover on product section
    await page.locator("//button[normalize-space()='Open Source']").hover();
    // click the topic link
    await page.locator("text='Topics'").click();

    // get the second link and click
    const items = await page.locator(".flex-items-stretch li");
    await items.nth(1).locator("div a").click();

    // select the first link of the page 
    await page.locator(".topic article").nth(0).locator(".wb-break-word").click();
    //await page.locator("[data-testid*='results-list'] a").nth(0).click();

    //get the page url and print it 
    console.log(page.url());
    const url = page.url();

    //get the username  and print it 
    //await page.locator (".commit-author ").textContent();
    console.log(await page.locator(".user-mention").textContent());
    const repoUser = await page.locator(".user-mention").textContent();


    //get the apth name 
    var newUrl = url.replace("https://github.com/", '');
    console.log(newUrl);

    //locate and select the searc box 
    await page.locator("//span[normalize-space()='Search or jump to...']").click()

    // clear the existing text 
    await page.locator("#query-builder-test-clear-button").click();

    // type the url path
    await page.locator("#query-builder-test").type(newUrl);

    //press the enter key
    await page.keyboard.press('Enter');

    // In the search list click the first link 
    await page.locator("[data-testid*='results-list'] a").nth(0).click();

    //current repouser
    const repoUserNew = await page.locator(".user-mention").textContent();
    // repoUser.match (repoUser1);
    if (repoUser.match(repoUserNew)) {
        console.log("user matches")
    } else {
        console.log("user not matches")
    }
    //await page.pause();

});