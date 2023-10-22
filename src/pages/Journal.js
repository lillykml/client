import Navbar from '../components/Navbar';
import JournalList from '../components/JournalList';
import "./journal.css"

const Journal = () => {
    return(
        <div>
            <h3 class="page-title">Journal</h3>
            <h3 class="date">Oct 22, 2023</h3>
            <h3 class="entries">Past Entries</h3>
            <JournalList />
            <Navbar current="journal"/>
        </div>
    )
}
export default Journal;