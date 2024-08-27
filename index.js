const collection = document.querySelectorAll('.currencySelector');
for (let i = 0; i < collection.length; i++) {
    collection[i].onclick = function () {
        alert(collection[i].classList.contains('selectedLeft'))
        // const prev = document.querySelector('')
        // collection[i].classList.add('')
    }
};
