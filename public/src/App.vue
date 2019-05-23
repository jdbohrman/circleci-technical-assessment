<template>
	<div id="app">
      <h2>Why is C such a rude programming language?</h2>
      <div ref="container">
        <Button @click="onClick">Click for the Answer!</Button>
      </div>
    </div>
</template>

<script>
import Button from './components/Button'
import Vue from 'vue'


export default {
  name: 'app',
    components: { Button },
    methods: {
      onClick() {
        var ComponentClass = Vue.extend(button)
        var instance = new ComponentClass({
            propsData: { type: 'primary' }
        })
        instance.$slots.default = ['Because it has no class.']
        instance.$mount()
        this.$refs.container.appendChild(instance.$el)
      }
    }
  }
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>