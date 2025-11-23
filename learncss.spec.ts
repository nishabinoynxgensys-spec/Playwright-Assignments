import {test, webkit} from "@playwright/test";

test (`Test to launch a browser`, async ()=>{

const browser1 = await webkit.launch();
// Step1 launchinf the browser and await key word make's sure that the browser has successfully invoked
//Promise 3 stages :
/* 1. Pending
2. Resolved
3. Rejected */


    const context1 = await browser1.newContext();//Stage 2 creating am isolated environment named as context
    const page1   = await context1.newPage(); //Stage 3 
    await page1.goto(`http://leaftaps.com/opentaps/control/main`);
    await page1.locator(`#username`).fill(`demosalesmanager`)
    await page1.locator(`#password`).fill(`crmsfa`)
    await page1.locator(`.decorativeSubmit`).click();

});