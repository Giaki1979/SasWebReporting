// JavaScript Document

function Convalida(frm) 
{

if ((frm.titolo.value == "") || (frm.titolo.value == undefined)) {
alert("Campo obbligatorio!");
frm.titolo.focus();
frm.titolo.style.backgroundColor='#F93D00';
return false;
}
else{
frm.titolo.style.backgroundColor='#FFFFFF';
}

if ((frm.richiedente.value == "") || (frm.richiedente.value == undefined)) {
alert("Campo obbligatorio!");
frm.richiedente.focus();
frm.richiedente.style.backgroundColor='#F93D00';
return false;
}
else{
frm.richiedente.style.backgroundColor='#FFFFFF';
}

if ((frm.uid_richiedente.value == "") || (frm.uid_richiedente.value == undefined)) {
alert("Campo obbligatorio!");
frm.uid_richiedente.focus();
frm.uid_richiedente.style.backgroundColor='#F93D00';
return false;
}
else{
frm.uid_richiedente.style.backgroundColor='#FFFFFF';
}

if ((frm.datarichiesta.value == "") || (frm.datarichiesta.value == undefined)) {
alert("Campo obbligatorio!");
frm.datarichiesta.focus();
frm.datarichiesta.style.backgroundColor='#F93D00';
return false;
}
else{
frm.datarichiesta.style.backgroundColor='#FFFFFF';
}

if ((frm.priorita.value == "") || (frm.priorita.value == undefined)) {
alert("Campo obbligatorio!");
frm.priorita.focus();
frm.priorita.style.backgroundColor='#F93D00';
return false;
}
else{
frm.priorita.style.backgroundColor='#FFFFFF';
}

if ((frm.progetto.value == "") || (frm.progetto.value == undefined)) {
alert("Campo obbligatorio!");
frm.progetto.focus();
frm.progetto.style.backgroundColor='#F93D00';
return false;
}
else{
frm.progetto.style.backgroundColor='#FFFFFF';
}

if ((tipologia.value == "") || (tipologia.value == undefined)) {
alert("Campo obbligatorio!");
frm.tipologia.focus();
frm.tipologia.style.backgroundColor='#F93D00';
return false;
}
else{
frm.tipologia.style.backgroundColor='#FFFFFF';
}

//return true;
}