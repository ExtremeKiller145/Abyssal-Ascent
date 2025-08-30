// Removes catalyst recipe

ServerEvents.recipes(event => {
    event.remove({ output: 'undergarden:catalyst' }) //removes undergarden catalst recipe
    event.remove({ id: 'explorerscompass:explorers_compass' })
    event.remove({ id: 'farmersdelight:paper_from_tree_bark' })
    event.remove({ id: 'immersive_machinery:copperfin' })
})
