change_step = 0
speed_of_change = 2
mn = 0.3

data = {
  "score": 0,
  "Username": "meep"
}


function setup() {
  maxw = windowWidth
  maxh = windowHeight
  createCanvas(windowWidth, windowHeight);
  background(50);

  targets = make_target_array(60, maxw, maxh, mn)

}


function draw() {
  background(50);
  draw_score(data["score"], windowWidth, windowHeight)
  fill('#FE8B02');
  targets.show()

  if (targets.dead){
    change_url()
  }

  if (targets.gone){
    targets = make_target_array(60, windowWidth, windowHeight, mn)
  }

  change_step ++;
  if (change_step == speed_of_change){
    targets.shrink()
    change_step = 0;
  }

}

function mouseClicked(){
  if (mouseX < (targets.x+targets.radius) && mouseY < (targets.y+targets.radius)){
    if (mouseX > (targets.x-targets.radius) && mouseY > (targets.y-targets.radius)){
      data['score'] = Math.trunc((data["score"]+1)+mn);
      mn += 0.01
      targets.clicked = true;
  }}
}

function rand_x(r, maxw) {
  return Math.floor(Math.random() * ((maxw-r) - (0+r)) + r)
}

function rand_y(r, maxh) {
  return Math.floor(Math.random() * ((maxh-r) - (0+r)) + r)
}


function make_target_array(rad, mw, mh, mn){
    x = rand_x(rad*2, mw)
    y = rand_y(rad*2, mh)
    return new circle(x, y, rad, mn)

}


function draw_score(score, maxw, maxh){
  x = maxw/2
  y = maxh/10
  fill(255)
  textSize(20)
  text(`Score:${score}`, x, y)
  //console.log(x);
}

function change_url(){
  var x = document.URL;

  b = Array.from(x)
  c = ''
  for (let i = 0; i < 12; i++){
    b.pop()
  }
  for (let step = 0; step < b.length; step++){
    c[step] = b[step]
  }

  var new_url = `${c}/Game/Restart`
  window.location.href = new_url;

  }
