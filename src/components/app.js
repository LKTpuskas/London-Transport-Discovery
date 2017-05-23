import React ,{Component } from 'react'

/*
* App
* Components are rendered here
* */

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>
                    London transport discovery
                </h1>
                {this.props.children}
            </div>

        );
    }
}