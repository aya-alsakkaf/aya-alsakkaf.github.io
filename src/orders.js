function Move(tr,cell)
{
    while (tr.parentNode&&tr.nodeName.toUpperCase()!='TR')
    {
        tr=tr.parentNode;
    }
    var table1=document.getElementById('tst1');
    if (!this.rows)
    {
        var rows=table1.getElementsByTagName('TR');
        this.rows=[];
        for (var z0=0;z0<rows.length;z0++)
        {
            this.rows[z0]=rows[z0];
        }
    }


    var table2=document.getElementById('tst2');
    if (tr.parentNode!=table2)
    {
        table2.appendChild(tr);

        for(var j=5; j>4; j--)
        {
            if(j!=cell)
            {
                tr.deleteCell(j);
            }
        }
}

}



$(document).ready(function(){
	
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
})