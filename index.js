/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-ahoy',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/ahoy.js/ahoy.js');
  }
};
