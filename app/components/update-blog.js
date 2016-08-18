import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(model) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text'),
        category: this.get('category'),
        image: this.get('image'),
        time: this.get('time')
      };
      this.set('updateBlogForm', false);
      this.sendAction('update', model, params);
    }
  }
});
