let p = prompt("pilih gajah, semut atau orang")

let com = Math.random()

if(com < 0.34) {
    com = "gajah"
} else if (com >= 0.34 && com < 0.67){
    com = 'orang'
} else{
    com = "semut"
}

let hasil = ""


if(p == com){
    hasil = "Wah hasilnya seri"
} else if (p == 'gajah'){
    hasil = (com == 'orang' ? 'Wah Kamu Menang' : 'Yah Kamu Kalah 😢')
} else if ( p == 'orang') {
    hasil = (com == 'semut' ? 'Wah Kamu Menang' : 'Yah Kamu Kalah 😢')
} else if (p == 'semut') {
    hasil = (com == 'gajah' ? 'Wah Kamu Menang' : 'Yah Kamu Kalah 😢')
} else {
    hasil = "Kamu tidak memasukan pilihan yang benar"
}

alert("computer memilih " + com + " dan Kamu memilih " + p + " :" + hasil)