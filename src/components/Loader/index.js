import React from 'react';
import {
	ActivityIndicator,
	View,
} from 'react-native';
import { connect } from 'react-redux';
import style from './style';

const Loader = (props) => {
	return (
		<View style={style.container}>
			<ActivityIndicator
				animating
				style={style.loader}
				size="large"
			/>
		</View>
	);
};
export default connect(state => state)(Loader);
