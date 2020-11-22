targets = [];
change_step = 0
speed_of_change = 2

data = {
  "score": 0,
  "Username": "meep"
}


function setup() {
  maxw = windowWidth
  maxh = windowHeight
  createCanvas(windowWidth, windowHeight);
  background(50);

  make_target_array(targets, 50, 60, maxw, maxh)

}


function draw() {
  background(50);
  draw_score(data["score"], windowWidth, windowHeight)

  for (let ary_step = 0; ary_step < targets.length; ary_step ++){
    if (ary_step == 0){fill('#FE8B02');targets[ary_step].show()}
    else if (ary_step !=0)(fill(255))

    if (targets[ary_step].gone){targets.shift()}
  }

  change_step ++;
  if (change_step == speed_of_change){
    for (let ary_step = 0; ary_step < targets.length; ary_step ++){
      targets[ary_step].shrink()
      break
    }

    change_step = 0;
  }

}

function mouseClicked(){
  if (mouseX < (targets[0].x+targets[0].radius) && mouseY < (targets[0].y+targets[0].radius)){
    if (mouseX > (targets[0].x-targets[0].radius) && mouseY > (targets[0].y-targets[0].radius)){
      data['score'] ++;
      //console.log(data['score']);
      targets[0].clicked = true;
  }}
}

function rand_x(r, maxw) {
  return Math.floor(Math.random() * ((maxw-r) - (0+r)) + r)
}

function rand_y(r, maxh) {
  return Math.floor(Math.random() * ((maxh-r) - (0+r)) + r)
}


function make_target_array(ary, number_of_targets, rad, mw, mh){
  for (let step = 0; step < number_of_targets; step++){
    x = rand_x(rad*2, mw)
    y = rand_y(rad*2, mh)
    ary[step] = new circle(x, y, rad, .3)
  }
}


function draw_score(score, maxw, maxh){
  //foont = loadFont("assets/static/Texturina-ExtraBoldItalic-opsz=20.ttf")
  //textFont(foont);
  x = maxw/2
  y = maxh/10
  fill(255)
  textSize(20)
  text(`Score:${score}`, x, y)
  //console.log(x);
}
