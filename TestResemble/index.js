const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, browsers, options, versionBefore, versionAfter } = config;

async function executeTest(){
    if(browsers.length === 0){
      return;
    }
    let resultInfo = {};
    let datetime = new Date().toISOString().replace(/:/g,".");
    var escenarios1 = fs.readdirSync(versionBefore);
    
    console.log(escenarios1);
    if (!fs.existsSync(`./results/${datetime}`)){
              fs.mkdirSync(`./results/${datetime}`, { recursive: true });
      }
    for(e of escenarios1){
      var archivos = fs.readdirSync("./results/version1/"+e);
      var imageArray = [];  
      for(arch of archivos){
        console.log("patch 1 "+ versionBefore + "/" + e + "/" + arch);
        console.log("patch 2 "+ versionAfter + "/" + e + "/" + arch);

        var nombreArchivo = arch.split(".");
        var before = versionBefore + "/" + e + "/" + arch;
        var after = versionAfter + "/" + e + "/" + arch;
        var conpare = versionAfter + "/" + e;
        var nombreArchivoBefore = `before-${nombreArchivo[0]}.png`
        var nombreArchivoAfter = `after-${nombreArchivo[0]}.png`
        var nombreArchivoCompare = `compare-${nombreArchivo[0]}.png`

        var beforeDestino = `./results/${datetime}/before-${nombreArchivo[0]}.png`
        var afterDestino = `./results/${datetime}/after-${nombreArchivo[0]}.png`

        
        fs.copyFileSync(before,beforeDestino);
        fs.copyFileSync(after,afterDestino);

        const data = await compareImages(
          fs.readFileSync(before),
          fs.readFileSync(after),
          options
      );

        newData = {
          isSameDimensions: data.isSameDimensions,
          dimensionDifference: data.dimensionDifference,
          rawMisMatchPercentage: data.rawMisMatchPercentage,
          misMatchPercentage: data.misMatchPercentage,
          diffBounds: data.diffBounds,
          analysisTime: data.analysisTime,
          nombreArchivoBefore: nombreArchivoBefore,
          nombreArchivoAfter: nombreArchivoAfter,
          nombreArchivoCompare: nombreArchivoCompare
      }

      imageArray.push(newData);

      fs.writeFileSync(`./results/${datetime}/compare-${nombreArchivo[0]}.png`, data.getBuffer());
      //fs.writeFileSync(`./results/${datetime}/compare-${b}.png`, data.getBuffer());
      }
      resultInfo[e] = imageArray;
      //console.log(imageArray);
    }
    console.log(resultInfo);
    // for(b of browsers){
    //     if(!b in ['chromium']){
    //         return;
    //     }
    //     if (!fs.existsSync(`./results/${datetime}`)){
    //         fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    //     }
    //     //Launch the current browser context
    //     const browser = await playwright[b].launch({headless: true, viewport: {width:viewportWidth, height:viewportHeight}});
    //     const context = await browser.newContext();
    //     const page = await context.newPage(); 
    //     await page.goto(config.url);
    //     await page.screenshot({ path: `./results/${datetime}/before-${b}.png` });
    //     await page.click('#generate');
    //     await page.screenshot({ path: `./results/${datetime}/after-${b}.png` });
    //     await browser.close();
        
    //     const data = await compareImages(
    //         fs.readFileSync(`./results/${datetime}/before-${b}.png`),
    //         fs.readFileSync(`./results/${datetime}/after-${b}.png`),
    //         options
    //     );
    //     resultInfo[b] = {
    //         isSameDimensions: data.isSameDimensions,
    //         dimensionDifference: data.dimensionDifference,
    //         rawMisMatchPercentage: data.rawMisMatchPercentage,
    //         misMatchPercentage: data.misMatchPercentage,
    //         diffBounds: data.diffBounds,
    //         analysisTime: data.analysisTime
    //     }
    //     fs.writeFileSync(`./results/${datetime}/compare-${b}.png`, data.getBuffer());

    // }
    
    fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();
function browser(b, info){
  var cabeceraHtml = `<div class=" browser" id="test0">`
  var cierreHtml = `</div>`
  var titulo = `<div class=" btitle">
                  <h2>Browser: ${b}</h2>
                </div> `
  var acumula = "";
  var contador = 0;
  for(item of info){
    
    var htmlBloque =  `<div class=" browser" id="imagen${contador}">
    <div class=" btitleData">
        <h3>Resultado comparación</h3>               
          <table class="demo">	
	<thead>
	<tr>
		<th>Dimensiones iguales</th>
		<th>Diferencia de dimensiones</th>
		<th>%Cambio</th>
		<th>Tiempo</th>
	</tr>
	</thead>
	<tbody>
	<tr>
<td>${item.isSameDimensions}</td>
<td>Ancho: ${item.dimensionDifference.width}<br>Alto: ${item.dimensionDifference.height}</td>
<td>${item.misMatchPercentage}%</td>
<td>${item.analysisTime}s</td>
</tr>
</tbody>
</table>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="${item.nombreArchivoBefore}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="${item.nombreArchivoAfter}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="${item.nombreArchivoCompare}" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`  
  acumula = acumula + htmlBloque;
  contador++;
  }

  return cabeceraHtml + titulo + acumula + cierreHtml;

}

function createReport(datetime, resInfo){
  var arr = Object.keys(resInfo);  
  return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${arr.map(b=>browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`
}