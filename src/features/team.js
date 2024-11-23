import { createSlice } from "@reduxjs/toolkit";
const PLAYERS = [
    "HarryPotter",
    "HermioneGranger",
    "NevilleLongbottom",
    "AlbusDumbledore",
    "LordVoldemort",
    "DracoMalfoy",
    "SeverusSnape",
    "BellatrixLestrange"
  ];
const initialState={
PLAYERS:PLAYERS,
salazarSlytherin:"",
gryffindor:"",
chooseSalazar:false,
chooseGryffindor:false,
currentTeam:"",
info:"Please create your team"

}

const teamSlice=createSlice({
name:"teams",
initialState,
reducers:{
    selectPerson:(state,action)=>{     
const index=action.payload
console.log(index)
if(state.chooseSalazar){
let newPlayer=state.PLAYERS.splice(index,1)
state.salazarSlytherin =[...state.salazarSlytherin,newPlayer]
}
if(state.chooseGryffindor){
let newPlayer=state.PLAYERS.splice(index,1)
state.gryffindor=[...state.gryffindor,newPlayer]


}
if(state.PLAYERS.length === 0){
state.chooseGryffindor = false
state.chooseSalazar=false
state.info = "Teams are created !!!"   
}
console.log(state.salazarSlytherin)
},
clickGood:(state)=>{
state.chooseGryffindor = true
state.chooseSalazar=false
state.currentTeam="Şuanda Takım griffindor için seçim yapılıyor"
},
clickBad:(state)=>{
state.chooseSalazar=true
state.chooseGryffindor=false
state.currentTeam="Şuanda Takım Salazar Slytherin için seçim yapılıyor"
},
clearTeam:(state)=>{
state.gryffindor = []
state.salazarSlytherin =[]
state.PLAYERS=[...initialState.PLAYERS]
state.info="Please create your team"
},
mixTeam:(state)=>{
state.PLAYERS=state.PLAYERS.sort(() => Math.random() - 0.5)

}


}


})

export const {selectPerson,clickBad,clickGood,clearTeam,mixTeam} =teamSlice.actions
export default teamSlice.reducer