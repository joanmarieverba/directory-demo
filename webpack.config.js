var webpack = require('webpack');
var getConfig = require('hjs-webpack');

var config = getConfig({
  // entry point for the app
  in: 'src/App.jsx',

  // Name or full path of output directory
  // commonly named www or public. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'public',

  // This will destroy and re-create your
  // out folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: '!(images|favicon.ico)',

  html: function (context) {
    console.log(context.defaultTemplate({
      head: '<base href="/" />'
    }));
    return {
      'index.html': context.defaultTemplate({
        head: '<base href="/" />'
      })
    }
  }

});

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
);

module.exports = config;
