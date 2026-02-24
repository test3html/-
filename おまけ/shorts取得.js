(()=>{
const videos=(function(){
const contentClasses=document.querySelector("ytd-two-column-browse-results-renderer.style-scope.ytd-browse.grid.grid-3-columns").querySelector("#primary");
const box=contentClasses.getElementsByClassName("style-scope ytd-two-column-browse-results-renderer")[0].querySelector("#contents");
const shorts=box.getElementsByClassName("style-scope ytd-rich-grid-renderer");
const getableShorts=Array.from(shorts).filter(item=>getComputedStyle(item).display!=="none");
const links=getableShorts.map(item=>{
const scope=item.querySelector("#content.style-scope.ytd-rich-item-renderer");
if(scope){
/*最後の箇所は取得できない*/
const url=scope.getElementsByClassName("shortsLockupViewModelHostEndpoint reel-item-endpoint")[0];
return url.href;
}
});
if(links.find(item=>!item)){
alert("リンクが取得できない箇所がありました");
return;
}
if(links.length===0){
alert("リンクが取得できない箇所がありました");
return;
}
return links;
})();
const ids=(function(array){
const customURLs=array.map(item=>{
const ID=(function(url){
if(url){
if(url.includes("watch?v=")){
const IdElement=url.split("watch?v=");
return IdElement[IdElement.length-1];
}
if(url.includes("/shorts/")){
const IdElement=url.split("/shorts/");
return IdElement[IdElement.length-1];
}
return;
//ショート動画のURLでもそれ以外でもない場合はなし
}
})(item);
if(!ID&&!item){
alert("適合するURLがありませんでした");
return;
}
return ID;
});
return customURLs;
})(videos);
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
})();
