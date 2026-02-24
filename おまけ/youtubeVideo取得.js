(()=>{
const videos=(function(){
const contentClasses=document.getElementsByClassName("style-scope ytd-rich-grid-renderer")["contents"];
const lines=contentClasses.querySelectorAll("ytd-rich-item-renderer");
const forcus=Array.from(lines).filter(el=>getComputedStyle(el).display!=="none");
if(forcus.length===0){
alert("動画が選択できません。リロードしてください。");
return;
}
/*処理を施すためfilterは使えない*/
const links=forcus.map(item=>{
const aTag=item.querySelector("a#video-title-link");
/*item.getElementBy...ではdocumentにないので取得不可*/
if(!aTag){
/*linksはmapされなくても元要素が残る*/
return null;
}
const url=aTag.href.split("&pp=");
return url[0];
});
if(links.length===0){
alert("リンクが取得できない箇所がありました");
return;
}
if(links.find(item=>!item)){
alert("リンクが取得できない箇所がありました");
return;
}
return links;
})();
const ids=(function(array){
const customURLs=array.map(item=>{
const ID=(function(ID){
if(ID.includes("watch?v=")){
const IdElement=ID.split("watch?v=");
return IdElement[IdElement.length-1];
}
if(ID.includes("/shorts/")){
const IdElement=ID.split("/shorts/");
return IdElement[IdElement.length-1];
}
return;
/*ショート動画のURLでもそれ以外でもない場合はなし*/
})(item);
if(!ID){
alert("適合するURLがありませんでした");
return;
}
return ID;
});
return customURLs;
})(urls);
const txt=(function(list){
const arrayText=list.join("\n")
return arrayText;
})(ids);
const blob=new Blob([txt],{"type":"text/plain"});
const aTag=docuemnt.createElement("a");
const downLoadPath=URL.createObjectURL(blob);
aTag.href=downLoadPath;
aTag.downLoad="youtubeVideoList.txt";
document.body.appendChild(aTag);
aTag.click();
URL.revokeObjectURL(downLoadPath);
})();
