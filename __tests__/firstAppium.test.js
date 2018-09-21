import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 200 * 1000;

const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: './android/app/build/outputs/apk/app-release.apk'
};

const driver = wd.promiseChainRemote('localhost', 4723);

describe('App', () => {

  beforeAll(async () => {
    try {
      await driver.init(config);
      // await driver.sleep(1000); // wait for app to load
    } catch (err) {
      console.log(err);
    }
  });

  /*
      Main Accessibility Id Methods:
      await driver.elementByAccessibilityId('counterInc');
      await driver.elementByAccessibilityIdOrNull('counterInc');
      await driver.elementByAccessibilityIdIfExists('counterInc');
      await driver.waitForElementByAccessibilityId('counterInc');
   */

  it('app renders', async () => {
    expect(await driver.hasElementByAccessibilityId('testview')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('counter')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('counterInc')).toBe(true);
  });


  it('appium button click', async () => {
    let counterIncButton = await driver.elementByAccessibilityId('counterInc');
    counterIncButton.tap();
    counterIncButton.tap();
  });

  it('appium button click', async () => {
    // expect(await driver.hasElementByAccessibilityId('counter')).toBe(true);
    let counter = await driver.elementByAccessibilityId('counter');
    expect(await counter.text()).toBe('Counter: 2');
  });

  afterAll(async (done) => {
    try {
      await driver.quit();
    } catch (err) {
      console.error(err);
    } finally {
      done();
    }
  });

});
