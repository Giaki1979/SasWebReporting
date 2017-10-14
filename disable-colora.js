
function disable(disableIt)
{

if (disableIt)
   {
   document.Form2.NumeroMese.disabled=true;
   document.Form2.TipoSpesa.disabled=true;
   }
else 
   {
   document.Form2.NumeroMese.disabled=false;
   document.Form2.TipoSpesa.disabled=false;
   }
}

function Colora_Intestazioni(me)
{
me.style.background='#76991e';
me.style.color='White';
}

function Decolora_Intestazioni(me)
{
me.style.background='#EFEFEF';
me.style.color='Black';
}

function Colora_Righe(me)
{
me.style.background='#FFFF35';
}

function Decolora_Righe(me)
{
me.style.background='#FFFFFF';
}

