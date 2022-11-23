const submitButton = document.getElementById("submit"); 
const input = document.querySelector("input[name='search']");
const players = document.querySelector(".players")
const playerInfo = document.createElement("div")
// const playerInfo = document.querySelector(".playerinfo")
// const Name = document.querySelector(".firstName")
// const lName = document.querySelector(".lasttName")
// const tName = document.querySelector(".teamName")
// const tNick = document.querySelector(".teamNick")
// const tCity = document.querySelector(".city")
// const conf = document.querySelector(".conference")

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
//   const showTitle = document.createElement("h3")
//   showTitle.className = "card-Title"
//   const showImg = document.createElement("img")
//   showImg.className = "card-image"
//   const showGen = document.createElement("h2")
//   showGen.className = "card-genres"
//   const cardSummary = document.createElement("div")
//   const emTag = document.createElement("em")
//   emTag.innerText = "Summary:"
//   const pTag = document.createElement("p")




// showImg.setAttribute("src", image)
// span.append(showImg)

// showGen.innerText = genres
// span.append(showGen); 

// cardSummary.prepend(emTag);
// pTag.innerHTML = summary
// cardSummary.append(pTag);
// span.append(cardSummary); 

// return result.append(span)


//  $.ajaxSetup({
//     headers: {"Ocp-Apim-Subscription-Key": "9d5f163a780a42eaa3691542b918abb4" }
//  })

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