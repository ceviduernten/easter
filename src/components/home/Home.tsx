import React, {Component} from "react";
import {Header} from "semantic-ui-react";

class Home extends Component {
    render() {
        return(
            <>
                <Header as="h1" className="mainHeader">Osterhasensuche <br/>mit dem Cevi</Header>
                <div className="content">
                    <p>Cool, bist du bei unserer Aktion dabei. Ganz einfach kannst du deinen eigenen Osterhasen finden.</p>

                    <Header as="h3">Wir haben sie versteckt</Header>
                    <p>In den Gemeinden Dürnten und Wald sind am Ostersonntag über 100 Osterhasen versteckt, die ihr suchen dürft.</p>

                    <Header as="h3">So funktioniert es</Header>
                    <p>Sucht die Hasen gemeinsam mit eurer Familie oder mit Freunden. <br/>
                    Alles was ihr dazu braucht ist ein Mobiltelefon mit Internetzugang und schon kann es losgehen!</p>
                    <p>Klicke oben auf "Karte" (erst am Ostersonntag möglich), filtere nach deinem Ortsteil (Dürnten und Wald) und such dir einen Standort aus, wo du dein Glück versuchen willst.<br/>
                    Begib dich dort hin und such den Osterhasen. Hast du Ihn gefunden gehört er ganz dir und du darfst ihn behalten :-)<br/>
                    Sobald du den Hasen gefunden hast, klicke das Symbol an und bestätige mit einem Klick, dass du Ihn gefunden hast.<br/>
                    Somit ersparst du weiteren Personen, dass sie unnötig diesen Standort aufsuchen.
                    </p>

                    <Header as="h3">Aufschaltung der Standorte</Header>
                    <p>Sonntag, 04. April 2021 - 11.00 Uhr</p>

                    <Header as="h3">Eindrücke der Aktion</Header>
                    <p>Gerne dürfen Sie Fotos und Eindrücke ihrer ganz persönlichen Suchaktion mit uns teilen.<br/>
                    Diese Eindrücke schicken sie uns gerne an ostern@ceviduernten.ch, auf Instagram an @ceviduernten oder an 079 323 56 62.<br/>
                    Mit der Weitergabe der Fotos erklären Sie sich einverstanden, dass wir diese auf unseren sozialen Netzwerken teilen dürfen.</p>

                    <Header as="h3">Fragen oder technische Schwierigkeiten</Header>
                    <p>Cevi Dürnten<br/>
                    ostern@ceviduernten.ch<br/>
                    079 323 56 62</p>
                </div>
            </>
        );
    }
}

export default Home;