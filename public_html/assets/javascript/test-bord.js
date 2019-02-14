boardDis = buildBord (); 
console.dir (boardDis);


function buildBord () {


    // byg tabeller til dashboard
    let newsArr = [
        ["Nyhed 1", "Nu kan vi vise nyheder på vores dashbord", "1549354740"], 
     
        ["nyhed 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "1549354700"]
    ]; 

    let tidsstempel = new Date(1549354700*1000);
  
  

    // timestmp = new Date().getTime() / 1000;
    // timestmp = new Date(getTime());
    toDay = new Date ();
    toDayTime = toDay.getTime();
    toDayStmp = new Date(toDayTime); 
    console.log (toDayTime); 
    console.log (toDayStmp);

    // Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.


aar = tidsstempel.getFullYear();
mndx = tidsstempel.getMonth() + 1;
if (mndx < 10) {
    mnd = "0" + mndx;  
} else {
    mnd = mndx;
};
if (tidsstempel.getDate() < 10) {
    dag = "0" + tidsstempel.getDate();
} else {
    dag = tidsstempel.getDate();
};



if (tidsstempel.getHours() < 10) {
    hours = "0" + tidsstempel.getHours();
} else {
    hours = tidsstempel.getHours();
};
if (tidsstempel.getMinutes() < 10) {
    minutes = "0" + tidsstempel.getMinutes();
} else {
    minutes = tidsstempel.getMinutes();
};
if (tidsstempel.getSeconds() < 10) {
    seconds = "0" + tidsstempel.getSeconds();
} else {
    seconds = tidsstempel.getSeconds();
};

// Will display time in dd.mm.yyyy 10:30:23 format
var formattedTime = dag + '.' + mnd + '.' + aar + ' ' + hours + ':' + minutes + ':' + seconds;
console.log ("formattteret tid DB: " + formattedTime); 


aar1 = toDayStmp.getFullYear();
mndx = toDayStmp.getMonth() + 1;
if (mndx < 10) {
    mnd1 = "0" + mndx;  
} else {
    mnd1 = mndx;
};
if (toDayStmp.getDate() < 10) {
    dag1 = "0" + toDayStmp.getDate();
} else {
    dag1 = toDayStmp.getDate();
};



if (toDayStmp.getHours() < 10) {
    hours1 = "0" + toDayStmp.getHours();
} else {
    hours1 = toDayStmp.getHours();
};
if (toDayStmp.getMinutes() < 10) {
    minutes1 = "0" + toDayStmp.getMinutes();
} else {
    minutes1 = toDayStmp.getMinutes();
};
if (toDayStmp.getSeconds() < 10) {
    seconds1 = "0" + toDayStmp.getSeconds();
} else {
    seconds1 = toDayStmp.getSeconds();
};

// Will display time in dd.mm.yyyy 10:30:23 format
var formattedTime1 = dag1 + '.' + mnd1 + '.' + aar1 + ' ' + hours1 + ':' + minutes1 + ':' + seconds1;
console.log ("formattteret tid AKT: " + formattedTime1); 
    
    let actArr = [
                ["A", ["N228","h1we080318","Praktisk web","1549354700"]],
                ["A", ["N226","gwe010119","Webudvikler","1549354700"]],
                ["F", ["N228","h1we080318","Praktisk web","1549354700"]],
                ["F", ["N226","gwe010119","Webudvikler","1549354700"]]        
    ]; 


   
    var boardArr = new Array(2);
    boardArr[0] = newsArr;
    boardArr[1] = actArr;
    // return [boardArr];
    return [newsArr, actArr];
}
    
   