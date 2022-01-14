var btnTranslate= document.querySelector("#btn-translate");
var textInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output")

var serverURL="https://api.funtranslations.com/translate/minion.json";
let getTranslationURL=(textInput)=>{
    return serverURL+"?"+"text="+textInput;
}

btnTranslate.addEventListener("click",function clickEventHandler(){
// outputDiv.innerHTML="fvjfm "+textInput.value;
var txtInput=textInput.value;

fetch(getTranslationURL(txtInput))
.then(response => response.json())
.then(json =>{
    var translatedText= json.contents.translated;
    outputDiv.innerText=translatedText;
    console.log(json.contents.translated)})
.catch(console.log("error occured"+ Error))
})  
