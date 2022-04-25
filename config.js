module.exports = {
        TOKEN: 'OTU5NzQ4OTc2OTQ3NjM0MTc2.YkgZ4w.uKWxPs6NRjIP0bk5q0klmq32pNk',
        px: 'b!',
    

    opt: {
        DJ: {
            enabled: false,
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume','tavern']
        },
        selfDeaf: false,
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25 
            }
        }
    }
};
