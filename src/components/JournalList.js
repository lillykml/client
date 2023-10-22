import React from 'react';
import JournalEntry from './JournalEntry';

const JournalList = ({entries}) => {
    return (
        <div>
            {entries.map((entry, index) => (
                <JournalEntry key={index} date={entry.date} content={entry.content} />
            ))}
        </div>
    );
}

export default JournalList;
