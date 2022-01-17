import { Fragment } from 'react'
import Footer from './footer'
import MainNavigation from './main-navigation';
import MainMenu from './main-menu'

function Layout(props){
    return(
        <Fragment>
            <MainNavigation/>
            <MainMenu/>
            <main className='main'>{props.children}</main>
            {/* <Footer/> */}
        </Fragment>
    )
}

export default Layout;