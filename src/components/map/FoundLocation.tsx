import React, {Component} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import * as huntLocationActions from "../../actions/huntLocationActions";
import TitleHelper from "../shared/TitleHelper";
import {IFormProps} from "../../interfaces/interfaces";
import store from "../../store";
import {Button, Form as FormStyled} from "semantic-ui-react";
import FormError from "../shared/forms/FormError";

class DeleteLocation extends Component<IFormProps, FoundHuntLocationFormValues> {
    constructor(props : any){
        super(props);
        this.state = {
            idHuntLocation: "",
            name: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentDidMount(): void {
        if (this.props.initalValues !== undefined) {
            this.setState(this.props.initalValues);
        }
    }
    onCancel(): void {
        store.dispatch(huntLocationActions.backToList());
    }

    handleSubmit(values : FoundHuntLocationFormValues, actions : FormikHelpers<FoundHuntLocationFormValues>) : void {
        store.dispatch(huntLocationActions.found(values));
    }

    render(): React.ReactNode {
        return (
            <div className="form-wrapper">
                <TitleHelper title="Versteck löschen"/>
                <h2>Versteck gefunden</h2>
                <Formik enableReinitialize initialValues={this.state} onSubmit={this.handleSubmit}>
                    <Form className="form">
                        <br/>
                        <FormStyled>
                            <FormStyled.Field>
                                <label htmlFor="idHuntLocation">Versteck ID</label>
                                <Field type="hidden" name="idHuntLocation"/>
                                <p>{this.state.idHuntLocation}</p>
                                <FormError name="idHuntLocation" />
                                <label htmlFor="name">Name</label>
                                <p>{this.state.name}</p>
                                <br/>
                                <p>Mit dem Klick auf "Versteck gefunden" bestätigst du, dass du den Hasen an diesem Versteck gefunden hast.</p>
                            </FormStyled.Field>
                            <Button className="first warning" onClick={this.onCancel} type="button">Aktion abbrechen</Button>
                            <Button className="success" type="submit">Versteck gefunden</Button>
                        </FormStyled>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default DeleteLocation;