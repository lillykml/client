import React, { useState } from 'react';
import './journalinput.css'
import SubmitButton from './SubmitButton';

const JournalInput = ({ onSubmit }) => {
    const [content, setContent] = useState('');

    const handleSubmission = () => {
        if (content) {
            const currentDate = new Date();
            const formattedDate = `${currentDate.toLocaleString('default', { month: 'short' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
            onSubmit({ date: formattedDate, content });
            setContent('');
        } else {
            alert('Please fill the content!');
        }
    }

    return (
        <div className="journal-input-container">
            <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Enter your journal content..."
                rows="5"
            ></textarea>
            <SubmitButton onClick={handleSubmission} />
        </div>
    );
}

export default JournalInput;