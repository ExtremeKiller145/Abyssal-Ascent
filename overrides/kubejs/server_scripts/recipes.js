ServerEvents.recipes(event => {
    event.shaped('minecraft:book', [
        'AA ',
        'AB ',
        '   '
    ], {
        A: 'farmersdelight:tree_bark',
        B: 'minecraft:string'
    })

    event.shaped(Item.of('tiered:armorers_hammer', 2), [
        'BBB',
        'BAB',
        ' A '
    ], {
        A: 'minecraft:stick',
        B: 'undergarden:cloggrum_ingot',
    })

    event.shaped('minecraft:anvil', [
        'BBB',
        ' A ',
        'AAA'
    ], {
        A: 'undergarden:cloggrum_ingot',
        B: 'undergarden:cloggrum_block'
    })

    event.shaped('kubejs:ink_in_a_bottle', [
        '   ',
        'AB ',
        '   '
    ], {
        A: 'minecraft:glass_bottle',
        B: 'minecraft:ink_sac'
    })

    event.shaped('minecraft:shears', [
        ' A ',
        'A  ',
        '   '
    ], {
        A: 'undergarden:cloggrum_ingot'
    })

    event.shaped(Item.of('irons_spellbooks:common_ink', 4), [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'kubejs:ink_in_a_bottle',
        B: 'irons_spellbooks:arcane_essence'
    })

    event.shaped('irons_spellbooks:dead_king_corpse_spawn_egg', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:bone',
        B: 'irons_spellbooks:tarnished_helmet',
    })

    event.shaped('minecraft:furnace', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'undergarden:depthrock',
    })

    event.shaped('explorerscompass:explorerscompass', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:netherite_ingot',
        B: 'kubejs:arcane_steel_ingot',
        C: 'bosses_of_mass_destruction:blazing_eye'
    })

    event.shaped('eeeabsmobs:ghost_steel_ingot', [
        'ABD',
        'ACD',
        'AED'
    ], {
        A: 'undergarden:forgotten_ingot',
        B: 'minecraft:nether_star',
        C: 'deeperdarker:heart_of_the_deep',
        D: 'minecraft:netherite_ingot',
        E: 'infinite_abyss:astarium_ore'
    })

    event.shaped('infinite_abyss:enhancing_table', [
        'AAA',
        'ABA',
        'CCC'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:smithing_table',
        C: 'minecraft:emerald'
    })

    event.shaped('irons_spellbooks:shriving_stone', [
        'AB ',
        '   ',
        '   '
    ], {
        A: 'undergarden:raw_cloggrum',
        B: 'irons_spellbooks:arcane_essence'
    })

    //arcane ingot
    event.shaped('irons_spellbooks:arcane_ingot', [
        'BBB',
        'BAB',
        'BBB'
    ], {
        A: 'undergarden:cloggrum_ingot',
        B: 'irons_spellbooks:arcane_essence'
    })

    //cinder essence
    event.shaped('irons_spellbooks:cinder_essence', [
        'BBB',
        'BAB',
        'BBB'
    ], {
        A: 'minecraft:netherite_scrap',
        B: 'irons_spellbooks:arcane_essence'
    })

    //druidic spell book
    event.shaped('irons_spellbooks:druidic_spell_book', [
        'DCB',
        'CAC',
        'BCD'
    ], {
        A: 'irons_spellbooks:rotten_spell_book',
        B: 'irons_spellbooks:magic_cloth',
        C: 'undergarden:deepturf',
        D: 'minecraft:leather'
    })

    //druidic spell book
    event.shaped('irons_spellbooks:druidic_spell_book', [
        'DCB',
        'CAC',
        'BCD'
    ], {
        A: 'irons_spellbooks:rotten_spell_book',
        B: 'irons_spellbooks:magic_cloth',
        C: 'undergarden:deepturf',
        D: 'minecraft:leather',
    })

    //divine pearl
    event.shaped('irons_spellbooks:divine_pearl', [
        'AB',
        '  ',
        '  '
    ], {
        A: 'undergarden:regalium_crystal',
        B: 'irons_spellbooks:arcane_essence',
    })

    //frozen bone
    event.shaped('irons_spellbooks:frozen_bone', [
        'AB ',
        '   ',
        '   '
    ], {
        A: 'undergarden:brute_tusk',
        B: 'undergardendelight:shimmerpearl',
    })

    //divine pearl
    event.shaped('irons_spellbooks:divine_pearl', [
        'DCB',
        'CAC',
        'BCD'
    ], {
        A: 'undergarden:regalium_crystal',
        B: 'irons_spellbooks:arcane_essence',
    })

    //copper ring
    event.shaped('irons_spellbooks:cooldown_ring', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'undergarden:regalium_crystal',
        B: 'irons_spellbooks:arcane_salvage',
    })

    //scroll forge
    event.shaped('irons_spellbooks:scroll_forge', [
        'AAA',
        ' B ',
        'BBB'
    ], {
        A: 'undergarden:shiverstone_bricks',
        B: 'undergarden:cloggrum_ingot',
    })

    //arcane anvil
    event.shaped('irons_spellbooks:arcane_anvil', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: 'irons_spellbooks:arcane_essence',
        B: 'minecraft:anvil',
    })

    event.shaped('irons_spellbooks:blank_rune', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        B: 'undergarden:shiverstone_bricks',
    })

    event.shaped('minecraft:chain', [
        ' B ',
        ' A ',
        ' B '
    ], {
        A: 'undergarden:cloggrum_ingot',
        B: 'undergarden:cloggrum_nugget',
    })

    event.shaped('irons_spellbooks:copper_spell_book', [
        'ACC',
        'BCC',
        'ACC'
    ], {
        A: 'undergarden:cloggrum_ingot',
        B: 'minecraft:string',
        C: 'minecraft:paper'
    })

    event.shaped('eeeabsmobs:nameless_guardian_egg', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: 'cataclysm:lava_power_cell',
        B: 'infinite_abyss:deeprock_golem_spirit_stone',
        C: 'infinite_abyss:opal'
    })

    event.shaped('naturescompass:naturescompass', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'undergarden:grongle_sapling',
        B: 'undergarden:grongle_log',
        C: 'minecraft:compass'
    })


    // Wigglewood Nature's Compass


    event.shaped('naturescompass:naturescompass', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'undergarden:wigglewood_sapling',
        B: 'undergarden:wigglewood_log',
        C: 'minecraft:compass'
    })


    // Smogstem Nature's Compass


    event.shaped('naturescompass:naturescompass', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'undergarden:smogstem_sapling',
        B: 'undergarden:smogstem_log',
        C: 'minecraft:compass'
    })

    event.shaped(Item.of('minecraft:paper', 3), [
        '   ',
        'AAA',
        '   '
    ], {
        A: 'farmersdelight:tree_bark'
    })

    //skillet recipes   
    // Nether brick for the recipe
    event.shaped('farmersdelight:skillet', [
        ' AA',
        ' AA',
        'B  '
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:nether_brick'
    })

    // Handle from spartanweaponry for the recipe
    event.shaped('farmersdelight:skillet', [
        ' AA',
        ' AA',
        'B  '
    ], {
        A: 'minecraft:iron_ingot',
        B: 'spartanweaponry:handle'
    })

    // cooking pot recipes
    // Nether brick for the recipe
    event.shaped('farmersdelight:cooking_pot', [
        'DAD',
        'CBC',
        'CCC'
    ], {
        A: 'minecraft:wooden_shovel',
        B: 'minecraft:water_bucket',
        C: 'minecraft:iron_ingot',
        D: 'minecraft:nether_brick'
    })
    // Handle from spartanweaponry for the recipe
    event.shaped('farmersdelight:cooking_pot', [
        'DAD',
        'CBC',
        'CCC'
    ], {
        A: 'minecraft:wooden_shovel',
        B: 'minecraft:water_bucket',
        C: 'minecraft:iron_ingot',
        D: 'spartanweaponry:handle'
    })

    event.shaped('irons_spellbooks:tarnished_helmet', [
        'ACA',
        'ABA',
        'ACA'
    ], {
        A: 'undergarden:regalium_crystal',
        B: 'irons_spellbooks:blank_rune',
        C: 'irons_spellbooks:arcane_essence'
    })

    event.shaped(Item.of('irons_spellbooks:uncommon_ink', 1), [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'irons_spellbooks:common_ink',
        B: 'minecraft:lapis_lazuli'
    })

    event.shaped(Item.of('irons_spellbooks:rare_ink', 1), [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'irons_spellbooks:uncommon_ink',
        B: 'undergarden:cloggrum_ingot'
    })

    event.shaped(Item.of('irons_spellbooks:epic_ink', 1), [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'irons_spellbooks:rare_ink',
        B: 'undergarden:regalium_crystal'
    })

    event.shaped(Item.of('irons_spellbooks:legendary_ink', 1), [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'irons_spellbooks:epic_ink',
        B: 'irons_spellbooks:arcane_ingot'
    })

    event.shaped(Item.of('farmersdelight:tree_bark', 4), [
        '   ',
        '   ',
        'AA '
    ], {
        A: '#minecraft:logs'
    })

    event.shaped('undergarden:cloggrum_battleaxe', [
        'BCB',
        ' A ',
        ' A '
    ], {
        A: 'minecraft:stick',
        B: 'undergarden:cloggrum_block',
        C: 'undergarden:cloggrum_ingot'
    })

    event.shaped('minecraft:blast_furnace', [
        'AAA',
        'ABA',
        'CCC'
    ], {
        A: 'undergarden:cloggrum_ingot',
        B: 'minecraft:furnace',
        C: 'undergarden:shiverstone_bricks'
    })

    event.shaped('minecraft:bucket', [
        '   ',
        'A A',
        ' A '
    ], {
        A: 'undergarden:cloggrum_ingot',
    })

    event.shapeless('undergarden:grongle_chest_boat', [
        'minecraft:chest',
        'undergarden:grongle_boat'
    ])

    // Wigglewood Chest Boat Recipe
    event.shapeless('undergarden:wigglewood_chest_boat', [
        'minecraft:chest',
        'undergarden:wigglewood_boat'
    ])

    // Smogstem Chest Boat Recipe
    event.shapeless('undergarden:smogstem_chest_boat', [
        'minecraft:chest',
        'undergarden:smogstem_boat'
    ])

    event.shaped('minecraft:cobweb', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:string',
        B: 'undergarden:goo_ball'
    })

    event.shaped('minecraft:compass', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'minecraft:redstone',
        B: 'undergarden:cloggrum_ingot'
    })

    event.shaped(Item.of('minecraft:glass_bottle', 3), [
        '   ',
        'A A',
        ' A '
    ], {
        A: 'undergarden:sediment_glass'
    })

    event.shaped('grapplemod:grapplinghook', [
        'AB ',
        '   ',
        '   '
    ], {
        A: 'undergarden:cloggrum_pickaxe',
        B: 'minecraft:lead'
    })

    event.shaped('minecraft:lever', [
        ' B ',
        ' A ',
        '   '
    ], {
        A: 'undergarden:depthrock',
        B: 'minecraft:stick'
    })

    event.shaped('minecraft:minecart', [
        '   ',
        'A A',
        'AAA'
    ], {
        A: 'undergarden:cloggrum_ingot',
    })

    event.shaped(Item.of('minecraft:powered_rail', 32), [
        'A A',
        'ABA',
        'ACA'
    ], {
        A: 'undergarden:regalium_crystal',
        B: 'minecraft:stick',
        C: 'undergarden:utheric_shard'
    })

    event.shaped(Item.of('minecraft:rail', 16), [
        'A A',
        'ABA',
        'A A'
    ], {
        A: 'undergarden:cloggrum_ingot',
        B: 'minecraft:stick'
    })

    event.shaped(Item.of('minecraft:redstone', 4), [
        '   ',
        '   ',
        'A  '
    ], {
        A: 'undergarden:utheric_shard'
    })

    event.shaped('minecraft:repeater', [
        '   ',
        'ABA',
        'CCC'
    ], {
        A: 'minecraft:redstone_torch',
        B: 'minecraft:redstone',
        C: 'undergarden:depthrock'
    })

    event.shaped('minecraft:respawn_anchor', [
        'AAA',
        'BBB',
        'AAA'
    ], {
        A: 'minecraft:obsidian',
        B: 'minecraft:glowstone'
    })

    event.shaped('minecraft:smithing_table', [
        'BB ',
        'AA ',
        'AA '
    ], {
        A: '#minecraft:planks',
        B: 'undergarden:cloggrum_ingot',
    })

    event.shaped(Item.of('minecraft:string', 2), [
        'A  ',
        ' B ',
        '  A'
    ], {
        A: 'undergarden:twistytwig',
        B: 'undergarden:goo_ball',
    })

    event.shaped(Item.of('undergarden:twistytwig', 2), [
        'A  ',
        ' A ',
        '  A'
    ], {
        A: 'minecraft:stick',
    })

    event.shaped(Item.of('tiered:weaponsmiths_hammer', 2), [
        'BAB',
        'BAB',
        ' A '
    ], {
        A: 'minecraft:stick',
        B: 'undergarden:cloggrum_ingot',
    })

    event.shaped('kubejs:arcane_steel_pickaxe', [
        'AB ',
        '   ',
        '   '
    ], {
        A: 'undergarden:froststeel_pickaxe',
        B: 'kubejs:arcane_steel_ingot',
    })

    event.shaped('kubejs:arcane_steel_ingot', [
        '   ',
        'ABC',
        '   '
    ], {
        A: 'irons_spellbooks:arcane_salvage',
        B: 'irons_spellbooks:arcane_ingot',
        C: 'undergarden:forgotten_ingot'
    })

    event.shaped('kubejs:ignitium_pickaxe', [
        'AB ',
        '   ',
        '   '
    ], {
        A: 'minecraft:netherite_pickaxe',
        B: 'cataclysm:ignitium_ingot'
    })

    event.shaped('undergarden:forgotten_upgrade_smithing_template', [
        'ACA',
        'ABA',
        'AAA'
    ], {
        A: 'undergarden:cloggrum_ingot',
        B: 'undergarden:forgotten_nugget',
        C: 'undergarden:depthrock'
    })

    event.shaped('cataclysm:abyssal_sacrifice', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:amethyst_shard',
        B: 'alexscaves:immortal_embryo'
    })

    event.shaped('kubejs:tectonic_abyssal_pickaxe', [
        'ADA',
        ' B ',
        ' C '
    ], {
        A: 'traveloptics:abyssal_spellweave_ingot',
        B: 'alexscaves:extinction_spear',
        C: 'deeperdarker:reinforced_echo_shard',
        D: 'celestial_core:warden_sclerite'
    })

    event.shaped('aquamirae:oxygen_tank', [
        'ABA',
        'ABA',
        'ABA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'aquatica:airtight_paste'
    })

    event.shaped('immersive_machinery:copperfin', [
        'BAB',
        'ADC',
        'BEB'
    ], {
        A: 'minecraft:glass',
        B: 'minecraft:copper_ingot',
        C: 'immersive_aircraft:propeller',
        D: 'aquamirae:oxygen_tank',
        E: 'immersive_aircraft:engine'
    })
})