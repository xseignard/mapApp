import {
	Dimensions,
	StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
	details: {
		flex: 1,
		flexDirection: 'row',
	},
	detailsBox: {
		// flex: 1,
		height: 50,
		borderColor: 'black',
		borderWidth: 2,
	}
});
