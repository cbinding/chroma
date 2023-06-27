# Palettes
The following colour palette examples...



<div id="container"></div>
<script type="module">
    // display a palette based on array of colour values passed
    const displayPalette = (colours, label="") => {            
        const palette = document.createElement('div') 
        palette.classList.add('palette')
        const title = document.createElement('span')
        title.classList.add('palette-label')
        title.textContent = `${label} (${colours.length} colours)`            
        colours.forEach(colour => {
            const swatch = document.createElement('div')
            swatch.classList.add('palette-swatch')
            swatch.style.backgroundColor = colour
            swatch.style.display="inline-block"
            swatch.style.width="20px"
            swatch.style.height="20px"
            swatch.style.borderWidth="1px"
            swatch.style.borderColor="lightgray"
            swatch.style.borderStyle="solid"
            swatch.title=colour
            palette.appendChild(swatch)
        }) 
        palette.appendChild(title) 
        const container = document.getElementById('container')  
        container.appendChild(palette)          
    } 
    // Color schemes from https://colorbrewer2.org/ by Cynthia A. Brewer, Geography, Pennsylvania State University
    // colorbrewer.json obtained from https://github.com/axismaps/colorbrewer/blob/master/export/colorbrewer.json  
     import brewer from '/data/colorbrewer.json' assert { type: 'json' }        
    // OS palettes from https://github.com/OrdnanceSurvey/GeoDataViz-Toolkit/blob/master/Colours/GDV-colour-palettes-v0.7.json        
    import gdv from '/data/GDV-colour-palettes-v0.7.json' assert { type: 'json' }
    import osmm from '/data/osmm-legends.json' assert { type: 'json' }
    // LOSPEC palettes       
    import lospec from '/data/lospec-cvd-palettes.json' assert { type: 'json' }
    // Contains Peter's palette, CANMORE legend and PastMap legend        
    import prisma from '/data/prisma-legends-v0.1.json' assert { type: 'json' }    
    // Peter's 12 colour palette
    displayPalette(prisma.peters.map(item => item.colour), "Peter's legend")
    // https://canmore.org.uk/site/search/result?view=map&layer=airborne
    // color values obtained using Chrome eyedropper extension on legend (scroll down)
    displayPalette(prisma.canmore.map(item => item.colour), "Canmore legend") 
    // https://pastmap.org.uk/map
    // color values obtained using Chrome eyedropper extension on legend
    displayPalette(prisma.pastmap.map(item => item.colour), "Pastmap legend") 
    // Brewer - diverging   
    displayPalette(brewer.BrBG[11], "Brewer - diverging BrBG")    
    displayPalette(brewer.PiYG[11], "Brewer - diverging PiYG")
    displayPalette(brewer.PRGn[11], "Brewer - diverging PRGn")
    displayPalette(brewer.PuOr[11], "Brewer - diverging PuOr")
    displayPalette(brewer.RdBu[11], "Brewer - diverging RdBu")
    displayPalette(brewer.RdYlBu[11], "Brewer - diverging RdYlBu")  
    // Brewer - sequential, multi-hue            
    displayPalette(brewer.BuGn[9], "Brewer - sequential, multi-hue BuGn")
    displayPalette(brewer.BuPu[9], "Brewer - sequential, multi-hue BuPu")
    displayPalette(brewer.GnBu[9], "Brewer - sequential, multi-hue GnBu")
    displayPalette(brewer.OrRd[9], "Brewer - sequential, multi-hue OrRd")
    displayPalette(brewer.PuBu[9], "Brewer - sequential, multi-hue PuBu")
    displayPalette(brewer.PuBuGn[9], "Brewer - sequential, multi-hue PuBuGn")
    displayPalette(brewer.PuRd[9], "Brewer - sequential, multi-hue PuRd")
    displayPalette(brewer.RdPu[9], "Brewer - sequential, multi-hue RdPu")
    displayPalette(brewer.YlGn[9], "Brewer - sequential, multi-hue YlGn")
    displayPalette(brewer.YlGnBu[9], "Brewer - sequential, multi-hue YlGnBu")
    displayPalette(brewer.YlOrBr[9], "Brewer - sequential, multi-hue YlOrBr")   
    // Brewer - sequential, single hue            
    displayPalette(brewer.Blues[9], "Brewer - sequential, single hue Blues")
    displayPalette(brewer.Greens[9], "Brewer - sequential, single hue Greens")  
    displayPalette(brewer.Greys[9], "Brewer - sequential, single hue Greys")    
    displayPalette(brewer.Oranges[9],"Brewer - sequential, single hue Oranges") 
    displayPalette(brewer.Purples[9], "Brewer - sequential, single hue Purples") 
    displayPalette(brewer.Reds[9], "Brewer - sequential, single hue Reds")  
            // lospec - pixel art and video gaming e.g. https://lospec.com/palette-list/cvd8          
    displayPalette(lospec.cvd8, "lospec - cvd8")     
    displayPalette(lospec.krzywinski, "lospec - krzywinski")     
    displayPalette(lospec.ibmcolorblindsafe, "lospec - ibmcolorblindsafe") 
</script>