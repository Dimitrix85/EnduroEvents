import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import styles from './all-stories.module.css'
import PageLayout from '../../../components/page-layout/page-layout'
import StoryCard from '../../../components/story-card/story-card'

class AllStories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 5,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData = async () => {

        const res = await fetch(`http://localhost:9999/api/story`)


        const data = await res.json();
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

        const postData = slice.map((story,index) => {
            return (<StoryCard key={index} description={story.description}
                title={story.title} img={story.img} id={story._id} />)
        }
        )

        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),

            postData
        })

    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    
    render() {
        return (
            <PageLayout>
                <div>
                    {this.state.postData}
                    <div className={styles.container}>
                        <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            breakClassName={styles["break-me"]}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={styles["pagination"]}
                            subContainerClassName={styles["pages pagination"]}
                            activeClassName={styles["active"]} />
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default AllStories