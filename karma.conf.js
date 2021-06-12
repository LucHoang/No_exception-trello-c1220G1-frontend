// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/trelloProjectFrontend'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};

function validate()
{
  if (document.myForm.txtfname.value == "")
  {
    alert("Please Enter First Name");
    document.myForm.txtfname.focus();
    return false;
  }

  if (document.myForm.txtlname.value == "")
  {
    alert("Please Enter Last Name");
    document.myForm.txtlname.focus();
    return false;
  }

  if (document.myForm.txtpass.value == "")
  {
    alert("Please Create your Password");
    document.myForm.txtpass.focus();
    return false;
  }

  if (document.myForm.txtmobile.value == "")
  {
    alert("Please enter Mobile Number");
    document.myForm.txtmobile.focus();
    return false;
  }

  if (document.myForm.txtmail.value == "")
  {
    alert("Please Enter E-Mail ID");
    document.myForm.txtmail.focus();
    return false;
  }

  if (document.myForm.txtadd.value == "")
  {
    alert("Please Enter Address");
    document.myForm.txtadd.focus();
    return false;
  }

  if (document.myForm.dob.value == "")
  {
    alert("Please Enter Date of Birth");
    document.myForm.dob.focus();
    return false;
  }
}

