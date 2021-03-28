import React, {Component, Fragment} from "react";
import {Button, Header} from "semantic-ui-react";
import store from "../../store";
import * as huntCityActions from "../../actions/huntCityActions"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DataTable from "../shared/DataTable";
import LoadingSpinner from "../shared/spinner/LoadingSpinner";
import InfoWrapper from "../shared/error/InfoWrapper";
import {InfoWrapperTypes} from "../../global/InfoWrapperTypes";
import {isEmpty} from "../../helpers/ObjectHelper";
import FormMessageContainer from "../../containers/FormMessageContainer";
import EditCity from "./EditCity";
import DeleteCity from "./DeleteCity";
import AddCity from "./AddCity";

class Cities extends Component<any, any> {
    constructor(props : any){
        super(props);
        this.update = this.update.bind(this);
    }
    componentDidMount(): void {
        this.update();
    }

    update(): void {
        store.dispatch(huntCityActions.getHuntCities());
    }

    addChannel(): void {
        store.dispatch(huntCityActions.addHuntCityForm());
    }

    deleteChannel(id : string) : void {
        store.dispatch(huntCityActions.getHuntCityAndCallAction(id, "delete"));
    }

    editChannel(id : string) : void {
        store.dispatch(huntCityActions.getHuntCityAndCallAction(id, "edit"));
    }

    renderActions(element : any) {
        return (
            <Fragment>
                <a href="#" onClick={() => this.deleteChannel(element.idHuntCity)}><FontAwesomeIcon icon={['fas', 'trash']} /> Löschen</a>
                <a href="#" onClick={() => this.editChannel(element.idHuntCity)}><FontAwesomeIcon icon={['fas', 'edit']} /> Bearbeiten</a>
            </Fragment>
        )
    }

    addActions(items : any) : void {
        items.map((element : any) => {
            element.action = this.renderActions(element);
        });
    }

    render() {
        const {store, cities} = this.props;
        this.addActions(cities);
        let headings = [
            {"name" : "ID", "sortkey" : "idHuntCity"},
            {"name" : "Name des Ortsbezirks", "sortkey" : "name"},
            {"name" : "PLZ", "sortkey" : "zip"},
            {"name" : "Start LAT", "sortkey" : "startLocationLat"},
            {"name" : "Start LONG", "sortkey" : "startLocationLong"},
            {"name" : "ZoomLevel", "sortkey" : "zoomLevel"},
            {"name" : "Aktionen", "sortkey" : "action"}
        ];
        return(
            <>
                <Header as="h1" className="mainHeader">Ortsbezirke</Header>
                {isEmpty(store.selectedObject) && store.state !== "add" &&
                    <div className="button-group">
                        <Button onClick={this.addChannel} type="button" ><FontAwesomeIcon className="button-icon" icon={['fas', 'plus']} />Ortsbezirk hinzufügen</Button>
                        <Button onClick={this.update} type="button" ><FontAwesomeIcon className="button-icon" icon={['fas', 'sync']} />Liste neuladen</Button>
                    </div>
                }
                <FormMessageContainer/>
                {(() => {
                    switch (store.state) {
                        case "success":
                            return <DataTable headings={headings} rows={cities} onSort={null} />;
                        case "loading":
                            return <LoadingSpinner/>;
                        case "error":
                            return <InfoWrapper title="Laden der Daten nicht erfolgreich" info={store.errorMessage} type={InfoWrapperTypes.FAILURE} />;
                        case "edit":
                            return <EditCity initalValues={store.selectedObject}/>;
                        case "delete":
                            return <DeleteCity initalValues={store.selectedObject}/>;
                        case "add":
                            return <AddCity />;
                        default:
                            return null;
                    }
                })()}
            </>
        );
    }
}

export default Cities;