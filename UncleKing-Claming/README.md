
## Description
This is a Capture The Flag game mode for FiveM, with custom flag props and customizable rulesets. Two teams fight to capture eachothers flag Made By UncleK1ng.

## Basics
 - A player uses the command `claming` to initiate a match. This person becomes the match admin. This notifies all players that a match is being setup.
 - The match admin selects a map to play on before players can join teams.
 - Once a map is selected, other players can join a team using the command `clamingmenu`.
 - When at least one player joins the match, the match admin can start the match.
 - Players can change teams before the match has begun. Match admins can change the map before the match has begun.
 
## Rules
 - If your flag is taken, hunt down the flag carrier, and try to kill them and return your flag by touching it while it's dropped. This will return your flag back to your base.
 - If your teammate dies with the enemy flag, you can pickup the dropped flag.
 - You can only score a point by bringing the enemy flag back to your team's returned flag.
 - If you are carrying the flag, and exit the match area, the enemy flag will be returned to them.

## Commands
**/claiming**

This command will initiate the CTF match, and designate this person as the admin of the match. 

**menu**

Once a ctf match is initiated and the match map has been chosen by the admin, players can:
 - Choose the team they would like to play for.
 - Remove from their chosen team.

Once the match has been created the admin can:
 - Choose the map the match is played on.
 - Start the match, given there are players.
 - End the match while the game is in progress.
 - Pause the match. This will freeze all the match players in place, until unpaused.

## Customized Rulesets/Config
Customizations of the rules and even the colors of the two team can be made within the config.

**allowVehicles** - Prevents players from entering vehicles if false.

**maxScore** - Sets the score limit to win the match.

**autoRespawn** - Automatically respawn at base on death

**respawnTime** - In seconds. delay before respawn, when you die, if autoRespawn

**restrictedCreation** - If true, restricts match creation to a list of user licenses.

**showZoneBorder** - This turns zones debug setting on. I could see why you want this on, but I personally think its stupid.

**enablePowerups** - Determines if powerups will spawn during the match.

**powerupDelay** - After the initial start of the match, and after each pickup, determines the delay until the next powerup spawn, in seconds.

## Dependencies
- [ox_lib](https://github.com/overextended/ox_lib)
- [assets_ctfflags](https://github.com/JoeSzymkowiczFiveM/assets_ctfflags) - These are the models specified in the existing game config. I guess you could technically use any other model in FiveM, you would just need to specify them in the game config.
- qb-core/qbox/ESX - When autoRespawn is set to true, the script calls the revive event compatible with these frameworks. Compatibility can be expanded to other frameworks if someone wants to do a PR or send me the event names.

