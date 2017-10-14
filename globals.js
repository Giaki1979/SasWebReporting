
//*********************************************
//FORM INSERIMENTO NUOVO TICKET - FUNZIONI
//*********************************************
function data_scadenza(frm) {

//memorizzo in una variabile il valore del campo della form
var data=frm.datarichiesta.value;

//utilizzando la funzione split (campo divisiorio "/"), memorizzo in un array:
//arr1[2] = anno
//arr1[1] = mese
//arr1[0] = giorno
var arr1 = data.split("/");

//con la funzione Date(anno,mese,giorno) memorizzo nella variabile D1 la data in formato data di Javascript
var d1 = new Date(arr1[2],arr1[1]-1,arr1[0]);

//creo una nuova variabile data e ci memorizzo il valore della variabile data D1 ricavata sopra
var d2 = new Date(d1);
//aggiungo i giorni con la funzione getDate e ottengo la variabile data D2 con aggiunti i giorni
d2.setDate(d2.getDate() + 7); 

//riconverto tutto in formato gg/mm/aaaa ricavando il giorno con getDate, il mese con getMonth e l'anno con getYear
var gg = d2.getDate();
if(gg<10) gg = "0"+gg; 
var mm = d2.getMonth() + 1;
if(mm<10) mm = "0"+mm; 
var aa = d2.getYear();
var datafinale = gg + "/" + mm + "/" + aa;

frm.datascadenza.value=datafinale;
}

function data_evasione_change(frm) {

//memorizzo in una variabile il valore del campo della form
var data=frm.dataevasione.value;
if(data != "") {
frm.situazione.value="05 - Evasa";
}

}

function data_odierna() {

//recupero la data di oggi in formato Javascript utilizzando la funzione Date() che quando è vuota tra parentesi becca la data odierna.
var data = new Date();
var gg = data.getDate();
if(gg<10) gg = "0"+gg; 
var mm = data.getMonth() + 1;
if(mm<10) mm = "0"+mm; 
var aa = data.getYear();
var oggi = gg + "/" + mm + "/" + aa;

alert(oggi);

}


//*********************************************
//FORM MODIFICA TICKET - FUNZIONI
//*********************************************

function modifica_situazione(frm){

if(frm.situazione.value=='01 - Da Prendere in carico')
	{
		frm.assegnatario.value="";
	}

}

function modifica_assegnatario(frm){

if(frm.assegnatario.value=='')
	{
		frm.situazione.value='01 - Da Prendere in carico';
	}

else{
	frm.situazione.value='02 - Assegnata';
}

}

//*********************************************
//NICE EDITOR ON DEMAND
//*********************************************

var area2
function addArea2() {
area2 = new nicEditor({fullPanel : true}).panelInstance('com');
}

function removeArea2() {
area2.removeInstance('com');
}

var area1;
function toggleArea1(ctrl,frm) {
if(!area1) {
area1 = new nicEditor({fullPanel : false}).panelInstance(ctrl,{hasPanel : true});
} else {
area1.removeInstance(ctrl);
area1 = null;
}
}


//*********************************************
//FUNZIONI GENERALI
//*********************************************

function addslashes(str) {
str=str.replace(/\\/g,'\\\\');
str=str.replace(/\'/g,'\\\'');
str=str.replace(/\"/g,'\\"');
str=str.replace(/\0/g,'\\0');
return str;
}
function stripslashes(str) {
str=str.replace(/\\'/g,'\'');
str=str.replace(/\\"/g,'"');
str=str.replace(/\\0/g,'\0');
str=str.replace(/\\\\/g,'\\');
return str;
}

function exportToExcel(tb)
{
var oExcel = new ActiveXObject("Excel.Application");
var oBook = oExcel.Workbooks.Add;
var oSheet = oBook.Worksheets(1);
for (var y=0;y<tb.rows.length;y++)
// detailsTable is the table where the content to be exported is
{
    for (var x=0;x<tb.rows(y).cells.length;x++)
    {
        oSheet.Cells(y+1,x+1) =
tb.rows(y).cells(x).innerText;
    }
}
oExcel.Visible = true;
oExcel.UserControl = true;
}