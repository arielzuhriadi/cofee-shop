// Data nama dan komentar yang ingin ditampilkan
const dataKomentar = [
    {
        nama: "Suryadi Tjia",
        komentar: "Dari luar coffee shop tampak biasa saja, di dalam renovasinya juga tampak seadanya, bukan tipikal coffee shop yang dibuat dengan mewah, tetapi menurut saya lumayan cakep, dan suasanannya juga sangat tenang. Cocok untuk kerja maupun santai membaca buku. Flat whitenya cukup oke, dan harganya lumayan affordable. Definitely will come back here again.",
        bintang : "⭐⭐⭐⭐⭐"
    },
    {
        nama: "Esa Gultom",
        komentar: "Tmpt nyaman, suasana oke, minuman yg disajikan jg mantap. Red Velvet nya oke punya.Cm mmg bagi saya kurang klop klw cafe cm menyediakan minuman aja. Setidaknya ada cemilan kue yg tersedia setiap hari. Dan ada menu utk tamu. Selebihnya udah bagus",
         bintang : "⭐⭐⭐⭐⭐"
    },
    {
        nama: "Alya Sabina",
        komentar: "Suka tempat yang nyaman ini, saya dan pasangan menghabiskan waktu sekitar 7 jam untuk mengerjakan tugas kami di sini hahaha maaf XD. Wifinya agak cepat, minumannya terjangkau tapi enak lho!  fyi kita bisa membawa makanan dari luar..",
         bintang : "⭐⭐⭐⭐⭐"
    },
    {
        nama: "Hasiholan Sianipar",
        komentar: "Cocok juga utk tempat nongkrong krn terletak di pusat kota, namun tempat parkir terbatas.",
         bintang : "⭐⭐⭐⭐⭐"
    },
    {
        nama : "Billi Ajowa",
        komentar : "Tempat nya keren bgt, sejuk di dalam , perdana kesini lgs jatuh cinta sama tempat dan pelayanan nya. Owner ny jg baik bgt. Recomended bgt sih ini.😍",
         bintang : "⭐⭐⭐⭐⭐"
    },
    {
        nama : "bella gultom",
        komentar : "all the menu, food n drink semuanyaa enakkk🤩🤩🤩💖💖 …",
         bintang : "⭐⭐⭐⭐⭐"
    },
    {
        nama : "Mochizuki Touya",
        komentar : "Amazing coffee shop and cafe recommended Bisa untuk segala acara semua kalangan.keep rise it.",
         bintang : "⭐⭐⭐⭐⭐"
    }
];

// Ambil semua elemen nama dan komentar berdasarkan class
const namaElems = document.querySelectorAll('#namaKomen');
const komentarElems = document.querySelectorAll('#komentar');
const star = document.querySelectorAll('#star');

// Loop untuk mengisi data ke elemen
dataKomentar.forEach((data, index) => {
    if (namaElems[index]) namaElems[index].textContent = data.nama;
    if (komentarElems[index]) komentarElems[index].textContent = data.komentar;
    if (star[index]) star[index].textContent = data.bintang;
});
