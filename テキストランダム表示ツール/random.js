const fileInput=document.getElementById("fileInput");
const fileContent=document.getElementById("fileContent");
fileInput.addEventListener('change',(e)=>{
const file=e.target.files[0];
const reader=new FileReader();
reader.onload=()=>{
const getline=(function(text){
return text.split('\n');
/*全て配列化されるのでループ処理必要なし*/
})(reader.result);
const randomcustom=(function(origin){
let randomized_text="";
randomized_array=[];
randomized_array.push(Math.floor(Math.random()*origin.length));
/*行指定*/
for(let i=1;i<origin.length;i++){
let presentRine=Math.floor(Math.random()*origin.length);
while(randomized_array.includes(presentRine)==true){
presentRine=Math.floor(Math.random()*origin.length);
}
/*被ったら引き直し*/
randomized_array[i]=presentRine;
}
for(let j=0;j<origin.length;j++){
randomized_text+=origin[randomized_array[j]]+"\n";
}
/*元データの行数を乱数指定*/
return randomized_text.trim();
})(getline);
fileContent.textContent=randomcustom;
};
reader.readAsText(file);
});
