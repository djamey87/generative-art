let radioCanvas, radioLayers, radioTree, radioCircle, radioShape, radioSize, radioFlow, radioPack;

function createUI(){
  let artButton = createButton("new art");
  artButton.position(10, 5);
  artButton.mousePressed(newArt);
  let saveButton = createButton("save jpg");
  saveButton.position(10, 35);
  saveButton.mousePressed(saveArt);
  let grainButton = createButton("add grain");
  grainButton.position(10, 65);
  grainButton.mousePressed(addGrain);
  radioCanvas = createRadio('radCanvas');
  radioCanvas.option('canvas = screen space');
  radioCanvas.option('specify canvas size  ');
  radioCanvas.selected('canvas = screen space');
  radioCanvas.position(100,5);
  radioCanvas.style('width', '180px');
  let widthText = createElement("w","width:")
  widthText.position(120,50);
  let wInput = createInput('1500');
  wInput.position(170,50);
  wInput.size(40);
  wInput.input(wChange);
  let heightText = createElement("h","height:")
  heightText.position(120,75);
  let hInput = createInput('2000');
  hInput.position(170,75);
  hInput.size(40);
  hInput.input(hChange);
  radioLayers = createRadio('radLayers');
  radioLayers.option(0,'add layers');
  radioLayers.option(1,'no layers ');
  radioLayers.option(2,'random');
  radioLayers.selected('0');
  radioLayers.position(275,5);
  radioLayers.style('width', '100px');
  radioTree = createRadio('tree');
  radioTree.option('0','add tree');
  radioTree.option('1','no tree ');
  radioTree.option('2','random');
  radioTree.selected('2');
  radioTree.position(370,5);
  radioTree.style('width', '80px');
  radioCircle = createRadio('circle');
  radioCircle.option('0','add circles');
  radioCircle.option('1','no circles ');
  radioCircle.option('2','random');
  radioCircle.selected('0');
  radioCircle.position(455,5);
  radioCircle.style('width', '100px');
  radioShape = createRadio('shape');
  radioShape.option('0','rectangles');
  radioShape.option('1','pedals......');
  radioShape.option('2','both........');
  radioShape.option('3','random');
  radioShape.position(555,5);
  radioShape.selected('1');
  radioShape.style('width', '90px');
  radioSize = createRadio('size');
  radioSize.option('0','small.....');
  radioSize.option('1','medium');
  radioSize.option('2','large.....');
  radioSize.option('3','random');
  radioSize.position(655,5);
  radioSize.selected('3'); 
  radioSize.style('width', '85px');
  radioFlow = createRadio('flow');
  radioFlow.option('regular flow');
  radioFlow.option('limited flow');
  radioFlow.position(735,5);
  radioFlow.selected('regular flow');
  radioFlow.style('width','120px');
  radioPack = createRadio('pack');
  radioPack.option('0','regular packing');
  radioPack.option('1','overlap packing');
  radioPack.option('2','no packing');
  radioPack.position(855,5);
  radioPack.selected('0');
  radioPack.style('width','130px')
}

function draw(){
  if (radioCanvas.value() == 'specify canvas size  '){windowedCanvas = false}
  else {windowedCanvas = true}
  if (radioLayers.value() == '0'){
    layers = true
  }
  else if (radioLayers.value() == '1'){
    layers = false
  }
  else {
    if (random(2)<1){
      layers = true
    }
    else {layers = false}
  }
  if (radioTree.value() == '0'){
    addTree = true
  }
  else if (radioTree.value() == '1'){
    addTree = false
  }
  else {
    if (random(2)<1){
      addTree = true
    }
    else {addTree = false}
  }
  if (radioCircle.value() == '0'){
    addCircles = true
  }
  else if (radioCircle.value() == '1'){
    addCircles = false
  }
  else {
    if (random(2)<1){
      addCircles = true
    }
    else {addCircles = false}
  }
  if (Number(radioShape.value()) == 3){
    shapeType = floor(random(3))}
  else {shapeType = Number(radioShape.value())}
  sclSelect = Number(radioSize.value()) + 1;
  if (radioFlow.value()=='limited flow'){
    limited=true
  }
  else {limited = false}
  packType = Number(radioPack.value())
}

function saveArt() {
  save(Date.now() + ".jpg");
}

function wChange(){
  canvW = Number(this.value())
}

function hChange(){
  canvH = Number(this.value())
}