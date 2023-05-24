const Eyes = require("@applitools/eyes-testcafe");

module.exports = {
    skipJsErrors: true,
    concurrency: 1,
    hooks: {
        test: {
          before: async t => {
            const eyes = new Eyes();
            t.ctx.eyes = eyes;
            await eyes.open({
              t,
              //appName comes from applitools.config.js
              testName: t.testRun.test.name,
              viewportSize: { width: 800, height: 600 }
            });
          },
          after: async t => {
              const eyes = t.ctx.eyes;
              await eyes.close();
              await eyes.waitForResults();
          }
        },
    }
}