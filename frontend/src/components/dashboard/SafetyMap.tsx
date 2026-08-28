import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";

type RiskLevel = "high" | "medium" | "low" | "shelter";

const locations: { name: string; lat: number; lng: number; risk: RiskLevel; count?: number }[] = [
  { name: "Nairobi, Kenya", lat: -1.2921, lng: 36.8219, risk: "low", count: 12 },
  { name: "Lagos, Nigeria", lat: 6.5244, lng: 3.3792, risk: "high", count: 24 },
  { name: "Accra, Ghana", lat: 5.6037, lng: -0.1870, risk: "medium", count: 8 },
  { name: "Kampala, Uganda", lat: 0.3476, lng: 32.5825, risk: "medium", count: 5 },
  { name: "Johannesburg, South Africa", lat: -26.2041, lng: 28.0473, risk: "low", count: 10 },
  { name: "Kigali, Rwanda", lat: -1.9403, lng: 29.8739, risk: "shelter" },
  { name: "Cairo, Egypt", lat: 30.0444, lng: 31.2357, risk: "shelter" },
  { name: "Dar es Salaam, Tanzania", lat: -6.7924, lng: 39.2083, risk: "low", count: 6 },
];

const riskColors: Record<RiskLevel, string> = {
  high: "#dc2626",
  medium: "#d6a32a",
  low: "#0b1f3a",
  shelter: "#7a4a2b",
};

function numberIcon(count: number, color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="
      background:${color};
      color:white;
      width:30px;height:30px;
      border-radius:9999px;
      display:flex;align-items:center;justify-content:center;
      font-size:12px;font-weight:700;
      font-family:Inter,sans-serif;
      border:2px solid white;
      box-shadow:0 1px 4px rgba(0,0,0,0.3);
    ">${count}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

function shelterIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="
      background:${color};
      width:26px;height:26px;
      border-radius:9999px;
      display:flex;align-items:center;justify-content:center;
      border:2px solid white;
      box-shadow:0 1px 4px rgba(0,0,0,0.3);
    ">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
        <path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>
      </svg>
    </div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
  });
}

const legendItems: { label: string; color: string }[] = [
  { label: "High Risk", color: riskColors.high },
  { label: "Medium Risk", color: riskColors.medium },
  { label: "Low Risk", color: riskColors.low },
  { label: "Safe Shelter", color: riskColors.shelter },
];

export function SafetyMap() {
  return (
    <div className="relative">
      
      <MapContainer
        center={[2, 20]}
        zoom={3}
        scrollWheelZoom={true}
        zoomControl={false}
        className="h-80 w-full rounded-xl"
      >
        <TileLayer
  attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
  url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
/>

        <ZoomControl position="bottomright" />

        {locations.map((loc) =>
          loc.risk === "shelter" ? (
            <Marker key={loc.name} position={[loc.lat, loc.lng]} icon={shelterIcon(riskColors.shelter)}>
              <Popup>
                <strong>{loc.name}</strong>
                <br />
                Safe shelter
              </Popup>
            </Marker>
          ) : (
            <Marker
              key={loc.name}
              position={[loc.lat, loc.lng]}
              icon={numberIcon(loc.count!, riskColors[loc.risk])}
            >
              <Popup>
                <strong>{loc.name}</strong>
                <br />
                {loc.count} active cases · {loc.risk} risk
              </Popup>
            </Marker>
          )
        )}
      </MapContainer>

      <div className="absolute bottom-3 left-3 bg-white rounded-lg shadow-md p-3 text-xs space-y-1.5 z-[1000]">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: item.color }} />
            <span className="text-dark-gray">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}