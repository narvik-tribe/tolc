<template>
  <div id="app">
    <div style="float: left; margin-left: 100px; margin-bottom: 100px;">
      <select v-model="selected" style="display: block; margin-bottom: 10px" @change="clear_answer">
        <option disabled value="">Category</option>
        <option v-for="cat in categories" :key="cat.code" :value="cat.code">{{cat.name}}</option>
      </select>

      <div 
        v-for="item in filtered"
        :key="item.id"
        style="margin-bottom: 5px; text-align: left"
        :class="maybe_disabled[item.id]"
        :style="maybe_last(item.id)"
      >
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

        <span :style="answ_style(answer[item.id] === item.answer, answer[item.id])">
          {{answ_label(answer[item.id] === item.answer, answer[item.id])}}
        </span>
        {{storage[item.id] ? '(' + '*'.repeat(storage[item.id]) + ')' : ''}}
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
      selected: undefined,
      categories,
      quiz,
      quiz_number: undefined,
      current_quiz: undefined,
      // answer: undefined,
      maybe_disabled: {},
      storage: undefined,
      last: undefined,
    };
  },
  mounted() {
    if (!('result' in window.localStorage)) {
      window.localStorage.setItem('result', '{}')
    }
    if (!('last' in window.localStorage)) {
      window.localStorage.setItem('last', '{}')
    }
    this.storage = JSON.parse(window.localStorage.getItem('result'))
    this.last = JSON.parse(window.localStorage.getItem('last'))
  },
  methods: {
    maybe_last(id) {
      return id === this.last[this.selected] ? 'border-style: solid; border-width: thin;' : ''
    },
    answ_label(b, exists) {
      return b 
        ? 'OK' 
        : exists ? 'NO' : '.....'
    },
    answ_style(b, exists) {
      return b 
        ? 'color: green' 
        : exists ? 'color: orange' : 'color: black'
    },
    clear_answer() {
      this.answer = {}
    },
    evaluate(id) {
      this.last[this.selected] = id
      window.localStorage.setItem('last', JSON.stringify(this.last))
      
      if (this.answer[id] !== this.quiz[id].answer) {
        if (!(id in this.storage)) {
          this.storage[id] = 0
        }
        this.storage[id]++
        window.localStorage.setItem('result', JSON.stringify(this.storage))

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
