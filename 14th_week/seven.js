function otpGenerator (digit){
    let num = '0123456789';
    let otp = '';
    for(let i = 0; i < digit; i++){
        otp += num[Math.floor(Math.random() * 10)];
    }
    return otp;
}

console.log(otpGenerator(4))

