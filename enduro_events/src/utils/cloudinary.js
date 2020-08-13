const cloudinary = async (file) => {

    try {
        const result = await fetch('http://localhost:9999/api/utils/upload', {
            method: 'POST',
            body: JSON.stringify({ data: file }),
            headers: { 'Content-Type': 'application/json' },
        });
        return await result.json()
    } catch (err) {
        console.error(err);
    }


}

export default cloudinary