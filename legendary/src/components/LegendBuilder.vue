<template>    
    <div class="legend-builder">
        <h3>Legend Builder</h3>
        <label for="myfile">Import JSON:</label>        
        <input type="file" id="importfile" name="importfile" accept="application/json" @change.stop="importData"><br>
        <!--<button @click.prevent="importJSON">Import JSON...</button>-->
        <button @click.prevent="exportData">Export JSON...</button>  
        <button @click.prevent="clearData">Clear All</button>        
        <button @click.prevent="">View As Legend</button><!--Legend view - options to copy to clipboard etc.-->
        <button @click.prevent="">View As Palette</button><!--Palette view - options to copy to clipboard etc.-->
        <button @click.prevent="paletteToClipboard">Palette to clipboard</button>
        <!--<LegendMenu/>?-->
        <!--TODO: put these into separate tabs-->      
        <LegendMetadata/>    
        <LegendItems/>      
    </div>
</template>

<script setup>    
    import { useLegendStore } from "@/stores/useLegendStore"
    import LegendMetadata from "@/components/LegendMetadata"
    import LegendItems from "@/components/LegendItems"

    const store = useLegendStore() 
    /*const tempData = JSON.stringify({
        title: "temp title", 
        description: "temp description..",
        creator: "Ceri Binding",
        contact: "ceri.binding@southwales.ac.uk",
        version: "1.0",
        license: "https://creativecommons.org/licenses/by/4.0/",
        items: [
            { colour: "#a61f29", fgcolour: "", image: null, label: "Listed Buildings" }, 
            { colour: "#003e51", label: "Canmore" },
            { colour: "#008ebb", label: "Canmore Maritime" },
            { colour: "#aa5242", label: "Scheduled Monuments" },
            { colour: "#c1c600", label: "Historic Environment Record" },
        ]
    })*/

    const clearData = () => store.reset() 

    const importData = event => { 
        let file = event.target.files[0]        
        const reader = new FileReader()
        reader.onload = function(e) {
            store.importJSON(e.target.result)				
        }
        reader.readAsText(file)
	} 

    const timestampISO = () => new Date().toISOString() // e.g. "2022-03-04T08:13:47.578Z"
    const timestamp = () => timestampISO().replaceAll(/[:.\-Z]/g,"") // e.g. "20211225T120523"
    //const datestamp = () => timestamp().slice(0,8) // "YYYYMMDD" eg 20220318
    const exportData = () => {
        const data = store.exportJSON() 
        const fileName = `legendary-${ timestamp() }.json`
        saveToFile(data, fileName)
        //alert(data); 
        //alert("export JSON..") 
    }

    // this function used in Phaser, from https://forum.vuejs.org/t/saving-form-data/38714
    const saveToFile = (jsonData, fileName) => {
        let blob = new Blob([jsonData], { type: 'text/plain;charset=utf-8;' })
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, fileName)
        } else {
            let link = document.createElement('a')
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                let url = URL.createObjectURL(blob)
                link.setAttribute('href', url)
                link.setAttribute('download', fileName)
                link.style.visibility = 'hidden'
                document.body.appendChild(link)
                link.click()
                    document.body.removeChild(link)
            }
        }
    }
    const paletteToClipboard = () => console.log(store.palette); navigator.clipboard.writeText(store.palette)

</script>

<style scoped>
.legend-builder { border: 1px solid lightgray; text-align: left; }
</style>