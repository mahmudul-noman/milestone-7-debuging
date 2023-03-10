const showAlert = () => {
    alert('Hi.... How Are You ?');
}

const loanMoney = () => {
    const result = confirm('Can You Give Me A Loan_?');
    console.log(result);
}

const getInfo = () => {
    const info = prompt('Say Your Name__!');
    // console.log(info);
    if(info === null) {
        alert('Write your name');
    }
    else {
        console.log('Welcome Here', info);
    }
}