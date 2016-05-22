/* eslint no-var: "off" */
// Dark magic that requires all spec files

var testsContext = require.context('./spec', true, /spec\.js$/)
testsContext.keys().forEach(testsContext)
