<template>
  <div class="play-score">
    <div class="center-text">{{ centerText }}</div>
    <table>
      <tr><td>{{ topLeftText }}</td><td>{{ topRightText }}</td></tr>
      <tr><td>{{ bottomLeftText }}</td><td>{{ bottomRightText }}</td></tr>
    </table>
    <div :class="basePathClass"></div>
  </div>
</template>

<script>
export default {
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
}
</script>

<style scoped>
/* play-score
   ========================================================================== */

.play-score {
  position: relative;
  margin: auto;
  width: 100px;
  height: 100px;
  font-family: 'Short Stack', cursive;
  font-size: 22px;
}

.play-score .center-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 1;
}

.play-score table {
  position: absolute;
  width: 100%;
  height: 100%;
}

.play-score tr:first-of-type {
  vertical-align: top;
}

.play-score tr:last-of-type {
  vertical-align: bottom;
}

.play-score tr td:first-of-type {
  text-align: left;
}

.play-score tr td:last-of-type {
  text-align: right;
}

/* base-path
   ========================================================================== */

.base-path {
  position: absolute;
  width: 50%;
  height: 50%;
  box-sizing: border-box;
  transform: rotate(45deg) translateX(70.7%);
  border-top: solid 1px lightgray;
  border-bottom: solid 1px lightgrey;
  border-left: solid 1px lightgrey;
  border-right: solid 1px lightgrey;
}

.base-path-1b {
  border-right: solid;
}

.base-path-2b {
  border-right: solid;
  border-top: solid;
}

.base-path-3b {
  border-right: solid;
  border-top: solid;
  border-left: solid;
}

.base-path-hr {
  background: black;
  border-color: black;
}
</style>
