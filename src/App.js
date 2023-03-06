import { MapContainer,TileLayer,Marker } from "react-leaflet";
import { Icon } from "leaflet";
import './App.css';

const icon = new Icon({
  iconUrl: "/hospital.png",
  iconSize: [48, 48]
});

export function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <h1> Mapa Zonal Ecu 911</h1>
      </header>
    </div>
  );
}

export function Mapa(){
  return(
    <MapContainer center={[-0.2843216,-78.4569866]} zoom={11}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker 
      position={[-0.0897513,-78.4766635]}
      icon={icon}
       />
       <Marker 
      position={[-0.167013758396417, -78.47262926797796]}
      icon={icon}
       />
    </MapContainer>
  );
}

