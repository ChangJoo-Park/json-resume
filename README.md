# ChangJoo Park's Resume
This is my simple resume based on [JSON Resume](https://jsonresume.org/).
All assets are built, minified from server side. Only need to deploy in `dist`

## Installation
### Simple Version
just copy and paste in your terminal. you must need `node.js`.
```terminal
git clone https://github.com/ChangJoo-Park/json-resume && cd json-resume && npm install && gulp
```

open your favorite browser, typed **http://localhost:8888**

### Details
**Dependencies**
- Base : node.js `v5.10.1` (latest version is `v6.0.0`)
- Build Tool
  - [gulp](http://gulpjs.com/): automate task tool
- Preprocessor & Minifiers
  - [gulp-clean-css](https://github.com/scniro/gulp-clean-css)
  - [gulp-sass](https://github.com/dlmanning/gulp-sass)
  - [gulp-uglify](https://github.com/terinjokes/gulp-uglify)
  - [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin)
  - [gulp-compile-handlebars](https://github.com/kaanon/gulp-compile-handlebars)
- Web Server
  - [gulp-connect](https://github.com/avevlad/gulp-connect)
- Utils
  - [gulp-concat](https://github.com/wearefractal/gulp-concat)
  - [gulp-data](https://github.com/colynb/gulp-data)
  - [gulp-eslint](https://github.com/adametry/gulp-eslint)
  - [gulp-rename](https://github.com/hparra/gulp-rename)
  - [gulp-watch](https://github.com/floatdrop/gulp-watch)
  - [del](https://github.com/sindresorhus/del)
- Icon
  - [ionicicons](http://ionicons.com/cheatsheet.html)

## Usage
### Using Modal
If you need to use modal some situations, add button and add role to your trigger button 

```html
<button date-role="openModal" data-title="Your Title" data-message="message what you want to show">Button Name</button>
```

```js
// Use where you want
var openModalButton = $("button[data-role='openModal']");
openModalButton.click(function(event) {
  var self = $(this);
  modal.open({
    title: self.data('title'),
    message: self.data('message')
  });
});
```

**How to Close?**

It just click backdrop or close button!

### Change JSON Data
1. [Get JSON resume base](https://jsonresume.org/schema/)
1. Change for yours
1. Copy!
1. Find `./src/data/resume.json` and Open
1. Paste!

### Change Themes
See in `./src/styles` , Add styles or change more prettier

### Change Templates
See in `./src/templates`. You will see views and partials.
- view : Open `index.hbs` and rearrange what you want
- partials
  - resume : It has resume templates.
  - structures: It is my basic structures. 
- context : for Handlebars helper

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Thanks to
- [Avuba](https://avuba.de/) : Thank you for give me a chance to make this project.
- [JSONResume](https://jsonresume.org/schema/) : It is nice json schema for resume
- [Awesome Gulp](http://alferov.github.io/awesome-gulp) : Thank you for recommend good resources
- [Dead simple grid](https://github.com/mourner/dead-simple-grid) : My grid layout is inspired by dead simple grid 

## License
Available under [the MIT license](http://mths.be/mit).
