import Header from '../components/Header'
import Navbar from '../components/Navbar';

const Home = () => {
    return(
        <div>
            <Header />
            <h2>Home Page</h2>
            <Navbar current="home"/>
        </div>
    )
}

export default Home;