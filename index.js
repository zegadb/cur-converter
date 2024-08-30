// CURRENCY SELECTORS
const collection = document.querySelectorAll('.currencySelector');

// SELECTORS ANIMATION
function selectorAnimation (i) {
    setTimeout(function () {
        collection[i].style.opacity = "100%";
    }, 1000+i*100);
}
for (let i = 0; i < collection.length; i++) {
    selectorAnimation(i);
}

setTimeout(() => {
    document.querySelector('#header').style.width = '660px';
}, 1500);
const welcomeMsg = document.querySelector('#welcomeMsgHeader');
const welcomeMsgSmall = document.querySelector('#welcomeMsgHeaderSmall');
// HEADER ANIMATION
setTimeout(() => {
    welcomeMsg.style.opacity = '100%';   
}, 1000);
setTimeout(() => {
    welcomeMsgSmall.style.opacity = '100%';
    welcomeMsgSmall.style.transform = 'translate(0, 0)';
}, 2400);

const welcomeMsgText = 'Currency Converter';
for (let i = 0; i < welcomeMsgText.length; i++) {
    setTimeout(() => {
        welcomeMsg.innerHTML += welcomeMsgText[i];
        if (i == (welcomeMsgText.length - 1)) {
            welcomeMsg.innerHTML += '&nbsp';
        }
    }, 1000+i*100);
}


for (let i = 0; i < collection.length; i++) {
    collection[i].onclick = function () {
        if(collection[i].classList.contains('left')) {
            if (!collection[i].classList.contains('selected')) {
                sessionStorage.setItem('currencySelectedLeft', collection[i].classList.id);
                document.querySelector('.left.selected').classList.remove('selected');
                collection[i].classList.add('selected');
            }
        }
        if(collection[i].classList.contains('right')) {
            if (!collection[i].classList.contains('selected')) {
                document.querySelector('.right.selected').classList.remove('selected');                collection[i].classList.add('selected');
            }
        }
    }
};
