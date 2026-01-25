const parent=document.forms.calcForm;
const baseButton=document.getElementById("submit");
baseButton.addEventListener("click",function(event){
event.preventDefault();
const inputNumber=parent.ten.value;
const result=(function(number){
let devide=Math.floor(number/16);
/*16進法の計算で商を出し、16進数化*/
const AtoF=(origin)=>{
const sixt=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
return sixt[origin];
};
let convert=[];
convert[0]=AtoF(number%16);
for(let i=1;devide!==0;i++){
convert[i]=AtoF(devide%16);
devide=Math.floor(devide/16);
}/*計算を開始し、余りを配列に格納。商をどんどん小さくする*/
const calculateResult=convert.reverse().join("");/*要素を結合させる*/
return calculateResult;/*16進数を返す*/
})(inputNumber);
(function(sixteen){
document.getElementById("result").textContent=sixteen;/*16進数を文字で出力*/
})(result);
});
const anotherButton=document.getElementById("other");
anotherButton.addEventListener("click",function(e){
e.preventDefault();
(function(){
const inputNumber=parent.another.value;
const N=parent.status.value;
document.getElementById("another").textContent=parseInt(inputNumber,N);
})();
});
