<template>
  <div>
    <h1>Legendary..</h1>
    <LegendDisplay/>
    <PaletteDisplay/>
    <!--<ColourPicker/>-->
    <LegendBuilder/>
  </div>
</template>

<script>
import LegendDisplay from "@/components/LegendDisplay"
import PaletteDisplay from "@/components/PaletteDisplay"
import LegendBuilder from "@/components/LegendBuilder"

export default {
  name: "App",
  components: {
    LegendDisplay,
    PaletteDisplay,
    LegendBuilder
  }
}
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
</style>
