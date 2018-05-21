var pageId;

function DoAThing(){
    alert("THis is a test");
}

function Vote(strName){

    console.log("User: " + pageId + " voted for " + strName);
    post("http://localhost:3000/lunch/vote", {"test": "value"});
}

window.onload = function(){
    pageId = Math.random();
    console.log("PageId: " + pageId);
}