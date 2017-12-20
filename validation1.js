// var submitBtn = document.getElementById("submit");
// submitBtn.onclick = function(){ 
//     var myForm = document.getElementById("validationform");
//     if(myForm.firstname.value == ""){
//         alert("Yu did not enter the first name"); 
        
//     }
// }

function validate(){ 
    valCheck = true; 
    var myForm = document.getElementById("validationform"); 
    if(nameCheck(myForm.firstname.value)==false){
        var image1 = getImage(false,"firstname"); 
        document.getElementById("Firstname").appendChild(image1); 
         
    }else{
        var image_1 = getImage(true, "firstname");
        document.getElementById("Firstname").appendChild(image_1);
         
    }

    if(nameCheck(myForm.lastname.value)==false){
        var image2 = getImage(false, "lastname");
        document.getElementById("Lastname").appendChild(image2);
       
    }else{ 
        var image_2 = getImage(true, "lastname");
        document.getElementById("Lastname").appendChild(image_2);
         
    }

    if(selectBox(myForm.gender.value)==false){
        var image3 = getImage(false, "gender"); 
        document.getElementById("Gender").appendChild(image3);
        

    }else{
        var image_3 = getImage(true, "gender"); 
        document.getElementById("Gender").appendChild(image_3); 
         
    }
    if(selectBox(myForm.state.value)==false){
        var image_4 = getImage(false, "state");
        document.getElementById("State").appendChild(image_4);
    }else{
        var image4 = getImage(true, "state"); 
        document.getElementById("State").appendChild(image4);
    }
    
    
    return valCheck; 
    
}



function sentHTML(){ 
    if(validate() == true){ 
        window.location.href = "validation2.html";
    }
}

function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? 'correct.png' : 'wrong.png';
    return image;
}
function nameCheck(inputText){
  let regex = /^[a-zA-Z0-9]+$/i;
    if(inputText != null && inputText.match(regex)){
        return true; 
    }else{ 
        valCheck = false; 
        return false; 
    }  
}

function selectBox(int){ 
    if(int== 0){
        valCheck = false; 
        return false;
    }else{
        return true;
    }
}
