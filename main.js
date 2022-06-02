// // קוד דינאמי 

// var numberArray = [54,22,22,44,5,66,2,3,55,9,54,2,132];
// for(i = 0; i<numberArray.length; i++){
//     main_div.innerHtml += "<div id= 'div_"+i+"'>"+ numberArray[i] + "</div>";
//     changeColor(i);
// }

// function changeColor(i){
//     if(numberArray[i] % 2 == 0){
//         document.getElementById("div_"+i).style.color = "red";
//     }
//     else{
//         document.getElementById("div_"+i).style.color = "blue";
//     }
// }


// // קוד נקי וגינרי

// function getOrgain (arry){
//     for(i = 0; i<numberArray.length; i++){
//         main_div.innerHtml += "<div id= 'div_"+i+"'>"+ numberArray[i] + "</div>";
//         changeColor(i ,arry);
//     }
// }

// function changeColor(index, numberArray){
//     if(numberArray[index] %   2 == 0){
//         document.getElementById("div_"+index).style.color = "red";
//     }
//     else{
//         document.getElementById("div_"+index).style.color = "blue";
//     }
// }
// getOrgain();

function searchFunc () {

    var searchInput = document.getElementById("searchvalues").value
    var valuesArray = []
    results.innerText = "";

    for (let i = 0; i < valuesArray.length; i++) {
        if(valuesArray[i].includes(searchInput)){
           results.innerText += valuesArray[i] + '\n';
        }
    }    
}