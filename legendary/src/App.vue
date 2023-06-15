<template>
  <LegendBuilder/>  
</template>

<script>
import LegendBuilder from "@/components/LegendBuilder"

export default {
  name: "App",
  components: {
    LegendBuilder
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px;  
}
</style>
