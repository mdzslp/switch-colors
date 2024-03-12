
document.addEventListener('DOMContentLoaded', function() {
    const colorOne = document.querySelector('.color_one');
    const colorTwo = document.querySelector('.color_two');
    let isColorOneActive = true;

    function switchColors() {
        if (isColorOneActive) {
            colorOne.style.backgroundColor = 'red';
            colorTwo.style.backgroundColor = 'black';
        } else {
            colorOne.style.backgroundColor = 'black';
            colorTwo.style.backgroundColor = 'green';
        }
        isColorOneActive = !isColorOneActive;
    }

    const button = document.querySelector('.clickPlus');
    button.addEventListener('click', switchColors);
})