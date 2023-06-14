<template>
    <div class="legend">
        <h2 class="legend-title">{{ `${legendData.title} (${legendData.items.length} items)` }}</h2>
        <p class="legend-description">{{ legendData.description }}</p>
        <ul class="legend-items">
            <li class="legend-item" v-for="(item, index) in legendData.items" :key="index">
                <div class="legend-item-swatch" :title="item.colour" :style="{ 'background-color': item.colour }">&nbsp;</div>
                <div class="legend-item-label">{{ item.label }}</div>
            </li>
        </ul>        
    </div>
</template>
<script setup>    

    const legendData = {
        title: "PASTMAP legend",
        description: "Legend colours as displayed on PASTMAP",
        created: "2023-06-12",
        updated: "2023-06-13",
        creator: "Ceri Binding",
        items: [
            { colour: "#a61f29", fgcolour: "", image: null, label: "Listed Buildings" }, 
            { colour: "#003e51", label: "Canmore" },
            { colour: "#008ebb", label: "Canmore Maritime" },
            { colour: "#aa5242", label: "Scheduled Monuments" },
            { colour: "#c1c600", label: "Historic Environment Record" },
            { colour: "#71754f", label: "Garden & Designated Landscapes" },
            { colour: "#42a299", label: "Conservation Areas" },
            { colour: "#562564", label: "Battlefields" },
            { colour: "#5b3f27", label: "World Heritage Sites" },
            { colour: "#9185be", label: "Historic Marine Protected Areas" },
            { colour: "#3ca88b", label: "Protected Military Remains, Wrecks" },   
            { colour: "#000000", label: "Protected Military Remains: Designated Vessels" },   
            { colour: "#ff0000", label: "Protected Military Remains: Controlled Sites" }
        ]
    }  
    
</script>
<style scoped>
.legend-title, .legend-description { text-align: left; }
.legend-items { 
    margin: 0;
    padding-left: 0;
    list-style-type: none; 
}
.legend-item { 
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
.legend-item-label { display: inline-block; }

</style>