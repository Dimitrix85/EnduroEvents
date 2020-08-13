import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../../../components/page-layout/page-layout'
import Cloudinary from '../../../utils/cloudinary'
import styles from './create-story.module.css'
import Input from '../../../components/input/input'

const CreateStory = () => {

    // const [fileInputState, setFileInputState] = useState()
    // const [selectedFile, setSelectedFile] = useState()

    // const handleFileInputChange = (e) => {
    //     const file = e.target.files[0]
    //     setSelectedFile(file)
    //     setFileInputState(e.target.value)
    //     console.log(fileInputState)
    // }

    // const handleSubmitFile = async (e) => {
    //     e.preventDefault()
    //     if (!selectedFile) {
    //         return
    //     }

    //     const data = await Cloudinary(selectedFile)
    //     console.log(data.url)
    // }

    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    const [selectedFile, setSelectedFile] = useState()
    const [imgUrl, setImgUrl] = useState()
    const [title, setTitle] = useState()

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
        if (!selectedFile) return
        const reader = new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onloadend = async () => {
            const urlsssss = await uploadImage(reader.result);

        }
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            const data = await Cloudinary(base64EncodedImage)
            setImgUrl(data.secure_url)
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
                        <textarea rows="10" cols="80" id='title' title="Title" onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <input
                            id="file"
                            type="file"
                            name="image"
                            onChange={handleFileInputChange}
                            value={fileInputState}
                        />
                        <label for="file" className={styles.inputLabel}>Upload image</label>
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
                    <Link onClick={e => handleSubmitFile(e)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                         Send
                        </Link>
                </form>
            </div>


            {/* <div>
                <h1 className="title">Upload an Image</h1>
                <form onSubmit={handleSubmitFile} className="form">
                    <input
                        id="fileInput"
                        type="file"
                        name="image"
                        onChange={handleFileInputChange}
                        value={fileInputState}
                        className="form-input"
                    />
                    <button className="btn" type="submit">
                        Submit
                </button>
                </form>
                {previewSource && (
                    <img
                        src={previewSource}
                        alt="chosen"
                        style={{ height: '300px' }}
                    />
                )}
            </div> */}
        </PageLayout>
    )
}

export default CreateStory