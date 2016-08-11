# TDD with Gulp and Laravel Elixir

## Installation
- install npm dependencies: `npm i`
- install composer dependencies: `composer install`

## Use Case: TDD FizzBuzz
we want to code for FizzBuzz, assume the namespace is `Acme`.

## Steps
- describe the spec: `vendor/bin/phpspec describe Acme/FizzBuzz`
- run phpspec to create `vendor/bin/phpspec run`. this will prompt you to create `FizzBuzz` class if you haven't do so.
- run `gulp tdd`
- everytime you changed something in `src` or `spec` the `gulp tdd` will run `phpspec run` for you.

## Changing Path of Directory Watcher

**TL;DR** To change the directory of our test watcher, simple set the value of `elixir.config.appPath` in `gulpfile.js` to what you desire.

by default, `phpspec` will store classes in `src` directory but the `gulp tdd` task will watch `Elixir.config.appPath + '/**/*.php', 'tdd'`. since the default `appPath` is `app`, we need to change it to `src` so the `tdd` will be triggered if anything inside `src` changed. to change value of elixir `appPath` to `src`, we used `elixir.config.appPath = 'src';`.
