import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './page-navigation.module.css'
import DropDown from '../../dropdown/dropdown'
import StoryNavigation from '../../../utils/page-navigation/story-navigation'
import MotorcycleNavigation from '../../../utils/page-navigation/motorcycle-navigation'
import BicycleNavigation from '../../../utils/page-navigation/bicycle-navigation'
import UserContext from '../../../Contex'


const PageNavigation = () => {

    const context = useContext(UserContext)

    const storyLinks = StoryNavigation(context.loggedIn)
    const motorcycleLinks = MotorcycleNavigation(context.loggedIn)
    const bicycleLinks = BicycleNavigation(context.loggedIn)

    return (
        <div className={styles.navigation}>
            <ul >
                <li className={styles.listItem}>
                    <Link to='/'>
                        Home
                        </Link>
                </li>
                <DropDown title='Story' url='/story' links={storyLinks} />
                <DropDown title='Motorcycle' url='/enduro' links={motorcycleLinks} />
                <DropDown title='Bicycle' url='/bicycle' links={bicycleLinks} />
            </ul>
        </div>
    )
}

export default PageNavigation