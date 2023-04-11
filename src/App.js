import { MapContainer,TileLayer,Marker, Popup } from "react-leaflet";
import { Icon} from "leaflet";
import './App.css';
import {hospitales,ambulancias} from './Recursos.js'
//import {ambulancias} from './Ambulancias.js'

const iconHospital = new Icon({
  iconUrl: "/hospital.png",
  iconSize: [48, 48]
});
const iconAmbulance = new Icon({
  iconUrl: "/ambulancia.png",
  iconSize: [30, 30]
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
      {hospitales.map((marker) => (
        <Marker key={marker.id} position={marker.geocode} icon={iconHospital}>
            <Popup>{marker.nombre}</Popup>
        </Marker>
      ))}
      {ambulancias.map((marker) => (
        <Marker key={marker.id} position={marker.geocode} icon={iconAmbulance}>
          <Popup>{marker.nombre},{marker.estado}</Popup>
        </Marker>
      ))}

    </MapContainer>
  );
}

