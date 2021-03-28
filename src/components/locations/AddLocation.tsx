import React, {Component} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import * as huntLocationActions from "../../actions/huntLocationActions";
import * as Yup from "yup";
import {IFormProps} from "../../interfaces/interfaces";
import store from "../../store";
import TitleHelper from "../shared/TitleHelper";
import {Button, Checkbox, Form as FormStyled} from "semantic-ui-react";
import FormError from "../shared/forms/FormError";
import SimpleSelectListForm from "../shared/forms/SimpleSelectListForm";
import {doCityList} from "../../helpers/SelectListHelpers";


class AddLocation extends Component<IFormProps, CreateHuntLocationFormValues> {
    constructor(props : any) {
        super(props);
        this.state = {
            description: "", huntCity: {}, isActive: "false", isFound: "false", latitude: "", longitude: "", name: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentDidMount(): void {
        if (this.props.initalValues !== undefined) {
            this.setState(this.props.initalValues);
        }
    }

    validationSchemaData = Yup.object().shape({
        name: Yup.string().required("* Feld ist erforderlich"),
        description : Yup.string().required("* Feld ist erforderlich"),
        isFound : Yup.string().required("* Feld ist erforderlich"),
        isActive : Yup.string().required("* Feld ist erforderlich"),
        latitude : Yup.string().required("* Feld ist erforderlich"),
        longitude : Yup.string().required("* Feld ist erforderlich"),
    });

    onCancel(): void {
        store.dispatch(huntLocationActions.backToList());
    }

    handleSubmit(values : CreateHuntLocationFormValues, actions : FormikHelpers<CreateHuntLocationFormValues>) : void {
        console.log("handle submit");
        store.dispatch(huntLocationActions.addHuntLocation(values));
    }

    render(): React.ReactNode {
        return (
            <div className="form-wrapper">
                <TitleHelper title="Versteck hinzufügen"/>
                <h2>Versteck hinzufügen</h2>
                <Formik enableReinitialize initialValues={this.state} onSubmit={this.handleSubmit} validationSchema={this.validationSchemaData} >
                    <Form className="form">
                        <br/>
                        <FormStyled>
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
                            <Button className="success" type="submit">Versteck erstellen</Button>
                        </FormStyled>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default AddLocation;