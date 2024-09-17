/* eslint-disable react/prop-types */
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
		isLoading: isGeolocationLoading,
		position: currentPosition,
	} = useGeolocation();

	useEffect(
		function () {
			if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
		},
		[mapLat, mapLng]
	);

	useEffect(
		function () {
			if (currentPosition) setMapPosition([currentPosition.lat, currentPosition.lng]);
		},
		[currentPosition]
	);

	return (
		<div className={styles.mapContainer}>
			{!currentPosition && (
				<Button type="position" onClick={() => getPosition()}>
					{isGeolocationLoading ? "Loading..." : "Use Your Location"}
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

				{currentPosition && <Marker position={mapPosition} />}

				<ChangeCity position={mapPosition} />
				<DetectClick />
			</MapContainer>
		</div>
	);
}

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
