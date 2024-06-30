import React, { Component as ReactComponent } from 'react';
import {
    Container,
    Component,
    Button,
    FormPanel,
    Image,
    TextField,
    PasswordField
} from '@sencha/ext-react-modern';
import SenchaLogo from "./SenchaLogoLg.svg"
import { insertAndUpdateListToLocalStorage, setDataToLocalStorage } from './store';

const Ext = window['Ext'];

Ext.require('Ext.Toast');

export default class RegisterComponent extends ReactComponent {
    __constructor(props) {
        this.state = {
            email: '',
            password: ''
        }

        this.onRegister = this.onRegister.bind(this)
    }
    onRegister(event, parent) {
        insertAndUpdateListToLocalStorage(parent.state)
        setDataToLocalStorage('isLogin', 'true');
        this.props.setPage(this, 'main')
    }

    render() {

        return (
            <>
                <Container
                    autoSize={true}
                    profiles={{
                        defaults: {
                            width: 340,
                            height: 544
                        },
                        phone: {
                            defaults: {
                                height: undefined,
                                margin: undefined,
                                padding: undefined,
                                shadow: undefined,
                                width: undefined
                            }
                        }
                    }}
                    width={340}
                    height={544}
                    layout={{
                        type: 'vbox',
                        align: 'middle'
                    }}
                    scrollable='y'
                    // setting the background of the container
                    style={{ backgroundColor: 'var(--base-color)' }}
                >
                    <FormPanel
                        layout={{ type: 'vbox', align: 'middle' }}
                        bodyPadding={30}
                        height={514}
                        width={340}
                    >
                        <Image src={SenchaLogo} height={90} width={280} />
                        <Component html={"Register Account"} style={{ fontSize: 20, textAlign: 'center', margin: 'auto' }} />
                        <TextField
                            allowBlank={false}
                            required={true}
                            width={280}
                            label="Email Address"
                            name="email"
                            placeholder="Email Address"
                            errorTarget="qtip"
                            onChange={(e) => {
                                this.setState((prevState) => ({
                                    ...prevState,
                                    email: e.newValue
                                }))
                            }}
                            style={{
                                margin: 'auto'
                            }}
                            responsiveConfig={{
                                desktop: { errorTarget: 'side' }
                            }} />

                        <PasswordField
                            allowBlank={false}
                            required={true}
                            width={280}
                            label="Password"
                            name="pass"
                            placeholder="Password"
                            errorTarget="qtip"
                            onChange={(e) => {
                                this.setState((prevState) => ({
                                    ...prevState,
                                    password: e.newValue
                                }))
                            }}
                            style={{
                                margin: 'auto'
                            }}
                            responsiveConfig={{
                                desktop: { errorTarget: 'side' }
                            }} />
                        <Button
                            text="SUBMIT"
                            autoSize={true}
                            width={280}
                            ui="action"
                            handler={(e) => this.onRegister(e, this)}
                            style={{
                                textAlign: "center",
                                letterSpacing: 1.25,
                                fontSize: 14,
                                margin: 'auto'
                            }}
                        />
                        <Button
                            text="Login"
                            autoSize={true}
                            width={280}
                            handler={(e) => {
                                this.props.setPage(this, 'login')
                                setDataToLocalStorage('page', 'login')
                            }}
                            style={{
                                textAlign: "center",
                                letterSpacing: 1.25,
                                fontSize: 14,
                                margin: 'auto'
                            }}
                        />
                    </FormPanel>

                </Container>

            </>
        )
    }
}