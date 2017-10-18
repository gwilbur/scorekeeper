Vue.component('play-score', {
  template: `
    <div class="play-score">
      <div class="center-text">{{ centerText }}</div>
      <table>
        <tr><td>{{ topLeftText }}</td><td>{{ topRightText }}</td></tr>
        <tr><td>{{ bottomLeftText }}</td><td>{{ bottomRightText }}</td></tr>
      </table>
    </div>`,
  props: {
    centerText: {type: String, default: ''},
    topLeftText: {type: String, default: ''},
    topRightText: {type: String, default: ''},
    bottomLeftText: {type: String, default: ''},
    bottomRightText: {type: String, default: ''}
  }
});

let app = new Vue({
  el: '#app',
  template: `
    <div id="app">
      <play-score
        centerText="6-4-3"
        topLeftText="WP"
        topRightText="SB"
        bottomLeftText="CS"
        bottomRightText="1B"
      />
    </div>`
});
