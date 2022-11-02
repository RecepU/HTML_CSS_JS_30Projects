const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e){
    //Check if shift key down
    //Check if it is checked
    let inBetween = false;
    if(e.shiftKey && this.checked){
        //do whatever you need
        //loop over each
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true;
            }
        }) 
    }
    lastChecked = this
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck))
