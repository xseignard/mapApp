import GoogleSignIn from 'react-native-google-sign-in';
import { store } from '../store';
import auth from '../actions/auth';

export default () => {
	GoogleSignIn.configure({
		// https://developers.google.com/identity/protocols/googlescopes
		scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		clientID: '611062081820-0mffoh9vj4ig171bvhatk3stepv3cenj.apps.googleusercontent.com',
	}).then(() => {
		GoogleSignIn.signInPromise().then((user) => {
			store.dispatch(auth(user.accessToken));
		}).catch((err) => {
			console.log(err);
		});
	}).catch((err) => {
		console.log(err);
	});
};
