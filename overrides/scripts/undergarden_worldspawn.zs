import crafttweaker.api.events.EventManager;
import crafttweaker.forge.api.event.level.LevelEvent;
import crafttweaker.forge.api.event.Event;
import crafttweaker.forge.api.event.level.CreateSpawnPositionEvent;
import crafttweaker.api.game.Server;
import crafttweaker.api.world.ServerLevel;
import crafttweaker.forge.api.event.entity.player.PlayerLoggedInEvent;
import crafttweaker.api.bracket.CommandStringDisplayable;
import crafttweaker.forge.api.event.entity.player.PlayerRespawnEvent;
import crafttweaker.api.util.math.BlockPos;
import crafttweaker.api.data.MapData;
import crafttweaker.api.data.IData;
import crafttweaker.api.util.math.Random;
import crafttweaker.api.block.BlockState;
import crafttweaker.api.world.CraftTweakerSavedData;
import crafttweaker.api.world.SavedData;


//Allows keeping track of whether the player login attempt is the first one ever or not

public class They {
    public static var arrives = 0;
}

//Handles teleporting the player to the Undergarden if it's their first time logging into the world
//as well as setting the world spawn values.

events.register<crafttweaker.forge.api.event.entity.player.PlayerLoggedInEvent>(event => {
    println("PlayerLoggedInEvent ran!");
    val sPlayerLevel = event.entity.level as ServerLevel;
    val sPlayer = event.entity.displayName as string;
    val sDataLevel = sPlayerLevel.server.getLevel(<resource:minecraft:overworld>);
    val sPointCommand = "execute in undergarden:undergarden run spawnpoint "+sPlayer+" ~ ~ ~";
    val sServer = sPlayerLevel.server;
    if !(sPlayerLevel.isClientSide) {
        if (They.arrives == 1 && sDataLevel.customData.data.isEmpty == false) {
            val spawnX = sDataLevel.customData.data["spawnPointX"] as int;
            val spawnY = sDataLevel.customData.data["spawnPointY"] as int;
            val spawnZ = sDataLevel.customData.data["spawnPointZ"] as int;
            val sTpCommand = "execute in undergarden:undergarden run tp "+sPlayer+" "+spawnX+" "+spawnY+" "+spawnZ;
            sPointCommand = "execute in undergarden:undergarden run spawnpoint "+sPlayer+" "+spawnX+" "+spawnY+" "+spawnZ;
            sPlayerLevel.server.executeCommand(sTpCommand, true);
            sPlayerLevel.server.executeCommand(sPointCommand, true);
            They.arrives = 0;
        } else {
            if (sDataLevel.customData.data.isEmpty == true) {
                println("Worldspawn custom data is empty!");
                val sTpCommand = "execute in undergarden:undergarden run tp "+sPlayer+" ~ ~ ~";
                sPlayerLevel.server.executeCommand(sTpCommand, true);
                println("Setting worldspawn custom data!");
                val foundBlockstate = <blockstate:undergarden:depthrock>;
                val sDim = sServer.getLevel(<resource:undergarden:undergarden>);
                val spawnPos as BlockPos;
                val pos as BlockPos;
                val xSpawn = 0;
                val zSpawn = 0;
                val yPos = 31;
                while foundBlockstate != <blockstate:undergarden:deepturf_block> {
                  println("safePositionSearcher loop ran!");
                  xSpawn = sDim.random.nextIntBetweenInclusive(-64, 64);
                  zSpawn = sDim.random.nextIntBetweenInclusive(-64, 64);
                  while yPos <= 100 {
                        pos = new BlockPos(xSpawn, yPos, zSpawn);
                        if (sDim.getBlockState(pos) == <blockstate:undergarden:deepturf_block> || yPos == 100) {
                            foundBlockstate = sDim.getBlockState(pos);
                            spawnPos = pos;
                            break;
                        } else {
                            yPos++;
                        }
                    }
                }
                yPos++;
                sDataLevel.customData.data = ({"spawnPointX": xSpawn as IData, "spawnPointY": yPos as IData, "spawnPointZ": zSpawn as IData});
                sTpCommand = "execute in undergarden:undergarden run tp "+sPlayer+" "+xSpawn as int+" "+yPos as int+" "+zSpawn as int;
                sPointCommand = "execute in undergarden:undergarden run spawnpoint "+sPlayer+" "+xSpawn as int+" "+yPos as int+" "+zSpawn as int;
                sPlayerLevel.server.executeCommand(sTpCommand, true);
                sPlayerLevel.server.executeCommand(sPointCommand, true);
            }
        }
    }
});

//Flips They.arrives to 1 to check if it's the first player login or not.

events.register<crafttweaker.forge.api.event.level.CreateSpawnPositionEvent>(event => {
    println("CreateSpawnPositionEvent ran!");
    They.arrives = 1;
});

//Handles respawning player in the Undergarden in case of player's spawn getting reset.

events.register<crafttweaker.forge.api.event.entity.player.PlayerRespawnEvent>(event => {
    println("PlayerRespawnEvent ran!");
    val sPlayerLevel = event.entity.level as ServerLevel;
    val sPlayer = event.entity.displayName as string;
    if !("SpawnX" in event.entity.data && "SpawnY" in event.entity.data && "SpawnZ" in event.entity.data)
        {
            val sPlayerLevel = event.entity.level as ServerLevel;
            val sDataLevel = sPlayerLevel.server.getLevel(<resource:minecraft:overworld>);
            val spawnX = sDataLevel.customData.data["spawnPointX"] as int;
            val spawnY = sDataLevel.customData.data["spawnPointY"] as int;
            val spawnZ = sDataLevel.customData.data["spawnPointZ"] as int;
            val sPlayer = event.entity.displayName as string;
            val sTpCommand = "execute in undergarden:undergarden run tp "+sPlayer+" "+spawnX+" "+spawnY+" "+spawnZ;
            val sPointCommand = "execute in undergarden:undergarden run spawnpoint "+sPlayer+" "+spawnX+" "+spawnY+" "+spawnZ;
            sPlayerLevel.server.executeCommand(sTpCommand, true);
            sPlayerLevel.server.executeCommand(sPointCommand, true);
        }
});


//                while foundBlockstate != <blockstate:undergarden:deepturf_block> {
//                    println("safePositionSearcher loop ran!");
//                   xSpawn = sDim.random.nextIntBetweenInclusive(-64, 64);
//                    zSpawn = sDim.random.nextIntBetweenInclusive(-64, 64);
//                    while yPos <= 100 {
//                        pos = new BlockPos(xSpawn, yPos, zSpawn);
//                        if (sDim.getBlockState(pos) == <blockstate:undergarden:deepturf_block> || yPos == 100) {
//                            foundBlockstate = sDim.getBlockState(pos);
//                            spawnPos = pos;
//                            break;
//                        } else {
//                            yPos++;
//                        }
//                    }
//                }

