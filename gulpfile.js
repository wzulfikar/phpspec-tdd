var elixir = require('laravel-elixir');

elixir.config.appPath = 'src';

elixir(function(mix) {
  mix.phpSpec();
});
