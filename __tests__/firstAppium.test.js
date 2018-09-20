import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 200 * 1000;
// jest.setTimeout(55 * 1000);

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
      await driver.sleep(4000); // wait for app to load
    } catch (err) {
      console.log(err);
    }
  });

  // it('app renders', async () => {
  //   expect(await driver.hasElementByAccessibilityId('testview')).toBe(false);
  //   expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
  //   expect(await driver.hasElementByAccessibilityId('counter')).toBe(true);
  //   expect(await driver.hasElementByAccessibilityId('counterInc')).toBe(true);
  // });


  it('appium button click', async (done) => {
    // expect(await driver.haselementByAccessibilityId('counterInc')).toBe(true);

    let counterIncButton = await driver.elementByAccessibilityId('counterInc');
    counterIncButton.tap();
    // counterIncButton.tap();
    // counterIncButton.tap();
    // counterIncButton.tap();
    // counterIncButton.tap();
    //
    const counter = await driver.elementByAccessibilityId('counter');
    // console.log('counter:');
    // console.log(counter);
    // console.log(counter.value);
    // console.log(counter.text);
    expect(counter.text()).toBe('Counter: 1');
    done();
  });

  afterAll(async (done) => {
    try {
      await driver.quit();
    }
    catch (err) {
      console.error(err);
    }
    finally {
      done();
    }
  });

});
