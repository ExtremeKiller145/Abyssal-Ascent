StartupEvents.registry('item', event => {
    event.create('arcane_alloy')
        .displayName('Arcane Alloy')

    event.create('arcane_steel_pickaxe', 'pickaxe')
        .displayName('Arcane Steel Pickaxe')
        .tier('arcane_steel_tier')

    event.create('arcane_steel_ingot')
        .displayName('Arcane Steel Ingot')

    event.create('ebonbone')
        .displayName('Ebonbone')

    event.create('tectonic_abyssal_pickaxe', 'pickaxe')
        .displayName('Tectonic Abyssal Pickaxe')
        .tier('tectonic_abyssal_tools')

    event.create('ink_in_a_bottle')
        .displayName('Bottled Ink')

    event.create('ignitium_pickaxe', 'pickaxe')
        .displayName('Ignitium Pickaxe')
        .tier('ignitium_tools')
})