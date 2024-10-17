let num = prompt('enter a number');

let str = num.toString();

let ketqua = [str[0]];

for(let x = 1 ; x < str.length; x++) {
    if(str[x-1] % 2 === 0 && str[x] % 2 === 0) {
        ketqua.push('-',str[x]);
    }else{
        ketqua.push(str[x]);
    }
}

document.write(ketqua.join(''));
