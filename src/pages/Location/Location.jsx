import React from 'react'
import './Location.css'
import { MapContainer , TileLayer , CircleMarker , Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
function Location() {
    return (
        <div className='location-container'>

            <MapContainer 
                center={[39,35]}
                     zoom={6} 
                     style={{height:"500px", width:"100%"}}
            >
                <TileLayer   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors">

                </TileLayer>

                <CircleMarker center={[38.3552 , 38.3095]} radius={10} pathOptions={{color: "red" , fillColor:"red"}}>


                    <Popup>
                        <h3>Malatya</h3>
                        <p>Su ihtiyacı</p>
                    </Popup>
                </CircleMarker>

            </MapContainer>
           
        </div>
    )
}

export default Location