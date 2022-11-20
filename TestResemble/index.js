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
    var nivel1 = fs.readdirSync(versionBefore);
    
    console.log(nivel1);
    if (!fs.existsSync(`./results/${datetime}`)){
              fs.mkdirSync(`./results/${datetime}`, { recursive: true });
      }
    for(e of nivel1){
      var nivel2 = fs.readdirSync(versionBefore+"/"+e);      
      console.log(nivel2);
      for(f of nivel2){
        var imagenes = fs.readdirSync(versionBefore+"/"+ e + "/"+ f);
        var imageArray = [];  
        for(arch of imagenes){

          console.log("patch 1 "+ versionBefore + "/" + e + "/" + f + "/" + arch);
          console.log("patch 2 "+ versionAfter + "/" + e + "/" + f + "/" + arch);

          var nombreArchivo = arch.split(".");
          var before = versionBefore + "/" + e + "/" + f + "/" + arch;
          var after = versionAfter + "/" + e + "/" + f + "/" + arch;
          
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
            nombreArchivoCompare: nombreArchivoCompare,
            nombrePaso: nombreArchivo[0]
        }

        imageArray.push(newData);

        fs.writeFileSync(`./results/${datetime}/compare-${nombreArchivo[0]}.png`, data.getBuffer());

        }
        resultInfo[e] = imageArray;
      //console.log(imageArray);        
      }      
    }
    console.log(resultInfo);
        
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
                  <h2>Escenario: ${b}</h2>
                </div> `
  var acumula = "";
  var contador = 0;
  for(item of info){
    
    var htmlBloque =  `<div class=" browser" id="imagen${contador}">
    <div><h3>${item.nombrePaso}</h3></div>
    <div class=" btitleData">
        <h4>Resultado comparación</h4>               
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
<td>${item.analysisTime}ms</td>
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