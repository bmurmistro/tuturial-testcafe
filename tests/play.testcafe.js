// next line is optional, just for IDEs autocomplete :
/// <reference types="@applitools/eyes-testcafe" />

import Eyes from '@applitools/eyes-testcafe';
import { Selector } from 'testcafe';

// Initialize the eyes
const eyes = new Eyes();

// Set page used in the test
fixture`Testcafe Demo App`.page`https://careers.twitter.com/`
    // Call Close on eyes to let the server know it should display the results
    .afterEach(async () => eyes.close())
    .after(async () => {
        // Wait and collect all test results
        // we pass false to this method to suppress the exception that is thrown if we
        // find visual differences
        let allTestResults = await eyes.waitForResults(false)
        // Print results
        console.log(allTestResults)
    });

test('ultraFastTest', async t => {
    // Call Open on eyes to initialize a test session
    await eyes.open({
        t, // pass testcafe contorller
        appName: 'Demo App',
        testName: 'Ultrafast grid demo',
    });

    // check the login page with fluent api, see more info here
    // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
    var start = new Date().getTime();
    await eyes.checkWindow({
        tag: "Login Window",
        target: 'window',
        fully: true,
        ignoreDisplacements: true
    });
    var end  =new Date().getTime();
    console.log(end -start)

    // This will create a test with two test steps.

});

test('ultraFastTest2', async t => {
    // Call Open on eyes to initialize a test session
    await eyes.open({
        t, // pass testcafe contorller
        appName: 'Demo App',
        testName: 'Ultrafast grid demo2',
    });

    // check the login page with fluent api, see more info here
    // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
    
    var start = new Date().getTime();
    await eyes.checkWindow({
        tag: "Login Window",
        target: 'window',
        fully: true,
        ignoreDisplacements: true
    });
    var end  =new Date().getTime();
    console.log(end -start)

});

test('ultraFastTest3', async t => {
    // Call Open on eyes to initialize a test session
    await eyes.open({
        t, // pass testcafe contorller
        appName: 'Demo App',
        testName: 'Ultrafast grid demo3',
    });

    // check the login page with fluent api, see more info here
    // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
    var start = new Date().getTime();
    await eyes.checkWindow({
        tag: "Login Window",
        target: 'window',
        fully: true,
        ignoreDisplacements: true
    });
    var end  =new Date().getTime();
    console.log(end -start)
});
