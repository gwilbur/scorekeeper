Vue.component('play-score', {
  template: `
    <div class="play-score">
      <div class="center-text">{{ centerText }}</div>
      <table>
        <tr><td>{{ topLeftText }}</td><td>{{ topRightText }}</td></tr>
        <tr><td>{{ bottomLeftText }}</td><td>{{ bottomRightText }}</td></tr>
      </table>
      <div :class="basePathClass"></div>
    </div>`,
  props: {
    centerText: {type: String, default: ''},
    topLeftText: {type: String, default: ''},
    topRightText: {type: String, default: ''},
    bottomLeftText: {type: String, default: ''},
    bottomRightText: {type: String, default: ''},
    basePath: {
      type: String,
      default: '',
      validator: function(value) {
        return ['', '1B', '2B', '3B', 'HR'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    basePathClass: function() {
      if (this.basePath === '') {
        return 'base-path';
      } else {
        return 'base-path base-path-' + this.basePath.toLowerCase();
      }
    }
  }
});

let app = new Vue({
  el: '#app',
  template: `
    <div id="app">
      <h1>Scorekeeper</h1>
      <play-score
        centerText="6-4-3"
      />
      <play-score
        bottomRightText="1B"
        basePath="1B"
      />
      <play-score
        bottomRightText="2B"
        basePath="2B"
      />
      <play-score
        bottomRightText="3B"
        basePath="3B"
      />
      <play-score
        bottomRightText="HR"
        basePath="HR"
      />
    </div>`
});
