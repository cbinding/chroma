<template>
    <div class="palette-display">
        <div>Palette ({{ colours.length }} colours): </div>
        <span class="swatch" v-for="(colour, index) in colours" 
            :key="index" 
            :title="colour" 
            :style="{ 'background-color': colour }">&nbsp;</span>
            <button @click.stop="copyToClipboard" :disabled="!colours.length">Copy to clipboard</button>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'
    const props = defineProps({
        colours: {
            type: Array,
            default() { return [] }
        }
    })
    const copyToClipboard = async () => await navigator.clipboard.writeText(props.colours.join())

    //const hex2rgb = () => {}
    //const rgb2hex = () => {}
    //const defaultColours = ["#E4F1F7","#C5E1EF","#9EC9E2","#6CB0D6","#3C93C2","#226E9C","#0D4A70"]
</script>

<style scoped>
.palette-display {
    width: 100%;
    display: none;
}
.swatch { 
    display: inline-block;  
    cursor: pointer;
    text-align: center; 
    width: 20px; 
    height: 20px;
    margin-right: 0px; 
    border: 1px solid lightgray;
}
</style>
