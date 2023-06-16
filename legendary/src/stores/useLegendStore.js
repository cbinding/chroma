// useLegendStore
import { defineStore } from 'pinia'

export const useLegendStore = defineStore('legend', {
    state: () => ({
        title: "",
        description: "",
        creator: "",
        contact: "",
        version: "",
        license: "",
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
        items: [],
        nextID: 0,
    }),
    getters: {
        itemCount: state => state.items.length,
        palette: state => state.items.map(item => item.colour).filter(c => c)
    },
    actions: {
        reset() {
            this.title = ""
            this.description = ""
            this.creator = ""
            this.contact = ""
            this.version = ""
            this.license = "" 
            this.created = new Date().toISOString()
            this.updated = this.created
            this.items = []
            this.nextID = 0
        },
        importJSON(json) {
            this.reset()
            const data = JSON.parse(json)
            this.setTitle(data.title || "")
            this.setDescription(data.description || "")
            this.setCreator(data.creator || "")
            this.setContact(data.contact || "")
            this.setVersion(data.version || "")
            this.setLicense(data.license || "");            
            (data.items || []).forEach(item => this.addItem(item))            
        },
        exportJSON() { 
            return JSON.stringify(this.$state) 
        },
        stampUpdated() {
            this.updated = new Date().toISOString()
        },           
        setTitle(value) {
            const newValue = (value || "").trim()
            if(this.title !== newValue) {
                this.title = newValue
                this.stampUpdated()
            }
        },
        setDescription(value) {
            const newValue = (value || "").trim()
            if(this.description !== newValue) {
                this.description = newValue
                this.stampUpdated()
            }            
        },
        setCreator(value) {
            const newValue = (value|| "").trim()
            if(this.creator !== newValue) {
                this.creator = newValue
                this.stampUpdated()
            }             
        },
        setContact(value) {
            const newValue = (value|| "").trim()
            if(this.contact !== newValue) {
                this.contact = newValue
                this.stampUpdated()
            }             
        },
        setVersion(value) {
            const newValue = (value|| "").trim()
            if(this.version !== newValue) {
                this.version = newValue
                this.stampUpdated()
            }             
        },
        setLicense(value) {
            const newValue = (value|| "").trim()
            if(this.license !== newValue) {
                this.license = newValue
                this.stampUpdated()
            }             
        },
        newItem() {
            this.addItem({ colour: "#dddddd", label: "new item" })
        },

        addItem(item) {
            // TODO: validate item fields, rgb2hex if necessary
            // newItem - clone(item)..
            this.items.push({ ...item, id: this.nextID++ })
            //if(item.id)
                //this.items.push(item)
            //else
                //this.items.push({...item, id: this.nextID++})
            this.stampUpdated()
        },
        getItem(id) {
            const item = this.items.find((obj) => obj.id === id)
            return item ? item : null
        },
        delItem(id) {
            this.items = this.items.filter((obj) => obj.id !== id)
            this.stampUpdated()
        },     
        setItemColour(id, colour) {
            const item = this.getItem(id) 
            if (item && item.colour !== colour) {
                item.colour = colour
                this.stampUpdated()
            }
        },
        setItemLabel(id, label) {
            const item = this.getItem(id) 
            if (item && item.label !== label) {
                item.label = label
                this.stampUpdated()
            }
        },
    },
})