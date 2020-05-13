// next line is optional, just for IDEs autocomplete :
/// <reference types="@applitools/eyes-testcafe" />

import Eyes from '@applitools/eyes-testcafe';

// Initialize the eyes
const eyes = new Eyes();

// Set page used in the test
fixture`Testcafe Demo App`.page`https://demo.applitools.com`
    .afterEach(async () => eyes.close()) // Closing eyes after the test
    .after(async () => await eyes.waitForResults());

test('Tetscafe Helloworld', async t => {
    // Start the test by setting AUT's name, test name and viewport size (width X height)
    await eyes.open({
        t, // pass testcafe contorller
        appName: 'Demo App',
        testName: 'Ultrafast grid demo',
        browser: [
            {width: 800, height: 600, name: 'chrome'},
            {width: 700, height: 500, name: 'firefox'},
            {width: 1600, height: 1200, name: 'ie11'},
            {width: 1024, height: 768, name: 'edgechromium'},
            {width: 800, height: 600, name: 'safari'},
            {deviceName: 'iPhone X', screenOrientation: 'portrait'},
            {deviceName: 'Pixel 2', screenOrientation: 'portrait'}
        ],
        batchName: 'Ultrafast Batch'
    });

    // Visual checkpoint #1 - Check the login page.
    await eyes.checkWindow({
        tag: "Login Window",
        target: 'window',
        fully: true
    });

    // This will create a test with two test steps.
    await t.click('#log-in')

    // Visual checkpoint #2 - Check the app page.
    await eyes.checkWindow({
        tag: "App Window",
        target: 'window',
        fully: true
    })
});