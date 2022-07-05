function add(){
var e=document.createElement("div")
var c=document.createElement("div")
var q=document.createElement("span")
var p=document.createElement("div")
var s=document.createElement("span")
var b=document.createElement("button")
c.innerHTML="qty : "
console.log(e);
p.innerHTML="price : "
b.innerHTML="Remove"
b.setAttribute("onclick","remove2()")
var f=document.getElementById("inp");
var q;
 q.innerHTML=f.value
 v=q.innerHTML;
 l=v*1000;
 console.log(l)
 s.innerHTML=l;
 
document.getElementById("cld").innerHTML= e.innerText="product1"
document.getElementById("cld").appendChild(c)
c.appendChild(q);
q.appendChild(p)
p.appendChild(s)
s.appendChild(b)
console.log(p)
document.getElementById("cld").style.display="initial"
document.getElementById("cld").setAttribute("class","cld")

}
function add1(){
    var e=document.createElement("div")
    var c=document.createElement("div")
    var q=document.createElement("span")
    var p=document.createElement("div")
    var s=document.createElement("span")
    var b=document.createElement("button")
    c.innerHTML="qty : "
    console.log(e);
    p.innerHTML="price : "
    b.innerHTML="Remove"
    b.setAttribute("onclick","remove()")
    
    var f=document.getElementById("inp2");
    var q;
     q.innerHTML=f.value
     l=f.value*1500;
     console.log(l)
     s.innerHTML=l;
     
    document.getElementById("cld1").innerHTML= e.innerText="product2"
    document.getElementById("cld1").appendChild(c)
    c.appendChild(q);
    q.appendChild(p)
    p.appendChild(s)
    s.appendChild(b)
    console.log(p)
    console.log(b)
    document.getElementById("cld1").style.display="initial"
       document.getElementById("cld1").setAttribute("class","cld1")
    }
    function add2(){
        var e=document.createElement("div")
        var c=document.createElement("div")
        var q=document.createElement("span")
        var p=document.createElement("div")
        var s=document.createElement("span")
        var b=document.createElement("button")
        b.innerHTML="Remove"
        c.innerHTML="qty : "
    console.log(e);
    p.innerHTML="price : "
    b.setAttribute("onclick","remove1()")
    
    var f=document.getElementById("inp3");
    var q;
     q.innerHTML=f.value
     v=q.innerHTML;
     l=v*500;
     console.log(l)
     s.innerHTML=l;
     
    document.getElementById("cld2").innerHTML= e.innerText="product3"
    document.getElementById("cld2").appendChild(c)
    c.appendChild(q);
    q.appendChild(p)
    p.appendChild(s)
    s.appendChild(b)
    console.log(p)
    document.getElementById("cld2").setAttribute("class","cld2")
    document.getElementById("cld2").style.display="initial"
    
        }
        
       // b.addEventListener("click",remo());
       function remove2(){
        document.getElementById("cld").style.display="none"
       }
       function remove(){
        document.getElementById("cld1").style.display="none"
       }
       function remove1(){
        document.getElementById("cld2").style.display="none"
       }