import {useState} from 'react';
import Navbar from '../components/Navbar';
import JournalList from '../components/JournalList';
import JournalInput from '../components/JournalInput';
import "./journal.css"

const Journal = () => {
    
    const [entries, setEntries] = useState([
        { date: "Oct 14, 2023", content: "I'm already so excited to participate in this years HackHarvard! Can't wait!!" },
        { date: "Sep 29, 2023", content: "Today was a really stressful day. I've got so much homework and assignements." },
        { date: "Sep 24, 2023", content: "I'm already so excited to participate in this years HackHarvard! I hope I will make some great friends." },
    ]);

    const addNewEntry = (newEntry) => {
        setEntries(prevEntries => [newEntry, ...prevEntries]);
    };


    return(
        <div>
            <h3 class="page-title">Journal</h3>
            <h3 class="date">Oct 22, 2023</h3>
            <JournalInput onSubmit={addNewEntry} />
            <h3 class="entries">Past Entries</h3>
            <JournalList entries={entries}/>
            <Navbar current="journal"/>
        </div>
    )
}
export default Journal;