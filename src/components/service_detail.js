import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchStatus } from '../actions/index';
import { Link } from 'react-router';


/*
* ServiceDetail
* Provides service details about a specific line
* */
class ServiceDetail extends Component {
    componentWillMount() {
        this.props.fetchStatus(this.props.params.id); // fetching the routing id
    }
    render() {
        const {service} = this.props; // equals this.props.service
        const loopService = this.props.service.map(res =>


            /*
            * Intended to show whether disruption has occurred
            * */
            res.lineStatuses.map(
                    nestArr =>
                    <li className="list-group-item">
                        <span>
                           {res.name} - {res.disruptions} - {nestArr.statusSeverityDescription}
                        </span>
                    </li>
                )
        );

        if( !service) {
            return <div>Loading...</div>
        }

        return (
            <div>Show uniq service
                <div>
                    <Link to="/" className="btn btn-secondary">
                        Back
                    </Link>
                </div>
                {loopService}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {service: state.services.all }
}

export default connect(mapStateToProps, { fetchStatus }) (ServiceDetail);
