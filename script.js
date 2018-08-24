function jump() {
    //console.log(window.pageYOffset);
    if (window.pageYOffset > 1100 && window.pageYOffset < 1500) {
        console.log("1100px!");
    }
    //window.scrollBy(0, 100);
}
const modal = document.getElementById('modal');
const button = document.getElementById('close');

console.log(modal);

var closeModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

var openModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}