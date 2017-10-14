function Convalida_sybase(frm) 
{
var i = 0

if ((frm.nomeprocedura.value == "") || (frm.nomeprocedura.value == undefined)) {
i=i+1;
}	

if ((frm.nomedatabase.value == "") || (frm.nomedatabase.value == undefined)) {
i=i+1;
}

if ((frm.user.value == "") || (frm.user.value == undefined)) {
i=i+1;
}

if ((frm.pass.value == "") || (frm.pass.value == undefined)) {
i=i+1;
}

//alert(i);

if (i>0){
alert ("Inserire Tutti i filtri di ricerca!");	
//il comando return è come exit function
return false;
}

return true;
//frm.submit();



}