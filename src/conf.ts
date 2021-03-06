import { browser } from "protractor";

require('module-alias/register');
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    baseUrl: 'http://192.168.171.191:4200/#/login',
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    //specs: ["../build/testcases/TC_LI001.js"],
    suites: {
        TC1: ["../build/test-cases/TC_LI001.js"],
        
      },
      onPrepare: () => {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);

    }
};  