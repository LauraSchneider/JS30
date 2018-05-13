const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastTicked;

function selected(e) {

    let inBetween = false;

    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastTicked) {
                inBetween = !inBetween;
                console.log("inbetweens");
            }
            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastTicked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', selected));
