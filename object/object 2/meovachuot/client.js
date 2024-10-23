function runSimulation(event){
    event.preventDefault();

    const ratName = document.getElementById('nr').value;
    const ratWeight = parseInt(document.getElementById('wr').value);
    const ratSpeed = parseInt(document.getElementById('sr').value);

    const catName = document.getElementById('nc').value;
    const catWeight = parseInt(document.getElementById('wc').value);
    const catSpeed = parseInt(document.getElementById('sc').value);

    const cat = new Cat(catName, catWeight, catSpeed);
    const rat = new Rat(ratName, ratWeight, ratSpeed);

    let result = `${cat.meoMeo()} ${rat.chitChit()}<br>`;

    const catchResult = cat.catchRat(rat);
    result += catchResult + "<br>";

    if (catchResult.includes("bắt được")) {
        result += cat.eatRat(rat) + "<br>";
    }
    document.getElementById("result").innerHTML = result;
}