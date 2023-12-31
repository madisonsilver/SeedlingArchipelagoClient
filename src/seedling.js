import {
  location_flash_to_id,
  item_id_to_flash,
  items_to_flash,
  boss_locations,
} from "./data.js";
import {
  Client,
  ITEMS_HANDLING_FLAGS,
  SERVER_PACKET_TYPE,
} from "https://unpkg.com/archipelago.js@1.0.0/dist/archipelago.js";

// client connection
// Create a new Archipelago client

let client = new Client();
let recieved_items = []; //Workaround for ap.js@1.0.0 not having client.items.received
window.client = client;

// Set up event listeners
client.addListener(SERVER_PACKET_TYPE.CONNECTED, (packet) => {
  console.log("Connected to server: ", packet);
});

client.addListener(SERVER_PACKET_TYPE.ROOM_UPDATE, (packet) => {
  console.log("Room update: ", packet);
});

client.addListener(SERVER_PACKET_TYPE.RECEIVED_ITEMS, (packet) => {
  //This is a workaround for ap.js@1.0.0 not having client.items.received
  for (let item of packet.items) {
    recieved_items.push(item);
  }
  reloadItems();
});

client.addListener(SERVER_PACKET_TYPE.PRINT_JSON, (packet) => {
  console.log(packet);
  if (packet.type != "ItemSend") {
    return;
  }
  if (
    packet.receiving != client.data.slot &&
    packet.item.player != client.data.slot
  ) {
    return;
  }
  let result = "";
  for (let segment of packet.data) {
    if (segment.type == "player_id") {
      result += client.players.name(parseInt(segment.text));
    } else if (segment.type == "item_id") {
      //client.players.game(segment.player) is a workaround for 1.0.0 not supporting name(int, int)
      result += client.items.name(
        client.players.game(segment.player),
        parseInt(segment.text)
      );
    } else if (segment.type == "location_id") {
      result += client.locations.name(
        client.players.game(segment.player),
        parseInt(segment.text)
      );
    } else {
      result += segment.text;
    }
  }
  addToTextLog(result+"\n");
});

client.addListener(SERVER_PACKET_TYPE.BOUNCED, (packet) => {
  console.log(`Bounced: ${packet}`);
  if (
    packet.tags?.includes("DeathLink") &&
    packet.data.source != client.players.name(client.data.slot)
  ) {
    killPlayer();
  }
});

// Disconnect from the server when unloading window.
window.addEventListener("beforeunload", () => {
  client.disconnect();
});

function connectToServer() {
  recieved_items = [];
  if (client.status != "Disconnected") {
    return;
  }

  let connectionInfo = {
    hostname: document.getElementById("server_hostname").value, // Replace with the actual AP server hostname.
    port: parseInt(document.getElementById("server_port").value), // Replace with the actual AP server port.
    game: "Seedling", // Replace with the game name for this player.
    name: document.getElementById("server_name").value, // Replace with the player slot name.
    password: document.getElementById("server_password").value,
    items_handling: ITEMS_HANDLING_FLAGS.REMOTE_ALL,
    tags: ["DeathLink"],
  };

  // Connect to the Archipelago server
  client
    .connect(connectionInfo)
    .then(() => {
      console.log("Connected to the server");
      document.getElementById("connection_status").innerText = client.status;
      // You are now connected and authenticated to the server. You can add more code here if need be.
    })
    .catch((error) => {
      console.error("Failed to connect:", error);
      document.getElementById("connection_status").innerText = client.status;
      // Handle the connection error.
    });
}

//JS -> AS
function killPlayer() {
  deaths -= 1;
  document.getElementById("Seedling").killPlayer();
}

window.reloadItems = function () {
  let item_ids = [];
  console.log(recieved_items);
  for (let net_item of recieved_items) {
    item_ids.push(net_item.item);
  }
  let flash_items = items_to_flash(item_ids);
  for (let i of flash_items) {
    itemQueue.push(i);
  }
  document.getElementById("Seedling").printItems();
};

//AS -> JS
let deaths = 0;
window.playerDied = function () {
  deaths += 1;
  console.log(`deaths: ${deaths}`);
  if (
    client.data.slotData["deathlink"] &&
    deaths >= client.data.slotData["deathlink_amnesty"]
  ) {
    deaths -= client.data.slotData["deathlink_amnesty"];
    console.log(`sending deathlink, new deaths: ${deaths}`);
    client.send({
      cmd: "Bounce",
      tags: ["DeathLink"],
      data: {
        source: client.players.name(client.data.slot),
        time: Date.now() / 1e3,
      },
    });
  }
};

window.collectLocation = function (loc_name) {
  if (loc_name == "bloody_seed" || loc_name == "bloodless_seed") {
    if (!client.data.slotData["ending"] && loc_name == "bloody_seed") {
      client.updateStatus(30);
    } else if (client.data.slotData["ending"] && loc_name == "bloodless_seed") {
      client.updateStatus(30);
    }
  } else if (
    !boss_locations.includes(loc_name) ||
    client.data.slotData["boss_locations"]
  ) {
    client.locations.check(location_flash_to_id[loc_name]);
  }
};

window.hasCollectedLocation = function (loc_name) {
  console.log(`query ${loc_name}`);
  return client.locations.checked.includes(location_flash_to_id[loc_name]);
};

let itemQueue = [];
window.getItemQueue = function () {
  console.log("getItemQueue", itemQueue);
  if (itemQueue.length == 0) {
    return "empty";
  }
  return itemQueue.shift();
};

window.getSealCount = function () {
  console.log("get seal count");
  let sealCount = 0;
  for (let net_item of recieved_items) {
    if (item_id_to_flash[net_item.item] == "!seal") {
      sealCount += 1;
    }
  }
  console.log("get seal count done");
  document.getElementById("seal-count").innerText = sealCount;
  return sealCount;
};

//Page UI

function addToTextLog(text){
  let text_log = document.getElementById("text_log");
  let scroll_to_bottom = (Math.ceil(text_log.scrollHeight - text_log.scrollTop) === text_log.clientHeight);
  document.getElementById("text_log").innerText+=text;
  if (scroll_to_bottom){
    text_log.scrollTop = text_log.scrollHeight;
  }
}


document
  .getElementById("connect_to_server")
  .addEventListener("click", connectToServer);
