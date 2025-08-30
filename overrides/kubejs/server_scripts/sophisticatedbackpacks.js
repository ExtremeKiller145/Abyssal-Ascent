// Upgrade backpack to Iron Backpack using Cloggrum Ingots
ServerEvents.recipes(event => {
    event.custom({
        type: 'sophisticatedbackpacks:backpack_upgrade', // Use the custom recipe type for upgrades
        conditions: [
            {
                itemRegistryName: 'sophisticatedbackpacks:iron_backpack', // Check if the item is enabled
                type: 'sophisticatedcore:item_enabled'
            }
        ],
        pattern: [
            'III',
            'IBI',
            'III'
        ],
        key: {
            I: {
                item: 'undergarden:cloggrum_ingot' // Upgrade item
            },
            B: {
                item: 'sophisticatedbackpacks:backpack' // The backpack being upgraded
            }
        },
        result: {
            item: 'sophisticatedbackpacks:iron_backpack' // Resulting item is an Iron Backpack
        }
    });
});
