function resetText() {
    document.getElementById("txt-number").value = "";
}

var inputArr = [56, 57, 1, 0, -5, -7];

function submit() {
    var input = document.getElementById("txt-number").value * 1;
    resetText();
    inputArr.push(input);
    tongSoDuong();
    timMin();
    timMinDuong();
    timChanCuoi();
    sapXepTangDan();
    var soNguyenToDau = timSoNguyenToDau(inputArr);
    console.log(soNguyenToDau);
    document.getElementById("result7").innerHTML = `<h3>Số nguyên tố đầu: ${soNguyenToDau}</h3>`;
}

function tongSoDuong() {
    var tongDuong = 0;
    var tongSoDuong = 0;
    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] > 0)
            tongSoDuong++;
        tongDuong += inputArr[i];
    }
    var content = `
    <h3>Tổng các số dương là: ${tongDuong}</h3>
    <h3>Tổng số dương là: ${tongSoDuong}</h3>`
    document.getElementById("result").innerHTML = content;
}

function timMin() {
    var min = inputArr[0];
    for (var i = 1; i < inputArr.length; i++) {
        if (min > inputArr[i])
            min = inputArr[i];
    }
    var content = `
    <h3>Số nhỏ nhất trong mảng: ${min}</h3>`
    document.getElementById("result1").innerHTML = content;
}

function timMinDuong() {
    var mangDuong = [];
    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] > 0) {
            mangDuong.push(inputArr[i])
        }
    }
    if (mangDuong.length === 0) {
        var content = `<h3>Mảng không có số dương</h3>`
        document.getElementById("result2").innerHTML = content;
    } else {
        var minDuong = mangDuong[0];
        for (var j = 1; j < mangDuong.length; j++) {
            if (minDuong > mangDuong[j])
                minDuong = mangDuong[j];
        }
        var content = `<h3>Số dương nhỏ nhất là: ${minDuong}</h3>`
        document.getElementById("result2").innerHTML = content;
    }
}

function timChanCuoi() {
    var mangChan = [];
    var chanCuoi = -1;
    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] % 2 == 0) {
            mangChan.push(inputArr[i]);
        }
    }
    if (mangChan.length === 0) {
        document.getElementById("result3").innerHTML = `<h3>Chẵn cuối: ${chanCuoi}</h3>`;

    } else {
        chanCuoi = mangChan[mangChan.length - 1];
        document.getElementById("result3").innerHTML = `<h3>Chẵn cuối: ${chanCuoi}</h3>`;
    }
}

document.getElementById("result4").innerHTML = `<h3>Mảng: ${inputArr}</h3>`;
function swap() {
    var swap__1 = document.getElementById("swap-1").value * 1 - 1;
    var swap__2 = document.getElementById("swap-2").value * 1 - 1;
    var tam = inputArr[swap__1];
    inputArr[swap__1] = inputArr[swap__2];
    inputArr[swap__2] = tam;
    resetText();
    var content = `<h3>Mảng sau khi đổi: ${inputArr}</h3>`
    document.getElementById("result5").innerHTML = content;
}

function sapXepTangDan() {
    for (var i = 0; i < inputArr.length; i++) {
        for (var j = i + 1; j < inputArr.length; j++) {
            if (inputArr[i] > inputArr[j]) {
                var tam = inputArr[i];
                inputArr[i] = inputArr[j];
                inputArr[j] = tam;
            }
        }
    }
    document.getElementById("result6").innerHTML = `<h3>Sắp xếp tăng dần: ${inputArr}</h3>`;
}


function timSoNguyenToDau(array) {
    function timSoNguyenTo(number) {
        if (number <= 1) {
            return false;
        }
        for (var i = 2; i < Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (var i = 0; i < array.length; i++) {
        if (timSoNguyenTo(array[i])) {
            return array[i];
        }
    }
    return -1;
}

var floatArr = [3.123, 4.125, 5.85, 3, 4, -1, -2];
function access() {
    var inputFloat = document.getElementById("txt-float").value * 1;
    resetText();
    floatArr.push(inputFloat);
    demSoNguyen();
    soSanhAmDuong();
}

function demSoNguyen() {
    var soNguyen = 0;
    for (var i = 0; i < floatArr.length; i++) {
        if (Number.isInteger(floatArr[i])) {
            soNguyen++;
        }
    }
    document.getElementById("result8").innerHTML = `<h3>Tổng số nguyên: ${soNguyen}</h3>`;
}

function soSanhAmDuong() {
    amArr = [];
    duongArr = [];
    for (var i = 0; i < floatArr.length; i++) {
        if (floatArr[i] < 0)
            amArr.push(floatArr[i]);
        else
            duongArr.push(floatArr[i]);
    }
    if (amArr.length > duongArr.length) {
        document.getElementById("result9").innerHTML = `<h3>Số lượng âm nhiều hơn dương</h3>`;
    } else if (amArr.length == duongArr.length) {
        document.getElementById("result9").innerHTML = `<h3>Số lượng âm bằng dương</h3>`;
    } else {
        document.getElementById("result9").innerHTML = `<h3>Số lượng âm ít hơn dương</h3>`;
    }
}
