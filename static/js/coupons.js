let select = document.getElementById("id_medicines");
let selectedOptions;
let totalPrice = 0;
let priceTag = document.getElementById("total-price")
let payPercent = 1.0;

select.addEventListener('change', function() {
    // Этот код выполнится при изменении выбора в селекторе
    selectedOptions = Array.from(select.selectedOptions).map(option => option.value);
    calcPrice();
});

function calcPrice() {
    totalPrice = 0;
    if (selectedOptions) {
        selectedOptions.forEach(element => {
            totalPrice += getPrice(element);
        });
    }
    totalPrice *= payPercent;
    console.log(totalPrice);
    priceTag.innerHTML = totalPrice.toString();
}

function getPrice(id) {
    switch(id) {
        case '1':
            console.log('1 choosen');
            return 3;
        case '2':
            console.log('2 choosen');
            return 4;
        case '3':
            console.log('3 choosen');
            return 10;
        default:
            console.log('not found')
    }
}

function validateCoupon() {
    let couponInput = document.getElementById('couponCode');
    let couponCode = couponInput.value;

    let discount = checkCoupon(couponCode);
    payPercent = 1 - discount;
    if (discount != 0) {
        alert('Coupon was applied! Your discount is ' + discount * 100 + '%');
    }
    else {
        alert('Coupon doesn\'t exist');
    }
    calcPrice();
}

function checkCoupon(coupon) {
    switch(coupon) {
        case '5565':
            return 0.1;
        case '7788':
            return 0.2;
        default:
            return 0;
    }
}