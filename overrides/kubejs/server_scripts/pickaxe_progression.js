BlockEvents.broken('kubejs:hard_depthrock', event => {
    let item = event.player.mainHandItem;

    // List of allowed tools
    let allowedTools = [
        'kubejs:arcane_steel_pickaxe',
        'kubejs:ignitium_pickaxe',
        'minecraft:netherite_pickaxe',
        'cataclysm:black_steel_pickaxe',
        'kubejs:tectonic_abyssal_pickaxe'
    ];

    // If the tool is NOT in the list, stop the player from mining
    if (!item || !allowedTools.includes(item.id)) {
        event.cancel(); // Prevents the mining action from happening
        event.player.sendMessage("§cYou need a stronger pickaxe to mine this!");
    }
});

BlockEvents.broken(event => {
    let player = event.player;
    let block = event.block;
    let item = player.mainHandItem;

    // Allowed tools
    let allowedTools = [
        'kubejs:ignitium_pickaxe',
        'cataclysm:black_steel_pickaxe',
        'kubejs:tectonic_abyssal_pickaxe'
    ];

    // Get the player's current dimension
    let dimension = player.level.dimension;

    // Only apply the logic to the Nether dimension
    if (dimension == 'minecraft:the_nether') {
        // Check if the block is above Y=127 AND the block is at or above the player's feet
        if (block.y >= 255 && block.y >= player.y) {
            // If the player isn't holding an allowed tool, cancel the break
            if (!item || !allowedTools.includes(item.id)) {
                event.cancel();  // Stop the block from being mined
                player.displayClientMessage("You need a stronger pickaxe to break this block!"); // Optional: Add a message to the player
            }
        }
    }
});

BlockEvents.broken(event => {
    let player = event.player;
    let block = event.block;
    let item = player.mainHandItem;

    // Allowed tools
    let allowedTools = [
        'cataclysm:black_steel_pickaxe',
        'kubejs:tectonic_abyssal_pickaxe'
    ];

    // Get the player's current dimension
    let dimension = player.level.dimension;

    // Only apply the logic to the Nether dimension
    if (dimension == 'infernalcross:dimension') {
        // Check if the block is above Y=127 AND the block is at or above the player's feet
        if (block.y >= 62 && block.y >= player.y) {
            // If the player isn't holding an allowed tool, cancel the break
            if (!item || !allowedTools.includes(item.id)) {
                event.cancel();  // Stop the block from being mined
                player.displayClientMessage("You need a stronger pickaxe to break this block!"); // Optional: Add a message to the player
            }
        }
    }
});

BlockEvents.broken(event => {
    let player = event.player;
    let block = event.block;
    let item = player.mainHandItem;

    // Allowed tools
    let allowedTools = [
        'kubejs:tectonic_abyssal_pickaxe'
    ];

    // Get the player's current dimension
    let dimension = player.level.dimension;

    // Only apply the logic to the Nether dimension
    if (dimension == 'deeperdarker:otherside') {
        // Check if the block is above Y=127 AND the block is at or above the player's feet
        if (block.y >= 126 && block.y >= player.y) {
            // If the player isn't holding an allowed tool, cancel the break
            if (!item || !allowedTools.includes(item.id)) {
                event.cancel();  // Stop the block from being mined
                player.displayClientMessage("You need a stronger pickaxe to break this block!"); // Optional: Add a message to the player
            }
        }
    }
});

