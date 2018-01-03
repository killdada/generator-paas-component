'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('name', {
      type: String,
      required: false,
      defaults: '',
      desc: 'paas id and project name'
    });
    this.option('routes', {
      type: Boolean,
      required: false,
      defaults: '',
      desc: 'has innerPage'
    });
    this.option('store', {
      type: Boolean,
      required: false,
      defaults: '',
      desc: 'use vuex'
    });
  }
  Writing() {
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {
      name: this.options.name
    });
    this.fs.copy(this.templatePath('index.js'), this.destinationPath('index.js'));
    this.fs.copyTpl(
      this.templatePath('src/index.ejs'),
      this.destinationPath('src/index.js'),
      {
        id: this.options.name
      }
    );
    this.fs.copy(
      this.templatePath('src/views/index.vue'),
      this.destinationPath('src/views/index.vue')
    );
    this.fs.copy(this.templatePath('designer'), this.destinationPath('designer'));

    if (this.options.router) {
      this.fs.copy(this.templatePath('routes'), this.destinationPath('src/routes'));
    }

    if (this.options.vuex) {
      this.fs.copy(this.templatePath('store'), this.destinationPath('src/store'));
    }

  }
};
