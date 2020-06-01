const DROPDOWN_EMOJI = "&#128519";

setPriceDropdown();
function setPriceDropdown() {
    const element = document.querySelector("div[data-test-id='miniBagSubTotal']");
    if (element === undefined || element === null) {
        setTimeout(setPriceDropdown, 200);
    } else {
        element.innerHTML = DROPDOWN_EMOJI;
    }
}