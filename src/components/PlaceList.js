import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';

const PlaceList = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('places').onSnapshot(snapshot => {
            const placesData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPlaces(placesData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h2>قائمة الأماكن</h2>
            <ul>
                {places.map(place => (
                    <li key={place.id}>
                        <h3>{place.name}</h3>
                        <p>{place.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlaceList;