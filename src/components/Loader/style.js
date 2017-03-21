import {
	Dimensions,
	StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 0,
		left: 0,
		width,
		height
	},
	loader: {
		height: 80,
	},
});
