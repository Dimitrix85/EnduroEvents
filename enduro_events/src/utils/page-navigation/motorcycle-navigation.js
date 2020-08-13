const links = (isLoggedIn) =>{
    const auth = [
        {
            title: 'All Events',
            url: '/enduro'
        },
        {
            title: 'Create Event',
            url: '/enduro/create'
        }
    ]

    const guest = [
        {
            title: 'All Events',
            url: '/enduro'
        }
    ]

    return isLoggedIn ? auth : guest
}

export default links