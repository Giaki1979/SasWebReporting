// JavaScript Document

function Convalida_Salvataggio_Catalogue(frm) 
{

var i = 0	

if ((frm.Nome.value == "") || (frm.Nome.value == undefined)) {
frm.Nome.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.Nome.style.backgroundColor='#FFFFFF';
}

if ((frm.Progetto.value == "") || (frm.Progetto.value == undefined)) {
frm.Progetto.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.Progetto.style.backgroundColor='#FFFFFF';
}

if 
(
(frm.Progetto.value == "Drive") && ((frm.SubProgetto.value == "") || (frm.SubProgetto.value == undefined)) 
) 

{
frm.SubProgetto.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.SubProgetto.style.backgroundColor='#FFFFFF';
}

//alert(i);

if (i==0){
frm.NomeJob.disabled=false;
frm.Titolo.disabled=false;
frm.submit();
}
else
{
alert ("Valorizzare tutti i campi evidenziati!");	
}
//return true;
}