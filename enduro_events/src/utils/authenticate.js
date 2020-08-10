const authenticate = async (url, body, onSuccess, onFail) => {

    try {
        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const authToken = promise.headers.get('Authorization');
        if(!authToken){
            onFail()
            return
        }
        document.cookie = `x-auth-token=${authToken}`

        const data = await promise.json();

        if (data.username && authToken) {
            onSuccess({
                username: data.username,
                id: data._id
            })
        } else {
            onFail()
        }
    }catch(e){
        onFail(e)
    }
}

export default authenticate