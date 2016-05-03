'use strict';
var Handlebars = require('handlebars');
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

// Resume data
module.exports = {
  "basics": {
    "name": "ChangJoo Park",
    "label": "Frontend Programmer",
    "picture": "",
    "email": "changjoo.park.cj@gmail.com",
    "phone": "+49 015779830582",
    "website": "http://changjoo-park.github.io/",
    "summary": "Web developer and iOS developer and with 3 years experience in both development position. I understand importance of readable and maintainable source code. I am constantly striving to learn new technology and create easy to use.",
    "location": {
      "address": "Ringslebenstr. 2",
      "postalCode": "12353",
      "city": "Neukölln",
      "countryCode": "DE",
      "region": "Berlin"
    },
    "profiles": [{
      "network": "Twitter",
      "username": "pcjpcj2",
      "url": "http://twitter.com/pcjpcj2"
    }, {
      "network": "Github",
      "username": "changjoo-park",
      "url": "github.com/changjoo-park"
    }]
  },
  "work": [{
    "company": "Independent Development",
    "position": "iOS Developer",
    "website": "http://grackerapp.github.io/",
    "startDate": "2015-12",
    "endDate": "2016-04",
    "summary": "iOS development. using Swift, Apple Map, Local Search, i18n support, Youtube API",
  }, {
    "company": "Alticast",
    "position": "Java frontend developer",
    "startDate": "2014-04",
    "endDate": "2015-04",
    "summary": "Build a TV Guide and VOD player.",
  }, {
    "company": "Devguru",
    "position": "Wordpress developer",
    "website": "http://devguru.co.kr",
    "startDate": "2013-05",
    "endDate": "2014-03",
    "summary": "Create company and product website. make plugins",
  }, ],
  "volunteer": [{
    "organization": "Realm for React-Native",
    "position": "Volunteer translator",
    "website": "https://realm.io/kr/docs/react-native/latest/",
    "startDate": "2016-03",
    "endDate": "2016-04",
    "summary": "Translate getting start document English to Korean. Realm mobile database for React Native",
  }],
  "education": [{
    "institution": "SeoulTech University (Seoul, Korea)",
    "area": "Computer Science and Engineering",
    "gpa": "3.5",
    "studyType": "Bachelor",
    "startDate": "2008-03-02",
    "endDate": "2014-02-01",
  }],
  "skills": [{
    "name": "Frontend Web development",
    "level": "Intermediate",
    "keywords": [
      "HTML",
      "CSS",
      "Javascript",
      "Ember.js"
    ]
  }, {
    "name": "Back Web development",
    "level": "Intermediate",
    "keywords": [
      "Ruby on Rails",
    ]
  }],
  "languages": [{
    "name": "English",
    "level": "Intermediate"
  }, {
    "name": "Korean",
    "level": "Native Speaker"
  }, {
    "name": "German",
    "level": "Beginner"
  }, ],
  "interests": [{
    "name": "Football",
  }, {
    "name": "Traveling",
  }],
}
