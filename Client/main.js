targets = [];
change_step = 0
speed_of_change = 2

data = {
  "score": 0,
  "Username": "meep"
}

let sketch = function(p) {
  p.setup = function() {
    maxw = windowWidth
    maxh = windowHeight
    p.createCanvas(maxw, maxh)
  //  createCanvas(windowWidth, windowHeight);
    background(50);

    make_target_array(targets, 10, 60, maxw, maxh)

  }
  };
  new p5(sketch, window.document.getElementById('container'));


function draw() {
  background(50);

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
      console.log(data['score']);
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
