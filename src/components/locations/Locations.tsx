import React, {Component, Fragment} from "react";
import {Button, Header} from "semantic-ui-react";
import store from "../../store";
import * as huntLocationActions from "../../actions/huntLocationActions";
import * as huntCityActions from "../../actions/huntCityActions"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DataTable from "../shared/DataTable";
import LoadingSpinner from "../shared/spinner/LoadingSpinner";
import InfoWrapper from "../shared/error/InfoWrapper";
import {InfoWrapperTypes} from "../../global/InfoWrapperTypes";
import {isEmpty} from "../../helpers/ObjectHelper";
import FormMessageContainer from "../../containers/FormMessageContainer";
import EditCity from "./EditLocation";
import DeleteLocation from "./DeleteLocation";
import AddLocation from "./AddLocation";

class Locations extends Component<any, any> {
    constructor(props : any){
        super(props);
        this.update = this.update.bind(this);
    }

    componentDidMount(): void {
        this.update();
    }

    update(): void {
        store.dispatch(huntLocationActions.getAllHuntLocations());
        store.dispatch(huntCityActions.getHuntCities());
    }

    addChannel(): void {
        store.dispatch(huntLocationActions.addHuntLocationForm());
    }

    deleteChannel(id : string) : void {
        store.dispatch(huntLocationActions.getHuntLocationAndCallAction(id, "delete"));
    }

    editChannel(id : string) : void {
        store.dispatch(huntLocationActions.getHuntLocationAndCallAction(id, "edit"));
    }

    renderActions(element : any) {
        return (
            <Fragment>
                <a href="#" onClick={() => this.deleteChannel(element.idHuntLocation)}><FontAwesomeIcon icon={['fas', 'trash']} /> Löschen</a>
                <a href="#" onClick={() => this.editChannel(element.idHuntLocation)}><FontAwesomeIcon icon={['fas', 'edit']} /> Bearbeiten</a>
            </Fragment>
        )
    }

    addActions(items : any) : void {
        items.map((element : any) => {
            element.action = this.renderActions(element);
        });
    }

    render() {
        const {store, locations} = this.props;
        this.addActions(locations);
        let headings = [
            {"name" : "ID", "sortkey" : "idHuntLocation"},
            {"name" : "Name des Verstecks", "sortkey" : "name"},
            {"name" : "Beschreibung", "sortkey" : "description"},
            {"name" : "Ist Aktiv?", "sortkey" : "isActiveString"},
            {"name" : "Ist gefunden?", "sortkey" : "isFoundString"},
            {"name" : "LAT", "sortkey" : "latitude"},
            {"name" : "LONG", "sortkey" : "longitude"},
            {"name" : "Bezirk", "sortkey" : "huntCity.Name"},
            {"name" : "Aktionen", "sortkey" : "action"}
        ];
        return(
            <>
                <Header as="h1" className="mainHeader">Verstecke</Header>
                {isEmpty(store.selectedObject) && store.state !== "add" &&
                    <div className="button-group">
                        <Button onClick={this.addChannel} type="button" ><FontAwesomeIcon className="button-icon" icon={['fas', 'plus']} />Versteck hinzufügen</Button>
                        <Button onClick={this.update} type="button" ><FontAwesomeIcon className="button-icon" icon={['fas', 'sync']} />Liste neuladen</Button>
                    </div>
                }
                <FormMessageContainer/>
                {(() => {
                    switch (store.state) {
                        case "success":
                            return <DataTable headings={headings} rows={locations} onSort={null} />;
                        case "loading":
                            return <LoadingSpinner/>;
                        case "error":
                            return <InfoWrapper title="Laden der Daten nicht erfolgreich" info={store.errorMessage} type={InfoWrapperTypes.FAILURE} />;
                        case "edit":
                            return <EditCity initalValues={store.selectedObject}/>;
                        case "delete":
                            return <DeleteLocation initalValues={store.selectedObject}/>;
                        case "add":
                            return <AddLocation />;
                        default:
                            return null;
                    }
                })()}
            </>
        );
    }
}

export default Locations;