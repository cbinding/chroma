<template>
    <div class="input-group input-group-sm flex-nowrap m-0 p-0 border-0">
        <div class="input-group-text p-0 border-0">
            <input 
                type="color" 
                class="form-control form-control-sm form-control-color border-0"
                aria-label="Colour" 
                :title="colourValue" 
                :alt="colourValue"
                v-model="colourValue" 
                @change="changeColour">
        </div>
        <input 
            type="text"
            class="form-control form-control-sm p-1 border-top-0 border-bottom-0"
            placeholder="Enter label for the legend item"
            v-model="labelValue" 
            @change="changeLabel"> 
        <div class="input-group-text p-0 border-0">
            <button 
                type="button"  
                class="btn btn-sm btn-light"                       
                title="delete item"
                alt="delete item"
                @click.prevent="$emit('deleteItem')" >x</button> 
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
.legend-item {
    display: flex;
}
.legend-item-swatch { 
    /*display: inline-block;*/  
    cursor: pointer;
    border: 0px solid gray;
    /*width: 30px; 
    height: 15px;*/
    margin: 0px 2px;
    padding: 0px;    
}
.legend-item-label { 
    display: inline-block; 
    width: 100%;    
}
.legend-item-label:hover, .legend-item-swatch:hover {
    background-color: #F2F3F5; 
    border-color:  lightgray; 
}

</style> 
