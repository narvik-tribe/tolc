<template>
  <div id="app">
    <div style="float: left; margin-left: 100px" :class="maybe_disabled">
      <input style="float: left; margin-right: 5px; max-width: 50px" ref="inp" id="inp" @input="f" v-model="quiz_number"/>
      <span style="float: left; margin-right: 30px;" v-if="current_quiz">{{quiz[current_quiz].type}}</span>
      <div style="float: left" v-show="current_quiz !== undefined">
        <label for="a">A</label>
        <input style="; margin-right: 10px" type="radio" id="a" value="a" v-model="answer" />
        <label for="b">B</label>
        <input style="; margin-right: 10px" type="radio" id="b" value="b" v-model="answer" />
        <label for="c">C</label>
        <input style="; margin-right: 10px" type="radio" id="c" value="c" v-model="answer" />
        <label for="d">D</label>
        <input style="; margin-right: 10px" type="radio" id="d" value="d" v-model="answer" />
        <label for="e">E</label>
        <input style="; margin-right: 30px" type="radio" id="e" value="e" v-model="answer" />

        <span style="color: green;" v-if="current_quiz && answer === quiz[current_quiz].answer">OK</span>
        <span style="color: red;" v-else-if="answer !== undefined">NO</span>
      </div>
    </div>
  </div>
</template>

<script>
import quiz from './quiz.json'

export default {
  name: "App",
  components: {},
  watch: {
    answer: function (current) {
      if (this.current_quiz && current !== this.quiz[this.current_quiz].answer) {
        this.maybe_disabled = 'disabled'
        setTimeout(() => {
          this.maybe_disabled = ''
          this.$refs['inp'].focus()
        }, 3000)
      } else {
        this.$refs['inp'].focus()
      }
    }
  },
  data() {
    return {
      quiz: quiz,
      quiz_number: undefined,
      current_quiz: undefined,
      answer: undefined,
      maybe_disabled: '',
    };
  },
  methods: {
    f() {
      this.current_quiz = undefined
      this.answer = undefined

      if (this.quiz_number in this.quiz) {
        this.current_quiz = this.quiz_number
      } 
    },
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.disabled {
    pointer-events: none;
    opacity: 0.6;
}
</style>
