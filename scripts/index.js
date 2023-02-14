const worksList = document.querySelector('.works__list');
const butoonNext = document.querySelector('.works__button_type_next');
const butoonPrev = document.querySelector('.works__button_type_prev');

let offset = 0;

const handleButtonNextClick = () => {
    offset += 520;
    if (offset > 1040) {
        offset = 0;
    };
    worksList.style.left = `${-offset}px`;
}

const handleButtonPrevClick = () => {
    offset -= 520;
    if (offset < 0) {
        offset = 1040;
    };
    worksList.style.left = `${-offset}px`;
}

butoonNext.addEventListener('click', handleButtonNextClick)
butoonPrev.addEventListener('click', handleButtonPrevClick)