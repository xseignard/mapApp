import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavRoot from './components/NavRoot';
import Loader from './components/Loader';
import auth from './services/auth';
import Sheet from './services/sheet';

const id = '12-N6WyyAv_5PC_Y7qpDs3EVqIUxcXduoQ4h3ZPFStvk';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}
	componentDidMount() {
		auth();
	}

	componentWillUpdate(nextProps) {
		if (this.props.token !== nextProps.token) this.setState({ loading: false });
	}

	componentDidUpdate(nextProps) {
		this.sheet = new Sheet(id, this.props.token);
		// this.sheet.writeCell('Sheet1', 'C2', '=A2*B2');
		this.sheet.getDoc();
	}

	render() {
		if (this.state.loading) return <Loader />;
		return <NavRoot />;
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.auth.get('token'),
		name: state.sheet.get('name'),
	};
};

export default connect(mapStateToProps)(Main);
