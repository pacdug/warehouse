let a = prompt('nhap so thu nhat ');
let b = prompt('nhap so thu hai');
let c= '';

function sosanh(a,b){
    if(a>b){
        c=`${a} lon hon ${b}`;
    }else if(a<=b){
        c = a + b;
    }
}
document.write(sosanh(c));