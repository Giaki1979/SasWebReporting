function apri_finestra_richiedente(nomepagina)
{
var stile = "top=150, left=300, width=600, height=600, status=0, menubar=0, toolbar=0, scrollbars=1";

//finestra_ricerca=window.open(nomepagina+'?'+document.forminserimento.richiedente.value,'mywindow',stile);
var richiedente = document.getElementById('richiedente').value;
finestra_ricerca=window.open(nomepagina+'?RICHIEDENTE='+richiedente,'mywindow',stile);
}

function chiudi_finestra_richiedente_trovato(dipendente,uid)
{
//qui faccio riferimento alla Form ZERO perchè va bene sia per la pagina di inserimento che per quella di modifica
//alert(dipendente);
window.opener.document.forms[0].elements["uid_richiedente"].value=uid;
window.opener.document.forms[0].elements["richiedente"].value=dipendente;
//document.write(frm);
self.close ();
}

function apri_finestra_cliente(nomepagina)
{
var stile = "top=150, left=300, width=600, height=600, status=0, menubar=0, toolbar=0, scrollbars=1";

//finestra_ricerca=window.open(nomepagina+'?'+document.forminserimento.richiedente.value,'mywindow',stile);
var cliente = document.getElementById('cliente').value;
finestra_ricerca=window.open(nomepagina+'?CLIENTE='+cliente,'mywindow',stile);
}


function chiudi_finestra_cliente_trovato(cliente,idtiers,codcliente)
{
window.opener.document.forms[0].elements["id_tiers"].value=idtiers;
window.opener.document.forms[0].elements["cliente"].value=cliente;
window.opener.document.forms[0].elements["cod_cliente"].value=codcliente;
//document.write('ciao');
self.close ();
}

function apri_finestra_collegati(nomepagina)
{
var stile = "top=150, left=300, width=800, height=800, status=0, menubar=0, toolbar=0, scrollbars=1";
finestra_ricerca=window.open(nomepagina,'mywindow',stile);
}

function chiudi_finestra_collegati(url)
{
//alert(url);
window.opener.document.location.href = url;
self.close ();
}

