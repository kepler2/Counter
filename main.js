const counter = document.querySelector('.counter');
const addCount = document.querySelector('#btnIncrease');
const decreaseCount = document.querySelector('#btnDecrease');
const resetCount = document.querySelector('#btnReset');


let count = 0;

addCount.addEventListener('click', countPlus);
decreaseCount.addEventListener('click', countMinus);
resetCount.addEventListener('click', resetTheCount);

function countPlus() {
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML > 0) {
        counter.style.color = 'green';
    }
    else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    }

    // Add animation
    counter.animate(
        [{ opacity: '0.2' },
        { opacity: '1.0' }
        ],
        { duration: 300, fill: "forwards" });
}

function countMinus() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML < 0) {
        counter.style.color = 'red';
    }
    else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    }

    // Add animation
    counter.animate(
        [{ opacity: '0.2' },
        { opacity: '1.0' }
        ],
        { duration: 300, fill: "forwards" });

}

function resetTheCount() {
    count = 0;
    counter.innerHTML = count;
    counter.style.color = 'white';
}
