let number = parseInt(prompt('nhap so can check'))
IsPrime(number);

function IsPrime(number) {
    let count = 0;
    let IsPrime = false;
    if(number === 0) {
        alert(number + 'khong phai so nguyen to ')
    } else {
        for(let x = 1 ; x <= number; x++) {
            if(number % x === 0){
                count++;
            }
        }
        if(count===2){
            IsPrime = true;
        }
        if(IsPrime){
            alert(number + 'la so nguyen to ')
        } else {
            alert(number +"&"+ 'khong phai so nguyen to ')
        }
    }
}