function suma() {

    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;

    a = +a;
    b = parseInt(b);

    console.log(a, b, typeof a, typeof b);
    document.getElementById("sum1").innerHTML= a + b;
    alert("Сума = " + (a + b))
}