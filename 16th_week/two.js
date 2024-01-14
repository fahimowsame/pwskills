function generateRandomNumber() {
    return Math.floor(Math.random() *20);
}


function generateNumberDelay (delay){
    console.log(`generate random number after deleay ${delay} sec`);
    let countdowninsec = 3;
    const countdown = setInterval(() => {
        console.log(`${countdowninsec} sec remainig `);
        countdowninsec--

        if(countdowninsec === 0){
            clearInterval(countdown);
            let randomNumber = generateRandomNumber();
            console.log(`Random Number : ${randomNumber}`);
        }
    }, 1000);
}

generateNumberDelay(3);