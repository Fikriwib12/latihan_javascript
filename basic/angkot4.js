let jmlAngkot = 10
let noAngkot = 1
let AngkotBeroperasi = 6

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= AngkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + " Berporesai dengan baik")
    } else if (noAngkot === 8 || noAngkot === 10){
        console.log('Angkot No. ' + noAngkot + " Sedang lembur" )
    } else {
        console.log('Anfgkot No ' + noAngkot + " sedang tidak beroperasi")
    }
    
}