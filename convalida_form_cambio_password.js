function Convalida_Cambio_Password(frm)
{

//PRIMO CONTROLLO - TUTTI I CAMPI DEVONO ESSERE RIEMPITI !!
var i = 0;

if ((frm.psw_actual.value == "") || (frm.psw_actual.value == undefined)) {
frm.psw_actual.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.psw_actual.style.backgroundColor='#FFFFFF';
}

if ((frm.psw_new.value == "") || (frm.psw_new.value == undefined)) {
frm.psw_new.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.psw_new.style.backgroundColor='#FFFFFF';
}

if ((frm.psw_new_2.value == "") || (frm.psw_new_2.value == undefined)) {
frm.psw_new_2.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.psw_new_2.style.backgroundColor='#FFFFFF';
}

if (i!=0){
alert ("Valorizzare tutti i campi evidenziati!");	
return;
}

//SECONDO CONTROLLO - LA NUOVA PASSWORD INSERITA DEVE ESSERE RIPETUTA UGUALE!!
if (frm.psw_new.value != frm.psw_new_2.value) {
frm.psw_new.style.backgroundColor='#FDC82F';
frm.psw_new_2.style.backgroundColor='#FDC82F';
alert ("La nuova password digitata non è uguale alla conferma, controllare!");
return;
}

else{
frm.psw_new.style.backgroundColor='#FFFFFF';
frm.psw_new_2.style.backgroundColor='#FFFFFF';
}

//TERZO CONTROLLO - LA NUOVA PASSWORD INSERITA NON DEVE ESSERE UGUALE ALLA ATTUALE!!
if (frm.psw_new.value == frm.psw_actual.value) {
frm.psw_new.style.backgroundColor='#FDC82F';
frm.psw_actual.style.backgroundColor='#FDC82F';
alert ("La nuova password digitata non può essere uguale a quella attuale!");
return;
}

else{
frm.psw_new.style.backgroundColor='#FFFFFF';
frm.psw_new_2.style.backgroundColor='#FFFFFF';
}

frm.submit();
}



