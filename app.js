const submitButton = document.getElementById("submit"); 
const input = document.querySelector("input[name='search']");
const players = document.querySelector(".players")
const playerInfo = document.createElement("div")

function createElements(firstName, lastName, city, teamName, teamNick, teamConf) {

  playerInfo.setAttribute("class", "PLAYER_INFO")

  const fName = document.createElement("h1")
   fName.className ="FirstName"
   
   const lName = document.createElement("h2")
   lName.className ="lastName"
   
   const tName = document.createElement("h3")
   tName.className ="teamName"
   
   const tNick = document.createElement("h4")
   tNick.className ="teamnickName"
   
   
   const tCity= document.createElement("h5")
   tCity.className ="teamCity"
   
   const conF = document.createElement("h6")
   conF.className ="Conference"

   fName.innerText =`First Name: ${firstName}` 
   playerInfo.append(fName);
  
   lName.innerText =`Last Name: ${lastName}`
   playerInfo.append(lName); 
  
   tName.innerText =`Team Name: ${teamName}`
   playerInfo.append(tName); 
   
   tNick.innerText = `TEAM Nickname: ${teamNick}`
   playerInfo.append(tNick); 

   tCity.innerText = `Location: ${city}`
   playerInfo.append(tCity); 
   
   conF.innerText = `Conference: ${teamConf}` 
   playerInfo.append(conF); 
   
   $('body').append(playerInfo)

}


submitButton.addEventListener('click', () => {
const searchText = input.value
playerInfo.innerHTML = ""
$.get(`https://www.balldontlie.io/api/v1/players/?search=${searchText}`, (player) => {
    console.log(player.data)
  
for(var i = 0; i < player.data.length; i++){
     const pName = player.data[i].first_name
    const plastName = player.data[i].last_name
    const pCity  = player.data[i].team.city
    const pTeamName = player.data[i].team.name
    const pTeamNick = player.data[i].team.abbreviation
    const pTeamConf = player.data[i].team.conference
//   console.log("hello")
    // console.log(PName)
    // console.log(plastName)
    // console.log(PCity)
    // console.log(pTeamName)
    // console.log(pTeamName)
    // console.log(pTeamConf)


    createElements(pName, plastName, pCity, pTeamName, pTeamNick, pTeamConf) 
  }
  
   });
})