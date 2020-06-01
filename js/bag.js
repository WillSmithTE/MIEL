const BAG_EMOJI = "&#128519";

for (className of ['bag-total-price', 'bag-subtotal-price']) {
    setPriceBag(className);
}
function setPriceBag(className) {
    const elementCollection = document.getElementsByClassName(className);
    if (elementCollection.length === 0) {
        setTimeout(() => setPriceBag(className), 200);
    } else {
        for (element of elementCollection) {
            element.innerHTML = BAG_EMOJI;
        }
    }
}