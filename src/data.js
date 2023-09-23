let raw_item_data = [
  { display_name: "Progressive Sword", flash_name: "!sword", ID: "0" },
  { display_name: "Progressive Shield", flash_name: "!shield", ID: "1" },
  { display_name: "Red Key", flash_name: "key0", ID: "2" },
  { display_name: "Light", flash_name: "torch", ID: "3" },
  { display_name: "Green Key", flash_name: "key1", ID: "4" },
  { display_name: "Fire", flash_name: "fire", ID: "5" },
  { display_name: "Progressive Swim", flash_name: "!swim", ID: "6" },
  { display_name: "Blue Key", flash_name: "key3", ID: "7" },
  { display_name: "Totem Shard", flash_name: "!totem", ID: "8" },
  { display_name: "Purple Key", flash_name: "key2", ID: "9" },
  { display_name: "Wand", flash_name: "wand", ID: "10" },
  { display_name: "Ghost Spear", flash_name: "spear", ID: "11" },
  { display_name: "Yellow Key", flash_name: "key4", ID: "12" },
  { display_name: "Health", flash_name: "health", ID: "13" },
  { display_name: "Dark Suit", flash_name: "darksuit", ID: "14" },
  { display_name: "Ghost Sword Fusion", flash_name: "!ghostsword", ID: "15" },
  { display_name: "Fire Wand Fusion", flash_name: "!firewand", ID: "16" },
  { display_name: "Seal", flash_name: "!seal", ID: "17" },
  { display_name: "Nothing", flash_name: "!nothing", ID: "18" },
];

let raw_location_data = [
  {
    display_name: "Penguin's Feather",
    flash_name: "feather",
    ID: "0",
    is_boss: false,
  },
  {
    display_name: "Dark Sword",
    flash_name: "darksword",
    ID: "1",
    is_boss: false,
  },
  {
    display_name: "Chest (Spawn House)",
    flash_name: "chest86",
    ID: "2",
    is_boss: false,
  },
  {
    display_name: "Chest (Waterfall)",
    flash_name: "chest90",
    ID: "3",
    is_boss: false,
  },
  {
    display_name: "Chest (Adnan's cave)",
    flash_name: "chest36",
    ID: "4",
    is_boss: false,
  },
  {
    display_name: "Chest (South Rocks)",
    flash_name: "chest12",
    ID: "5",
    is_boss: false,
  },
  { display_name: "Sword", flash_name: "sword", ID: "6", is_boss: false },
  {
    display_name: "Chest (Owl's Nest)",
    flash_name: "chest11",
    ID: "7",
    is_boss: false,
  },
  { display_name: "Owl", flash_name: "owl", ID: "8", is_boss: true },
  { display_name: "Shield", flash_name: "shield", ID: "9", is_boss: false },
  { display_name: "Red Key", flash_name: "key0", ID: "10", is_boss: false },
  {
    display_name: "Chest (Gundernourd Water)",
    flash_name: "chest15",
    ID: "11",
    is_boss: false,
  },
  {
    display_name: "Chest (Gundernourd Pit)",
    flash_name: "chest17",
    ID: "12",
    is_boss: false,
  },
  {
    display_name: "Shieldspire",
    flash_name: "shieldspire",
    ID: "13",
    is_boss: true,
  },
  { display_name: "Light", flash_name: "torch", ID: "14", is_boss: false },
  { display_name: "Green Key", flash_name: "key1", ID: "15", is_boss: false },
  { display_name: "Fire", flash_name: "fire", ID: "16", is_boss: false },
  {
    display_name: "Chest (Rostef)",
    flash_name: "chest25",
    ID: "17",
    is_boss: false,
  },
  { display_name: "Times", flash_name: "times", ID: "18", is_boss: true },
  { display_name: "Conch", flash_name: "conch", ID: "19", is_boss: false },
  { display_name: "Blue Key", flash_name: "key3", ID: "20", is_boss: false },
  {
    display_name: "Chest (Trohn Inside)",
    flash_name: "chest48",
    ID: "21",
    is_boss: false,
  },
  {
    display_name: "Chest (Trohn Outside)",
    flash_name: "chest46",
    ID: "22",
    is_boss: false,
  },
  {
    display_name: "Tentacled Beast",
    flash_name: "tentacledbeast",
    ID: "23",
    is_boss: true,
  },
  {
    display_name: "Totem Shard (Three Blocks Puzzle)",
    flash_name: "totem2",
    ID: "24",
    is_boss: false,
  },
  {
    display_name: "Totem Shard (Main Room Left)",
    flash_name: "totem1",
    ID: "25",
    is_boss: false,
  },
  {
    display_name: "Totem Shard (Mortar)",
    flash_name: "totem0",
    ID: "26",
    is_boss: false,
  },
  {
    display_name: "Totem Shard (One Moving Block Puzzle)",
    flash_name: "totem3",
    ID: "27",
    is_boss: false,
  },
  {
    display_name: "Totem Shard (Two Moving Blocks Puzzle)",
    flash_name: "totem4",
    ID: "28",
    is_boss: false,
  },
  { display_name: "Purple Key", flash_name: "key2", ID: "29", is_boss: false },
  { display_name: "Wand", flash_name: "wand", ID: "30", is_boss: false },
  {
    display_name: "Chest (Lacste Entrance)",
    flash_name: "chest38",
    ID: "31",
    is_boss: false,
  },
  {
    display_name: "Chest (Lacste Main Room)",
    flash_name: "chest40",
    ID: "32",
    is_boss: false,
  },
  {
    display_name: "Totem of Lacste",
    flash_name: "totem",
    ID: "33",
    is_boss: true,
  },
  {
    display_name: "Ghost Spear",
    flash_name: "ghostspear",
    ID: "34",
    is_boss: false,
  },
  { display_name: "Yellow Key", flash_name: "key4", ID: "35", is_boss: false },
  { display_name: "Health", flash_name: "health", ID: "36", is_boss: false },
  {
    display_name: "Chest (Woshad)",
    flash_name: "chest63",
    ID: "37",
    is_boss: false,
  },
  { display_name: "Lights", flash_name: "lights", ID: "38", is_boss: true },
  {
    display_name: "Dark Shield",
    flash_name: "darkshield",
    ID: "39",
    is_boss: false,
  },
  {
    display_name: "Dark Suit",
    flash_name: "darksuit",
    ID: "40",
    is_boss: false,
  },
  {
    display_name: "Chest (Bosiniad Main Room)",
    flash_name: "chest71",
    ID: "41",
    is_boss: false,
  },
  {
    display_name: "Chest (Bosiniad Lava)",
    flash_name: "chest80",
    ID: "42",
    is_boss: false,
  },
  {
    display_name: "King of Fire",
    flash_name: "kingoffire",
    ID: "43",
    is_boss: true,
  },
  {
    display_name: "Ghost Sword",
    flash_name: "ghostsword",
    ID: "44",
    is_boss: false,
  },
  {
    display_name: "Fire Wand",
    flash_name: "firewand",
    ID: "45",
    is_boss: false,
  },
  {
    display_name: "Chest (Ghethis)",
    flash_name: "chest98",
    ID: "46",
    is_boss: false,
  },
];

let id_offset = 20000000;

export let item_flash_to_id = Object.fromEntries(
  raw_item_data.map((x) => [x["flash_name"], id_offset + parseInt(x["ID"])])
);
export let location_flash_to_id = Object.fromEntries(
  raw_location_data.map((x) => [x["flash_name"], id_offset + parseInt(x["ID"])])
);

export let item_id_to_flash = Object.fromEntries(
  raw_item_data.map((x) => [id_offset + parseInt(x["ID"]), x["flash_name"]])
);
export let location_id_to_flash = Object.fromEntries(
  raw_location_data.map((x) => [id_offset + parseInt(x["ID"]), x["flash_name"]])
);

export function items_to_flash(item_ids) {
  let result = [];
  let swords = 0;
  let shields = 0;
  let swims = 0;
  let totems = 0;
  let ghost_sword_fusion = false;
  let fire_wand_fusion = false;

  for (let item_id of item_ids) {
    let item = item_id_to_flash[item_id];
    if (item[0] != "!") {
      result.push(item);
    } else {
      switch (item) {
        case "!sword":
          swords += 1;
          break;
        case "!shield":
          shields += 1;
          break;
        case "!swim":
          swims += 1;
          break;
        case "!totem":
          totems += 1;
          break;
        case "!ghostsword":
          ghost_sword_fusion = true;
          break;
        case "!firewand":
          fire_wand_fusion = true;
          break;
      }
    }
  }

  if (swords >= 1) {
    result.push("sword");
  }
  if (swords >= 2) {
    result.push("darksword");
  }
  if (shields >= 1) {
    result.push("shield");
  }
  if (shields >= 2) {
    result.push("darkshield");
  }
  if (swims >= 1) {
    result.push("conch");
  }
  if (swims >= 2) {
    result.push("feather");
  }
  for (let i = 0; i < totems; i++) {
    result.push(`totem${i}`);
  }
  if (result.includes("spear") && ghost_sword_fusion && swords >= 1) {
    result.push("ghostsword");
  }
  if (fire_wand_fusion && result.includes("wand") && result.includes("fire")) {
    result.push("firewand");
  }

  return result;
}

export let boss_locations = raw_location_data
  .filter((x) => {
    return x.is_boss;
  })
  .map((x) => {
    return x.flash_name;
  });
