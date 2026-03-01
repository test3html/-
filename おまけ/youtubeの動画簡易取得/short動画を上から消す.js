(()=>{
const contentClasses=document.getElementsByClassName("style-scope ytd-rich-grid-renderer")["contents"];
const lines=contentClasses.querySelectorAll("ytd-rich-item-renderer");
const forcus=Array.from(lines).filter(el=>getComputedStyle(el).display!=="none");
const number=Number(prompt("何件非表示にしますか?"));
if(typeof number!=="number"){
alert("数字を入力してください");
return;
}
if(number<0){
alert("整数で入力してください");
return;
}
if(!Number.isInteger(number)){
alert("整数で入力してください");
return;
}
for(let i=0;i<number&&i<forcus.length;i++){
if(forcus[i].style){
forcus[i].style.display="none";
}
}
})();
