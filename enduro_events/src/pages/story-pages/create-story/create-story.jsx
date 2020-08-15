import React, { useState, useContext } from 'react'
import {  useHistory } from 'react-router-dom'
import PageLayout from '../../../components/page-layout/page-layout'
import Cloudinary from '../../../utils/cloudinary'
import styles from './create-story.module.css'
import Input from '../../../components/input/input'
import UserContext from '../../../Contex'
import Popup from '../../../components/popup/popup'
import Button from '../../../components/submitButton/submitButton'

const CreateStory = () => {

    const [fileInputState, setFileInputState] = useState("")
    const [previewSource, setPreviewSource] = useState("")
    const [selectedFile, setSelectedFile] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')

    const context = useContext(UserContext)
    const history = useHistory();

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault()
        setError(false)

        if (!title || !description) {
            setError(true)
            setMessage('Title and description are required')
            return
        }

        let story = {}
        if (!selectedFile) {
            story = {
                title,
                description,
                author: context.user.id,
                created_at: new Date()
            }

        } else {

            const reader = new FileReader()
            reader.readAsDataURL(selectedFile)
            reader.onloadend = async () => {
                const urlssss = await uploadImage(reader.result);
                story = {
                    title,
                    description,
                    img: urlssss.secure_url,
                    author: context.user.id,
                    created_at: new Date()
                }
            }
        }
        setTimeout(async () => {
         
            await fetch('http://localhost:9999/api/story/', {
                method: 'POST',
                body: JSON.stringify(story),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            history.push('/story')

        }, 2000);
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            const data = await Cloudinary(base64EncodedImage)
            setFileInputState('')
            setPreviewSource('')
            return data
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <PageLayout>
            <div className={styles["login-box"]}>
                <h2>Write your story</h2>
                <form onSubmit={e => handleSubmitFile(e)}>
                    <div className={styles["user-box"]}>
                        <Input id='title' title="Title" onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className={styles["user-box"]}>
                        <textarea rows="10" cols="80" id='title' title="Title" onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <input
                            id="file"
                            type="file"
                            name="image"
                            onChange={handleFileInputChange}
                            value={fileInputState}
                        />
                        <label htmlFor="file" className={styles.inputLabel}>Upload image</label>
                    </div>
                    {previewSource && (
                        <div>
                            <img
                                src={previewSource}
                                alt="chosen"
                                className={styles.image}
                            />
                        </div>
                    )}
                   <Button title='Send' onClick={e => handleSubmitFile(e)}/>
                </form>
            </div>
            { error ? <Popup message={message} action={()=> setError(false)}/> : <span></span>}
        </PageLayout>
    )
}

export default CreateStory