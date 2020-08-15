import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import styles from './all-enduro.module.css'
import PageLayout from '../../../components/page-layout/page-layout'
import StoryCard from '../../../components/story-card/story-card'
import { useEffect } from 'react';

const AllEnduro = () => {

    const [offset, setOffset] = useState(0)
    const [data, setData] = useState([])
    const [perPage, setPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const [pageCount, setPageCount] = useState()
    const [postData, setPostData] = useState()

    const receivedData = async () => {

        const res = await fetch(`http://localhost:9999/api/story`)


        const data = await res.json();
        const slice = data.slice(offset, offset + perPage)

        const postData = slice.map((story, index) => {
            return (<StoryCard key={index} description={story.description}
                title={story.title} img={story.img} id={story._id} />)
        }
        )

        setPageCount(Math.ceil(data.length / perPage))

        setPostData(postData)
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;

        setCurrentPage(selectedPage)
        setOffset(offset)
        receivedData()

    };

    useEffect(() => {
        receivedData()
    })
    
    return (
        <PageLayout>
            <div>
                <h1>Enduro</h1>
                {postData}
                <div className={styles.container}>
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={styles["break-me"]}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={styles["pagination"]}
                        subContainerClassName={styles["pages pagination"]}
                        activeClassName={styles["active"]} />
                </div>
            </div>
        </PageLayout>
    )
}

export default AllEnduro