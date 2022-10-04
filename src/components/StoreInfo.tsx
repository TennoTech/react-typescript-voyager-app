import { useEffect, useRef, useState, memo, createElement } from "react";
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";

interface PositionData {
    title: string;
    location: { lat: number; lng: number };
    stars: number;
    description: string;
    link: string;
}

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

const StoreInfo = (): JSX.Element => {
    const [selected, setSelected] = useState<PositionData | null>(positions[0]);
    const [locationIndex, setLocationIndex] = useState<number>(0);
    const [size, setSize] = useState<google.maps.Size | null>(null);
    const infoWindowOptions = { pixelOffset: size };
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        timer.current = setTimeout(transition, 1000000);

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

                {positions?.map((i, key) => (
                    <div key={key}>
                        <MarkerF
                            position={i.location}
                            label={{
                                color: "white",
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                fontWeight: "100",
                                text: (key + 1).toString(),
                            }}
                            onClick={() => onSelect(i)}
                        />
                    </div>
                ))}

                {selected?.location && (
                    <InfoWindowF
                        position={selected.location}
                        options={infoWindowOptions}
                        onCloseClick={() => onSelect(null)}
                    >
                        <div className="info-container">
                            <a href={selected.link} target="_blank" rel="noreferrer">
                                <h1>{selected.title}</h1>
                                <p>{selected.description}</p>
                            </a>
                            <span className="review-holder">
                                <span className="review">
                                    {Array.from(Array(selected.stars), (i, key) => {
                                        return createElement("span", { key: key });
                                    })}
                                </span>
                            </span>
                        </div>
                    </InfoWindowF>
                )}

            </GoogleMap>
        </LoadScript >
    );
};

export default memo(StoreInfo);
