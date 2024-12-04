import React, { useState } from 'react';

const Rating = ({ onRate }) => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
        onRate(rate);
    };

    return (
        <div>
            <h2>تقييم المكان</h2>
            {[1, 2, 3, 4, 5].map((rate) => (
                <span key={rate} onClick={() => handleRating(rate)}>
                    {rate <= rating ? '★' : '☆'}
                </span>
 ))}
        </div>
    );
};

export default Rating;
``` ### 9. `src/styles/App.css`

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

h1, h2 {
    text-align: center;
}

.chat-window {
    border: 1px solid #ccc;
    padding: 10px;
    height: 300px;
    overflow-y: scroll;
    background-color: #fff;
}

form {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

input[type="text"], textarea {
    margin: 0 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}