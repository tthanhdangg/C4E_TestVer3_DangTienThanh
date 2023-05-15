function numberOneTriangle() {
    let n = parseInt(document.getElementById("n").value);
    if (n < 1 || n > 10) {
        document.getElementById("ketQua").innerHTML = "Lỗi: Phải nhập số nguyên từ 1 đến 10";
    } else {
        let ketQua = "";
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                ketQua += "* ";
            }
            ketQua += "\n";
        }
        document.getElementById("ketQua").innerHTML = ketQua;
    }
}