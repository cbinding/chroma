<h1><img src="../img/icon-prisma.svg" width=40px height=40px style="border:0"/>Palettes</h1>

The colours used to define a legend can seem ambiguous under different CVD conditions. These conditions may be simulated using online tools, or (in the case of Chrome) via the browser 'Developer Tools' menu option (see under Rendering - emulate vision deficiencies).

For the following colour palette examples, the data sources are listed [here](../data). Hover over individual colour blocks to display the actual colour values.

<div id="palette-container"></div>
<script type="module">
    // load palettes from JSON data files
    import brewer from "../data/colorbrewer.json" assert { type: "json" }
    import gdv from '../data/GDV-colour-palettes-v0.7.json' assert { type: 'json' }
    import osmm from '../data/osmm-legends.json' assert { type: 'json' }
    import lospec from '../data/lospec-cvd-palettes.json' assert { type: 'json' }
    import prisma from '../data/prisma-legends-v0.1.json' assert { type: 'json' }
    const palettes = [        
        // Brewer - diverging   
        { label: "Brewer - diverging, BrBG", colours: brewer.BrBG[11] },
        { label: "Brewer - diverging, PiYG", colours: brewer.PiYG[11] },
        { label: "Brewer - diverging, PRGn", colours: brewer.PRGn[11] },
        { label: "Brewer - diverging, PuOr", colours: brewer.PuOr[11] },
        { label: "Brewer - diverging, RdBu", colours: brewer.RdBu[11] },
        { label: "Brewer - diverging, RdYlBu", colours: brewer.RdYlBu[11] },
        // Brewer - sequential, multi-hue            
        { label: "Brewer - sequential, multi-hue BuGn", colours: brewer.BuGn[9] },
        { label: "Brewer - sequential, multi-hue BuPu", colours: brewer.BuPu[9] },
        { label: "Brewer - sequential, multi-hue GnBu", colours: brewer.GnBu[9] },
        { label: "Brewer - sequential, multi-hue OrRd", colours: brewer.OrRd[9] },
        { label: "Brewer - sequential, multi-hue PuBu", colours: brewer.PuBu[9] },
        { label: "Brewer - sequential, multi-hue PuBuGn", colours: brewer.PuBuGn[9] },
        { label: "Brewer - sequential, multi-hue PuRd", colours: brewer.PuRd[9] },
        { label: "Brewer - sequential, multi-hue RdPu", colours: brewer.RdPu[9] },
        { label: "Brewer - sequential, multi-hue YlGn", colours: brewer.YlGn[9] },
        { label: "Brewer - sequential, multi-hue YlGnBu", colours: brewer.YlGnBu[9] },
        { label: "Brewer - sequential, multi-hue YlOrBr", colours: brewer.YlOrBr[9] },
        // Brewer - sequential, single hue            
        { label: "Brewer - sequential, single hue Blues", colours: brewer.Blues[9] },
        { label: "Brewer - sequential, single hue Greens", colours: brewer.Greens[9] },
        { label: "Brewer - sequential, single hue Greys", colours: brewer.Greys[9] },
        { label: "Brewer - sequential, single hue Oranges", colours: brewer.Oranges[9] },
        { label: "Brewer - sequential, single hue Purples", colours: brewer.Purples[9] },
        { label: "Brewer - sequential, single hue Reds", colours: brewer.Reds[9] }, 
        // Ordnance Survey - qualitative        
        { label: "Ordnance Survey - qualitative.lookup", colours: Object.values(gdv.qualitative.lookup) },
        // Ordnance Survey - diverging
        { label: "Ordnance Survey - diverging.d1", colours: gdv.diverging.d1 },
        { label: "Ordnance Survey - diverging.d2", colours: gdv.diverging.d2 },
        // Ordnance Survey - sequential   
        { label: "Ordnance Survey - sequential.m1", colours: gdv.sequential.m1 }, 
        { label: "Ordnance Survey - sequential.m2", colours: gdv.sequential.m2 }, 
        { label: "Ordnance Survey - sequential.m3", colours: gdv.sequential.m3 }, 
        { label: "Ordnance Survey - sequential.s1", colours: gdv.sequential.s1 }, 
        { label: "Ordnance Survey - sequential.s2", colours: gdv.sequential.s2 }, 
        { label: "Ordnance Survey - sequential.s3", colours: gdv.sequential.s3 },
        // Ordnance Survey - projects   
        { label: "Ordnance Survey - projects.mars_map", colours: gdv.projects.mars_map },
        { label: "Ordnance Survey - projects.moon_map", colours: gdv.projects.moon_map },        
        // OSMM
        { label: "OSMM topo_area", colours: osmm.topo_area.map(item => item.colour) },
        { label: "OSMM topo_line", colours: osmm.topo_line.map(item => item.colour) },
        { label: "OSMM topo_point", colours: osmm.topo_point.map(item => item.colour) },
        { label: "OSMM carto_text", colours: osmm.carto_text.map(item => item.colour) },
        { label: "OSMM carto_symbol", colours: osmm.carto_symbol.map(item => item.colour) },
        { label: "OSMM boundary_line", colours: osmm.boundary_line.map(item => item.colour) },
        // lospec - pixel art and video gaming e.g. https://lospec.com/palette-list/cvd8  
        { label: "lospec - cvd8", colours: lospec.cvd8 },
        { label: "lospec - krzywinski", colours: lospec.krzywinski }, 
        { label: "lospec - ibmcolorblindsafe", colours: lospec.ibmcolorblindsafe },         
        // https://canmore.org.uk/site/search/result?view=map&layer=airborne
        // color values obtained using Chrome eyedropper extension on legend (scroll down)
        { label: "Canmore legend", colours: prisma.canmore.map(item => item.colour) },
        // https://pastmap.org.uk/map
        // color values obtained using Chrome eyedropper extension on legend
        { label: "Pastmap legend", colours: prisma.pastmap.map(item => item.colour) },
        // Peter's 12 colour palettes
        { label: "Peter's legend1", colours: prisma.peters1.map(item => item.colour) },
        { label: "Peter's legend2", colours: prisma.peters2.map(item => item.colour) }        
    ]    
    const container = document.getElementById("palette-container")     
    palettes.forEach(item => {
        const palette = document.createElement('div') 
        palette.style.margin = "20px"
        const title = document.createElement('div')
        const colourCount = (item.colours || []).length
        title.textContent = `${item.label || ""} (${colourCount} ${colourCount > 1 ? "colours" : "colour"})`            
        item.colours.forEach(colour => {
            const swatch = document.createElement('div')
            swatch.style.backgroundColor = colour
            swatch.style.display="inline-block"
            swatch.style.width="35px"
            swatch.style.height="35px"
            swatch.style.borderWidth="1px"
            swatch.style.borderColor="lightgray"
            swatch.style.borderStyle="solid"
            swatch.title=colour
            palette.appendChild(swatch)
        }) 
        palette.appendChild(title)         
        container.appendChild(palette)  
    })    
</script>