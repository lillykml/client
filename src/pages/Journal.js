import Header from '../components/Header'
import Navbar from '../components/Navbar';

const Journal = () => {
    return(
        <div>
            <Header />
            <h2>Journal Page</h2>
            <Navbar current="journal"/>
        </div>
    )
}

export default Journal;