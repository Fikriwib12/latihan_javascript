function getPilihanComputer(){
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
        return 'semut';
    
}


function getHasil(comp, player){
    
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
    

}

function putar(){
    const imgComputer = document.querySelector('.img-komputer')
    const gambar = ['gajah', 'semut', 'orang']
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval
            return
            
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if (i == gambar.length) i = 0
    }, 100)
}

const pilihan = document.querySelectorAll('li img')

let scorePlayer = 0
let scoreComp = 0

pilihan.forEach(function(i){
    i.addEventListener('click',function(){
    const pilihanComputer = getPilihanComputer()
    const pilihanPlayer = i.className
    const hasil = getHasil(pilihanComputer, pilihanPlayer)

    
    
    putar()
    
        setTimeout(function(){

            if(hasil == 'MENANG!') scorePlayer++
            
            else if (hasil == 'KALAH!') scoreComp++

            const scoreP = document.querySelector('.score-player')
            scoreP.innerHTML = 'Score Player : ' + scorePlayer

            const scoreC = document.querySelector('.score-comp')
            scoreC.innerHTML = 'Score Computer : ' + scoreComp

            const imgComputer = document.querySelector('.img-komputer')
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
        
            const info = document.querySelector('.info')
            info.innerHTML = hasil
        },1000)
    
    })
})



