console.log("hi")
open_new_wind=()=>{
    let Value=document.getElementById("name").value;
    let Pass=document.getElementById("pass").value;
    open("popwind.html?name="+Value+"&pass="+Pass,"wind1","width=300,height=300") ;
}


open_world=()=>{
open("popwind2.html","win2","width=300,height=300");
}

