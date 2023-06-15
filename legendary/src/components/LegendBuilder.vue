<template>    
    <div class="legend-builder">
        <div class="header">Legend Builder</div>
        <div class="menu">
            <label for="importfile">Import JSON:</label>  
            <input type="file" 
                id="importfile" 
                name="importfile" 
                accept="application/json"
                @change.stop="importData"><br>       
            
            <label for="exportfile">Export JSON:</label> 
            <button 
                id="exportfile" 
                name="exportfile" 
                @click.stop="exportData">Choose file</button><br> 
            
            <button @click.stop="clearData">Clear All</button><br> <br> 
        </div>
        <div class="tab">
            <!-- Tab links -->
            <button class="tablinks" @click="openTab($event, 'Legend')" id="defaultOpen">Legend</button>
            <button class="tablinks" @click="openTab($event, 'Metadata')">Metadata</button><br>
            <div id="Legend" class="tabcontent">
                <br clear="all">
                <LegendItems/>
            </div>    
            <div id="Metadata" class="tabcontent">
                <br clear="all">                
                <LegendMetadata/>    
            </div>  
        </div>      
    </div>
</template>

<script setup>
    import { ref, onMounted} from "vue"
    import { useLegendStore } from "@/stores/useLegendStore"
    import LegendMetadata from "@/components/LegendMetadata"
    import LegendItems from "@/components/LegendItems"

    

    const store = useLegendStore() 
    
    const currentFile = ref("")

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
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

</script>

<style scoped>
.header {
    font-weight: bold;
    text-align: center;
    background: lightgray;
    padding: 6px;
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
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tablinks {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 12px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  min-height: 400px;
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

</style>