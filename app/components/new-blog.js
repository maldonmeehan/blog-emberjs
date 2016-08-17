import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text'),
        time: this.get('time'),
        category: this.get('category'),
        image: this.get('image') ? this.get('image'): "https://lovelace-media.imgix.net/uploads/273/26304300-42eb-0134-cd12-0aec1efe63a9.jpg?w=373&h=280&fit=crop&crop=faces&auto=format&q=70"
      };
      this.sendAction('save2', params);
    }
  }
});
