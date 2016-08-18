import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyComment(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
