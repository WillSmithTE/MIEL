const CHECKOUT_EMOJI = "&#128519";

for (className of ['total', 'sub-total']) {
    setPriceCheckout(className);
}

function setPriceCheckout(className) {
    const element = document.getElementsByClassName(className)[0];
    if (element === undefined || element.children[1] === undefined) {
        setTimeout(() => setPriceCheckout(className), 200);
    } else {
        element.children[1].innerHTML = CHECKOUT_EMOJI;
    }
}