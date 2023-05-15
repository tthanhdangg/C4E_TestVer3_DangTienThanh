function soNguyenTo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function tinhTong() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("ketQua").innerHTML = "Lỗi: a và b phải là số nguyên";
    } else if (a >= b) {
        document.getElementById("ketQua").innerHTML = "Lỗi: a phải nhỏ hơn b";
    } else {
        let sum = 0;
        for (let i = a + 1; i < b; i++) {
            if (soNguyenTo(i)) {
                sum += i;
            }
        }
        document.getElementById("ketQua").innerHTML = "Tổng của tất cả các số nguyên tố giữa " + a + " và " + b + " (không bao gồm " + a + " và " + b + ") là: " + sum;
    }
}