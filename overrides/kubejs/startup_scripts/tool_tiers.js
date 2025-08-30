ItemEvents.toolTierRegistry(event => {
    event.add('tectonic_abyssal_tools', tier => {
        tier.uses = 5000; // High durability
        tier.speed = 12; // Faster mining
        tier.attackDamageBonus = 4.0; // Custom attack damage
        tier.level = 7; // Set harvest level to 7 for Molten Pickaxe
        tier.enchantmentValue = 20; // Custom enchantment value
        tier.repairIngredient = '#forge:ingots/molten';
    });

    event.add('ignitium_tools', tier => {
        tier.uses = 4000; // High durability
        tier.speed = 12; // Faster mining
        tier.attackDamageBonus = 4.0; // Custom attack damage
        tier.level = 7; // Set harvest level to 7 for Molten Pickaxe
        tier.enchantmentValue = 20; // Custom enchantment value
        tier.repairIngredient = '#forge:ingots/molten';
    });

    event.add('arcane_steel_tier', tier => {
        tier.uses = 3048; // High durability
        tier.speed = 9.0; // Faster mining
        tier.attackDamageBonus = 5.0; // Custom attack damage
        tier.level = 6; // Set harvest level to 7 for Molten Pickaxe
        tier.enchantmentValue = 20; // Custom enchantment value
        tier.repairIngredient = 'kubejs:arcane_steel';
    });
});