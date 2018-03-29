import React from 'react';
import { Link } from 'react-router';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from '../actions/actionCreators';

const Main = React.createClass ({

    render() {
        return (
            <div>
                <h1>
                    <Link to = "/">This is my Main component</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

const mapStateToProps = (state) => ({
    posts: state.posts,
    comments: state.comments
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
