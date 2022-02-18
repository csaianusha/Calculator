let container=document.createElement("div");
container.setAttribute("class","container");

let row=document.createElement("div");
row.setAttribute("class","row");

let col=document.createElement("div");
col.setAttribute("class","col");

let box=document.createElement("div");
box.setAttribute("class","box");

var input = document.createElement("input");
input.setAttribute('type', 'text');
input.setAttribute('id', 'txt_overalltotal');
input.className = "col-12, form-control";
input.disabled=true;


let table=document.createElement("table");
table.setAttribute("class","calculator");

var tr1=document.createElement("tr");
var td1=createele("7","#363940","#fff","1");
var td2=createele("8","#363940","#fff","2");
var td3=createele("9","#363940","#fff","3");
var td4=createele("+","#FFBD01","#000","4");
tr1.append(td1,td2,td3,td4);


var tr2=document.createElement("tr");
var td1=createele("4","#363940","#fff","5");
var td2=createele("5","#363940","#fff","6");
var td3=createele("6","#363940","#fff","7");
var td4=createele("-","#FFBD01","#000","8");
tr2.append(td1,td2,td3,td4);


var tr3=document.createElement("tr");
var td1=createele("1","#363940","#fff","9");
var td2=createele("2","#363940","#fff","10");
var td3=createele("3","#363940","#fff","11");
var td4=createele("*","#FFBD01","#000","12");
tr3.append(td1,td2,td3,td4);


var tr4=document.createElement("tr");
var td1=createele("C","#EB4644","#fff","13");
var td2=createele("0","#363940","#fff","14");
var td3=createele("=","#209446","#fff","15");
var td4=createele("/","#FFBD01","#000","16");
tr4.append(td1,td2,td3,td4);

table.append(tr1,tr2,tr3,tr4);


box.append(input,table);

col.append(box);
row.append(col);
container.append(row);
document.body.append(container);

function createele(value,elebackgroundclass,elecolorclass,srno){
    var res = document.createElement("td");
    var input = document.createElement("input");
    input.setAttribute('type', 'button');
    input.setAttribute('value', value);
    input.setAttribute('id', 'txtValue_'+srno+'');
    input.addEventListener("click",foo); 
    input.className = "btn-lg";
    input.style.background = elebackgroundclass;
    input.style.color = elecolorclass;

    res.append(input);
    return res;
}

function foo(){
    var newvalue=this.value;
    if(newvalue!="C")
    {
        var overalltotal= document.getElementById("txt_overalltotal").value;
        overalltotal+=newvalue;
        if(overalltotal.slice(-1)=="="){
            overalltotal = overalltotal.substring(0, overalltotal.length - 1);
            overalltotal = eval(overalltotal);
        }
        document.getElementById("txt_overalltotal").value=overalltotal;
    }else{
        document.getElementById("txt_overalltotal").value="";
    }
}

function myKeyPress(e){
    var keynum;
  
    if(window.event) {                   
      keynum = e.keyCode;
    } else if(e.which){              
      keynum = e.which;
    }
    // alert(String.fromCharCode(keynum));
    if(String.fromCharCode(keynum)!="C"&&String.fromCharCode(keynum)!="c"){
        if(isNumeric(String.fromCharCode(keynum))==true||(String.fromCharCode(keynum)=="-")||(String.fromCharCode(keynum)=="+")||(String.fromCharCode(keynum)=="*")||(String.fromCharCode(keynum)=="/")||(String.fromCharCode(keynum)=="=")){
            var overalltotal= document.getElementById("txt_overalltotal").value;
            overalltotal+=String.fromCharCode(keynum);
            if(overalltotal.slice(-1)=="="){
                overalltotal = overalltotal.substring(0, overalltotal.length - 1);
                overalltotal = eval(overalltotal);
            }
            document.getElementById("txt_overalltotal").value=overalltotal;
        }else{
            alert("Please enter a numeric values.");
        }
    }else{
        document.getElementById("txt_overalltotal").value="";
    }
  }

function isNumeric(val) {
    return /^-?\d+$/.test(val);
}
