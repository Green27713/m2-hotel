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

const markers = [
  {
    position: [7.8956, 98.2978] as [number, number],
    title: "M2 Rooms & Stays",
    description: "Your home away from home",
    icon: createIcon("red"),
  },
  {
    position: [7.8966, 98.2950] as [number, number],
    title: "Patong Beach",
    description: "Main beach strip, 5 mins walk",
    icon: createIcon("blue"),
  },
  {
    position: [7.8935, 98.2965] as [number, number],
    title: "Bangla Road",
    description: "Famous nightlife & entertainment",
    icon: createIcon("violet"),
  },
  {
    position: [7.8915, 98.2985] as [number, number],
    title: "Jungceylon Shopping Mall",
    description: "Shopping, dining, and cinema",
    icon: createIcon("green"),
  },
  {
    position: [7.8970, 98.3000] as [number, number],
    title: "Patong Hospital",
    description: "Local medical care",
    icon: createIcon("grey"),
  },
  {
    position: [7.8990, 98.3030] as [number, number],
    title: "Patong Boxing Stadium",
    description: "Authentic Muay Thai matches",
    icon: createIcon("orange"),
  },
  {
    position: [7.9050, 98.3200] as [number, number],
    title: "Tiger Kingdom Phuket",
    description: "Wildlife attraction",
    icon: createIcon("yellow"),
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
