const pianoKeys = document.querySelectorAll(".piano-keys .key");
        const volumeslider = document.querySelector(".volume-slider input");
        const keysCheckbox = document.querySelector(".keys-checkbox input");


        let audio = new Audio ("a.mp3");//by default, audio src is "a tune"

        const playTune = (key) => {
            audio.src =`${key}.mp3`;//passing audio src based on key pressed
            audio.play(); //playing audio
        }

        pianoKeys.forEach(key => {
            //calling playTune function with passing data-key value as an argument
        key.addEventListener("click",() => playTune(key.dataset.key));
        });
        const handleVolume = (e) =>{
            audio.volume= e.target.value;//passing the range slider value as an audio volume
        }
        const showHideKeys = () =>{
            //toggling hide class from each key on the checkbox click
            pianoKeys.forEach(key=> key.classList.toggle("hide"));
        }
           volumeslider.addEventListener("input",handleVolume);
           keysCheckbox.addEventListener("click", showHideKeys);