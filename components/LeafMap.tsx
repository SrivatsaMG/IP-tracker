'use client';

// REFERENCE: https://stackoverflow.com/a/64634759
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';
import L, { Point } from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [40, 45],
  className: 'custom-icon',
});

type MapCoord = {
  lat: number;
  lng: number;
};

const Map = ({ lat, lng }: MapCoord) => {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      zoomControl={false}
      scrollWheelZoom={true}
      style={{
        height: `calc(100vh - 236px)`,
        width: '100%',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>
          Your Coordinates: <br />
          {lat} | {lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
