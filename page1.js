// javascript code to make the left side bar static after sometime 
const main = document.querySelector('.main');
const left = document.querySelector('.left_navbar');

window.addEventListener('scroll', () => {
    const mainHeight = main.offsetHeight;
    const leftHeight = left.offsetHeight;
    const scrollPosition = window.pageYOffset + window.innerHeight;
    console.log(scrollPosition - leftHeight)
    if(scrollPosition<leftHeight){
        left.style.top='0px';
        left.style.position='static';
    }
    else if (scrollPosition >= leftHeight && scrollPosition < mainHeight) {
        console.log("hi")
        left.style.position = 'relative';
        left.style.top = (scrollPosition - leftHeight -100) +'px';
}
});