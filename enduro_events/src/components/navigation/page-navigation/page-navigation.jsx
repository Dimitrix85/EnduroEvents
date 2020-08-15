import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './page-navigation.module.css'
import DropDown from '../../dropdown/dropdown'
import StoryNavigation from '../../../utils/page-navigation/story-navigation'
import EnduroNavigation from '../../../utils/page-navigation/enduro-navigation'
import UserContext from '../../../Contex'


const PageNavigation = () => {

    const context = useContext(UserContext)

    const storyLinks = StoryNavigation(context.loggedIn)
    const motorcycleLinks = EnduroNavigation(context.loggedIn)

    return (
        <div className={styles.navigation}>
            <ul >
                <li className={styles.listItem}>
                    <Link to='/'>
                        Home
                        </Link>
                </li>
                <DropDown title='Story' url='/story' links={storyLinks} />
                <DropDown title='Enduro' url='/enduro' links={motorcycleLinks} />
            </ul>
        </div>
    )
}

export default PageNavigation