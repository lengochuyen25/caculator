let a=document.getElementById('num1');
let b=document.getElementById('num2');
function addtion() {
    let add=parseInt(a.value)+parseInt(b.value);
    document.getElementById("result").innerHTML= "Kết quả cộng là: "+add;
}
function subtraction() {
    let sub=parseInt(a.value)-parseInt(b.value);
    document.getElementById("result").innerHTML="Kết quả trừ là: "+sub;
}
function multiplication() {
    let sub=parseInt(a.value)*parseInt(b.value);
    document.getElementById("result").innerHTML="Kết quả nhân là: "+sub;
}
function division() {
    if (parseInt(b.value) !== 0) {
        let div = parseInt(a.value) / parseInt(b.value);
        document.getElementById("result").innerHTML = "Kết quả chia là: " + div;
    }
    else {
        document.getElementById("result").innerHTML = "Error:Bạn phải nhập số bị chia khác 0 ";
    }

}