let x = '';
let array = Array();

function add_Element_to_array() {
    array[x] = document.getElementById('arrvl').value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById('arrvl').value = '';
}

function Display_array() {
    let e = "<hr/>";
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}