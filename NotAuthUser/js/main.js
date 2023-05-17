const socket = io("http://localhost:4000/notAuthenticated");

console.log(socket)

const buttonNewNoti = document.getElementById('new-noti')

buttonNewNoti.addEventListener('click', (event) => {
    console.log('Nueva notificación')
    const newNotification = {
        title: 'Nueva notificación',
        description: 'Se ha realizado una compra del usuario "Fernanda Palacios" con el codigo #3546',
        date: new Date()
    }
    socket.emit('notifications:new', {
        notification: newNotification,
        roles: ['ADMIN']
    })
})

