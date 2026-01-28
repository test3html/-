(function(){
const comments=document.getElementsByClassName("text");
if(!comments[0]){
alert("\u30b3\u30e1\u30f3\u30c8\u304c\u3042\u308a\u307e\u305b\u3093");
/*ブックマークレットに登録すると日本語文は文字化けする*/
/*コメントがありません*/
return;
}
alert("URL\u3092\u53d6\u5f97\u3057\u305f\u3044\u30b3\u30e1\u30f3\u30c8\u3092\u30bf\u30c3\u30d7\/\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002");
/*URLを取得したいコメントをタップ/クリックしてください。*/
Array.from(comments).forEach(c=>{
const controller=new AbortController();
const signal=controller.signal;
/*URL取得後に新規イベントリスナーを削除する*/
const tree=c.getElementsByClassName("children-box");
const makeURL=(id)=>{
const seesaa=window.location;
let domain="";
let directory="";
if(seesaa.hostname!=="seesaawiki.jp"){
/*独自ドメインの場合とseesaaの場合あり*/
domain="/"+(function(){
const links=Array.from(document.body.querySelectorAll("a"));
let hit="";
for(let i=0;i<links.length;i++){
const url=links[i].href;
if(url.includes("https://seesaawiki.jp/")&&url.includes("edit")){
hit=url;
break;
}
}
const pathes=hit.split("/")[3];
return pathes;
})();
/*独自ドメインがパスと一致しない場合があるので「編集」のURLから取得する*/
const path=seesaa.pathname.split("/");
for(let i=0;i<path.length;i++){
if(path[i]!=="d"&&path[i]!==""){
directory=path[i];
break;
}
if(path[i]===""&&path.length===2){
directory="%a5%c8%a5%c3%a5%d7%a5%da%a1%bc%a5%b8";
/*トップページのコメントを取得する場合*/
break;
}
}
}else{
const path=seesaa.pathname.split("/");
domain="/"+path[1];
for(let i=2;i<path.length;i++){
if(path[i]!=="comment"&&path[i]!=="comment_detail"&&path[i].length!==id){
const index=path[i];
if(index.includes("#comment")){
directory=index.replace("#comment","");
}else{
directory=index;
}
}
}
}
const part="https://seesaawiki.jp"+domain+"/comment_detail/"+id+"/"+directory+"#comment";
return part;
};
const copy=(txt)=>{
if(!navigator.clipboard){
alert("\u30b3\u30d4\u30da\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u306a\u3044\u30d6\u30e9\u30a6\u30b6\u3067\u3059\u3002URL\u3060\u3051\u8868\u793a\u3057\u307e\u3059\u3002");
/*コピペに対応していないブラウザです。URLだけ表示します。*/
alert(txt);
return Promise.reject();
}
navigator.clipboard.writeText(txt).then(()=>{
alert("\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f");
/*コピーしました*/
});
};
/*非同期関数*/
if(tree[0]){
const reply=tree[0].getElementsByClassName("comment-reply");
Array.from(reply).forEach(rp=>{
rp.addEventListener("click",function(e){
e.stopPropagation();
controller.abort();
rp.style.backgroundColor="#008000";
const button=e.currentTarget.querySelector("div").className;
const id=button.split("-")[3];
const URL=makeURL(id);
copy(URL);
setTimeout(()=>{
rp.style.backgroundColor="";
},250);
},{signal});
});
}
c.addEventListener("click",function(e){
controller.abort();
c.style.backgroundColor="#008000";
const id=e.currentTarget.dataset.id;
const commentid=id.replace("comment_","");
const URL=makeURL(commentid);
copy(URL);
setTimeout(()=>{
c.style.backgroundColor="";
},250);
},{signal});
});
})();
