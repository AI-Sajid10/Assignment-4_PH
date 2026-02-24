let applyBtn = document.getElementsByClassName('apply-btn');
let interviewBtn = document.getElementsByClassName('interview-btn');
let rejectBtn = document.getElementsByClassName('reject-btn');
let interviewCrd = document.getElementById('interview-crd');
let rejectedCrd = document.getElementById('rejected-crd');

let Icnt = 0;
let Rcnt = 0;
for (let i = 0; i < interviewBtn.length; i++) {
    applyBtn[i].dataset.status = 'not_applied';
    interviewBtn[i].addEventListener('click', function(){
        let previous = applyBtn[i].dataset.status;
        if (previous === 'rejected') Rcnt--;
        if (previous !== 'interview') Icnt++;
        applyBtn[i].dataset.status = 'interview';
        applyBtn[i].innerText = 'INTERVIEWED';
        applyBtn[i].style.backgroundColor = '#D1FAE5';
        interviewCrd.innerText = Icnt;
        rejectedCrd.innerText = Rcnt;
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