import React from 'react';
import './journalentry.css';

// Individual Journal Entry Component
const JournalEntry = ({ date, content }) => {
    return (
        <div className="journal-entry">
            <h3>{date}</h3>
            <p>{content}</p>
        </div>
    );
}

export default JournalEntry;