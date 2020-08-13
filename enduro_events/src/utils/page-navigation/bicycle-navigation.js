const links = (isLoggedIn) =>{
    const auth = [
        {
            title: 'All Events',
            url: '/bicycle'
        },
        {
            title: 'Create Event',
            url: '/bicycle/create'
        }
    ]

    const guest = [
        {
            title: 'All Events',
            url: '/bicycle'
        }
    ]

    return isLoggedIn ? auth : guest
}

export default links