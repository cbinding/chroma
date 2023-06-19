<template>    
    <div class="card">
        <div class="card-header text-center fw-bold">Legend Builder</div>
        <div class="card-body p-2">
            <div class="input-group input-group-sm p-1">
                <label for="importfile" class="input-group-text"><i class="bi bi-filetype-json"></i>&nbsp;Import</label>  
                <input 
                    type="file" 
                    id="importfile" 
                    name="importfile" 
                    accept="application/json"
                    class="form-control  form-control-sm"
                    @change.stop="importData">
            </div>  

            <div class="input-group input-group-sm p-1">                         
                <label for="exportfile" class="input-group-text"><i class="bi bi-filetype-json"></i>&nbsp;Export</label> 
                <button 
                    type="button"
                    id="exportfile" 
                    name="exportfile" 
                    class="btn btn-sm btn-outline-secondary"
                    @click.stop="exportData">Choose file</button>
                <input type="text" class="form-control form-control-sm" disabled/>
            
                <button 
                    type="button"
                    @click.stop="clearData" 
                    class="btn btn-sm btn-outline-secondary rounded shadow">
                    <i class="bi bi-x-circle"></i>&nbsp;Clear All</button>            
            </div>

            

            <div class="nav nav-tabs">                
                <a class="nav-link" href="#" @click.stop="openTab($event, 'Items')" id="defaultOpen">Items <span class="badge text-bg-light border rounded-pill">{{ itemCount }}</span></a>                       
                <a class="nav-link" href="#" @click.stop="openTab($event, 'Metadata')">Metadata</a>   
            </div>  

            <div id="Items" class="tabcontent bg-light">
                <LegendItems/>
            </div> 

            <div id="Metadata" class="tabcontent bg-light">
                <LegendMetadata/>    
            </div> 
            
            <!--<div class="card-footer text-body-secondary text-center">
                <small>{{ `${store.$state.title} 
                    ${store.version ? "- version" : ""} ${store.version}      
                    (${store.itemCount} item${store.itemCount == 1 ? "": "s"})`}}</small>
            </div>   -->      
        </div>
    </div>        
</template>

<script setup>
    import { ref, computed, onMounted} from "vue"
    import { useLegendStore } from "@/stores/useLegendStore"
    import LegendMetadata from "@/components/LegendMetadata"
    import LegendItems from "@/components/LegendItems"
    
    const store = useLegendStore() 
    
    const itemCount = computed(() => store.items.length)
    
    const currentFile = ref("")
    //const palette = computed(() => store.items.value.map(item => item.colour).filter(c => c))
    onMounted(() => {
        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();
    });
    
    const clearData = () => {
        if(confirm("This will clear all data, are you sure?")) {
            document.getElementById("importfile").value=""
            store.reset()            
        }
    }

    const importData = event => { 
        currentFile.value = event.target.files[0]            
        const reader = new FileReader()
        reader.onload = function(e) {
            store.importJSON(e.target.result)				
        }
        reader.readAsText(currentFile.value)
        //document.getElementById("importfile").value=""
	} 

    const timestampISO = () => new Date().toISOString() // e.g. "2022-03-04T08:13:47.578Z"
    const timestamp = () => timestampISO().replaceAll(/[:.\-Z]/g,"") // e.g. "20211225T120523"
    //const datestamp = () => timestamp().slice(0,8) // "YYYYMMDD" eg 20220318
    const exportData = () => {
        const data = store.exportJSON() 
        const fileName = currentFile.value?.name || `legend-${ timestamp() }.json`        
        saveToFile(data, fileName)  
        document.getElementById("importfile").value=""      
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

    const openTab = (evt, tabName) => {
        // Declare all variables
        var tabcontent, tabs;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent")
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none"
        }

        // Get all elements with class="nav-link" and remove the class "active"
        tabs = document.getElementsByClassName("nav-link")
        for (let i = 0; i < tabs.length; i++) {
           tabs[i].className = tabs[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block"
        evt.currentTarget.className += " active"
    }

</script>

<style scoped>
button { cursor: pointer; }
.header, .footer {
    text-align: center;
    background: lightgray;
    padding: 5px;
    margin: 0px;
}
.menu {padding: 3px;}
.legend-builder { 
    padding: 0px;
    border: 1px solid lightgray; 
    width: 500px; 
    text-align: left;
}

/* Style the tab */
.tab1 {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tablinks1 {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 12px;
  transition: 0.3s;
}

/* Style the tab content */
.tabcontent {
  min-height: 500px;
  display: none;
  padding: 6px 6px;
  border: 1px solid lightgray;
  border-top: none;
}

</style>