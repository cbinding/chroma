<h1><img src="../img/icon-chroma.svg" width=40px height=40px style="border:0"/>Legends</h1>
Legend data may be created and edited using the <a href="https://cbinding.github.io/legendary/" target="_blank" rel="noopener">Legend Builder tool</a>. Legends are saved as JSON files, and consist of a metadata section to record basic metadata about the legend, followed by an array of legend items having a label and a corresponding colour. An example is shown below:

```json
{
	"title": "CANMORE legend", 
	"description": "Legend colours as displayed on CANMORE map",
	"creator": "Fred Bloggs",
	"contact": "fred@bloggs.com",
	"version": "1.1",
	"license": "https://creativecommons.org/licenses/by/4.0/",
	"created": "2023-06-15T13:32:55.526Z",
	"updated": "2023-06-15T13:33:13.530Z",
	"items": [
		{
			"colour": "#ffccb7",
			"label": "Geology",
			"id": 0
		},
		{
			"colour": "#666666",
			"label": "Industrial",
			"id": 1
		},
        ...
    ]
}
```
<div id="legend-container"></div>
<script type="module">	
	const displayLegend = (container, data) => {
		const legend = document.createElement('div') 
        const title = document.createElement('h3')
        title.textContent = data.title || "" 
		legend.appendChild(title)         
		data.items.forEach(item => {
            const row = document.createElement('div')
			row.style.display="flex"
			row.style.alignItems="center"
			const swatch = document.createElement('div')
            swatch.style.backgroundColor = item.colour
			swatch.style.display="inline-block"
			swatch.style.margin="2px"
            swatch.style.width="40px"
            swatch.style.height="20px"
            swatch.style.borderWidth="1px"
            swatch.style.borderColor="lightgray"
            swatch.style.borderStyle="solid"
            swatch.title=item.colour			
			const label = document.createElement('span')
			label.textContent = item.label || "" 
			row.appendChild(swatch)
			row.appendChild(label)
            legend.appendChild(row)
        }) 
        container.appendChild(legend)  
    }    		
    // load legend from JSON data file
    // import legends from '../data/chroma-legends-v0.1.json' assert { type: 'json' }
	const loadLegendFromJSON = async (path) => {
		const response = await fetch(path, { headers: { accept: 'application/json' }})
    	return response.json()
	}
	// display legend in the container div element
	const container = document.getElementById("legend-container")
	loadLegendFromJSON('../data/legend-pastmap.json')
		.then(data => displayLegend(container, data))
	loadLegendFromJSON('../data/legend-canmore.json')
		.then(data => displayLegend(container, data))
	loadLegendFromJSON('../data/legend-peters.json')
		.then(data => displayLegend(container, data))
	
</script>