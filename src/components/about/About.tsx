import React, {Component} from "react";
import {Header} from "semantic-ui-react";

class About extends Component {
    render() {
        return(
            <>
                <Header as="h1" className="mainHeader">Impressum</Header>
                <div className="content">
                    <p>Diese Anwendung dient zur Verwaltung und als interaktive Karte für die Osterhasenaktion 2021 im Rahmen des 30ig-Jahren Jubiäum</p>
                    <Header as="h3">Administrator und Technischer Kontakt</Header>
                    <p>Urs Forrer v/o MIR<br/>Büelstrasse 16a<br/>8635 Dürnten<br/>079 323 56 62<br/><a href="mailto:webmaster@ceviduernten.ch">webmaster@ceviduernten.ch</a></p>
                    <Header as="h3">Design und Umsetzung</Header>
                    <p>Urs Forrer v/o MIR</p>
                    <Header as="h3">Idee</Header>
                    <p>OK-Team Osterhasenaktion 2021</p>
                    <Header as="h3">Hosting</Header>
                    <p>Die Anwendung wird mit Docker auf einem vServer von Hosttech.ch gehosted.</p>
                    <Header as="h3">Hinter der Webseite</Header>
                    <p>Die Webseite wird mit React and .NET Core betrieben. Das Template basiert auf dem Semantic UI. Die Icons kommen vom Font Awesome. Die Schriften werden über Google Fonts genutzt.</p>
                    <Header as="h3">Copyright</Header>
                    <p>Diese Website und alle dazugehörigen Texte, Grafiken, Logos sowie andere Materialien und das Design sind urheberrechtlich geschützt.<br/>
                        Jegliche Verwendung ohne vorherige schriftliche Zustimmung durch den Webmaster der Seite ist nicht gestattet.</p>
                </div>
            </>
        );
    }
}

export default About;