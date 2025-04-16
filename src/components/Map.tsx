
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const HEIGHT = "280px";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Define the component
const Map = () => {
  const [position] = useState<[number, number]>([
    18.510814267654, 73.77285809427802,
  ]); // Default: Pune location
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  // Commented geolocation code
  //   useEffect(() => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (pos) => {
  //           const { latitude, longitude } = pos.coords;
  //           setPosition([latitude, longitude]);
  //           setLoading(false);
  //         },
  //         (err) => {
  //           let errorMessage = "Unable to retrieve location.";
  //           if (err.code === err.POSITION_UNAVAILABLE) {
  //             errorMessage =
  //               "Location data is currently unavailable. Showing default location.";
  //           } else if (err.code === err.PERMISSION_DENIED) {
  //             errorMessage =
  //               "Location permission denied. Please enable it in your browser settings.";
  //           } else if (err.code === err.TIMEOUT) {
  //             errorMessage = "Location request timed out.";
  //           }
  //           setError(errorMessage);
  //           setLoading(false);
  //         },
  //         {
  //           enableHighAccuracy: true,
  //           timeout: 10000, // 10 seconds
  //           maximumAge: 0,
  //         }
  //       );
  //     } else {
  //       setError("Geolocation is not supported by this browser.");
  //       setLoading(false);
  //     }
  //   }, []);

  if (loading) return <div>Loading map...</div>;
  if (error) {
    return (
      <div>
        <p>{error}</p>
        <div style={{ height: HEIGHT, width: "100%", borderRadius: "0.75rem" }}>
          {/* @ts-ignore - Ignoring TypeScript errors for react-leaflet props */}
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>Default location: Pune</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: HEIGHT, width: "100%", borderRadius: "0.75rem" }}>
      {/* @ts-ignore - Ignoring TypeScript errors for react-leaflet props */}
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>You are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
