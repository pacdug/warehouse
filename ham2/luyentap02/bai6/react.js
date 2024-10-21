function Exam() {
    let a = parseInt(document.getElementById('a').value);
    let mess = '';

    if(a === 0){
        mess = 'a bang 0 !';
    } else if (a > 0){
        mess = 'a la so nguyen duong';
    } else if (a < 0) {
        mess = 'a la so nguyen am';
    }
    document.getElementById('result').innerHTML = `${mess}`;
}