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

// function searchFunc () {

//     var searchInput = document.getElementById("searchvalues").value
//     var valuesArray = []
//     results.innerText = "";

//     for (let i = 0; i < valuesArray.length; i++) {
//         if(valuesArray[i].includes(searchInput)){
//            results.innerText += valuesArray[i] + '\n';
//         }
//     }
// }

var input1 = document.createElement("input");
document.body.append(input1);
input1.id = "userBirtDate";
input1.type = "date";
input1.placeholder = "please enter your date";

var breakLine1 = document.createElement("br");
document.body.append(breakLine1);

var input2 = document.createElement("input");
document.body.append(input2);
input2.id = "userName";
input2.type = "text";
input2.placeholder = "please enter your name";

var breakLine2 = document.createElement("br");
document.body.append(breakLine2);

var button = document.createElement("button");
document.body.append(button);
button.innerText = "send";
button.addEventListener("click", program);

var breakLine3 = document.createElement("br");
document.body.append(breakLine3);

function program() {
  var todaysDate = new Date();

  var h1 = document.createElement("h1");
  document.body.append(h1);

  h1.addEventListener("mouseover", function () {
    h1.style.color = "green";
  });
  setTimeout(refresh, 5000);

  if (todaysDate.getFullYear() - getStringDateyear(input1.value) > 18) {
    h1.innerText = "welcom" + input2.value;
    h1.style.color = "blue";
    button.disabled = true;
  } else {
    h1.innerHTML =
      "<div>" +
      "NO ENTRY" +
      "</div>" +
      input2.value +
      "\n" +
      "<img src=" +
      "https://i.gifer.com/7Kyt.gif" +
      ">";
    h1.style.color = "red";
    button.disabled = true;
  }
}

function getStringDateyear(str) {
  var year = "";

  for (i = 0; i < str.length; i++) {
    year += str[i];
    if (str[i] == "-") return parseInt(year);
  }
}

function refresh() {
  window.location.reload();
}

var inputLastName = document.createElement("input");
document.body.append(inputLastName);
inputLastName.type = "text";
inputLastName.placeholder = "please enter your last name";

var firstNames = document.createElement("input");
document.body.append(firstNames);
firstNames.id = "firstName";
firstNames.type = "text";
firstNames.placeholder = "please enter your 4 first names";

var nameButton = document.createElement("button");
document.body.append(nameButton);
nameButton.innerText = "submit";

var listTag = document.createElement("ul");
document.body.append(listTag);
// listTag.style.listStyleType = "none"

var firstNamesArray = [];

function getNamesFromUser() {
  var firstNamesStr = firstNames.value;
  var text = "";

  for (i = 0; i < firstNamesStr.length; i++) {
    if (
      firstNamesStr[i] != " " ||
      firstNamesStr[i] == firstNamesStr[firstNamesStr.length - 1]
    ) {
      text += firstNamesStr[i];
    } else {
      firstNamesArray.push(text);
      text = "";
    }
  }
  firstNamesArray.push(text);

  for (i = 0; i < firstNamesArray.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerText += firstNamesArray[i] + " " + inputLastName.value;
    
    var str = firstNamesArray[i];
    if(input2.value.startsWith(str[0])){
        listItem.style.color = "orange";
    }
    listTag.appendChild(listItem);

    }
    var searchInputBlock = document.createElement("input");
    document.body.append(searchInputBlock);
    searchInputBlock.type = "search";
    searchInputBlock.placeholder = "search a name here";

    var p = document.createElement("p");
    document.body.append(p);

    var serchValue = searchInputBlock.value;

    for(j=0; j<serchValue.length; i++){
        if(str.includes(serchValue)){
            p.innerText += str + '\n';
         }
    }
}


    



nameButton.addEventListener("click", () => {
  getNamesFromUser();
});


var createInputButton = document.createElement("button");
document.body.append(createInputButton);
createInputButton.innerText = "create";
createInputButton.addEventListener("click", () =>{
    creatingSearchInput()
})


// var p = document.createElement("p");
// document.body.append(p);

// function creatingSearchInput() {
//   var searchInputBlock = document.createElement("input");
//   document.body.append(searchInputBlock);
//   searchInputBlock.type = "search";
//   searchInputBlock.placeholder = "search a name here";
// //   searchInputBlock.oninput = "searchMiniSimpleAlgoritem()";
//   searchInputBlock.addEventListener("input", 
//   function searchMiniSimpleAlgoritem() {
//     for (var i = 0; i < firstNamesArray.length; i++) {
//       if (firstNamesArray[i].includes(searchInputBlock.value)) {
//         p.innerText += array[i] + "\n";
//       }
//     }
//   }
//   )

// }


// function searchFunc () {

//     var searchInputBlock = document.createElement("input");
//     document.body.append(searchInputBlock);
//     searchInputBlock.type = "search";
//     searchInputBlock.placeholder = "search a name here";
//     searchInputBlock.innerText = "";

//     for (let i = 0; i < firstNamesArray.length; i++) {
//         if(firstNamesArray[i].includes(searchInput)){
//            results.innerText += valuesArray[i] + '\n';
//         }
//     }
// }

// function searchMiniSimpleAlgoritem() {
//   for (var i = 0; i < firstNamesArray.length; i++) {
//     if (firstNamesArray[i].includes(searchInputBlock.value)) {
//       p.innerText += array[i] + "\n";
//     }
//   }
// }

