import React from 'react';
import JournalEntry from './JournalEntry';

const JournalList = () => {
    const entries = [
        { date: "Oct 14, 2023", content: "Lorem ipsum dolor sit amet consectetur. Sit nulla massa est et ac dictum integer..." },
        { date: "Sep 29, 2023", content: "Lorem ipsum dolor sit amet consectetur. Sit nulla massa est et ac dictum integer..." },
        { date: "Sep 24, 2023", content: "Lorem ipsum dolor sit amet consectetur. Sit nulla massa est et ac dictum integer..." },
    ];

    return (
        <div>
            {entries.map((entry, index) => (
                <JournalEntry key={index} date={entry.date} content={entry.content} />
            ))}
        </div>
    );
}

export default JournalList;
