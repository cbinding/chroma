<template>
    <div class="legend-items">
        <label for="legend-items">Items ({{ count }})</label>
        <button @click.prevent="newItem()" title="add item">New</button>
        <ul id="legend-items" class="legend-items">
            <li v-for="(item, index) in items" :key="index" class="legend-item">
                <span :style="{ 'background-color': item.colour }" class="legend-item-swatch" :title="item.colour"/>                
                <span class="legend-item-label">{{ item.label }}</span>
                <!--<button @click.prevent="moveItemUp()">up</button>-->
                <!--need option to reorder though?-->
                <button @click.prevent="delItem(item.id)" title="delete item">x</button>
            </li>
        </ul>
    </div>
</template>

<script setup> 
    import { computed } from "vue"
    import { useLegendStore } from "@/stores/useLegendStore" 

    const store = useLegendStore() 
    const items = computed(() => store.$state.items)
    const count = computed(() => items.value.length)
    const newItem = () => store.newItem()
    const delItem = id => store.delItem(id)
    //const moveItemUp = () => {}
</script>

<style scoped>
.legend-items { 
    margin: 0;
    padding-left: 0;
    list-style-type: none;
    border: 1px solid lightgray; 
}
.legend-item { 
    cursor: pointer;
    margin: 2px;
    display: flex;
    justify-content: left;
    align-items: center;    
}
.legend-item-swatch { 
    display: inline-block;  
    cursor: pointer;
    text-align: center; 
    width: 30px; 
    height: 20px;
    margin-right: 3px;
    border: 1px solid lightgray; 
}
.legend-item-label { display: inline-block; width: 400px;}
.legend-item:hover { background-color: lightgray;}
</style>