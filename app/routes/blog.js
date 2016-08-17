import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params);
    debugger;
    return this.store.findRecord('blog', params.blog_id);
  },
});
