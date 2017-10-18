Vue.component('play-score', {
  template: `
    <div class="play-score">
      <table>
        <tr>
          <td>{{ topLeftText }}</td>
          <td>{{ topRightText }}</td>
        </tr>
        <tr>
          <td>{{ bottomLeftText }}</td>
          <td>{{ bottomRightText }}</td>
        </tr>
      </table>
    </div>`,
  props: {
    topLeftText: String,
    topRightText: String,
    bottomLeftText: String,
    bottomRightText: String
  }
});

let app = new Vue({
  el: '#app',
  template: `
    <div id="app">
      <play-score
        topLeftText="WP"
        topRightText="SB"
        bottomLeftText="CS"
        bottomRightText="1B"
      />
    </div>`
});
