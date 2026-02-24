let applyBtn = document.getElementsByClassName('apply-btn');
let interviewBtn = document.getElementsByClassName('interview-btn');
let rejectBtn = document.getElementsByClassName('reject-btn');
let jobCard = document.getElementsByClassName('job-card');
let interviewCrd = document.getElementById('interview-crd');
let rejectedCrd = document.getElementById('rejected-crd');
let filterAll = document.getElementById('filter-all');
let filterInterview = document.getElementById('filter-interview');
let filterRejected = document.getElementById('filter-rejected');

let Icnt = 0;
let Rcnt = 0;

for (let i = 0; i < applyBtn.length; i++){
    applyBtn[i].dataset.status = 'not_applied';
}
for (let i = 0; i < interviewBtn.length; i++) {
    interviewBtn[i].addEventListener('click', function(){
        let previous = applyBtn[i].dataset.status;
        if(previous === 'rejected') Rcnt--;
        if(previous !== 'interview') Icnt++;
        applyBtn[i].dataset.status = 'interview';
        applyBtn[i].innerText = 'INTERVIEWED';
        applyBtn[i].style.backgroundColor = '#D1FAE5';
        interviewCrd.innerText = Icnt;
        rejectedCrd.innerText = Rcnt;
        updateNoJobsDisplay();
    });
    rejectBtn[i].addEventListener('click', function(){
        let previous = applyBtn[i].dataset.status;
        if (previous === 'interview') Icnt--;
        if (previous !== 'rejected') Rcnt++;
        applyBtn[i].dataset.status = 'rejected';
        applyBtn[i].innerText = 'REJECTED';
        applyBtn[i].style.backgroundColor = '#FECACA';
        interviewCrd.innerText = Icnt;
        rejectedCrd.innerText = Rcnt;
    });
}

function showAll(){
    for(let card of jobCard){
        card.style.display = 'block';
    }
}
function showInterview(){
    for(let i = 0; i < jobCard.length; i++) {
        if(applyBtn[i].dataset.status === 'interview'){
            jobCard[i].style.display = 'block';
        }else{
            jobCard[i].style.display = 'none';
        }
    }
}
function showRejected(){
    for (let i = 0; i < jobCard.length; i++){
        if(applyBtn[i].dataset.status === 'rejected'){
            jobCard[i].style.display = 'block';
        }else{
            jobCard[i].style.display = 'none';
        }
    }
}
filterAll.addEventListener('click', showAll);
filterInterview.addEventListener('click', showInterview);
filterRejected.addEventListener('click', showRejected);

let mainSecond = document.querySelector('.main-second'); 
function updateNoJobsDisplay(){
    let anyVisible = false;
    for(let card of jobCard){
        if(card.style.display !== 'none'){
            anyVisible = true;
            break;
        }
    }
    if(anyVisible){
        mainSecond.style.display = 'none';
    }else{
        mainSecond.style.display = 'flex';
    }
}
function showAll(){
    for(let card of jobCard) card.style.display = 'block';
    updateNoJobsDisplay();
}
function showInterview(){
    for(let i = 0; i < jobCard.length; i++){
        jobCard[i].style.display = applyBtn[i].dataset.status === 'interview'?'block' : 'none';
    }
    updateNoJobsDisplay();
}
function showRejected(){
    for(let i = 0; i < jobCard.length; i++){
        jobCard[i].style.display = applyBtn[i].dataset.status === 'rejected' ? 'block' : 'none';
    }
    updateNoJobsDisplay();
}