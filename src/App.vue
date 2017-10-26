<template>
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
  </div>
</template>

<script>
import PlayScore from './PlayScore.vue'
export default {
  components: {
    PlayScore
  }
}
</script>

<style>
h1 {
  text-align: center;
  font-family: 'Quicksand', sans-serif;
}
</style>
