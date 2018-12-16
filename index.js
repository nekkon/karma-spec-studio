var SpecStudioReporter = function(baseReporterDecorator, config, logger, helper, formatError) {
    console.log(baseReporterDecorator)
    console.log(config)
    console.log(logger)
    console.log(helper)
    console.log(formatError)
};

SpecStudioReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError']

// PUBLISH DI MODULE
module.exports = {
  'reporter:specStudio': ['type', SpecStudioReporter]
}