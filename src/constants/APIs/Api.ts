import axios from 'axios';

//const par = localStorage.getItem('pr');


//export const ConferanceId = process.env.REACT_APP_ConferenceId;

/*
  Function to call diferent urls for different apis
*/
let baseUrl = ' ';

// export const urlBase = (type) =>{
//    if(type === "novilcovid"){
//     baseUrl = 'https://corona.lmao.ninja/v2/https://corona.lmao.ninja/v2/';
//    }
// }

export default axios.create({
  //live: 'https://confliveapi.key-frame.cf/api/'  test: http://conference.key-frame.cf/api/  `http://conference.key-frame.cf/api/`
  baseURL: baseUrl,
  // headers: { 'Authorization': "Bearer "+par}
});