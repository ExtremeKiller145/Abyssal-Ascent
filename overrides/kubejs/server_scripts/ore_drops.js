function addOreDrop(event, ore, drop){
    event.addBlockLootModifier(ore)
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0]) 
        .removeLoot(ore)
        .pool((pool) => {
            pool.addLoot(drop);
            pool.applyOreBonus("minecraft:fortune");
        })
}



LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("kubejs:depthrock_arcane_ore")  //target block
        .removeLoot("kubejs:depthrock_arcane_ore") //removes the original blocks drop when mined
        .dropExperience(10) //drops xp
        .addWeightedLoot(
            [1, 4],
            [Item.of("irons_spellbooks:arcane_essence")] //adds arcane essence to the loot when mined, will drop between 2 and 4 essences
        )

    event
        .addBlockLootModifier("kubejs:shiverstone_arcane_ore")  //target block
        .removeLoot("kubejs:shiverstone_arcane_ore") //removes the original blocks drop when mined
        .dropExperience(10) //drops xp
        .addWeightedLoot(
            [1, 4],
            [Item.of("irons_spellbooks:arcane_essence")] //adds arcane essence to the loot when mined, will drop between 2 and 4 essences
        )

    event
        .addBlockLootModifier("kubejs:depthrock_lapis_ore")  //target block
        .removeLoot("kubejs:depthrock_lapis_ore") //removes the original blocks drop when mined
        .dropExperience(10) //drops xp
        .addWeightedLoot(
            [2, 4],
            [Item.of("minecraft:lapis_lazuli")] //adds arcane essence to the loot when mined, will drop between 2 and 4 essences
        )

    event
        .addBlockLootModifier("kubejs:shiverstone_lapis_ore")  //target block
        .removeLoot("kubejs:shiverstone_lapis_ore") //removes the original blocks drop when mined
        .dropExperience(10) //drops xp
        .addWeightedLoot(
            [2, 4],
            [Item.of("minecraft:lapis_lazuli")] //adds arcane essence to the loot when mined, will drop between 2 and 4 essences
        )

        event
        .addBlockLootModifier("kubejs:depthrock_emerald_ore")  //target block
        .removeLoot("kubejs:depthrock_emerald_ore") //removes the original blocks drop when mined
        .dropExperience(10) //drops xp
        .addWeightedLoot(
            [1, 2],
            [Item.of("minecraft:emerald")] //adds arcane essence to the loot when mined, will drop between 2 and 4 essences
        )

        event
        .addBlockLootModifier("kubejs:depthrock_diamond_ore")  //target block
        .removeLoot("kubejs:depthrock_diamond_ore") //removes the original blocks drop when mined
        .dropExperience(10) //drops xp
        .addWeightedLoot(
            [1, 2],
            [Item.of("minecraft:diamond")] //adds arcane essence to the loot when mined, will drop between 2 and 4 essences
        )

        event
        .addBlockLootModifier("kubejs:limestone_coal_ore")  //target block
        .removeLoot("kubejs:limestone_coal_ore") //removes the original blocks drop when mined
        .dropExperience(10) //drops xp
        .addWeightedLoot(
            [1, 3],
            [Item.of("minecraft:coal")] //adds arcane essence to the loot when mined, will drop between 2 and 4 essences
        )

        event
        .addBlockLootModifier("kubejs:limestone_copper_ore")  //target block
        .removeLoot("kubejs:limestone_copper_ore") //removes the original blocks drop when mined
        .dropExperience(10) //drops xp
        .addWeightedLoot(
            [1, 2],
            [Item.of("minecraft:raw_copper")] //adds arcane essence to the loot when mined, will drop between 2 and 4 essences
        )

        event
        .addBlockLootModifier("kubejs:limestone_diamond_ore")  //target block
        .removeLoot("kubejs:limestone_diamond_ore") //removes the original blocks drop when mined
        .dropExperience(10) //drops xp
        .addWeightedLoot(
            [1, 2],
            [Item.of("minecraft:diamond")] //adds arcane essence to the loot when mined, will drop between 2 and 4 essences
        )

        event
        .addBlockLootModifier("kubejs:limestone_mythril_ore")  //target block
        .removeLoot("kubejs:limestone_mythril_ore") //removes the original blocks drop when mined
        .dropExperience(10) //drops xp
        .addWeightedLoot(
            [1, 2],
            [Item.of("many_more_ores_and_crafts:raw_mythril")] //adds arcane essence to the loot when mined, will drop between 2 and 4 essences
        )

        event
        .addBlockLootModifier("kubejs:limestone_gold_ore")  //target block
        .removeLoot("kubejs:limestone_gold_ore") //removes the original blocks drop when mined
        .dropExperience(10) //drops xp
        .addWeightedLoot(
            [1, 2],
            [Item.of("minecraft:raw_gold")] //adds arcane essence to the loot when mined, will drop between 2 and 4 essences
        )

        event
        .addBlockLootModifier("kubejs:limestone_amethyst_ore")  //target block
        .removeLoot("kubejs:limestone_amethyst_ore") //removes the original blocks drop when mined
        .dropExperience(10) //drops xp
        .addWeightedLoot(
            [1, 2],
            [Item.of("minecraft:amethyst_shard")] //adds arcane essence to the loot when mined, will drop between 2 and 4 essences
        )
});