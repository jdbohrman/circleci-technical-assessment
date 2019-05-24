<template>
	<div id="Button">
      <h2>Why is C such a rude programming language?</h2>
      <div>
         <button @click="answer">Answer</button>
      </div>
  </div>  
</template>

<script>
export default {
  name: "Button",
  methods: {
    answer: function() {
      alert("Because it has no class!")
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