 // conf.js
 let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

 exports.config = {
   framework: 'jasmine',
   baseUrl: 'https://qaclickacademy.github.io/protocommerce/',
   seleniumAddress: 'http://localhost:4444/wd/hub',
   specs: ['./home.spec.js', './shop.spec.js'],
   multiCapabilities: [{
     browserName: 'chrome'
   }],

   onPrepare: function () {
     browser.driver.manage().window().maximize();
     jasmine.getEnv().addReporter(new SpecReporter({
       spec: {
         /* 
                 displayStacktrace: true, */
         displayFailuresSummary: true,
         displayFailuredSpec: true,
         displaySuiteNumber: true,
         displaySpecDuration: true
       }
     }));
   },
   jasmineNodeOpts: {
     print: function () {}
   }
 }