import React from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Location.css'
import { FaTriangleExclamation, FaDroplet, FaUtensils, FaHouse, FaShirt, FaBriefcaseMedical, FaLocationDot } from "react-icons/fa6";
function Location() {
    return (
        <div className='location-container'>

            <h1>Afet Yardımlaşma Haritası</h1>
            <p>İhtiyaçları harita üzerinde gör, destek ol, umut ol...</p>


            <div className="location-top">
                <MapContainer center={[39, 35]} zoom={6} style={{ height: "400px", width: "80%" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />


                    <CircleMarker
                        center={[38.3552, 38.3095]}
                        pathOptions={{
                            color: 'red',
                            fillColor: 'red'
                        }}
                    >

                        <Popup>
                            <h3>Malatya</h3>
                            <p>Su ihtiyacı</p>
                        </Popup>
                    </CircleMarker>
                </MapContainer>


                <div className="location-filter">

                    <div className="filter-card">
                        <b>Filtrele</b>
                        <p>İhtiyaç türü</p>
                        <ul>
                            <li>
                                <label>

                                    <div className="check-input">
                                        <div className="icon-content">
                                            <div className="water-icon">
                                                <FaDroplet />

                                            </div>
                                            Su

                                        </div>
                                        <input type='checkbox' />
                                    </div>
                                </label>

                            </li>
                            <li>
                                <label>
                                    <div className="check-input">
                                        <div className="icon-content">
                                            <div className="food-icon">
                                                <FaUtensils />

                                            </div>
                                            Gıda
                                        </div>
                                        <input type='checkbox' />
                                    </div>
                                </label>

                            </li>
                            <li>
                                <label>
                                    <div className="check-input">
                                        <div className="icon-content">
                                            <div className="house-icon">
                                                <FaHouse />

                                            </div>
                                            Barınma
                                        </div>
                                        <input type='checkbox' />
                                    </div>
                                </label>

                            </li>
                            <li>
                                <label>
                                    <div className="check-input">

                                        <div className="icon-content">
                                            <div className="dress-icon">
                                                <FaShirt />

                                            </div>
                                            Giyim
                                        </div>
                                        <input type='checkbox' />

                                    </div>
                                </label>

                            </li>
                            <li>
                                <label>
                                    <div className="check-input">
                                        <div className="icon-content">
                                            <div className="health-icon">
                                                <FaBriefcaseMedical />

                                            </div>
                                            Sağlık
                                        </div>
                                        <input type='checkbox' />
                                    </div>
                                </label>

                            </li>

                        </ul>
                    </div>
                    <div className='filter-line'></div>
                    <div className="emergency-card">
                        <b>Aciliyet Seviyesi</b>
                        <ul>
                            <li>
                                <label>
                                    <div className="check-input">
                                        <div className="icon-content">
                                            <div className="high-icon">
                                                <FaTriangleExclamation />

                                            </div>
                                            Yüksek
                                        </div>
                                        <input type="checkbox" />
                                    </div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <div className="check-input">
                                        <div className="icon-content">
                                            <div className="middle-icon">
                                                <FaTriangleExclamation />

                                            </div>
                                            Orta
                                        </div>
                                        <input type="checkbox" />
                                    </div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <div className="check-input">
                                        <div className="icon-content">
                                            <div className="low-icon">
                                                <FaTriangleExclamation />

                                            </div>
                                            Düşük
                                        </div>
                                        <input type="checkbox" />
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>


                    <div className="filter-card-end">
                        <b>Toplam İhtiyaç Noktası</b>
                        <div className="location-filter-icon">
                            <FaLocationDot className='icon' />
                            <span>12</span>

                        </div>


                    </div>
                </div>
            </div>



            <div className="location-bottom">
                <div className="location-bottom-text">
                    <h3>Son Yardım Talepleri</h3>
                    <button>Tümünü Gör</button>
                </div>
                <div className="location-bottom-cards">
                    <div className="location-bottom-card">
                        <div className="location-bottom-icon-1">
                            <div className="water-icon">
                                <FaDroplet />
                            </div>
                            <div className="location-bottom-content">
                                <b>Malatya</b>
                                <p>Su İhtiyacı</p>
                            </div>
                        </div>


                        <div className="location-bottom-deg">
                            <button className='low-btn'>Yüksek</button>
                              <span>→</span>
                        </div>
                          
                    </div>
                    <div className="location-bottom-card">

                        <div className="location-bottom-icon-2">
                             <div className="food-icon">
                                 <FaUtensils />
                             </div>
                              </div>

                          
                            <div className="location-bottom-content">
                                <b>Adıyaman</b>
                                <p>Gıda İhtiyacı</p>
                            </div>
                        


                        <div className="location-bottom-deg">
                            <button className='mid-btn'>Orta</button>
                              <span>→</span>
                          
                        </div>
                    </div>
                    <div className="location-bottom-card">
                        <div className="location-bottom-content">
                            <div className="location-bottom-icon-3">
                                <div className="house-icon">
                                    <FaHouse />
                                </div>
                                <div className="location-bottom-content">
                                    <b>Hatay</b>
                                    <p>Barınma İhtiyacı</p>
                                </div>
                            </div>
                        </div>


                        <div className="location-bottom-deg">
                            <button className='mid-btn' >Orta</button>
                            <span>→</span>
                        </div>
                            
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Location