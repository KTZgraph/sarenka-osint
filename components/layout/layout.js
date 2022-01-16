import { Fragment } from 'react'
import Footer from './footer'
import MainNavigation from './main-navigation';

function Layout(props){
    return(
        <Fragment>
            <MainNavigation/>
            <main className='wrapper'>{props.children}</main>
            <Footer/>
        </Fragment>
    )
}

export default Layout;