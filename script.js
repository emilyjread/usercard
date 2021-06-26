function changeName(){
    document.querySelector(".profile-name").innerText = "Jeanne Uxbridge"
}

var connectionReqs = 2
var yourConnections = 417
function hide(element){ 
    if(element.className=="accept icon"){
        console.log("accepted!")
        yourConnections--
        document.querySelector("#connections-number").innerText = yourConnections
    }
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);
    connectionReqs--;
    document.querySelector("#connection-requests").innerText = connectionReqs;
   
}
