import { createElement } from "react";
import { InfoWindowF } from "@react-google-maps/api";

interface StoreInfoProps {
    data: any
}

const StoreInfo: React.FC<StoreInfoProps> = ({ data }) => {
    const { selected, infoWindowOptions, onSelect } = data;

    return (
        <div>
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
                            {
                                Array.from(Array(selected.stars), (i, key) => {
                                    return createElement("span", { key: key });
                                })
                            }
                        </span>
                    </span>
                </div>
            </InfoWindowF>
        </div>
    );
}

export default StoreInfo;