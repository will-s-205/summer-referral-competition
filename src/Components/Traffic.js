import '../App.scss'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function Traffic() {
    return (
        <div className='traffic minor-grid-item'>
            <div className='container'>
                <Header title='Traffic' button1='Source' button2='City' />
                <Main number={6} data={'company'} />
                <Footer seeAll='See traffic sources' />
            </div>
        </div>
    )
}

export default Traffic