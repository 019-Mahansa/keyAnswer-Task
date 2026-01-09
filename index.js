/*
    Pola yang saya temukan di tugas ini pada 7 Januari 2025
    1.Sum/jumlahkan semua angka yang ada di dalam array
    2.Sum dari array kita kurangi dengan nilai tengah
    3.hasil dari yang nomor 2 kita kurangan lagi dengan angka yang terbesar sampai ke terkecil di array kita.

    contoh [4,7,2,8,6]
        sum semua: 4+7+2+8+6 = 27(masukan ke array baru)
            {array sementara : [27]}
        hasil sum - nilai tengah : 27-2 = 25(masukan ke array baru)
            {array sementara : [27,25]
        }
        urutkan array awal dari yang terbesar ke terkecil :
                        before : [4,7,2,8,6]
                        after  : [8,7,6,4,2]
        kurangi hasil sebelumnya(yaitu 25) dengan array after dari index 0 sampai terakhir !NAMUN LEWATKAN ANGKA 2 atau lebih tepatnya di index terakhir karena angka tersbut sudah kita gunakan sebagai nilai tengah
            : 25 - 8 = 17(masukan ke array baru)
            : 17 - 7 = 10(masukan ke array baru)
            : 10 - 6 = 4(masukan ke array baru)
            : 4 - 4 = 0(tidak di masukan)
        {array sementara : [27,25,17,10,4] //sesuai dengan output yang di berikan di soal!
        PENJELESAN TENTANG KENAPA 0 DI HAPUS ADA DI BAWAH KODINGAN BERIKUT
            
*/
let task1 = [2,3,8]
let task2 = [6,2,3]
let task3 = [4,7,2,8,6]
function solve(arr){
    let nilai = 0
    let lis = []


    for(let i = 0; i < arr.length ; i++){    //Mencari nilai sum dari array
        nilai += arr[i]
    }
    lis.push(nilai)

    let nilaiTengah = Math.floor(arr.length / 2)    //Mencari nilai tengah dari array
    let ke2 = nilai - arr[nilaiTengah]
    lis.push(ke2)

    let sorting = [...arr].sort((a, b) => b - a)    //Mengurutkan array dari yang terbesar ke yang terkecil
    let current = ke2

    for (let x = 0; x < sorting.length; x++) {
        if (sorting[x] === arr[nilaiTengah]) {continue}
        current -= sorting[x]
        lis.push(current)
    }

    lis.pop() //Menghapus angka 0 di belakang array
    return lis

}
console.log(solve(task1))
console.log(solve(task2))
console.log(solve(task3))


/*
    Alasan mengapa angka 0 di hapus karena  tidak sesuai dengan output yang di berikan.
    Dengan menggunakan program saya yang di atas pasti akan berakhir dengan 0(jika tanpa .pop())
    dan itu tidak sesuai dengan output yang di berikan di soal, oleh karena itu saya menghapusnya
    karena semua pertanyaan ini jawabannya benar jika menggunakan program saya yang di atas. namun hanya ada perbedaan di akhir yaitu 0
    oleh sebab itu saya menghapusnya

    DISCLAIMER: DO YOUR OWN RESEARCH! JANGAN MENGERJAKAN SOAL DENGAN COPY TERSEBUT MENTAH MENTAH INI HANYA GAMBARAN SAJA DARI POLA
                YANG SAYA TEMUKAN BISA JADI PROGRAMNYA BENAR ATAU TIDAK! KARENA SAYA SENDIRI BELUM MENYERAHKAN TUGAS INI KE GURU JADI
                ANDA TIDAK BERHAK MENYALAHKAN PROGRAM INI JIKA NILAI ANDA GAGAL!


*/
