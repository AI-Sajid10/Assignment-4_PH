
let container = document.createElement('div');
container.className = "space-y-6";
document.querySelector('main main').appendChild(container);

let interviewList = JSON.parse(localStorage.getItem('interviewList')) || [];

interviewList.forEach(cardHTML => {
    let div = document.createElement('div');
    div.innerHTML = cardHTML;
    container.appendChild(div.firstElementChild);
});