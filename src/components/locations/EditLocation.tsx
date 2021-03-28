import React, {Component} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import * as huntLocationActions from "../../actions/huntLocationActions";
import * as Yup from "yup";
import store from "../../store";
import TitleHelper from "../shared/TitleHelper";
import FormError from "../shared/forms/FormError";
import {IFormProps} from "../../interfaces/interfaces";
import {Button, Checkbox, Form as FormStyled} from "semantic-ui-react";
import SimpleSelectListForm from "../shared/forms/SimpleSelectListForm";
import {doCityList} from "../../helpers/SelectListHelpers";

class EditLocation extends Component<IFormProps, EditHuntLocationFormValues> {
    constructor(props : any) {
        super(props);
        this.state = {
            description: "",
            huntCity: {},
            idHuntLocation: "",
            isActive: "",
            isFound: "",
            latitude: "",
            longitude: "",
            name: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    validationSchemaData = Yup.object().shape({
        name: Yup.string().required("* Feld ist erforderlich"),
        description : Yup.string().required("* Feld ist erforderlich"),
        isFound : Yup.string().required("* Feld ist erforderlich"),
        isActive : Yup.string().required("* Feld ist erforderlich"),
        latitude : Yup.string().required("* Feld ist erforderlich"),
        longitude : Yup.string().required("* Feld ist erforderlich"),
        idHuntLocation : Yup.string().required("* Feld ist erforderlich"),
    });

    componentDidMount(): void {
        if (this.props.initalValues !== undefined) {
            this.setState(this.props.initalValues);
        }
    }

    onCancel(): void {
        store.dispatch(huntLocationActions.backToList());
    }

    handleSubmit(values : EditHuntLocationFormValues, actions : FormikHelpers<EditHuntLocationFormValues>) : void {
        store.dispatch(huntLocationActions.editHuntLocation(values));
    }

    render(): React.ReactNode {
        return (
            <div className="form-wrapper">
                <TitleHelper title="Versteck bearbeiten"/>
                <h2>Versteck bearbeiten</h2>
                <Formik enableReinitialize initialValues={this.state} onSubmit={this.handleSubmit} validationSchema={this.validationSchemaData}>
                    <Form className="form">
                        <br/>
                        <FormStyled>
                            <FormStyled.Field>
                                <label htmlFor="idHuntLocation">Versteck ID</label>
                                <Field type="hidden" name="idHuntLocation"/>
                                <p>{this.state.idHuntLocation}</p>
                                <FormError name="idHuntLocation" />
                            </FormStyled.Field>
                            <FormStyled.Field>
                                <label htmlFor="name">Name</label>
                                <Field type="text" name="name" placeholder="Briefkasten Büelstrasse 16a"/>
                                <FormError name="name" />
                            </FormStyled.Field>
                            <FormStyled.Field>
                                <label htmlFor="description">Beschreibung</label>
                                <Field type="text" name="description" placeholder="Im Briefkasten oder so"/>
                                <FormError name="description" />
                            </FormStyled.Field>

                            <FormStyled.Field>
                                <label htmlFor="latitude">Latitude</label>
                                <Field type="text" name="latitude" placeholder="47.27926"/>
                                <FormError name="latitude" />
                            </FormStyled.Field>

                            <FormStyled.Field>
                                <label htmlFor="longitude">Longitude</label>
                                <Field type="text" name="longitude" placeholder="8.91501"/>
                                <FormError name="longitude" />
                            </FormStyled.Field>

                            <FormStyled.Field>
                                <label htmlFor="huntCity.idHuntCity">Bezirk</label>
                                <SimpleSelectListForm options={doCityList()} selectName="huntCity.idHuntCity" selectedValue={(this.state.huntCity as any).idHuntCity} />
                                <FormError name="huntCity.idHuntCity" />
                            </FormStyled.Field>

                            <FormStyled.Field>
                                <label htmlFor="isActive">Ist Aktiv?</label>
                                <Field>
                                    {(bag : any) => (
                                        <>
                                            <Checkbox radio label='JA' name='isActive' value='true' checked={bag.form.values.isActive === 'true'} onChange={() => bag.form.setFieldValue("isActive", "true")} />
                                            <Checkbox radio label='NEIN' name='isActive' value='false' checked={bag.form.values.isActive === 'false'} onChange={() => bag.form.setFieldValue("isActive", "false")}  />
                                        </>
                                    )}
                                </Field>
                                <FormError name="isActive" />
                            </FormStyled.Field>

                            <FormStyled.Field>
                                <label htmlFor="isFound">Ist Gefunden?</label>
                                <Field>
                                    {(bag : any) => (
                                        <>
                                            <Checkbox radio label='JA' name='isFound' value='true' checked={bag.form.values.isFound === 'true'} onChange={() => bag.form.setFieldValue("isFound", "true")} />
                                            <Checkbox radio label='NEIN' name='isFound' value='false' checked={bag.form.values.isFound === 'false'} onChange={() => bag.form.setFieldValue("isFound", "false")}  />
                                        </>
                                    )}
                                </Field>
                                <FormError name="isFound" />
                            </FormStyled.Field>
                            <Button className="first warning" onClick={this.onCancel} type="button">Aktion abbrechen</Button>
                            <Button className="success" type="submit">Versteck speichern</Button>
                        </FormStyled>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default EditLocation;