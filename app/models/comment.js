import DS from 'ember-data';

export default DS.Model.extend({
  blog: DS.belongsTo('blog', { async: true}),
  text: DS.attr(),
  name: DS.attr()
});
