var Handlebars = require('handlebars');
var ResumeJSON = require('../data/resume.json');

// Helpers
Handlebars.registerHelper("lowercase", function(sourceString) {
  if (sourceString === undefined || sourceString === null) {
    return "";
  }
  return sourceString.toLowerCase();
});

Handlebars.registerHelper("socialIcon", function(sourceString) {
  if (sourceString === undefined || sourceString === null) {
    return "";
  }
  var icon = "<i class='icon ion-social-" + sourceString.toLowerCase() + "'></i>";
  var markup = new Handlebars.SafeString(icon);
  return markup;
});

module.exports = {
  resume: ResumeJSON
}
