
/*function onOff(){
    //document.getElementById('hide').style.display = 'block';
    document
    .querySelector("#modal")
    .classList
    .toggle("hide")

Document
.querySelector("body")
.classList
.toggle("hideScroll")

document
.querySelector("#modal")
.classList
.toggle("addScroll")
 }*/

var selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
        else
            updateRecord(formData);
   resetForm();
}

function readFormData(){
    var formData = {};
    formData["tname"] = document.getElementById("tname").value;
    formData["email"] = document.getElementById("email").value;
    formData["dtnasc"] = document.getElementById("dtnasc").value;      
    formData["rua"] = document.querySelector("input[name=rua]").value;
    formData["num"] = document.querySelector("input[name=num]").value;
    formData["bairro"] = document.querySelector("input[name=bairro]").value;
    formData["country"] = document.querySelector("select[name=country]").value;
    formData["city"] = document.querySelector("select[name=city]").value;
    formData["uf"] = document.querySelector("input[name=state]").value;
    
    /*
    if (document.querySelector('input[id=cMasc]').checked == true)
        formData["tsexo"] = querySelector('input[name=cMasc]').value;
    
    else 
        formData["tsexo"] = querySelector('input[name=cFem]').value;
    

    
    var sexo = document.querySelectorAll('.sexo');
        
        if(sexo[0].checked){
           sexo1 = "M";
        }else{
           sexo1 = "F";
        }*/
       

    return formData;

}
//var endereco = 'formData.rua '+ formData.num + formData.bairro + formData.city + formData.uf + formData.country;
//console.log(endereco);

function insertNewRecord(data){
    var table = document.getElementById("emplist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.tname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dtnasc;
    cell4 = newRow.insertCell(3);    
    cell4.innerHTML = data.rua;
    cell5 = newRow.insertCell(4);    
    cell5.innerHTML = data.num;
    cell6 = newRow.insertCell(5);    
    cell6.innerHTML = data.bairro;
    cell7 = newRow.insertCell(6);    
    cell7.innerHTML = data.city;
    cell8 = newRow.insertCell(7);    
    cell8.innerHTML = data.uf;
    cell9 = newRow.insertCell(8);    
    cell9innerHTML = data.country;
    cell9 = newRow.insertCell(9);
    cell9.innerHTML = `<a onClick = "onEdit(this)">Editar</a> 
                       <a onClick = "onDelete(this)">Delete</a>`;

}

function resetForm(){
    document.getElementById("tname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dtnasc").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("num").value = "";
    document.getElementById("bairro").value = "";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("tname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dtnasc").value = selectedRow.cells[2].innerHTML;
    document.getElementById("rua").value = selectedRow.cells[3].innerHTML;
    document.getElementById("num").value = selectedRow.cells[4].innerHTML;
    document.getElementById("bairro").value = selectedRow.cells[5].innerHTML;
}


function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.tname;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.dtnasc;
    selectedRow.cells[3].innerHTML = formData.city;
    selectedRow.cells[4].innerHTML = formData.uf;
    selectedRow.cells[5].innerHTML = formData.rua;
    selectedRow.cells[6].innerHTML = formData.num;
    selectedRow.cells[7].innerHTML = formData.bairro;
}

function onDelete(td){
    if(confirm("Você Quer realmente deletar este registro?")){
        row = td.parentElement.parentElement;
        document.getElementById("emplist").deleteRow(row.rowIndex);
    resetForm();
    }
}
