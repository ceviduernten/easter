import React, {Component} from "react";
import {Button, Form as FormStyled, Header} from "semantic-ui-react";
import * as Yup from "yup";
import store from "../store";
import * as loginActions from "../actions/loginActions";
import {Field, Form, Formik, FormikHelpers} from "formik";
import FormError from "./shared/forms/FormError";
import {Redirect} from "react-router-dom";
import InfoWrapper from "./shared/error/InfoWrapper";
import {InfoWrapperTypes} from "../global/InfoWrapperTypes";

class Login extends Component<any, LoginFormValues> {
    constructor(props : any) {
        super(props);
        this.state = {
            loginName: "", password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(): void {
        store.dispatch(loginActions.clearLoginError());
    }

    handleSubmit(values : LoginFormValues, actions : FormikHelpers<LoginFormValues>) : void {
        store.dispatch(loginActions.login(values));
        actions.setSubmitting(false);
    }

    validationSchemaData = Yup.object().shape({
        loginName : Yup.string().required("* Feld ist erforderlich"),
        password : Yup.string().required("* Feld ist erforderlich"),
    });

    render(): React.ReactNode {
        const {currentUser} = this.props;
        if (currentUser.loggedIn && currentUser.token !== "") {
            return <Redirect to={{ pathname : '/'}} />
        }
        return (<>
            <Header as="h1" className="mainHeader">Login</Header>
            <div className="content">
                {currentUser.errorMessage !== "" &&
                    <InfoWrapper title="Fehler beim Login" info={currentUser.errorMessage} type={InfoWrapperTypes.FAILURE} />
                }
                <p>Gib in den untenstehenden Felder deine Logindaten ein. Sobald die Anmeldung erfolgreich war, wirst du automatisch weitergeleitet </p>
                <Formik enableReinitialize initialValues={this.state} onSubmit={this.handleSubmit} validationSchema={this.validationSchemaData}>
                    <Form className="form">
                        <FormStyled>
                            <FormStyled.Field>
                                <label htmlFor="loginName">Benutzer</label>
                                <Field type="text" name="loginName" placeholder="hansli"/>
                                <FormError name="loginName" />
                            </FormStyled.Field>
                            <FormStyled.Field>
                                <label htmlFor="password">Passwort</label>
                                <Field type="password" name="password" />
                                <FormError name="password" />
                            </FormStyled.Field>
                            <br/>
                            <Button className="success" type="submit">Login</Button>
                        </FormStyled>
                    </Form>
                </Formik>
            </div>
        </>);
    }
}

export default Login;