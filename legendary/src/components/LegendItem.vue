<template>
    <div class="legend-item">
        <input class="legend-item-swatch" type="color" :title="swatchColour" v-model="swatchColour" @change="changeColour">
        <input class="legend-item-label" v-model="labelValue" @change="changeLabel"> 
        <button @click.prevent="$emit('deleteItem')" title="delete item">x</button>              
    </div>
</template>

<script setup>
    import {defineProps, defineEmits, computed} from "vue"

    const props = defineProps({
        colour: {
            type: String,
            required: false,
            default: "#FFFFFF"
        },
        label: {
            type: String,
            required: false,
            default: ""
        }
    })
    const emit = defineEmits(['changeColour', 'changeLabel', 'deleteItem'])

    const swatchColour = computed({
        get() { return props.colour },
        set(value) {             
            emit("changeColour", value) 
        }        
    })

    const labelValue = computed({
        get() { return props.label },
        set(value) { emit("changeLabel", value) }        
    })
    
</script>

<style scoped>
.legend-item { 
    cursor: pointer;
    margin: 0px;
    display: flex;
    justify-content: left;
    align-items: center;    
}
.legend-item-swatch { 
    /*display: inline-block;*/  
    cursor: pointer;
    /*width: 30px; 
    height: 15px;*/
    margin: 0px 3px;
    padding: 0px;    
}
.legend-item-label { 
    display: inline-block; 
    width: 100%;    
}

</style> 