import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';

const PlaceForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && description && location) {
            await db.collection('places').add({
                name,
                description,
                location: location.split(',').map(coord => parseFloat(coord.trim()))
            });
            setName('');
            setDescription('');
            setLocation('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>إضافة مكان جديد</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اسم المكان"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="وصف المكان"
                required
            />
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="الإحداثيات (خط العرض, خط الطول)"
                required
            />
            <button type="submit">إضافة</button>
        </form>
    );
};

export default PlaceForm;