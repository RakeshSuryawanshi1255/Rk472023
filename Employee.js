let id="";
var order = "desc";
//localStorage.clear();
funDisplayData();
function funDataSave()
{
    document.getElementById('msg').innerHTML="";
    var name=document.getElementById('name').value;
    var address=document.getElementById('address').value;
    var gender=document.getElementById('gender').value;
    var dob=document.getElementById('dob').value;
    var salary=document.getElementById('salary').value;

    
        if(id=='')
        {
            var arr_empname=JSON.parse(localStorage.getItem('empname'));

            if(arr_empname==null)
            {
                var data=[name,address,gender,dob,salary];            

                localStorage.setItem('empname',JSON.stringify(data));
                
            }else{
                arr_empname.push(name);
                arr_empname.push(address);
                arr_empname.push(gender);
                arr_empname.push(dob);
                arr_empname.push(salary);
                localStorage.setItem('empname',JSON.stringify(arr_empname));
            }
            document.getElementById('name').value="";
            document.getElementById('address').value="";
            document.getElementById('gender').value="";
            document.getElementById('dob').value="";
            document.getElementById('salary').value="";
            
        }
        
        funDisplayData();
       

}

function funDisplayData()
{
    var arr_emp=JSON.parse(localStorage.getItem('empname'));
    if(arr_emp!=null)
    {
        var html = '';
        
        var index = 0;
		for(var k=0;k< arr_emp.length; k++ )
        {
			if(index==5)
			{
				index = 0;
			}
			
			 var kindex = parseInt(k);
             html=html+ ' <tr> <td>'+arr_emp[kindex]+'</td>   <td>'+arr_emp[kindex+1]+'</td>    <td>'+arr_emp[kindex+2]+'</td>  <td>'+arr_emp[kindex+3]+'</td>  <td>'+arr_emp[kindex+4]+'</td>    </tr>';
             index++;
		   k = kindex+4;
            
        }
       
        document.getElementById('tblEmp').innerHTML=html;
    }
}
$('td').on('click',function(){
    
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
   // var order = $(this).data('order')
    var order = document.getElementById("order").innerText;
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if(order=='desc')
        {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
              }
              document.getElementById("order").innerText = "asc";
        } 
        else
        {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
              }
              document.getElementById("order").innerText='desc'
        } 
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
    
    /* 
    var column = $(this).data('column')
    
    console.log('cliking..',column,order);
 
    var myArray=JSON.parse(localStorage.getItem('empname'));
    if(order=='desc')
    {
        $(this).data('order',"asc")
        myArray=myArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
        console.log(myArray);
        
    }   
    else
    {
        $(this).data('order',"desc")
        myArray=myArray.sort((a,b) => b[column] < a[column] ? -1 : 1)
        console.log(myArray);
       
        
    } */
   
    
})


