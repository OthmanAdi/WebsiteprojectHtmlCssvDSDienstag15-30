function AddTask(){
    var eingabeFeld = document.getElementById("myInput").value;
    var textNode = document.createTextNode(eingabeFeld);
    var makeNewItem = document.createElement("li");

    makeNewItem.appendChild(textNode);

    document.getElementById("myUL").appendChild(makeNewItem);
}