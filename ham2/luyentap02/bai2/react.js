function Around() {
    let r = parseInt(document.getElementById("r").value);

    let Cv = 2 * 3.14 * r;
    let Dt =(Cv * Cv)/(3.24*4);

    document.getElementById("result").innerText = `Chu vi : ${Cv}; dien tich : ${Dt}` ;
}