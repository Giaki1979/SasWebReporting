function Convalida_Ricerca_Ticket(frm) 
{
var i = 0

if ((frm.idatt.value == "") || (frm.idatt.value == undefined)) {
i=i+1;
}	

if ((frm.titolo.value == "") || (frm.titolo.value == undefined)) {
i=i+1;
}

if ((frm.richiedente.value == "") || (frm.richiedente.value == undefined)) {
i=i+1;
}

if ((frm.situazione.value == "") || (frm.situazione.value == undefined)) {
i=i+1;
}

if ((frm.datarichiesta_da.value == "") || (frm.datarichiesta_da.value == undefined)) {
i=i+1;
}

if ((frm.datarichiesta_a.value == "") || (frm.datarichiesta_a.value == undefined)) {
i=i+1;
}

if ((frm.assegnatario.value == "") || (frm.assegnatario.value == undefined)) {
i=i+1;
}

if ((frm.priorita.value == "") || (frm.priorita.value == undefined)) {
i=i+1;
}

if ((frm.progetto.value == "") || (frm.progetto.value == undefined)) {
i=i+1;
}

if ((frm.tipologia.value == "") || (frm.tipologia.value == undefined)) {
i=i+1;
}

if ((frm.cod_cliente.value == "") || (frm.cod_cliente.value == undefined)) {
i=i+1;
}

if ((frm.cliente.value == "") || (frm.cliente.value == undefined)) {
i=i+1;
}

if ((frm.stato.value == "") || (frm.stato.value == undefined)) {
i=i+1;
}

if ((frm.usorichiesta.value == "") || (frm.usorichiesta.value == undefined)) {
i=i+1;
}

if ((frm.categoria.value == "") || (frm.categoria.value == undefined)) {
i=i+1;
}


//alert(i);

if ((frm.datarichiesta_da.value != "") && (frm.datarichiesta_a.value == "")) {
alert ("Inserire un range di Data Richiesta!");
//il comando return è come exit function
return false;
}

if ((frm.datarichiesta_a.value != "") && (frm.datarichiesta_da.value == "")) {
alert ("Inserire un range di Data Richiesta!");
//il comando return è come exit function
return false;
}

if (i==15){
alert ("Inserire almeno un filtro di ricerca!");	
//il comando return è come exit function
return false;
}

return true;
//frm.submit();



}