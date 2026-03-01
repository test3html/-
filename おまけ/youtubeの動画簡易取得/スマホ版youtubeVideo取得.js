(()=>{
const links=(function(){
const table=document.getElementsByClassName("rich-grid-renderer-contents rich-grid-top-margin")[0];
const videos=Array.from(table.querySelectorAll("ytm-rich-item-renderer"));
const forcus=videos.filter(el=>getComputedStyle(el).display!=="none");
if(forcus.length===0){
alert("動画が選択できません。リロードしてください。");
return;
}
const movieLink=forcus.map(item=>{
const videoNest=item.querySelector("a");
const link=videoNest.href;
if(link.includes("watch?v=")){
return link;
}else{
return null;
}
});
if(!movieLink){
alert("検索できませんでした");
return;
}
if(movieLink.find(item=>!item)){
alert("不適なURLが検出されました");
return;
}
//1つ空のURLを検索してしまったら
return movieLink;
})();
const ids=(function(array){
const customURLs=array.map(item=>{
const ID=(function(url){
if(url.includes("watch?v=")){
const IdElement=url.split("watch?v=");
return IdElement[IdElement.length-1];
}
if(url.includes("/shorts/")){
const IdElement=url.split("/shorts/");
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
})(links);
const txt=(function(list){
const arrayText=list.join("\n");
return arrayText;
})(ids);
const blob=new Blob([txt],{"type":"text/plain"});
const aTag=document.createElement("a");
const downLoadPath=URL.createObjectURL(blob);
aTag.href=downLoadPath;
aTag.download="youtubeVideoList.txt";
document.body.appendChild(aTag);
aTag.click();
URL.revokeObjectURL(downLoadPath);
remove(aTag);
})();
