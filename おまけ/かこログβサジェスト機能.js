(function(){
const selectForm=document.querySelector("select.bbs_select");
if(!selectForm){
alert("HTMLが変更されています。コードの更新が必要です。");
return;
}
const allValue=(function(){
if(!window._bbsOptionCache){
const allHTML=Array.from(selectForm.querySelectorAll("option"));
let textArray=[];
allHTML.forEach(item=>{
textArray.push([`<option value="`+item.value+`">`+item.innerHTML+"</option>",item.innerHTML]);
});
window._bbsOptionCache=textArray;
return textArray;
}else{
return window._bbsOptionCache;
}
})();
const result="<option value>すべての板</option>"+(function(){
let search=[];
const keyword=prompt("検索したい板名を入力");
allValue.forEach(item=>{
if(item[1].includes(keyword)){
search.push(item[0]);
}
});
if(search.length<1){
alert("キーワードに当てはまる板名が存在していません");
return;
}
return search;
})().join("");
selectForm.innerHTML=result;
})();
