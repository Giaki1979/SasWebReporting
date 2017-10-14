// JavaScript Document

function Convalida_Inserimento_Ticket(frm)

{

//CONTROLLO DATE

//Controllo Data Richiesta
stringa=frm.datarichiesta.value;
if (stringa || '') {
var espressione = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;	

if (!espressione.test(stringa))	
{
	alert("Formato Sbagliato: DATA RICHIESTA");
	return false;
}

else 
{
	anno = parseInt(stringa.substr(6),10);
	mese = parseInt(stringa.substr(3, 2),10);
	giorno = parseInt(stringa.substr(0, 2),10);
	var data=new Date(anno, mese-1, giorno);
	if(data.getFullYear()==anno && data.getMonth()+1==mese && data.getDate()==giorno){

	}
	else{
	alert("La DATA RICHIESTA inserita non è un giorno esistente in calendario!");
	return false;
	}	
}
}

//Controllo Data Scadenza
stringa=frm.datascadenza.value;
if (stringa || '') {
var espressione = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;	

if (!espressione.test(stringa))	
{
	alert("Formato Sbagliato: DATA SCADENZA");
	return false;
}

else 
{
	anno = parseInt(stringa.substr(6),10);
	mese = parseInt(stringa.substr(3, 2),10);
	giorno = parseInt(stringa.substr(0, 2),10);
	var data=new Date(anno, mese-1, giorno);
	if(data.getFullYear()==anno && data.getMonth()+1==mese && data.getDate()==giorno){

	}
	else{
	alert("La DATA SCADENZA inserita non è un giorno esistente in calendario!");
	return false;
	}	
}
}

//Controllo CLIENTE

var nomecliente = frm.cliente.value;
var codcliente = frm.cod_cliente.value;
if((nomecliente != "") && (codcliente == ""))
{
alert("E' obbligatorio cercare il codice cliente!");
return false;
}

var i = 0	

if ((frm.titolo.value == "") || (frm.titolo.value == undefined)) {
frm.titolo.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.titolo.style.backgroundColor='#FFFFFF';
}

if ((frm.richiedente.value == "") || (frm.richiedente.value == undefined)) {
frm.richiedente.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.richiedente.style.backgroundColor='#FFFFFF';
}

if ((frm.uid_richiedente.value == "") || (frm.uid_richiedente.value == undefined)) {
frm.uid_richiedente.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.uid_richiedente.style.backgroundColor='#FFFFFF';
}

if ((frm.datarichiesta.value == "") || (frm.datarichiesta.value == undefined)) {
frm.datarichiesta.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.datarichiesta.style.backgroundColor='#FFFFFF';
}

if ((frm.datascadenza.value == "") || (frm.datascadenza.value == undefined)) {
frm.datascadenza.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.datascadenza.style.backgroundColor='#FFFFFF';
}

if ((frm.priorita.value == "") || (frm.priorita.value == undefined)) {
frm.priorita.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.priorita.style.backgroundColor='#FFFFFF';
}

if ((frm.usorichiesta.value == "") || (frm.usorichiesta.value == undefined)) {
frm.usorichiesta.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.usorichiesta.style.backgroundColor='#FFFFFF';
}

if ((frm.progetto.value == "") || (frm.progetto.value == undefined)) {
frm.progetto.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.progetto.style.backgroundColor='#FFFFFF';
}

if ((frm.tipologia.value == "") || (frm.tipologia.value == undefined)) {
frm.tipologia.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.tipologia.style.backgroundColor='#FFFFFF';
}

if ((frm.categoria.value == "") || (frm.categoria.value == undefined)) {
frm.categoria.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.categoria.style.backgroundColor='#FFFFFF';
}
//alert(i);

if (i==0){
frm.data_apertura.disabled=false;
frm.uid_richiedente.disabled=false;
frm.id_tiers.disabled=false
frm.cod_cliente.disabled=false
return true;
}
else
{
alert ("Valorizzare tutti i campi evidenziati!");	
return false;
}

}