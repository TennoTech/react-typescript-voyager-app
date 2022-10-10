import { MarkerF } from "@react-google-maps/api";

interface StoreMarkerProps {
    data: any
}

const StoreMarker: React.FC<StoreMarkerProps> = ({ data }) => {
    const { info, key, onSelect } = data;

    return (
        <div key={key}>
            <MarkerF
                position={info.location}
                label={{
                    color: "white",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    fontWeight: "100",
                    text: (key + 1).toString()
                }}
                onClick={() => onSelect(info)}
            />
        </div>
    );
}

export default StoreMarker;
