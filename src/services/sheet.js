import { store } from '../store';
import {
	nameGet,
	valueGet,
	valuePost,
}
from '../actions/sheet';

class Sheet {
	constructor(id, token) {
		this.id = id;
		this.token = token;
		this.endPoint = `https://sheets.googleapis.com/v4/spreadsheets/${this.id}`;
	}

	getDoc() {
		fetch(`${this.endPoint}?access_token=${this.token}`).then((response) => {
			response.json().then((data) => {
				console.log(data.properties.title);
				store.dispatch(nameGet(data.properties.title));
			});
		});
	}

	getCell(sheet, cell) {
		const range = `${sheet}!${cell}`;
		fetch(`${this.endPoint}/values/${range}?access_token=${this.token}`)
		.then((response) => {
			response.json()
			.then((data) => {
				console.log(data);
				store.dispatch(valueGet(data.values[0][0]));
			})
			.catch((err) => {
				console.log(err);
			});
		})
		.catch((err) => {
			console.log(err);
		});
	}


	writeCell(sheet, cell, value) {
		const range = `${sheet}!${cell}`;
		const body = JSON.stringify({ values: [[value]] });
		fetch(
			`${this.endPoint}/values/${range}?valueInputOption=USER_ENTERED&access_token=${this.token}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body,
			}
		)
		.then((response) => {
			response.json()
			.then((data) => {
				console.log(data);
				store.dispatch(valuePost(true));
			})
			.catch((err) => {
				console.log(err);
				store.dispatch(valuePost(false));
			});
		})
		.catch((err) => {
			console.log(err);
		});
	}
}

export default Sheet;
