import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Linking } from 'react-native';
import {
	Body,
	Button,
	Container,
	Content,
	Footer,
	FooterTab,
	Header,
	Icon,
	Left,
	Right,
	Text,
	Title,
} from 'native-base';
// import style from './style';

const Place = (props) => {
	console.log(props);
	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={Actions.pop}>
						<Icon name="arrow-back" />
					</Button>
				</Left>
				<Body>
					<Title>{props.name}</Title>
				</Body>
				<Right />
			</Header>

			<Content padder>
				<Text>{props.address}</Text>
				<Text>{props.city}</Text>
				<Button
					block
					onPress={() => {
						const uri = encodeURIComponent(`${props.address} ${props.city}`);
						Linking.openURL(`geo:?q=${uri}`);
					}}
				>
					<Text>Y aller</Text>
				</Button>
				<Button
					block
					onPress={() => {
						Actions.stock(props.id);
					}}
				>
					<Text>MAJ des stocks</Text>
				</Button>
				<Button
					block
					success
					onPress={() => {
						Actions.deposit(props.id);
					}}
				>
					<Text>Déposer des MAP</Text>
				</Button>
			</Content>

			<Footer>
				<FooterTab>
					<Button full>
						<Text>Footer</Text>
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	);
};

export default connect(state => state)(Place);
