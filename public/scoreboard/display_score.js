
function list(data){
  let enList = document.getElementById("Scores")
  for (let i = 0; i < data.length; i++){
    //alert(data.length)
    enList.innerHTML += data[i] + "<br>"
    //alert(prop);
  }
}

data = []

async function get_score_info(){
  const response = await fetch('/score_req')
  const db_data = await response.json()

  for (let steps = 0; steps < db_data.length; steps++){
    x = `${db_data[steps].user}: ${db_data[steps].score}`
    data.push(x)
  }
  list(data)
}
get_score_info()
