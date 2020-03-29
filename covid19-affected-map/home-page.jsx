import React from 'react';
import { Grid, Image, Header, Item, Segment, Statistic, Divider, Container } from 'semantic-ui-react';
import WorldMap from './world-map';
import Countrywise from './countrywise';
import axios from 'axios';

export default class HomePage extends React.Component {

	state = {
		globalData: {}
	};

	componentDidMount() {
        this.getGlobalData();
    	}
    getGlobalData() {
        axios.get('https://corona.lmao.ninja/all')
			.then(response => {
			this.objData = response;
            this.objData = this.objData.data;
			this.setState({ globalData: this.objData });
		})
		.catch(error => {
		console.log(error);
		});
    }

	render() {
		return (
           <div>
               <Header as="h1" className="center">Quarantine Dashboard</Header>
               <Divider section />
                <Grid stackable>
            <Grid.Row>
                <Grid.Column width={9}>
                    <Item.Group>
                        <Item>
                        <Statistic.Group vertical>
                        <Statistic>
                        <Statistic.Label>Total Global Cases:</Statistic.Label>
                        <Statistic.Value>{this.state.globalData.cases}</Statistic.Value>
                        </Statistic>
                        <Statistic>
                        <Statistic.Label>Total Global Deaths:</Statistic.Label>
                        <Statistic.Value>{this.state.globalData.deaths}</Statistic.Value>
                        </Statistic>
                        <Statistic>
                        <Statistic.Label>Total Global Recovered:</Statistic.Label>
                        <Statistic.Value>{this.state.globalData.recovered}</Statistic.Value>
                        </Statistic>
                    </Statistic.Group>
                        </Item>
                    </Item.Group>
                    <Divider section />
                <WorldMap></WorldMap>
                </Grid.Column>
                <Grid.Column width={6} only="computer">
                        <Container>
                        <Countrywise></Countrywise>
                        </Container>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row width={12} only="mobile">
            <Grid.Column>
                        <Container>
                        <Countrywise></Countrywise>
                        </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
               </div>
		);
	}

}
