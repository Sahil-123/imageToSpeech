var btn = document.getElementById("btnSpeak");
var textField = document.getElementById("text");
var inputFile = document.getElementById("input");
var synth = window.speechSynthesis;
var voices = [];
var stop = document.getElementById("stop");
let loader = document.getElementById("loader");
let img1=document.getElementById("img");

var checkdata = "Please select image to convert";

inputFile.addEventListener("change", () => {
    if (inputFile.files[0].name == "") {
        alert("Please Select Image to Conver.....");
    } else {
        loader.style.display = "block";
        btn.disabled = true;
        stop.disabled = true;
        let render = new FileReader();
        render.readAsDataURL(inputFile.files[0]);

        render.onload = () => {
            
            Tesseract.recognize(render.result, "eng").then(({ data: { text } }) => {
                loader.style.display = "none";
                checkdata = text;
                textField.innerHTML = text;
                console.log("Ready to speak")
                btn.disabled = false;
                stop.disabled = false;
               img1.setAttribute("src",render.result);
               img1.setAttribute("class","img1");

            }).catch(error => console.log(error))
        }
    }

});

btn.addEventListener("click", () => {

    // if (!inputFile.files[0].name) {

    //     alert("please Select image File......")

    // } else {
    //     console.log(inputFile.value);

    //     let render = new FileReader();
    //     render.readAsDataURL(inputFile.files[0]);

    //     render.onload = ()=>{
    //         console.log(render)
    //         document.getElementById("img").setAttribute("src",render.result);
    //         Tesseract.recognize(render.result, "eng", {
    //             logger: (m) => console.log(m),
    //         }).then(({ data: { text } }) => {
    //             console.log(text);
    //             textField.innerHTML = text;

    //             // var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    //             var toSpeak = new SpeechSynthesisUtterance(text);
    //             var selectedVoiceName = "Microsoft Zira - English (United States)";
    //             // voices.forEach((voice) => {
    //             //     // var toSpeak = new SpeechSynthesisUtterance("Sahil");
    //             //     if (voice.name === selectedVoiceName) {
    //             //         toSpeak.voice = voice;
    //             //     }
    //             // });
    //             synth.resume()
    //            synth.speak(toSpeak);


    //         }).catch(error => console.log("Error"))

    //     }
    // }

    // var toSpeak = new SpeechSynthesisUtterance("sahil");
    // var selectedVoiceName = "Microsoft Zira - English (United States)";

    // voices.forEach((voice) => {
    //     // var toSpeak = new SpeechSynthesisUtterance("Sahil");
    //     if (voice.name === selectedVoiceName) {
    //         toSpeak.voice = voice;
    //     }
    // });
    // console.log("Speak clicked");

    // synth.speak(toSpeak);

    let text = "sahil";

    // var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    var toSpeak = new SpeechSynthesisUtterance(checkdata);
    var selectedVoiceName = "Microsoft Zira - English (United States)";
    // voices.forEach((voice) => {
    //     // var toSpeak = new SpeechSynthesisUtterance("Sahil");
    //     if (voice.name === selectedVoiceName) {
    //         toSpeak.voice = voice;
    //     }
    // });
    synth.speak(toSpeak);


});

stop.addEventListener("click", () => {
    synth.cancel();
})
