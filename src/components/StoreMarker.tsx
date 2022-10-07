import { memo } from "react"
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";

const StoreMarker = (): JSX.Element => {

    return (<div></div>)
    //         <div key={key}>
    //             <MarkerF
    //                 position={i.location}
    //                 label={{
    //                     color: "white",
    //                     fontFamily: "sans-serif",
    //                     fontSize: "15px",
    //                     fontWeight: "100",
    //                     text: (key + 1).toString()
    //                 }}
    //                 onClick={() => onSelect(i)}
    //             />
    //         </div>
    //     )
    // positions?.map((i, key) => (
    //     <div key={key}>
    //         <MarkerF
    //             position={i.location}
    //             label={{
    //                 color: "white",
    //                 fontFamily: "sans-serif",
    //                 fontSize: "15px",
    //                 fontWeight: "100",
    //                 text: (key + 1).toString(),
    //             }}
    //             onClick={() => onSelect(i)}
    //         />
    //     </div>
    // ))
}


export default memo(StoreMarker);