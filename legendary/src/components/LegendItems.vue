<template>
    <div>
        <button 
            class="btn btn-sm btn-outline-secondary mb-2" 
            @click.prevent="addItem()" 
            title="add item" 
            alt="add item"
            id="add"><i class="bi bi-plus-circle"></i>&nbsp;Add Item</button>        
        <ul id="legend-items" class="legend-items list-group">
            <li v-for="(item, index) in items" :key="index" class='list-group-item1 p-0'>
                <LegendItem 
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
    
    const store = useLegendStore() 
    const items = computed(() => store.$state.items)

    const addItem = () => store.newItem()
    const delItem = item => {
        if (confirm(`delete "${item.label}" - are you sure?`))
            store.delItem(item.id)
    }
    const changeColour = (id, value) => store.setItemColour(id, value)
    const changeLabel = (id, value) => store.setItemLabel(id, value)
    //const moveItemUp = () => {}
</script>

<style scoped>
#add { margin: 3px; cursor: pointer; }

.legend-items { 
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
    height: 500px;
    overflow: scroll;
}      
</style>