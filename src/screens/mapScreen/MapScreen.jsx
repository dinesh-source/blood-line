import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "../../components/Pin";
import { popup } from "./popUp";
import { useStateProvider } from "../../utils/StateProvider";
import { addUserCoordinates, getDonorData } from "../../api/firebaseStore";

const MapScreen = () => {
  const [{ email }] = useStateProvider();
  const mapContainer = useRef(null);
  mapboxgl.accessToken =
    "pk.eyJ1IjoiMjFhOTVhMDUxNCIsImEiOiJjbGpzbmgzYmMwY3h2M2ZudXV1Y2xqZXJ6In0.b7JQwGeUDEiGFnOIiwWnsw";

  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          setLng(pos.coords.longitude);
          setLat(pos.coords.latitude);
        });
        addUserCoordinates(lat, lng);
      }
    };

    const getDonorLocation = async () => {
      const data = await getDonorData();
      data.forEach((doc) => {
        console.log(doc.coods);
        if (email !== doc.email) {
          new mapboxgl.Marker(<Pin />)
            .setLngLat([doc.coods.longitude, doc.coods.latitude])
            .setPopup(popup)
            .addTo(map);
        }
      });
    };

    const map = new mapboxgl.Map({
      style: "mapbox://styles/mapbox/navigation-day-v1",
      center: [0, 0],
      zoom: 16.5,
      pitch: 45,
      bearing: -17.6,
      container: "map",
      antialias: true,
    });

    map.on("style.load", () => {
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === "symbol" && layer.layout["text-field"]
      ).id;
      map.addLayer(
        {
          id: "add-3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"],
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"],
            ],
            "fill-extrusion-opacity": 0.6,
          },
        },
        labelLayerId
      );

      new mapboxgl.Marker(<Pin />)
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(map);
    });
    getUserLocation();
    getDonorLocation();

    map.flyTo({
      center: [lng, lat],
      essential: true,
    });
  }, [lat, lng]);

  return (
    <Container
      ref={mapContainer}
      id="map"
      className="map-container"
    ></Container>
  );
};

export default MapScreen;

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`;
