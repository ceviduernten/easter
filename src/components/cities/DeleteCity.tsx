import React, {Component} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import * as huntCityActions from "../../actions/huntCityActions";
import TitleHelper from "../shared/TitleHelper";
import {IFormProps} from "../../interfaces/interfaces";
import store from "../../store";
import {Button, Form as FormStyled} from "semantic-ui-react";
import FormError from "../shared/forms/FormError";

class DeleteCity extends Component<IFormProps, DeleteHuntCityFormValues> {
    constructor(props : any){
        super(props);
        this.state = {
            idHuntCity: ""
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
        store.dispatch(huntCityActions.backToList());
    }

    handleSubmit(values : DeleteHuntCityFormValues, actions : FormikHelpers<DeleteHuntCityFormValues>) : void {
        store.dispatch(huntCityActions.deleteHuntCity(values.idHuntCity));
    }

    render(): React.ReactNode {
        return (
            <div className="form-wrapper">
                <TitleHelper title="Ortsbezirk löschen"/>
                <h2>Ortsbezirk löschen</h2>
                <Formik enableReinitialize initialValues={this.state} onSubmit={this.handleSubmit}>
                    <Form className="form">
                        <br/>
                        <FormStyled>
                            <FormStyled.Field>
                                <label htmlFor="idChannel">Ortsbezirk ID</label>
                                <Field type="hidden" name="idHuntCity"/>
                                <p>{this.state.idHuntCity}</p>
                                <FormError name="idHuntCity" />
                            </FormStyled.Field>
                            <Button className="first warning" onClick={this.onCancel} type="button">Aktion abbrechen</Button>
                            <Button className="success" type="submit">Ortsbezirk löschen</Button>
                        </FormStyled>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default DeleteCity;