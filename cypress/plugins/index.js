const preprocessor = require('cypress-react-unit-test/plugins/react-scripts')
module.exports = (on, config) => {
   preprocessor(on, config)
  // IMPORTANT to return the config object
  return config
}
