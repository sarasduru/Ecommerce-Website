document.getElementById("ls").addEventListener("click",decrease);
document.getElementById("gt").addEventListener("click",increase);
var dec=document.getElementById("val").value;
function decrease(){
 document.getElementById("val").value=--dec;
}

function increase(){
  document.getElementById("val").value = ++dec;
}

document.getElementById("cartbtn").addEventListener("click",addcart);
function addcart(){
  var cartqty=document.getElementById("val").value;
  document.getElementById("sup").innerHTML=cartqty;
}



