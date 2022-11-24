module.exports = {
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('task', {
        readFileMaybe(filename) {
          if (fs.existsSync(filename)) {
            return fs.readFileSync(filename, 'utf8')
          }
      
          return null
        }
      })
      // return require('./cypress/plugins/index.js')(on, config);
    }

  }
};