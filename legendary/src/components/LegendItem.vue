<template>
    <div class="input-group input-group-sm flex-nowrap m-0 p-0 border">
        <div class="input-group-text p-0 border-0">
            <input 
                type="color" 
                class="legend-item-colour form-control form-control-sm form-control-color border-0 rounded-0"
                aria-label="Colour" 
                :title="colourValue" 
                :alt="colourValue"
                v-model="colourValue" 
                @change="changeColour">
        </div>

        <input 
            type="text"
            class="legend-item-label form-control form-control-sm p-1 border-0"
            placeholder="Enter label for the legend item"
            v-model="labelValue" 
            @change="changeLabel"> 

        <div class="input-group-text p-0 border-0">
            <button
                class="btn btn-sm btn-outline-secondary border-0"    
                :title="`delete '${label}'`"
                alt="delete item"
                @click.prevent="$emit('deleteItem')">
                <i class="bi bi-x-circle"></i>
            </button> 
        </div>            
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

    const colourValue = computed({
        get() { return props.colour },
        set(value) { emit("changeColour", value) }        
    })

    const labelValue = computed({
        get() { return props.label },
        set(value) { emit("changeLabel", value) }        
    })
    
</script>

<style scoped>
.legend-item-colour:hover, .legend-item-label:hover { 
    background-color: lightgray; 
}
</style> 
