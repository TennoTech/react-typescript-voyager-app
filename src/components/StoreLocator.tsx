import { useEffect, useRef, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { PositionData } from "../types";
import StoreMarker from "./StoreMarker"
import StoreInfo from "./StoreInfo";

const positions: PositionData[] = [
    {
        title: "Bubble World",
        location: {
            lat: 49.2869718,
            lng: -123.1272012,
        },
        stars: 4,
        description: "Bubble Tea Cafe",
        link: "https://www.instagram.com/robsonbubbleworld/",
    },
    {
        title: "Time Out Cafe",
        location: {
            lat: 49.2873707,
            lng: -123.1248194,
        },
        stars: 3,
        description: "Small Local Cafe",
        link: "https://timeoutcafe.ca/",
    },
    {
        title: "ThaiGo",
        location: {
            lat: 49.26832,
            lng: -123.0050552,
        },
        stars: 5,
        description: "Thai Food Restaurant",
        link: "https://broadwayfoodsgroup.ca/thaigo/",
    },
];

const StoreLocator = (): JSX.Element => {
    const [selected, setSelected] = useState<PositionData | null>(positions[0]);
    const [locationIndex, setLocationIndex] = useState<number>(0);
    const [size, setSize] = useState<google.maps.Size | null>(null);
    const infoWindowOptions = { pixelOffset: size };
    const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const cycleTimer: number = 5000;

    // setting offset for infowindow
    const createOffsetSize = (): void => setSize(new window.google.maps.Size(0, -40));

    // move to new location
    const transition = (): void => {
        // resetting locations
        if (locationIndex !== positions.length - 1) {
            setLocationIndex(locationIndex + 1);
            onSelect(positions[locationIndex + 1]);
        } else {
            setLocationIndex(0);
            onSelect(positions[0]);
        }
    };

    // saving which position is clicked
    const onSelect = (item: PositionData | null): void => {
        setSelected(item);
    };

    useEffect((): void => {
        // switching location every 5 sec
        transitionTimer.current = setTimeout(transition, cycleTimer);

    }, [locationIndex]);

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
            onLoad={createOffsetSize}
        >
            <GoogleMap
                mapContainerStyle={{ height: "100vh", width: "100%" }}
                center={positions[locationIndex].location}
                zoom={16}
            >
                {
                    positions?.map((i, key) => (
                        <div key={key}>
                            <StoreMarker data={{ info: i, key: key, onSelect: onSelect }} />
                        </div>
                    ))
                }
                {
                    <StoreInfo data={
                        {
                            selected: selected,
                            infoWindowOptions: infoWindowOptions,
                            onSelect: onSelect
                        }
                    } />
                }
            </GoogleMap>
        </LoadScript >
    );
};

export default StoreLocator;
