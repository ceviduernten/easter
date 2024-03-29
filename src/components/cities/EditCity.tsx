import React, {Component} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import * as huntCityActions from "../../actions/huntCityActions";
import * as Yup from "yup";
import store from "../../store";
import TitleHelper from "../shared/TitleHelper";
import FormError from "../shared/forms/FormError";
import {IFormProps} from "../../interfaces/interfaces";
import {Button, Form as FormStyled} from "semantic-ui-react";

class EditCity extends Component<IFormProps, EditHuntCityFormValues> {
    constructor(props : any) {
        super(props);
        this.state = {
            idHuntCity: "", name: "", startLocationLat: "", startLocationLong: "", zip: "", zoomLevel: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    validationSchemaData = Yup.object().shape({
        name: Yup.string().required("* Feld ist erforderlich"),
        startLocationLat : Yup.string().required("* Feld ist erforderlich"),
        startLocationLong : Yup.string().required("* Feld ist erforderlich"),
        zip : Yup.string().required("* Feld ist erforderlich"),
        zoomLevel : Yup.number().required("* Feld ist erforderlich"),
        idHuntCity : Yup.string().required("* Feld ist erforderlich"),
    });

    componentDidMount(): void {
        if (this.props.initalValues !== undefined) {
            this.setState(this.props.initalValues);
        }
    }

    onCancel(): void {
        store.dispatch(huntCityActions.backToList());
    }

    handleSubmit(values : EditHuntCityFormValues, actions : FormikHelpers<EditHuntCityFormValues>) : void {
        store.dispatch(huntCityActions.editHuntCity(values));
    }

    render(): React.ReactNode {
        return (
            <div className="form-wrapper">
                <TitleHelper title="Ortsbezirk bearbeiten"/>
                <h2>Ortsbezirk bearbeiten</h2>
                <Formik enableReinitialize initialValues={this.state} onSubmit={this.handleSubmit} validationSchema={this.validationSchemaData}>
                    <Form className="form">
                        <br/>
                        <FormStyled>
                            <FormStyled.Field>
                                <label htmlFor="idHuntCity">Ortsbezirk ID</label>
                                <Field type="hidden" name="idHuntCity"/>
                                <p>{this.state.idHuntCity}</p>
                                <FormError name="idHuntCity" />
                            </FormStyled.Field>
                            <FormStyled.Field>
                                <label htmlFor="name">Name</label>
                                <Field type="text" name="name" placeholder="Dürnten"/>
                                <FormError name="name" />
                            </FormStyled.Field>
                            <FormStyled.Field>
                                <label htmlFor="zip">PLZ</label>
                                <Field type="text" name="zip" placeholder="8635"/>
                                <FormError name="zip" />
                            </FormStyled.Field>
                            <FormStyled.Field>
                                <label htmlFor="startLocationLat">Startkoordinate (Lat)</label>
                                <Field type="text" name="startLocationLat" placeholder="47.27926"/>
                                <FormError name="startLocationLat" />
                            </FormStyled.Field>
                            <FormStyled.Field>
                                <label htmlFor="startLocationLong">Startkoordinate (Long)</label>
                                <Field type="text" name="startLocationLong" placeholder="8.91501"/>
                                <FormError name="startLocationLong" />
                            </FormStyled.Field>
                            <FormStyled.Field>
                                <label htmlFor="zoomLevel">Zoomlevel</label>
                                <Field type="number" name="zoomLevel" placeholder="15"/>
                                <FormError name="zoomLevel" />
                            </FormStyled.Field>
                            <Button className="first warning" onClick={this.onCancel} type="button">Aktion abbrechen</Button>
                            <Button className="success" type="submit">Ortsbezirk speichern</Button>
                        </FormStyled>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default EditCity;