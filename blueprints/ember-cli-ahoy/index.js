module.exports = {
  description: 'Add ahoy dependency to project',

  normalizeEntityName: function() {
     // allows us to run ember -g ember-cli-ahoy and not blow up
     // because ember cli normally expects the format
     // ember generate <entitiyName> <blueprint>
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

   afterInstall: function(options) {
     return this.addBowerPackageToProject('ankane/ahoy.js');
   }
};
