import Banner from '../reusable_components/banner/banner'
import Carousel from '../reusable_components/carousel'
import HowItWorks from '../reusable_components/howitworks/how'


const HomePage = () => {
    return (
        <div className ='homepage'>
            <Banner />
            <Carousel />
            <HowItWorks />
        </div>
)
}

export default  HomePage