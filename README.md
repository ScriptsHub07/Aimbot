getgenv().Configs = {
    ["Team"] = "Marine",
    ["FPS Boost"] = true,
    ["Farm Boss Drops"] = {
        ["Enable"] = true,
        ["When x2 Exp Expired"] = true
    },
    ["Hop Player Near"] = false,
    ["Soul Guitar"] = true,
    ["Find Fruit"] = false, -- Will find 1m+ fruit to unlock swan door to access third sea
    ["Cursed Dual Katana"] = true
}
loadstring(game:HttpGet("https://raw.githubusercontent.com/verudous/Xero-Hub/refs/heads/main/kaitun.lua"))()
ScreenGui:Destroy()
