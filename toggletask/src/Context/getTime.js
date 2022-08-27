export const getMyTime=()=>{
    const date = new Date();
    // var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
    // var offset= ISToffSet*60*1000;
    var ISTTime = new Date(date.getTime());
    // console.log("IST Date",ISTTime);
    let str=""+ISTTime
    let arr=str.split(" ")
    const time=arr[4]
    // console.log(time)
    return time
  } 