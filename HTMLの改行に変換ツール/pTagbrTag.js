document.getElementById("express").addEventListener("click",function(e){
e.preventDefault();
const selecting=document.forms.allProcess;
const getTxt=selecting.get.value;
if(!getTxt){
alert("入力してください");
return;
}
const type=(function(){
const radio=selecting.treatType.value;
if(!radio){
alert("ボタンを選択してください");
return;
}
return radio;
})();
const htmled=(function(txt,tag){
const lines=txt.split("\n");
let HTMLlise="";
if(tag==0){
/*文字列で渡されるため*/
lines.forEach(item=>{
HTMLlise+="<p>"+item+"</p>";
});
}else if(tag==1){
lines.forEach(item=>{
HTMLlise+=item+"<br>";
});
}else{
return;
}
return HTMLlise;
})(getTxt,type);
selecting.html.value=htmled;
});
document.getElementById("copy").addEventListener("click",function(e){
e.preventDefault();
const selecting=document.forms.allProcess;
const txt=selecting.html;
txt.select();
document.execCommand("Copy");
if(!e.target.classList.value.includes("copyed")){
e.target.classList.add("copyed");
e.target.textContent="✓";
}
setTimeout(function(){
e.target.classList.remove("copyed");
e.target.textContent="コピー";
},2000);
});
