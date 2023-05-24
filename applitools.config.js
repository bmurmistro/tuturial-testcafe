module.exports = {
    apiKey: process.env.APPLITOOLS_API_KEY || 'your APPLITOOLS_API_KEY',
    batchName: 'Testcafe Batch',
    appName: 'Testcafe App',
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'}
    ],
    // specify Eyes concurrency level
    testConcurrency: 30,
    dontCloseBatches: true,
    showLogs: true
}
