Config = {}

Config.Core = "QBCore" -- ESX or QBCore
Config.CoreFolderName = "qb-core"  -- es_extended || qb-core

Config.PlayerLoadedEvent = "QBCore:Client:OnPlayerLoaded" -- esx:playerLoaded || QBCore:Client:OnPlayerLoaded
Config.PlayerUnloadEvent = "QBCore:Client:OnPlayerUnload" -- esx:onPlayerLogout || QBCore:Client:OnPlayerUnload  

Config.Maps = {
    {
        name = 'Power Station',
        red = vector4(2853.18, 1580.61, 24.52, 154.59),
        blue = vector4(2823.56, 1467.17, 24.56, 164.19),
        powerups = {
            {
                name = 'haste',
                active = false,
                prop = `prop_mk_boost`,
                propNet = nil,
                coords = vector4(-147.43, 6343.54, 31.52, 140.09),
                nextSpawnTime = nil,
            },
        },
        zone = {
            style = 'box',
            coords = vec3(-204.74, 6322.84, 41.45),
            size = vec3(250, 900, 40),
            rotation = 315.75,
        }
    },
    {
        name = 'Vespucci Beach',
        red = vector4(-1620.52, -950.81, 8.33, 225.56),
        blue = vector4(-1706.97, -879.5, 8.28, 44.0),
        powerups = {
            {
                name = 'haste',
                active = false,
                prop = `prop_mk_boost`,
                propNet = nil,
                coords = vector4(1022.08, 2407.56, 55.19, 276.68),
                nextSpawnTime = nil,
            },
            {
                name = 'haste',
                active = false,
                prop = `prop_mk_boost`,
                propNet = nil,
                coords = vector4(1050.81, 2285.67, 49.39, 92.12),
                nextSpawnTime = nil,
            },
        },
        zone = {
            style = 'box',
            coords = vec3(1028.42, 2375.92, 49.16),
            size = vec3(310, 320, 40),
            rotation = 0,
        }
    },
}

Config.Rules = {
    ['allowVehicles'] = true, --prevents players from entering vehicles if false
    ['maxScore'] = 1, --sets the score limit to win the match
    ['autoRespawn'] = false, --automatically respawn at base on death
    ['respawnTime'] = 5, --in seconds. delay before respawn, when you die, if autoRespawn
    ['restrictedCreation'] = false, --if true, restricts match creation to a list of user licenses.
    ['restrictedCreators'] = { --this is the lise of licenses that can create matches if restrictedCreation is true
        'license:a05d3c3c2981b9368a7e8757895b0c40cff74f4e',
    },
    ['showZoneBorder'] = true, --this turns zones debug setting on. I could see why you want this on, but I personally things its stupid.
    ['enablePowerups'] = false, --enables powerups spawning during the match
    ['powerupDelay'] = 90, --seconds before the first powerups spawn, and subsequent spawns after pickup, if enablePowerups is true
}

Config.MatchInfo = {
    owner = nil,
    started = false,
    paused = false,
    sources = {},
    notifyStyle = {
        ['red'] = {
            backgroundColor = '#d62828',
            color = '#ffffff'
        },
        ['blue'] = {
            backgroundColor = '#0077b6',
            color = '#ffffff'
        },
        ['admin'] = {
            backgroundColor = '#42464D',
            color = '#ffffff'
        },
    },
    chosenMap = 0,
    powerups = {},
}

Config.TeamData = {
    ['red'] = {
        members = {},
        flagStatus = 'returned',
        flagNet = nil,
        flagBlip = nil,
        currentflagCoords = nil,
        baseflagCoords = nil,
        blipColor = 79, --red, https://docs.fivem.net/docs/game-references/blips/
        points = 0,
        enemyFlagCarrier = nil,
        prop = `apa_prop_flag_australia`
    }, 
    ['blue'] = {
        members = {},
        flagStatus = 'returned',
        flagNet = nil,
        flagBlip = nil,
        currentflagCoords = nil,
        baseflagCoords = nil,
        blipColor = 80, --blue, https://docs.fivem.net/docs/game-references/blips/
        points = 0,
        enemyFlagCarrier = nil,
        prop = `apa_prop_flag_australia`
    }
}