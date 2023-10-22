import React, { useState, useEffect } from 'react';
import "./datacard.css";

// Individual DataCard component
const DataCard = ({ title, endpoint }) => {
    const [data, setData] = useState('Loading...');

    useEffect(() => {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                setData(data.value); // Assuming the API response has a 'value' key with the desired data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setData('Error loading data');
            });
    }, [title, endpoint]); // The effect will re-run if 'title' or 'endpoint' changes

    return (
        <div className="data-card">
            <h3>{title}</h3>
            <p>{data}</p>
        </div>
    );
};

export default DataCard;