// Handle when a player respawns
PlayerEvents.respawned(event => {
  applyPotionEffect(event.player);
});

// Handle when a player logs in (joins the world)
PlayerEvents.loggedIn(event => {
  applyPotionEffect(event.player);
});

// Function to apply the potion effect
function applyPotionEffect(player) {
  // Apply the potion effect with a duration of 1000 ticks
  player.potionEffects.add("infinite_abyss:depth_resistance", 2147483647, 0, true, true);
}
