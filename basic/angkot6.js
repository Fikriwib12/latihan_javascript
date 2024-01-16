let jmlAngkot = 10
let noAngkot = 1
let AngkotBeroperasi = 6

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= AngkotBeroperasi && noAngkot !== 5 ) {
        console.log('Angkot No. ' + noAngkot + " Beroporesai dengan baik")
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5 ){
        console.log('Angkot No. ' + noAngkot + " Sedang lembur" )
    } else {
        console.log('Angkot No ' + noAngkot + " sedang tidak beroperasi")
    }
    
}