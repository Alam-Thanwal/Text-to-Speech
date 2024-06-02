document.getElementById('read-button').addEventListener('click',()=>{
    const text=document.getElementById('text-input').value
    console.log(text);

    if(text.trim() !==""){
        const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
    }else{
        alert("Please Enter some text to Read")
    }
})
