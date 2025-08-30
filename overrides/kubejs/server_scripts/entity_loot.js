LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("alexsmobs:mimic_octopus")
        .addWeightedLoot(
            [1, 10],
            [Item.of("minecraft:ink_sac").withChance(50)]
        );

        event
        .addEntityLootModifier("eeeabsmobs:nameless_guardian")
        .addWeightedLoot(
            [3, 6],
            [Item.of("cataclysm:black_steel_ingot").withChance(50)]
        );
});