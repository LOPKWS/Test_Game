targets = [];
change_step = 0
speed_of_change = 2

function setup() {
  maxw = windowWidth
  maxh = windowHeight
  createCanvas(windowWidth, windowHeight);
  background(50);

  make_target_array(targets, 10, 60, maxw, maxh)

}
function draw() {
  background(50);

  for (let ary_step = 0; ary_step < targets.length; ary_step ++){
    targets[ary_step].show()
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

function rand_x(r, maxw) {
  return Math.random() * ((maxw-r) - (0+r)) + r
}

function rand_y(r, maxh) {
  return Math.random() * ((maxh-r) - (0+r)) + r
}


function make_target_array(ary, number_of_targets, rad, mw, mh){
  for (let step = 0; step < number_of_targets; step++){
    x = rand_x(rad*2, mw)
    y = rand_y(rad*2, mh)
    ary[step] = new circle(x, y, rad, .3)
  }
}
