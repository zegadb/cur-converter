const collection = document.querySelectorAll('.currencySelector');
let curLeft;
let curRight;

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
