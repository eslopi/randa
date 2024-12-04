import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { db } from '../firebase/firebaseConfig';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXNsb3BpIiwiYSI6ImNtMWV6OHI3eDFoeGMybHF6bmR0OXcwbWIifQ.PgBVsl5bPmcOQ_47NDK10A';

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // ID العنصر الذي سيحتوي على الخريطة
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.0444, 31.2357], // إحداثيات المركز (مثال: القاهرة)
            zoom: 12
        });

        // إضافة علامات الأماكن من قاعدة البيانات
        db.collection('places').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const place = doc.data();
                new mapboxgl.Marker()
                    .setLngLat(place.location)
                    .setPopup(new mapboxgl.Popup().setHTML(`<h3>${place.name}</h3><p>${place.description}</p>`))
                    .addTo(map);
            });
        });

        return () => map.remove