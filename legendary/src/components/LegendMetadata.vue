<template>    
    <div class="legend-metadata">
        <form>
            <div class="mb-2">
                <label for="legend-title">Title</label>           
                <input 
                    type="text" 
                    v-model="title" 
                    id="legend-title"
                    title="legend title" 
                    placeholder="enter a title for the legend"
                    class="form-control form-control-sm shadow-sm rounded hoverable"/>            
            </div>
            <div class="mb-2">
                <label for="legend-description">Description</label>
                <textarea 
                    type="text" 
                    v-model="description"
                    id="legend-description" 
                    title="legend description" 
                    placeholder="enter a description for the legend"
                    class="form-control form-control-sm shadow-sm rounded hoverable">
                </textarea>
            </div>
            <div class="mb-2">
                <label for="legend-creator">Creator</label>
                <input 
                    type="text" 
                    v-model="creator" 
                    id="legend-creator" 
                    title="legend creator" 
                    placeholder="enter name of creator for the legend"
                    class="form-control form-control-sm shadow-sm rounded hoverable"/>
            </div>
            <div class="mb-2">
                <label for="legend-contact">Contact</label>
                <input 
                    type="text" 
                    v-model="contact" 
                    id="legend-contact" 
                    title="legend contact" 
                    placeholder="enter contact details (e.g. email address) for the legend creator"
                    class="form-control form-control-sm shadow-sm rounded hoverable"/>
            </div>
            <div class="mb-2">
                <label for="legend-version">Version</label>
                <input 
                    type="text" 
                    v-model="version" 
                    id="legend-version" 
                    title="legend version" 
                    placeholder="enter version for the legend"
                    class="form-control form-control-sm shadow-sm rounded hoverable"/>
            </div>
            <div class="mb-2">
                <label for="legend-license">License</label>
                <input 
                    type="text" 
                    v-model="license" 
                    id="legend-license"
                    title="legend license" 
                    placeholder="enter license details (e.g. licence url) for the legend data" 
                    class="form-control form-control-sm shadow-sm rounded hoverable"/> 
            </div>    
            <div class="mb-2">
                <label for="legend-created">Created</label>
                <input 
                    id="legend-created" 
                    aria-disabled="true"
                    class="form-control form-control-sm shadow-sm rounded" 
                    v-model="created" 
                    disabled/> 
            </div>   
            <div class="mb-2">     
                <label for="legend-updated">Updated</label>
                <input
                    id="legend-updated" 
                    aria-disabled="true"
                    class="form-control form-control-sm shadow-sm rounded" 
                    v-model="updated" 
                    disabled/> 
            </div>
        </form>
            
       
    </div>
</template>

<script setup>
    import { computed } from "vue"
    import { useLegendStore } from "@/stores/useLegendStore"

    const store = useLegendStore() 
    
    const title = computed({
        get() { return store.$state.title },
        set(value) { store.setTitle(value) }
    })

    const description = computed({
        get() { return store.$state.description },
        set(value) { store.setDescription(value) }
    })

    const creator = computed({
        get() { return store.$state.creator },
        set(value) { store.setCreator(value) }
    })

    const contact = computed({
        get() { return store.$state.contact },
        set(value) { store.setContact(value) }
    })

    const version = computed({
        get() { return store.$state.version },
        set(value) { store.setVersion(value) }
    })

    const license = computed({
        get() { return store.$state.license },
        set(value) { store.setLicense(value) }
    })

    const created = computed(() => store.$state.created)
    const updated = computed(() => store.$state.updated)
</script>

<style scoped>
textarea, input { font-family: inherit; }

label1 { 
    color: gray;
    font-size: small; 
}
.field1 {
    width: 100%;
    margin-bottom: 3px;
}
.legend-metadata {
    display: block;
    text-align: left;
}
.legend-created, .legend-updated {
    border: 1px solid lightgray;
    padding: 2px;
    font-size: small;
}
.hoverable:hover { background: lightgray;}
</style>