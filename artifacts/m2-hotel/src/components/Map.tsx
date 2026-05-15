import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const createIcon = (color: string) => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

// ─── UPDATE THIS PIN ──────────────────────────────────────────────────────────
// To move the M2 pin to the exact location:
//  1. Open Google Maps and find your property
//  2. Right-click the pin → "What's here?"
//  3. Copy the two numbers shown (e.g. 7.8981, 98.2960)
//  4. Replace the values in the M2 marker below
// ─────────────────────────────────────────────────────────────────────────────
const HOTEL_LAT = 7.8981;
const HOTEL_LNG = 98.2958;

const markers = [
  {
    position: [HOTEL_LAT, HOTEL_LNG] as [number, number],
    title: "M2 Rooms & Stays",
    description: "M2 Room For Rent · Your home in Patong",
    icon: createIcon("red"),
  },
  {
    position: [7.8965, 98.2932] as [number, number],
    title: "Patong Beach",
    description: "Main beach strip, ~5 min walk",
    icon: createIcon("blue"),
  },
  {
    position: [7.8938, 98.2950] as [number, number],
    title: "Bangla Road",
    description: "Famous nightlife & street food",
    icon: createIcon("violet"),
  },
  {
    position: [7.8912, 98.2970] as [number, number],
    title: "Jungceylon Shopping Mall",
    description: "Shopping, dining, and cinema",
    icon: createIcon("green"),
  },
  {
    position: [7.8972, 98.2990] as [number, number],
    title: "Patong Hospital",
    description: "Local medical care",
    icon: createIcon("grey"),
  },
  {
    position: [7.8992, 98.3020] as [number, number],
    title: "Patong Boxing Stadium",
    description: "Authentic Muay Thai fights",
    icon: createIcon("orange"),
  },
];

export function Map() {
  return (
    <div className="h-[400px] md:h-[500px] w-full rounded-none overflow-hidden border border-border">
      <MapContainer
        center={[7.8956, 98.2978]}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker.position} icon={marker.icon}>
            <Popup className="font-sans">
              <div className="p-1">
                <h4 className="font-bold text-base mb-1">{marker.title}</h4>
                <p className="text-sm text-muted-foreground m-0">{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
