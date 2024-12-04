import React from 'react';
import Map from './components/Map';
import Chat from './components/Chat';
import PlaceForm from './components/PlaceForm';
import PlaceList from './components/PlaceList';

const App = () => {
    return (
        <div>
            <h1>تطبيق أماكن السهر والترفيه</h1>
            <Map />
            <PlaceForm />
            <PlaceList />
            <Chat />
        </div>
    );
};

export default App;