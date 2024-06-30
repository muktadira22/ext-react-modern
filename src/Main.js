import React, { Component as ReactComponent } from 'react';
import {
    Panel,
    ExtGrid,
    ExtColumn,
    Container,
    Button
} from '@sencha/ext-react-modern';
import { getDataFromLocalStorage } from './store';


const Ext = window['Ext'];

Ext.require('Ext.Toast');

export default class RegisterComponent extends ReactComponent {
    constructor() {
        super()
        var data = getDataFromLocalStorage('user-list');
        this.store = Ext.create('Ext.data.Store', { data: data })
        //this.store = {xtype: 'store',data: data}
    }
    toolHandler(owner, tool) {
        Ext.toast(`You clicked ${tool.config.type || 'a custom tool'}.`);
    }
    render() {
        return (
            <>
                <Button
                    text="Logout"
                    autoSize={true}
                    width={280}
                    handler={(e) => {
                        this.props.setPage(this, 'login')
                    }}
                    style={{
                        textAlign: "center",
                        letterSpacing: 1.25,
                        fontSize: 14,
                        margin: 'auto'
                    }}
                />
                <ExtGrid
                    viewport={true}
                    ref={grid => this.grid = grid}
                    title="User List"
                    store={this.store}
                    onReady={this.extReactDidMount}
                >
                    <ExtColumn text="email" dataIndex="email" width="200"></ExtColumn>

                </ExtGrid>
            </>
        )
    }
}