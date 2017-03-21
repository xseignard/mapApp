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
	List,
	ListItem,
	Right,
	Text,
	Title,
} from 'native-base';
import {
	openDrawer,
	closeDrawer,
} from '../../actions/drawer';
// import style from './style';
import list from '../../data/fakeList';

const Places = (props) => {
	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={props.openDrawer}>
						<Icon name="menu" />
					</Button>
				</Left>
				<Body>
					<Title>Lieux de diff</Title>
				</Body>
				<Right />
			</Header>

			<Content>
				<List
					dataArray={list}
					renderRow={item =>
						<ListItem
							onPress={() => {
								Actions.place(item);
								props.closeDrawer();
							}}
						>
							<Text>{item.name}</Text>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</ListItem>
					}
				/>
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

const bindAction = (dispatch) => {
	return {
		openDrawer: () => dispatch(openDrawer()),
		closeDrawer: () => dispatch(closeDrawer()),
	};
};

export default connect(state => state, bindAction)(Places);
