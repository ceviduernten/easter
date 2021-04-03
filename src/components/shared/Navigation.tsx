import React, {Component} from "react";
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import * as sessionHelper from "../../helpers/sessionHelper";

class Navigation extends Component<any, any> {
    constructor(props : any){
        super(props);
        this.state = {
            activeItem : ""
        }
    }

    static changeNavigation() : void {
    }

    handleMenuItemClick = (e: any, {name}: any) => this.setState({activeItem: name});

    render(): React.ReactNode {
        const {activeItem} = this.state;

        return (
            <div className="main-navigation" onClick={Navigation.changeNavigation}>
                <Menu>
                    <Menu.Item as={Link} to="/" name='logo' onClick={this.handleMenuItemClick}>
                        <img style={{width: '1rem'}} src="../logo.png" alt="Ref. Kirche Dürnten Logo"/>
                    </Menu.Item>
                    <Menu.Item as={ Link } key="nav-login" to="/map" name='map' active={activeItem === 'map'} onClick={this.handleMenuItemClick}>
                        Karte
                    </Menu.Item>
                        {sessionHelper.HasScoutingAccess() &&
                            <>
                                <Menu.Item as={ Link } key="nav-login" to="/preview" name='preview' active={activeItem === 'preview'} onClick={this.handleMenuItemClick}>
                                    Karte (Preview)
                                </Menu.Item>
                                <Menu.Item as={Link} key="nav-cities" to="/cities" name='cities' active={activeItem === 'cities'} onClick={this.handleMenuItemClick}>
                                Ortsbezirke
                                </Menu.Item>
                                <Menu.Item as={Link} key="nav-locations" to="/locations" name='locations' active={activeItem === 'locations'} onClick={this.handleMenuItemClick}>
                                Verstecke
                                </Menu.Item>
                        </>}
                    {sessionHelper.LoggedIn() &&
                    <>
                        <Menu.Item as={ Link } key="nav-about" to="/about" name='about' active={activeItem === 'about'} onClick={this.handleMenuItemClick}>
                            Impressum
                        </Menu.Item>
                        <Menu.Item as={ Link } key="nav-logout" to="/logout" name='logout' active={activeItem === 'logout'} onClick={this.handleMenuItemClick}>
                            Logout
                        </Menu.Item>
                    </>
                    }
                </Menu>
            </div>
        );
    }
}

export default Navigation;