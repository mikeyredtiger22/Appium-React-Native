import wd from 'wd';

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
// jest.setTimeout(9000);
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'EMULATOR1',
  app: './android/app/build/outputs/apk/app-debug.apk'
};
const driver = wd.promiseChainRemote('localhost', PORT);


beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000); // wait for app to load
  // done();
});

// test('appium renders', async () => {
//   // let contexts = await driver.contexts();
//   // console.log('CONTEXTS:::');
//   // console.log(contexts);
//   // expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
//   // expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
// done();
// });


test('appium button click', async () => {
  // expect(await driver.hasElementByAccessibilityId('counterInc')).resolves.toBe(true);
  // await driver.elementByAccessibilityId('counterInc').resolves
  // .click()
  // .click();

  const counter = await driver.elementByAccessibilityId('counter');
  console.log('counter:');
  console.log(counter.value);
  expect(counter.value).toBe('0');
  done();
});

// afterAll(() => setTimeout(() => process.exit(), 1000));
