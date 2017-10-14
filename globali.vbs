Function calcola_data_scadenza(frm)

	Dim data1
	data1=Cdate(frm.datarichiesta.value)
	Dim data2
	data2=data1+7

	frm.datascadenza.value=data2

End function