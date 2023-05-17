

function getTokenRandom() {
    const tokens = [
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGE2MmE0NTJjMjY0ZjIwZTM2ZDkzOSIsInR5cGUiOiJBRE1JTiIsImlhdCI6MTY4NDI4Mjg4NX0.y90NqdninG3t5zt9O7pCFBgwPB98HOPe1JUBw72PZD4',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTJhODhiNmI4NzliODEzZDFlMDRmZiIsInR5cGUiOiJESVJFQ1RPUiIsImlhdCI6MTY4NDI4MzEwM30.8DuRBe6JMuV8RiDGNlrmn2UwQazX5IT9X6lAICis63g'
    ]

    const numRandom = Math.floor(Math.random() * tokens.length)
    return tokens[numRandom]
}

const socket = io("http://localhost:4000/authenticated", {
    query: {
        token: getTokenRandom()
    }
});

console.log(socket)

socket.on('notifications:all', (notifications) => {
    console.log('Todas las notificaciones')
    console.log(notifications)
})

socket.on('notifications:current', (newNotification) => {
    console.log('Nueva notification...')
    console.log(newNotification)
})
