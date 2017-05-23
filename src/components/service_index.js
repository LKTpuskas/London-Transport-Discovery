import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchStatuses} from '../actions/index';
import {getGeoLocation} from '../actions/index';
import {fetchModes}     from '../actions/index';

import {Link} from 'react-router';

/*
 * ServiceIndex
 * Renders the "menu" with additionally tfl services
 * */
class ServiceIndex extends Component {

    /*
     * Calling action methods
     * */
    componentWillMount() {
        this.props.fetchStatuses();
        this.props.getGeoLocation();
        this.props.fetchModes();
    }

    /*
     * Attempt to render disruption cues...
     * */
    renderCue() {
        return this.props.modes.map(res => {
            const cue = res.disruptions;
            if (!cue) {
                return (
                    <div className="ssuccess">
                        OK
                    </div>
                )
            } else if (cue) {
                return (
                    <div className="warn">
                        Disruptions
                    </div>
                )
            }
        })
    }


    /*
     * Renders a list of different transportation services
     * */
    renderMenu() {
        return this.props.modes.map(res => {
            const mod = res.modeName;
            return (
                <li key={res.id}>
                    <Link to={"/" + res.modeName}>
                             <span className="table-hover">
                                 {mod}
                             </span>
                    </Link>
                </li>
            )
        });
    }

    render() {
        const geo = this.props.location;

        return (
            <div>
                <div>
                    <h3>Your current coordinates</h3>
                    <div>Latitude: <span>{geo.coords.latitude}</span></div>
                    <div>Longitude: <span>{geo.coords.longitude}</span></div>
                </div>

                <h3>Menu</h3>
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            {this.renderMenu()}
                        </ul>
                    </div>
                    <div className="col-sm-1">
                        <ul className="list-group">
                            {this.renderCue()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

/*
 * Helper function
 * Returns the applications different states
 * */
function mapStateToProps(state) {

    return {
        services: state.services.all,
        location: state.location,
        modes: state.services.modes

    }

}


export default connect(mapStateToProps, {fetchStatuses, getGeoLocation, fetchModes})(ServiceIndex);
