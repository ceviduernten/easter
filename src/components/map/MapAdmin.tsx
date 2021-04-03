import React, {Component} from "react";
import {Button, Header} from "semantic-ui-react";
import store from "../../store";
import * as huntLocationActions from "../../actions/huntLocationActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LoadingSpinner from "../shared/spinner/LoadingSpinner";
import InfoWrapper from "../shared/error/InfoWrapper";
import {InfoWrapperTypes} from "../../global/InfoWrapperTypes";
import {isEmpty} from "../../helpers/ObjectHelper";
import FormMessageContainer from "../../containers/FormMessageContainer";
import {Map as MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import L, {LatLngTuple} from 'leaflet';
import marker from '../../assets/easter-egg.svg';
import markerFound from '../../assets/easter-egg-found.svg';
import FoundLocation from "./FoundLocation";
import CitiesSelectList from "../shared/CitiesSelectList";


class MapAdmin extends Component<any, any> {
    constructor(props : any){
        super(props);
        this.state = {
            timer : null,
            initalLoad: false
        }
    }

    componentDidMount(): void {
        let timer = setInterval(MapAdmin.update, 30 * 1000);
        this.setState({timer});
        if (!this.state.initalLoad) {
            MapAdmin.update();
            this.setState({initalLoad : true});
        }
    }

    componentWillUnmount(): void {
        clearInterval(this.state.timer);
    }

    static update(): void {
        store.dispatch(huntLocationActions.getAllHuntLocations());
    }

    found(element : any) : void {
        store.dispatch(huntLocationActions.getHuntLocationAndCallAction(element.idHuntLocation, "found"));
    }

    onCityChanged(event : any) : void {
        let filter = event.target.value;
        store.dispatch(huntLocationActions.onFilterChanged(filter));
    }

    render() {
        const {store, locations, cities} = this.props;
        return(
            <>
                <Header as="h1" className="mainHeader">Osterhasensuche</Header>
                {isEmpty(store.selectedObject) && store.state !== "found" &&
                    <div className="button-group">
                        <Button onClick={MapAdmin.update} type="button" ><FontAwesomeIcon className="button-icon" icon={['fas', 'sync']} />Neuladen</Button>
                        <CitiesSelectList options={cities} onChange={this.onCityChanged} selectedValue={store.selectedCity} />
                    </div>
                }
                <FormMessageContainer/>
                {(() => {
                    switch (store.state) {
                        case "success":
                            return this.renderMap(locations);
                        case "found":
                            return <FoundLocation initalValues={store.selectedObject} />;
                        case "loading":
                            return <LoadingSpinner/>;
                        case "error":
                            return <InfoWrapper title="Laden der Daten nicht erfolgreich" info={store.errorMessage} type={InfoWrapperTypes.FAILURE} />;
                        default:
                            return null;
                    }
                })()}
            </>
        );
    }

    renderMap(locations : any) {
        const {store, cities} = this.props;
        let coordinates : LatLngTuple = [47.27778, 8.84218];
        let zoomLevel = 16;
        if (store.selectedCity !== "") {
            let city = cities.filter((c : any) => c.idHuntCity === store.selectedCity)[0];
            coordinates = [city.startLocationLat, city.startLocationLong];
            zoomLevel = city.zoomLevel;
        }
        return(
            <>
                <MapContainer key="map"  className="map" center={coordinates} zoom={zoomLevel} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {locations.map((element : any) => {
                        return this.renderPointOnMap(element);
                    })}
                </MapContainer>
                <Header as="h5" className="mainHeader">Legende</Header>
                <div className="legend"><img width="20" src="./easter-egg.svg"/><span>Versteck mit Hase</span></div>
                <div className="legend"><img width="20" src="./easter-egg-found.svg"/><span>Versteck (Hase bereits gefunden)</span></div>
            </>
        )
    }

    renderPointOnMap(element : any) {
        const easterIcon = new L.Icon({
            iconUrl: marker,
            iconRetinaUrl: marker,
            popupAnchor:  [-0, -0],
            iconSize: [32,45],
        });
        const easterIconFound = new L.Icon({
            iconUrl: markerFound,
            iconRetinaUrl: markerFound,
            popupAnchor:  [-0, -0],
            iconSize: [32,45],
        });
        return (
            <Marker key={element.idHuntLocation} icon={element.isFound ? easterIconFound : easterIcon} position={[element.latitude, element.longitude]}>
                <Popup>
                    <span className="title">{element.name}</span> <br/><br/>
                    <b>Hinweis zum Versteck:</b> {element.description}<br/><br/>

                    {element.isFound &&
                        <span className="found">Hase nicht mehr verfügbar!</span>
                    }
                    {!element.isFound &&
                        <span className="found" onClick={() => this.found(element)}>Hase gefunden!</span>
                    }
                    <br/><br/>
                </Popup>
            </Marker>
        )
    }
}

export default MapAdmin;