<h1><img src="../img/icon-prisma.svg" width=40px height=40px style="border:0"/>Legends</h1>
Legend data may be created and edited using the <a href="https://cbinding.github.io/legendary/" target="_blank" rel="noopener">Legend Builder tool</a>. Legends are saved as JSON files, and consist of a metadata section to record basic metadata about the legend, followed by an array of legend items having a label and a corresponding colour. An example is shown below:

```json
{
	"title": "CANMORE legend", 
	"description": "Legend colours as displayed on CANMORE map",
	"creator": "Ceri Binding",
	"contact": "ceri.binding@southwales.ac.uk",
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