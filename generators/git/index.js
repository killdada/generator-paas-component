'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('name', {
      type: String,
      required: true,
      desc: 'repositoy name'
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('gitattributes'),
      this.destinationPath('.gitattributes')
    );
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
  }

  end() {
    this.spawnCommandSync('git', ['init', '--quiet'], {
      cwd: this.destinationPath('')
    });
    const repoSSH = this.pkg.repository 
    this.spawnCommandSync('git', ['remote', 'add', 'origin', repoSSH], {
      cwd: this.destinationPath('')
    });
  }
};
