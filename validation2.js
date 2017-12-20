



function validate(){ 
    valCheck = true; 
    var myForm = document.getElementById("contactinformation"); 
    if(emailCheck(myForm.email.value)==false){
        var image1 = getImage(false,"email"); 
        document.getElementById("Email").appendChild(image1); 
         
    }else{
        var image_1 = getImage(true, "email");
        document.getElementById("Email").appendChild(image_1);
         
    }

    if(phoneCheck(myForm.phone.value)==false){
        var image2 = getImage(false, "phone");
        document.getElementById("Phone").appendChild(image2);
       
    }else{ 
        var image_2 = getImage(true, "phone");
        document.getElementById("Phone").appendChild(image_2);
         
    }

    if(addressCheck(myForm.address.value)==false){
        var image3 = getImage(false, "address"); 
        document.getElementById("Address").appendChild(image3);
        

    }else{
        var image_3 = getImage(true, "address"); 
        document.getElementById("Address").appendChild(image_3); 
         
    }
    
    
    return valCheck; 
}

function getStorage(){ 
    var myForm = document.getElementById("contactinformation");
    if(typeof(Storage) !== "undefined"){
        
        //Stores the value
        localStorage.setItem("address", myForm.address.value); 
        
        document.getElementById("Address").innerHTML = localStorage.getItem("address")
     
        return true;
        
        
        
    }else{
        document.getElementById("Address").innerHTML="Sorry, browser unsupported"; 

        return false; 
    }

}



function sentHTML2(){
    if(validate()==true){ 
        getStorage(); 
        window.location.href = "validation3.html";  
       
    }
}

function getImage(bool, ID){
    var image = document.getElementById("image", ID);
    if(image== null){
        image = new Image(15,15);
        image.id = "image" + ID; 
    }
    image.src = bool ? "correct.png": "wrong.png"; 
    return image; 
}

function emailCheck(text){
    let regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}$/;
    if(text != null && text.match(regexEmail)){
        return true; 
    }
    else{
        valCheck = false; 
        return false;
    }
}

function phoneCheck(number){
    let regexNum = /^([0-9]{3})?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    if(number != null && number.match(regexNum)){
        return true;
    }
    else{
        valCheck = false; 
        return false; 
    }
}

function addressCheck(add){
    let regexAdd = /^[A-Za-z]+(\s?)+([A-Za-z]{0,})+[,]+[A-Za-z]{2,}$/;
    if(add != null && add.match(regexAdd)){
        return true; 
    }else{
        valCheck = false; 
        return false; 
    }
}

