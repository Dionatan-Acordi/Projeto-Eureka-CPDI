const hourHtml = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const hourFooter = document.querySelector('.hourFooter');
const minFooter = document.querySelector('.minFooter');
const secFooter = document.querySelector('.secFooter');

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hourHtml.innerHTML = `${formatTime(hour)}`;
    min.innerHTML = `${formatTime(minutes)}`;
    sec.innerHTML = `${formatTime(seconds)}`;


    hourFooter.innerHTML = `${formatTime(hour)}`;
    minFooter.innerHTML = `${formatTime(minutes)}`;
    secFooter.innerHTML = `${formatTime(seconds)}`;


}, 1000);

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}



const bodycolor = document.querySelector('body');
const htmlcolor = document.querySelector('html');
const description = document.querySelector('.description');
const li = document.querySelector('li');
const footer = document.querySelector('footer');

const trilho = document.getElementById('trilho');

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    bodycolor.classList.toggle('dark')
    description.style.color = bodycolor.classList.contains('dark')? 'black' : 'white';
    li.style.color = bodycolor.classList.contains('dark')? 'black' : 'white';
    footer.style.color = bodycolor.classList.contains('dark')? 'black' : 'white';
})
