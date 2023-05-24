import Eyes from '@applitools/eyes-testcafe';
import { Selector } from 'testcafe';
const eyes = new Eyes();

fixture`Hello world`
  .page('https://applitools.com/helloworld')

test('Hello World', async t => {
    await t.click(Selector('button').withText('Click me!'));
    await t.ctx.eyes.checkWindow({
        target: 'window'
    });
});

