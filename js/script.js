let satu = document.getElementById('satu');
let dua = document.getElementById('dua');
let tiga = document.getElementById('tiga');
let empat = document.getElementById('empat');
let lima = document.getElementById('lima');
let enam = document.getElementById('enam');
let tujuh = document.getElementById('tujuh');
let delapan = document.getElementById('delapan');
let sembilan = document.getElementById('sembilan');
let nol = document.getElementById('nol');
let clears = document.getElementById('allclear');
let tambah = document.getElementById('tambah');
let kurang = document.getElementById('kurang');
let kali = document.getElementById('kali');
let bagi = document.getElementById('bagi');
let persen = document.getElementById('persen');
let min = document.getElementById('min');
let titik = document.getElementById('titik');
let sama = document.getElementById('samadengan');
let jumlah = document.getElementsByClassName('jml')[0];
let clear = document.getElementById('clear');

function tmp(angka){
    jumlah = document.getElementsByClassName('jml')[0].innerHTML;
    jumlah += angka;
    document.getElementsByClassName('jml')[0].innerHTML = jumlah;
}

clears.addEventListener('click', function(){
    hapus = document.getElementsByClassName('jml')[0].innerHTML;
    hapus = '';
    document.getElementsByClassName('jml')[0].innerHTML = hapus;
    document.getElementById('rwyt').innerHTML = '';
});

clear.addEventListener('click', function(){
    hilang = document.getElementsByClassName('jml')[0].innerHTML;
    hilang = hilang.substring(0, hilang.length -1);
    document.getElementsByClassName('jml')[0].innerHTML = hilang;
})


tambah.addEventListener('click', function(){
    jumlah = document.getElementsByClassName('jml')[0].innerHTML;
    if(jumlah.substring(jumlah.length-1) == '+'){
        return;
    }else if(jumlah.substring(jumlah.length-1) == '+' || jumlah.substring(jumlah.length-1) == '-' || jumlah.substring(jumlah.length-1) == '*' || jumlah.substring(jumlah.length-1) == '/'){
        return;
    }else{
        jumlah += '+';
    }
   
    document.getElementsByClassName('jml')[0].innerHTML = jumlah;
    
});

kurang.addEventListener('click', function(){
    jumlah = document.getElementsByClassName('jml')[0].innerHTML;
    if(jumlah.substring(jumlah.length-1) == '-'){
        return;
    }else if(jumlah.substring(jumlah.length-1) == '+' || jumlah.substring(jumlah.length-1) == '-' || jumlah.substring(jumlah.length-1) == '*' || jumlah.substring(jumlah.length-1) == '/'){
        return;
    }else{
        jumlah += '-';
    }
    document.getElementsByClassName('jml')[0].innerHTML = jumlah;  
});

kali.addEventListener('click', function(){
    jumlah = document.getElementsByClassName('jml')[0].innerHTML;
    if(jumlah.substring(jumlah.length-1) == '*'){
        return;
    }else if(jumlah.substring(jumlah.length-1) == '+' || jumlah.substring(jumlah.length-1) == '-' || jumlah.substring(jumlah.length-1) == '*' || jumlah.substring(jumlah.length-1) == '/'){
        return;
    }else{
        jumlah += '*';
    }
    document.getElementsByClassName('jml')[0].innerHTML = jumlah;  
});

bagi.addEventListener('click', function(){
    jumlah = document.getElementsByClassName('jml')[0].innerHTML;
    if(jumlah.substring(jumlah.length-1) == '/'){
        return;
    }else if(jumlah.substring(jumlah.length-1) == '+' || jumlah.substring(jumlah.length-1) == '-' || jumlah.substring(jumlah.length-1) == '*' || jumlah.substring(jumlah.length-1) == '/'){
        return;
    }else{
        jumlah += '/';
    }
        
    document.getElementsByClassName('jml')[0].innerHTML = jumlah;  
});

persen.addEventListener('click', function(){
    jumlah = document.getElementsByClassName('jml')[0].innerHTML;
    jumlah += '*1/100';
    document.getElementsByClassName('jml')[0].innerHTML = eval(jumlah);
});

min.addEventListener('click', function(){
    jumlah = document.getElementsByClassName('jml')[0].innerHTML;
    if(jumlah.substring(jumlah.length-1) == '-'){
        return;
    }else{
        jumlah += '-';
    }
    document.getElementsByClassName('jml')[0].innerHTML = jumlah;  
});

titik.addEventListener('click', function(){
    jumlah = document.getElementsByClassName('jml')[0].innerHTML;
    if(jumlah.substring(jumlah.length-1) == '.'){
        return;
    }else{
        jumlah += '.';
    }
    document.getElementsByClassName('jml')[0].innerHTML = jumlah;  
});

satu.addEventListener('click', function(){
    tmp(1);
});

dua.addEventListener('click', function(){
    tmp(2);
});

tiga.addEventListener('click', function(){
    tmp(3);
});

empat.addEventListener('click', function(){
    tmp(4);
});

lima.addEventListener('click', function(){
    tmp(5);
});

enam.addEventListener('click', function(){
    tmp(6);
});

tujuh.addEventListener('click', function(){
    tmp(7);
});

delapan.addEventListener('click', function(){
    tmp(8);
});

sembilan.addEventListener('click', function(){
    tmp(9);
});

nol.addEventListener('click', function(){
    tmp(0);
});

sama.addEventListener('click', function(){
    hasil = document.getElementsByClassName('jml')[0].innerHTML;
    if(isNaN(eval(hasil)) !== false){
        return;
    }else{
        document.getElementsByClassName('jml')[0].innerHTML = eval(hasil);
        document.getElementById('rwyt').innerHTML = hasil;
    }
    
});


document.addEventListener('keydown', function(event){
    if(event.code =="Digit1"){
        tmp(1);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code =="Digit2"){
        tmp(2);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code =="Digit3"){
        tmp(3);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code =="Digit4"){
        tmp(4);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code =="Digit5"){
        tmp(5);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code =="Digit6"){
        tmp(6);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code =="Digit7"){
        tmp(7);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code =="Digit8"){
        tmp(8);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code =="Digit9"){
        tmp(9);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code =="Digit0"){
       tmp(0);
    }
})

document.addEventListener('keydown', function(event){
    if(event.code =="Backspace"){
        hilang = document.getElementsByClassName('jml')[0].innerHTML;
        hilang = hilang.substring(0, hilang.length -1);
        document.getElementsByClassName('jml')[0].innerHTML = hilang;
    }
})

document.addEventListener('keydown', function(event){
    if(event.code =="Delete"){
        hapus = document.getElementsByClassName('jml')[0].innerHTML;
        hapus = '';
        document.getElementsByClassName('jml')[0].innerHTML = hapus;
        document.getElementById('rwyt').innerHTML = '';
    }
})

document.addEventListener('keydown', function(event){
    if(event.code =="Enter"){
        hasil = document.getElementsByClassName('jml')[0].innerHTML;
        if(isNaN(eval(hasil)) !== false){
            return;
        }else{
            document.getElementsByClassName('jml')[0].innerHTML = eval(hasil);
            document.getElementById('rwyt').innerHTML = hasil;
        }
    }
})

let tbl = document.getElementById('flexSwitchCheckDefault');
tbl.addEventListener('click', function(){
    if(tbl.checked){

        for(let i=2; i<= 21; i++){
            document.getElementsByTagName('button')[i].classList.add('btnDark');
        }
        document.getElementsByClassName('dropdown-toggle')[0].style.backgroundColor = "black";
        document.getElementsByClassName('dropdown-toggle')[1].style.backgroundColor = "black";
        document.getElementsByClassName('dropdown-toggle')[0].style.color = "white";
        document.getElementsByClassName('dropdown-toggle')[1].style.color = "white";
        document.getElementById('rwyt').style.color = "grey";
        document.getElementById('main').style.backgroundColor = "black";
        document.getElementsByClassName('jml')[0].style.color = "white";
        document.getElementsByTagName('img')[0].setAttribute('src', 'img/ub.png');
        document.getElementsByTagName('button')[5].style.backgroundColor = "red";
        document.getElementsByTagName('button')[9].style.backgroundColor = "red";
        document.getElementsByTagName('button')[13].style.backgroundColor = "red";
        document.getElementsByTagName('button')[17].style.backgroundColor = "red";
        document.getElementsByTagName('button')[21].style.backgroundColor = "red";

    }else{
        for(let i=2; i<= 21; i++){
            document.getElementsByTagName('button')[i].classList.remove('btnDark');
        }
        document.getElementsByClassName('dropdown-toggle')[0].style.removeProperty('background-color');
        document.getElementsByClassName('dropdown-toggle')[1].style.removeProperty('background-color');
        document.getElementsByClassName('dropdown-toggle')[0].style.removeProperty('color');
        document.getElementsByClassName('dropdown-toggle')[1].style.removeProperty('color');
        document.getElementById('rwyt').style.removeProperty('color');
        document.getElementById('main').style.removeProperty('background-color');
        document.getElementsByClassName('jml')[0].style.color = "black";
        document.getElementsByTagName('img')[0].setAttribute('src', 'img/ua.png');

        document.getElementsByTagName('button')[5].style.removeProperty('background-color');
        document.getElementsByTagName('button')[9].style.removeProperty('background-color');
        document.getElementsByTagName('button')[13].style.removeProperty('background-color');
        document.getElementsByTagName('button')[17].style.removeProperty('background-color');
        document.getElementsByTagName('button')[21].style.removeProperty('background-color');

    }
    
});

document.getElementById('undo').addEventListener('click', function(){
    if(document.getElementById('rwyt').innerHTML !== ''){
        document.getElementsByClassName('jml')[0].innerHTML = '';
        document.getElementsByClassName('jml')[0].innerHTML = document.getElementById('rwyt').innerHTML;
    }
    document.getElementById('rwyt').innerHTML = '';
})

let small = document.getElementById('small');
let medium = document.getElementById('medium');
let large = document.getElementById('large');

small.addEventListener('click', function(){
    document.getElementById('main').style.width = '350px';
    document.getElementById('main').style.height = '500px';
    for(let i=2; i <= 21; i++ ){
        document.getElementsByTagName('button')[i].style.height = '70px';
   }
   document.getElementById('main').classList.remove('mt-xl-0');
   document.getElementById('main').classList.add('mt-xl-5', 'mt-lg-5');
   document.getElementById('btndark').classList.remove('ps-5', 'ms-5');
   document.getElementById('btnundo').classList.remove('ps-5', 'ms-2', 'ms-3');
});

medium.addEventListener('click', function(){
    document.getElementById('main').style.width = '600px';
    document.getElementById('main').style.height = '500px';
    for(let i=2; i <= 21; i++ ){
        document.getElementsByTagName('button')[i].style.height = '70px';
   }
   document.getElementById('main').classList.remove('mt-xl-0');
   document.getElementById('main').classList.add('mt-xl-5', 'mt-lg-5');
   document.getElementById('btndark').classList.add('ps-5');
   document.getElementById('btnundo').classList.add('ps-5', 'ms-2');
   document.getElementById('btndark').classList.remove('ms-5');
   document.getElementById('btnundo').classList.remove('ms-3');
});

large.addEventListener('click', function(){
    document.getElementById('main').style.width = '900px';
    document.getElementById('main').style.height = '600px';

    for(let i=2; i <= 21; i++ ){
          document.getElementsByTagName('button')[i].style.height = '90px';
    }
    document.getElementById('main').classList.remove('mt-xl-5', 'mt-lg-5');
    document.getElementById('main').classList.add('mt-xl-0');
    document.getElementById('btndark').classList.add('ps-5', 'ms-5');
    document.getElementById('btnundo').classList.add('ps-5', 'ms-3')
});

iphone = document.getElementById('iphone');
andro = document.getElementById('andro');
deft = document.getElementById('default');

andro.addEventListener('click', function(){
    
   document.getElementsByTagName('button')[5].style.backgroundColor = "#b9c0b9";
   document.getElementsByTagName('button')[9].style.backgroundColor = "#b9c0b9";
   document.getElementsByTagName('button')[13].style.backgroundColor = "#b9c0b9";
   document.getElementsByTagName('button')[17].style.backgroundColor = "#b9c0b9";
   document.getElementsByTagName('button')[21].style.backgroundColor = "#b9c0b9";
   document.getElementsByClassName('jml')[0].style.color = "white";
   document.getElementById('rwyt').style.color = 'grey';
   document.getElementsByTagName('img')[0].setAttribute('src', 'img/ub.png');

    for(let i=2; i <= 21; i++ ){
        document.getElementsByTagName('button')[i].classList.remove('btnAndro', 'btnIp');
   }
   document.getElementById('main').classList.remove('cardAndro', 'cardIp');

    for(let i=2; i <= 21; i++ ){
        document.getElementsByTagName('button')[i].classList.add('btnAndro');
   }
   document.getElementById('main').classList.add('cardAndro');
   document.getElementsByClassName('dropdown-toggle')[0].style.color = 'white';
   document.getElementsByClassName('dropdown-toggle')[1].style.color = 'white';
   let lyr = document.getElementsByClassName('lyr');
   for(a of lyr){
      a.classList.add('lyra');
   }
});

deft.addEventListener('click', function(){
    for(let i=2; i <= 21; i++ ){
        document.getElementsByTagName('button')[i].classList.remove('btnAndro', 'btnIp');
   }
   document.getElementById('main').classList.remove('cardAndro', 'cardIp');
   document.getElementsByClassName('dropdown-toggle')[0].style.removeProperty('color');
   document.getElementsByClassName('dropdown-toggle')[1].style.removeProperty('color');
   let lyr = document.getElementsByClassName('lyr');
   for(a of lyr){
      a.classList.remove('lyra');
   }

   document.getElementsByTagName('button')[5].style.removeProperty('background-color');
   document.getElementsByTagName('button')[9].style.removeProperty('background-color');
   document.getElementsByTagName('button')[13].style.removeProperty('background-color');
   document.getElementsByTagName('button')[17].style.removeProperty('background-color');
   document.getElementsByTagName('button')[21].style.removeProperty('background-color');
   document.getElementsByClassName('jml')[0].style.removeProperty('color');
   document.getElementById('rwyt').style.removeProperty('color');
   document.getElementsByTagName('img')[0].setAttribute('src', 'img/ua.png');
})

iphone.addEventListener('click', function(){
    for(let i=2; i <= 21; i++ ){
        document.getElementsByTagName('button')[i].classList.remove('btnAndro');
   }
   document.getElementById('main').classList.remove('cardAndro');
   document.getElementsByClassName('dropdown-toggle')[0].style.removeProperty('color');
   document.getElementsByClassName('dropdown-toggle')[1].style.removeProperty('color');
   let lyr = document.getElementsByClassName('lyr');
   for(a of lyr){
      a.classList.remove('lyra');
   }
    for(let i=2; i <= 21; i++ ){
        document.getElementsByTagName('button')[i].classList.add('btnIp');
   }
   document.getElementById('main').classList.add('cardIp');
   document.getElementsByClassName('dropdown-toggle')[0].style.color = 'white';
   document.getElementsByClassName('dropdown-toggle')[1].style.color = 'white';
   document.getElementsByTagName('button')[5].style.backgroundColor = "rgb(250, 135, 4)";
   document.getElementsByTagName('button')[9].style.backgroundColor = "rgb(250, 135, 4)";
   document.getElementsByTagName('button')[13].style.backgroundColor = "rgb(250, 135, 4)";
   document.getElementsByTagName('button')[17].style.backgroundColor = "rgb(250, 135, 4)";
   document.getElementsByTagName('button')[21].style.backgroundColor = "rgb(250, 135, 4)";
   document.getElementsByClassName('jml')[0].style.color = "white";
   document.getElementById('rwyt').style.color = "grey";
   document.getElementsByTagName('img')[0].setAttribute('src', 'img/ub.png');
})































