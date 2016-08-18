import Ember from 'ember';

export default Ember.Component.extend({
  commentUpdate: false,
  actions:  {
    updateComment() {
      this.set('commentUpdate', true);
    },
    submitComment(comment) {
      var params = {
        text: this.get('text'),
        blog: this.get('blog'),
        name: this.get('name')
      };
      this.sendAction('updateComment', comment, params);
      this.set('commentUpdate', false);
    }
  }
});
