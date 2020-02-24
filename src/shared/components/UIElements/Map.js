// import React, {Component} from 'react';

// class Map extends Component{

//     state={
//         location: {
//             lng: null,
//             lat: null
//         }
//     }

//     componentDidMount(){
//         const { lat, lng } = this.props;
 
//         new window.ol.Map({
//             target: this.refs.mapRef,
//             layers: [
//                 new window.ol.layer.Tile({
//                     source: new window.ol.source.OSM()
//                 })
//             ],
//             view: new window.ol.View({
//                 center: window.ol.proj.fromLonLat([lng, lat]),
//                 zoom: 16
//             })
//         })

//         this.setState({
//             location: {
//                 lng: this.props.lng,
//                 lat: this.props.lat
//             }
//         })

//     }

//     componentDidUpdate(){
//         if(this.props.lat!==this.state.location.lat || this.props.lng!==this.state.location.lng){
//             const { lat, lng } = this.props;
 
//             new window.ol.Map({
//                 target: this.refs.mapRef,
//                 layers: [
//                     new window.ol.layer.Tile({
//                         source: new window.ol.source.OSM()
//                     })
//                 ],
//                 view: new window.ol.View({
//                     center: window.ol.proj.fromLonLat([lng, lat]),
//                     zoom: 16
//                 })
//             })

//             this.setState({
//                 location: {
//                     lng: this.props.lng,
//                     lat: this.props.lat
//                 }
//             })
//         }

//     }

//     render(){

//         return(
//             <div
//                 ref="mapRef"
//                 className={`map`}
//                 style={this.props.style}
//                 id="map"
//             ></div>
//         )
//     }

// }

// export default Map;

import React, { useRef, useEffect } from 'react';
 
import './Map.css';
 
const Map = props => {
  const mapRef = useRef();
  
  const { lat, lng } = props;
 
  useEffect(() => {
    new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM()
        })
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([lng, lat]),
        zoom: 16
      })
    });
  }, [lat, lng]);
 
  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};
 
export default Map;