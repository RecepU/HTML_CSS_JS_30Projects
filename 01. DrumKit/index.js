document.addEventListener('keydown',(e)=>{

    const keyLetter = e.key.toLowerCase();//which letter you push
    const sound = document.querySelector('.'+keyLetter).innerText.substring(1);//which sound you push(it is finding from innerText and clean other text)
    const audio = new Audio('sounds/'+sound.toLowerCase().trim()+'.mp3');//find the correct audio dynamically

    document.querySelector('.'+keyLetter).classList.add('playing');//add some gift the button which you click
    setTimeout(()=>{document.querySelector('.playing').classList.remove('playing')},150);//remove this gift after a time
    audio.play();//play audio

})

