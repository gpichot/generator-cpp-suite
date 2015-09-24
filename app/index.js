'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var foldername = path.basename(process.cwd());

var CppSuiteGenerator = module.exports = function CppSuiteGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(CppSuiteGenerator, yeoman.generators.Base);

CppSuiteGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'projectName',
    message: 'What is the name of the project?',
    default: foldername
  }, {
    name: 'projectSlug',
    message: 'What is the slug of the project?',
    default: foldername
  }, {
    name: 'projectDescription',
    message: 'Write a short description of your project:',
    default: 'Some project'
  }, {
    name: 'author',
    message: 'Who is the creator?',
    default: 'dummy'
  }];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;
    this.projectSlug = props.projectSlug;
    this.projectDescription = props.projectDescription;
    this.author = props.author;
    this.projectRepo = props.projectRepo;

    cb();
  }.bind(this));
};


CppSuiteGenerator.prototype.git = function git() {
  this.template('_gitignore', '.gitignore');
};

CppSuiteGenerator.prototype.source = function source() {
    this.mkdir('src');
    this.template('CMakeLists.txt', 'CMakeLists.txt');
    this.template('src/CMakeLists.txt', 'src/CMakeLists.txt');
}

CppSuiteGenerator.prototype.examples = function examples() {
    this.mkdir('examples');
    this.template('examples/CMakeLists.txt', 'examples/CMakeLists.txt');
}

CppSuiteGenerator.prototype.tests = function tests() {
    this.mkdir('tests');
    this.template('tests/CMakeLists.txt', 'tests/CMakeLists.txt');
}

CppSuiteGenerator.prototype.pkg_config = function pkg_config() {
    this.copy('project_name.pc.in', this.projectSlug + '.pc.in');
}

CppSuiteGenerator.prototype.cmakeTools = function cmakeTools() {
    this.spawnCommand('git', ['init']);
    this.spawnCommand('git', ['submodule', 'add', 'https://github.com/gpichot/cmake-modules', 'cmake']);
}

CppSuiteGenerator.prototype.doxygen = function doxygen() {
    this.mkdir('doc');
    this.copy('doc/CMakeLists.txt', 'doc/CMakeLists.txt');
    this.template('doc/Doxyfile.in', 'doc/Doxyfile.in');
}

CppSuiteGenerator.prototype.benchmarks = function benchmarks() {
    this.mkdir('benchmarks');
    this.copy('benchmarks/CMakeLists.txt', 'benchmarks/CMakeLists.txt');
}
