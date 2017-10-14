// JavaScript Document

function Convalida_Inserimento_Catalogue(frm)

{
//Controllo NOME JOB DEVE ESSERE SENZA SPAZI
stringa=frm.Nome.value;

if(stringa.indexOf(" ")>-1){
alert("Inserire il nome del Job SENZA SPAZI NEL TESTO!");
return false;
}

var i = 0	

if ((frm.Nome.value == "") || (frm.Nome.value == undefined)) {
frm.Nome.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.Nome.style.backgroundColor='#FFFFFF';
}

if ((frm.TipologiaReport.value == "") || (frm.TipologiaReport.value == undefined)) {
frm.TipologiaReport.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.TipologiaReport.style.backgroundColor='#FFFFFF';
}

if ((frm.TipoOutput.value == "") || (frm.TipoOutput.value == undefined)) {
frm.TipoOutput.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.TipoOutput.style.backgroundColor='#FFFFFF';
}

if ((frm.Strumento.value == "") || (frm.Strumento.value == undefined)) {
frm.Strumento.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.Strumento.style.backgroundColor='#FFFFFF';
}

if ((frm.Destinatario.value == "") || (frm.Destinatario.value == undefined)) {
frm.Destinatario.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.Destinatario.style.backgroundColor='#FFFFFF';
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

if (frm.TipologiaReport.value == "Scheduled Job")
{
if ((frm.BatchAttivo.value == "") || (frm.BatchAttivo.value == undefined)) {
frm.BatchAttivo.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.BatchAttivo.style.backgroundColor='#FFFFFF';
}
}

//alert(i);

if (i==0){
return true;
}
else
{
alert ("Valorizzare tutti i campi evidenziati!");	
return false;
}

}