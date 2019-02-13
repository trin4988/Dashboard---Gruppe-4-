boardDis = buildBord (); 
console.dir (boardDis);


function buildBord () {


    // byg tabeller til dashboard
    let newsArr = [
        ["Nyhed 1", "Nu kan vi vise nyheder på vores dashbord", "1549354740"], 
     
        ["nyhed 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "1549354700"]
    ]; 

    let tidsstempel = new Date(1549354700*1000);

    // Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.


aar = tidsstempel.getFullYear();
if (tidsstempel.getMonth() < 10) {
    mnd = "0" + tidsstempel.getMonth();  
} else {
    mnd = tidsstempel.getMonth();
};
if (tidsstempel.getDay() < 10) {
    dag = "0" + tidsstempel.getDay();
} else {
    dag = tidsstempel.getDay();
};



if (tidsstempel.getHours() < 10) {
    hours = "0" + tidsstempel.getHours();
} else {
    hours = tidsstempel.getHours();
};
if (tidsstempel.getMinutes() < 10) {
    var minutes = "0" + tidsstempel.getMinutes();
} else {
    var minutes = tidsstempel.getMinutes();
};
if (tidsstempel.getSeconds() < 10) {
    var seconds = "0" + tidsstempel.getSeconds();
} else {
    var seconds = tidsstempel.getSeconds();
};

// Will display time in dd.mm.yyyy 10:30:23 format
var formattedTime = dag + '.' + mnd + '.' + aar + ' ' + hours + ':' + minutes + ':' + seconds;
console.log ("formattteret tid: " + formattedTime); 
    
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
    
   