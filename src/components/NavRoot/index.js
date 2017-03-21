import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Drawer,
	Text,
} from 'native-base';
import {
	Router,
	Scene,
} from 'react-native-router-flux';
import { closeDrawer } from '../../actions/drawer';

import Places from '../Places';
import Place from '../Place';
import Stock from '../Stock';
import Deposit from '../Deposit';

const RouterWithRedux = connect()(Router);

class NavRoot extends Component {

	componentDidUpdate() {
		if (this.props.drawerState === 'opened') this.drawer._root.open();
		if (this.props.drawerState === 'closed') this.drawer._root.close();
	}

	render() {
		console.log(this.props);
		return (
			<Drawer
				ref={(ref) => {
					this.drawer = ref;
				}}
				content={<Text>Test</Text>}
				onClose={() => this.props.closeDrawer()}
			>
				<RouterWithRedux>
					<Scene key="root">
						<Scene key="places" component={Places} hideNavBar initial />
						<Scene key="place" component={Place} />
						<Scene key="stock" component={Stock} />
						<Scene key="deposit" component={Deposit} />
					</Scene>
				</RouterWithRedux>
			</Drawer>
		);
	}
}

const bindAction = (dispatch) => {
	return {
		closeDrawer: () => dispatch(closeDrawer()),
	};
};

const mapStateToProps = (state) => {
	return {
		drawerState: state.drawer.get('drawerState'),
	};
};

export default connect(mapStateToProps, bindAction)(NavRoot);
