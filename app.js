Vue.component('play-score', {
  template: `
    <div class="play-score">
      <div v-for="(text, index) in playScoreText"
        class="play-score-text"
        :class="'play-score-text-' + index"
      >
        {{ text }}
      </play-score-text>
    </div>`,
  props: ['playScoreText']
});

let app = new Vue({
  el: '#app',
  data: {
    sampleText: ['1B', 'SB', 'WP', 'CS']
  }
});
