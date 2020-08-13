const links = (isLoggedIn) =>{
    const auth = [
        {
            title: 'All Stories',
            url: '/story'
        },
        {
            title: 'Write Story',
            url: '/story/create'
        }
    ]

    const guest = [
        {
            title: 'All Stories',
            url: '/story'
        }
    ]

    return isLoggedIn ? auth : guest
}

export default links