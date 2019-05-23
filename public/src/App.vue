<template>
	<div id="app">
      <h2>Dynamically inserted:</h2>
      <div ref="container">
        <button @click="onClick">Click to insert</button>
      </div>
    </div>
</template>

<script>
import button from './components/button'
import photo from './components/photo'

export default {
  name: 'app',
    components: { Button },
    methods: {
      onClick() {
        var ComponentClass = Vue.extend(photo)
        var instance = new ComponentClass({
            propsData: { type: 'primary' }
        })
        instance.$slots.default = ['logo.png']
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