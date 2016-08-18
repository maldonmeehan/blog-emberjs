import Ember from 'ember';

export default Ember.Component.extend({
  blogAddComment: false,
  actions: {
    addComment() {
      this.set('blogAddComment', true);
    },
    submitComment() {
      var params = {
        text: this.get('text'),
        name: this.get('name'),
        blog: this.get('blog')
      };
      this.set('blogAddComment', false);
      this.sendAction('submitComment', params);
    }
  }
});
 
