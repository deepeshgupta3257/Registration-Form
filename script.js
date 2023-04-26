var entry = document.getElementById("entry");
entry.addEventListener("click", displaydetails);

var row = 1;
function displaydetails(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var janamdin = document.getElementById("janamdin").value;

    if(!name || !age || !janamdin){
        alert("Please fill all boxes");
        return;
    }
    var dis = document.getElementById("dis");

    var newRow = dis.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = janamdin;

    row++;
}