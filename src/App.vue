<template>
  <div id="app">
    <div style="float: left; margin-left: 100px">
      <select v-model="selected" style="display: block; margin-bottom: 10px" @change="clear_answer">
        <option disabled value="">Category</option>
        <option v-for="cat in categories" :key="cat.code" :value="cat.code">{{cat.name}}</option>
      </select>

      <div v-for="item in filtered" :key="item.id" style="margin-bottom: 5px" :class="maybe_disabled[item.id]">
        <span style="margin-right: 15px">{{item.id}}</span>
        <label for="a">A</label>
        <input style="; margin-right: 10px" type="radio" id="a" value="a" v-model="answer[item.id]" @change="evaluate(item.id)"/>
        <label for="b">B</label>
        <input style="; margin-right: 10px" type="radio" id="b" value="b" v-model="answer[item.id]" @change="evaluate(item.id)"/>
        <label for="c">C</label>
        <input style="; margin-right: 10px" type="radio" id="c" value="c" v-model="answer[item.id]" @change="evaluate(item.id)"/>
        <label for="d">D</label>
        <input style="; margin-right: 10px" type="radio" id="d" value="d" v-model="answer[item.id]" @change="evaluate(item.id)"/>
        <label for="e">E</label>
        <input style="; margin-right: 30px" type="radio" id="e" value="e" v-model="answer[item.id]" @change="evaluate(item.id)"/>

        <span style="color: green">{{answ_label(answer[item.id] === item.answer, answer[item.id])}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import quiz from './quiz.json'
import categories from './categories.json'

export default {
  name: "App",
  computed: {
    filtered() {
      return Object
        .keys(this.quiz)
        .filter(id => this.quiz[id].type === this.selected)
        .map(id => ({id, answer: this.quiz[id].answer}))
    }
  },
  data() {
    return {
      answer: {},  // id: a..e
      selected: 'a',
      categories,
      quiz,
      quiz_number: undefined,
      current_quiz: undefined,
      // answer: undefined,
      maybe_disabled: {},
    };
  },
  mounted() {
    if ('result' in window.localStorage) {
      return
    }
    window.localStorage.setItem('result', '{}')
  },
  methods: {
    answ_label(b, exists) {
      return b 
        ? 'OK' 
        : exists ? '___' : '.....'
    },
    clear_answer() {
      this.answer = {}
    },
    evaluate(id) {
      if (this.answer[id] !== this.quiz[id].answer) {
        const result = JSON.parse(window.localStorage.getItem('result'))
        if (!(id in result)) {
          result[id] = 0
        }
        result[id]++
        window.localStorage.setItem('result', JSON.stringify(result))

        this.$set(this.maybe_disabled, id, 'disabled')
        this.maybe_disabled[id] = 'disabled'
        const THIS = this
        setTimeout(() => {
          THIS.$set(THIS.maybe_disabled, id, '')
        }, 15000)
      }
    }
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
