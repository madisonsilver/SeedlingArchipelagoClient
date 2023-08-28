//JS -> AS
function killPlayer(){
    document.getElementById("Seedling").killPlayer();
}

function loadItems(){
    document.getElementById("Seedling").printItems();
}

//AS -> JS
let returnHome=0;
function playerDied(){
    if (returnHome){
        document.getElementById("text_log").innerText="player died, returning home";
        returnHome=0;
        return 1;
    }
    document.getElementById("text_log").innerText="player died";
    return 0;
}

let collectedLocations = []; //TODO: Update this from server
function collectLocation(loc_name){
    document.getElementById("text_log").innerText=`collected #${loc_name}`;
    collectedLocations.push(loc_name);
    document.getElementById("current_collected").innerText=`collectedLocations: #${collectedLocations}`;
}

function hasCollectedLocation(loc_name){
    console.log(`query ${loc_name}`);
    return collectedLocations.includes(loc_name);
}

let itemQueue = [];
function getItemQueue(){
    console.log("getItemQueue", itemQueue);
    if (itemQueue.length == 0){
        return "empty";
    }
    return itemQueue.shift();
}

function getSealCount(){
    let rawCount = document.getElementById('seal_count').value;
    rawCount = parseInt(rawCount);
    if (isNaN(rawCount)) {
        return 0;
    }
    return rawCount;
}

//Page UI
let jsReady = false;
function isReady() {
    return jsReady;
}
function pageInit() {
    jsReady = true;
}

function returnToSpawn() {
    returnHome=1;
    killPlayer();
}

function addItemFromField(){
    let itemName = document.getElementById('item_name').value;
    itemQueue.push(itemName);
    document.getElementById('item_name').value="";
    loadItems();
}

function resetCollected(){
    collectedLocations = [];
    document.getElementById("current_collected").innerText=`collectedLocations: #${collectedLocations}`;
}