import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useGeolocation } from "../hooks/useGeolocation";
import { useURLPosition } from "../hooks/useURLPosition";
import styles from "./Map.module.css";
import Button from "./Button";

function Map() {
	const [mapPosition, setMapPosition] = useState([13.0843, 80.2705]);
	const [mapLat, mapLng] = useURLPosition();
	const {
		getPosition,
		isLoading: isPositionLoading,
		position: currentPosition,
	} = useGeolocation();
	const navigate = useNavigate();

	useEffect(
		function () {
			if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
		},
		[mapLat, mapLng]
	);

	useEffect(
		function () {
			if (currentPosition) {
				setMapPosition([currentPosition.lat, currentPosition.lng]);
				navigate(`weather?lat=${currentPosition.lat}&lng=${currentPosition.lng}`);
			}
		},
		[currentPosition, navigate]
	);

	return (
		<div className={styles.mapContainer}>
			{!currentPosition && (
				<Button type="position" onClick={getPosition}>
					{isPositionLoading ? "Loading..." : "Use Your Location"}
				</Button>
			)}

			<MapContainer
				className={styles.map}
				center={mapPosition}
				zoom={10}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
				/>

				{(currentPosition || (mapLat && mapLng)) && <Marker position={mapPosition} />}

				<ChangeCity position={mapPosition} />
				<DetectClick />
			</MapContainer>
		</div>
	);
}

// eslint-disable-next-line react/prop-types
function ChangeCity({ position }) {
	const map = useMap();
	map.setView(position);
	return null;
}

function DetectClick() {
	const navigate = useNavigate();
	useMapEvents({
		click: (e) => navigate(`weather?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
	});
}

export default Map;
