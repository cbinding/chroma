<template>    
    <div class="legend-metadata">
        <form>
            <label for="legend-title">Title:</label><br>
            <input v-model="title" type="text" id="legend-title" class="field legend-title"/><br>
            <label for="legend-description">Description:</label><br>
            <input v-model="description" type="text" id="legend-description" class="field legend-description"/><br>
            <label for="legend-creator">Creator:</label><br>
            <input v-model="creator" type="text" id="legend-creator" class="field legend-creator"/><br>
            <label for="legend-contact">Contact:</label><br>
            <input v-model="contact" type="text" id="legend-contact" class="field legend-contact"/><br>
            <label for="legend-version">Version:</label><br>
            <input v-model="version" type="text" id="legend-version" class="field legend-version"/><br>
            <label for="legend-license">License:</label><br>
            <input v-model="license" type="text" id="legend-license" class="field legend-license"/><br>
        </form>
        <label for="legend-created">Created:</label>
        <div id="legend-created" class="field legend-created">{{ created }}</div>  
        <label for="legend-updated">Updated:</label>
        <div id="legend-updated" class="field legend-updated">{{ updated }}</div> 
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
label { 
    color: gray;
    font-size: small; 
}
.field {
    width: 100%;
}
.legend-metadata {
    display: block;
    text-align: left;
}
</style>