<template>
    <div>
        <PaletteDisplay :colours="palette"/>
        <button @click.prevent="addItem()" title="add item" id="add">Add</button>        
        <ul id="legend-items" class="legend-items">
            <li v-for="(item, index) in items" :key="index">
                <LegendItem 
                    class='legend-item'                     
                    :colour="item.colour" 
                    :label="item.label" 
                    @change-colour="changeColour(item.id, $event)" 
                    @change-label="changeLabel(item.id, $event)"
                    @delete-item="delItem(item)"/>                
                <!--<button @click.prevent="moveItemUp()">up</button>-->
                <!--need options to reorder?-->                
            </li>
        </ul>
    </div>
</template>

<script setup> 
    import { computed } from "vue"
    import { useLegendStore } from "@/stores/useLegendStore" 
    import LegendItem from "@/components/LegendItem"
    import PaletteDisplay from "@/components/PaletteDisplay"

    const store = useLegendStore() 
    const items = computed(() => store.$state.items)
    const palette = computed(() => items.value.map(item => item.colour).filter(c => c))
    const addItem = () => store.newItem()
    const delItem = item => {
        if (confirm(`delete "${item.label}" - are you sure?`))
            store.delItem(item.id)
    }
    const changeColour = (id, value) => {store.setItemColour(id, value)}
    const changeLabel = (id, value) => store.setItemLabel(id, value)
    //const moveItemUp = () => {}
</script>

<style scoped>
#add {margin: 3px;}
.legend-items { 
    margin: 0;
    padding: 0;
    list-style-type: none;
    border: 0px solid lightgray;
    width: 100%;
}   
    
</style>