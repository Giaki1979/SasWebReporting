// JavaScript Document

function Convalida_Salvataggio_Ticket(frm) 
{
//CONTROLLO DATE

//Controllo Data Richiesta
stringa=frm.datarichiesta.value;

if (stringa || '') {
//var espressione = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;	

//if (!espressione.test(stringa))	
//{
//	alert("Formato Sbagliato: DATA RICHIESTA");
//	return;
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
	return;
	}	
}


//Controllo Data Scadenza
stringa=frm.datascadenza.value;
if (stringa || '') {
var espressione = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;	

if (!espressione.test(stringa))	
{
	alert("Formato Sbagliato: DATA SCADENZA");
	return;
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
	return;
	}	
}
}

//Controllo Data Inizio lavorazione
stringa=frm.datainiziolavorazione.value;
if (stringa || '') {
var espressione = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;	

if (!espressione.test(stringa))	
{
	alert("Formato Sbagliato: DATA INIZIO LAVORAZIONE");
	return;
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
	alert("La DATA INIZIO LAVORAZIONE inserita non è un giorno esistente in calendario!");
	return;
	}	
}
}

//Controllo Data Rilascio
stringa=frm.dataevasione.value;
if (stringa || '') {
var espressione = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;	

if (!espressione.test(stringa))	
{
	alert("Formato Sbagliato: DATA RILASCIO");
	return;
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
	alert("La DATA RILASCIO inserita non è un giorno esistente in calendario!");
	return;
	}	
}
}

//Controllo FORMATO ORE LAVORAZIONE

var numero = frm.orelavorazione.value;
if (isNaN(numero))
{
alert("Le ORE LAVORAZIONE inserite devono contenere un numero!");
return;
}


//Controllo ORE LAVORAZIONE E DATA EVASIONE QUANDO TICKET E' EVASO
var ore = frm.orelavorazione.value;
var dataevasione = frm.dataevasione.value;
var situazione = frm.situazione.value;

if((situazione=="05 - Evasa") && (ore=="" || dataevasione==""))
{
alert("E' obbligatorio inserire le ore di lavorazione o la data di evasione quando si chiude il ticket!")
return;
} 

//Controllo DATA INIZIO LAVORAZIONE E DATA EVASIONE, NON DEVONO ESSERE INFERIORI ALLA DATA RICHIESTA

var situazione = frm.situazione.value;

var datainiziolav = frm.datainiziolavorazione.value;
var dataevasione = frm.dataevasione.value;
var datarichiesta = frm.datarichiesta.value;

var annoiniziolav = datainiziolav.substring(6,10);
var meseiniziolav = datainiziolav.substring(3,5); 
var giornoiniziolav = datainiziolav.substring(0,2);

var annoevasione = dataevasione.substring(6,10);
var meseevasione = dataevasione.substring(3,5); 
var giornoevasione = dataevasione.substring(0,2);

var annorichiesta = datarichiesta.substring(6,10);
var meserichiesta = datarichiesta.substring(3,5); 
var giornorichiesta= datarichiesta.substring(0,2);

var datainiziolav1 = new Date(annoiniziolav,meseiniziolav,giornoiniziolav);
var dataevasione1 = new Date(annoevasione,meseevasione,giornoevasione);
var datarichiesta1 = new Date(annorichiesta,meserichiesta,giornorichiesta);

if((situazione=="05 - Evasa") && (datainiziolav1 < datarichiesta1 || dataevasione1 < datarichiesta1))
{
alert("Controllare le Date di Inizio Lavorazione o Evasione, non possono essere inferiori alla Data Richiesta!")
return;
} 



//Controllo CLIENTE

var nomecliente = frm.cliente.value;
var codcliente = frm.cod_cliente.value;
if((nomecliente != "") && (codcliente == ""))
{
alert("E' obbligatorio cercare il codice cliente!");
return;
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

if ((frm.situazione.value == "") || (frm.situazione.value == undefined)) {
frm.situazione.style.backgroundColor='#FDC82F';
i=i+1
}
else{
frm.situazione.style.backgroundColor='#FFFFFF';
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

//alert(i);

if (i==0){
frm.dataapertura.disabled=false;
frm.uid_richiedente.disabled=false;
frm.id_tiers.disabled=false;
frm.cod_cliente.disabled=false;
frm.datarichiesta.disabled=false;
frm.submit();
}
else
{
alert ("Valorizzare tutti i campi evidenziati!");	
}
//return true;
}