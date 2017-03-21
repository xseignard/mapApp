import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
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

const Deposit = (props) => {
	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={Actions.pop}>
						<Icon name="arrow-back" />
					</Button>
				</Left>
				<Body>
					<Title>Dépot</Title>
				</Body>
				<Right />
			</Header>

			<Content padder>
				<Text>Test</Text>
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

export default connect(state => state)(Deposit);
