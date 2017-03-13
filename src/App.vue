<template>
  <div>
    <h1 @click="hello">{{ msg }}</h1>
    <span>{{msg2}}</span>
    <p>This is a computed property {{ computedMsg }}</p>
  </div>
</template>
<script lang="ts">

import { Vue, Component } from 'av-ts'

@Component
export default class App extends Vue {
  msg = 'Hey'
  msg2 = 'Whut'
  hello() {
    alert('hello world!')
  }

  get computedMsg() {
    return 'computed stuff: ' + this.msg
  }
}
</script>
