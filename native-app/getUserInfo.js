import { parse } from "@babel/core";

let month = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
}

export async function get_response(resid, survey_id){
    var url = "https://tenq.chenpan.ca/response/" + resid;
    var request2 = new XMLHttpRequest();
    request2.onreadystatechange = function() {
      if (request2.readyState === XMLHttpRequest.DONE) {
        // var jsonObj = new JSONObject(request.responseText);
        // var message = jsonObj.getString("message");
        let data = JSON.parse(request2.response)
        //console.log("logging data")
        //console.log(data)
        global.view_survey[survey_id][data["data"]["questionId"]] = data["data"]["content"]
        let dte = data["data"]["at"].split('T')[0].split('-')
        let day= dte[2]
        let Month = month[dte[1]]
        global.view_survey[survey_id]["date"] = day+' '+Month+' '+dte[0]
        // let temp = r_list
        // temp[data["data"]["questionId"]] = data["data"]["content"]
        // setRlist(temp)
      }
    }
    request2.open('GET', url);
    const obj = {}
    request2.setRequestHeader('Content-Type', 'application/json');
    const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
    request2.send(blob);
  }
export async function get_question(qid){
var url = "https://tenq.chenpan.ca/question/" + qid;
var request2 = new XMLHttpRequest();
//let response_lst = global.view_survey;
request2.onreadystatechange = function() {
  if (request2.readyState === XMLHttpRequest.DONE) {
    // var jsonObj = new JSONObject(request.responseText);
    // var message = jsonObj.getString("message");
    let data = JSON.parse(request2.response)
    //console.log("logging data")
    //console.log(data)
    //response_lst[qid].push(data["data"]["content"])
    //global.view_survey=response_lst
    //console.log(data["data"]["content"])
    if (data["status_code"]===200){
    global.question_content[qid]= data["data"]["content"]
    // let temp = q_list
    // temp[qid] = data["data"]["content"]
    // setQlist(temp)
    }
    //global.question_content[qid]= data["data"]["content"]
  }
}
request2.open('GET', url);
const obj = {}
request2.setRequestHeader('Content-Type', 'application/json');
const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
request2.send(blob);
}
export async function get_questions(){
    for (var i=0; i<global.qids.length; i++){
     //console.log(global.qids[i])

        await get_question(global.qids[i]);
        //global.view_survey[id].push(ret_data)
    }
}
export async function get_responses(id){
  var request = new XMLHttpRequest();
  request.onreadystatechange = async function() {
    if (request.readyState === XMLHttpRequest.DONE) {
    // var jsonObj = new JSONObject(request.responseText);
    // var message = jsonObj.getString("message");
    //console.log(request.response)
    let obj = JSON.parse(request.response)
    let resIDList = [1,2,3,4,5]
    if(obj['status_code']===200){
      resIDList = obj["data"]["responseIds"]
      //let response_list = []
      let n = resIDList.length;
      for (let i = 0; i < n; i++) {
        //console.log(resIDList)
        var resid = resIDList[i];
        await get_response(resid, id);
      }
      //get_questions();
    }
  }//console.log(global.surveys)
}
var url = 'https://tenq.chenpan.ca/survey/'+id;
request.open('GET', url);
const obj = {}
request.setRequestHeader('Content-Type', 'application/json');

const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
request.send(blob);
}
  async function recordPress(id){
    //console.log("logging id:"+id)
    // global.view_survey = {};
    // global.question_content = {};
    // {"data": }
    //setQlist({})
    //setRlist({})
    await get_questions();
    await get_responses(id);
    
    // console.log("log: global.view_survey")
    // console.log(global.view_survey)
    //global.view_survey=[['1','1'], ['2','2'], ['3','3'], ['4','4'], ['5','5']]
    let ret_lst = []
    for (var i=0; i<global.qids.length; i++){
      let id = global.qids[i]
      //console.log(global.view_survey[id])
      ret_lst.push([q_list[id], r_list[id]])
    }
    //console.log(r_list)
    //console.log(q_list)
    //setQlist({})
    //setRlist({})
    //console.log(ret_lst)
    //navigation.navigate('PageRecord', {"resIDList":ret_lst})
  };