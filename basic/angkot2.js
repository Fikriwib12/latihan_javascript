let jmlAngkot = 10
let noAngkot = 1
let AngkotBeroperasi = 6

while (noAngkot <= AngkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + " beroperasi dengan baik." )
    noAngkot++
}



for (noAngkot = AngkotBeroperasi + 1 ; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + " tidak beroperasi dengan." )
    
}