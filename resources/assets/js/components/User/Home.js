import React, { Component } from 'react';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
    Annotations,
    Annotation
} from "react-simple-maps";
import {Doughnut, Line} from 'react-chartjs-2';

export default class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            token: props.token,
            product_variancy: [],
            product_recycled: [],
            product_engagements: [],
            product_dispersion: []
        }
    }

    componentWillMount() {
        this.setState({
            product_variancy: {
                labels: [
                    'Red',
                    'Green',
                    'Yellow'
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            },
            product_recycled: {
                labels: [
                    'Not Recycled',
                    'Recycled',
                ],
                datasets: [{
                    data: [20, 80],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                    ]
                }]
            },
            product_engagements: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Product Engagements on Platform per Month',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }]
            },
            product_dispersion: [
                {
                    coordinate: [106.865039, -6.175110],
                    size: 15,
                    label: 'Jakarta'
                },
                {
                    coordinate: [ 112.752088, -7.257472 ],
                    size: 8,
                    label: 'Surabaya'
                },
            ]
        })
    }

    render() {
        return (
            <div className="container-fluid justify-content-center">
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-card-title mb-4">Product Dispersal</div>
                            <div className="container-fluid text-center">
                                <ComposableMap
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <ZoomableGroup
                                        zoom = "7"
                                        center={[120, -2]}
                                        disablePanning
                                    >
                                        <Geographies geography={ "../storage/maps/world-50m.json" }>
                                            {(geographies, projection) => geographies.map(geography => (
                                                <Geography
                                                    key={ geography.md }
                                                    geography={ geography }
                                                    projection={ projection }
                                                    style={{
                                                        default: {
                                                            fill: '#cfcfcf',
                                                            stroke: "#000",
                                                            strokeWidth: 0.1,
                                                            outline: "none",
                                                        },
                                                    }}
                                                />
                                            ))}
                                        </Geographies>
                                        <Markers>
                                            {
                                                this.state.product_dispersion.map((city, i) => (
                                                    <Marker key={i} marker={{coordinates: city.coordinate}}>
                                                        <circle
                                                            cx={0}
                                                            cy={0}
                                                            r={city.size}
                                                            fill="rgba(255,87,34,0.8)"
                                                            stroke="#607D8B"
                                                            strokeWidth="2"
                                                        />
                                                    </Marker>
                                                ))
                                            }
                                        </Markers>
                                        {/*<Annotations>*/}
                                            {/*{*/}
                                                {/*this.state.product_dispersion.map((annotation, i) => (*/}
                                                    {/*<Annotation*/}
                                                        {/*key={i}*/}
                                                        {/*dx={ -20 }*/}
                                                        {/*dy={ 20 }*/}
                                                        {/*subject={ annotation.coordinate }*/}
                                                        {/*strokeWidth={ 0.4 }*/}
                                                    {/*>*/}
                                                        {/*<text style={{ fontSize: '2px', marginRight: '2px' }}>*/}
                                                            {/*{ annotation.label }*/}
                                                        {/*</text>*/}
                                                    {/*</Annotation>*/}
                                                {/*))*/}
                                            {/*}*/}
                                        {/*</Annotations>*/}
                                    </ZoomableGroup>
                                </ComposableMap>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-card-title mb-4">Product Engagement on Platform</div>
                            <Line
                                data={this.state.product_engagements}
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-card-title mb-4">Product Variancy Dispersion</div>
                            <Doughnut
                                data={this.state.product_variancy}
                                options={{
                                    segmentShowStroke : true,
                                    segmentStrokeWidth : 1,
                                    segmentStrokeColor : "#000",
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-card-title mb-4">Product Recycle Level</div>
                            <Doughnut
                                data={this.state.product_recycled}
                                options={{
                                    segmentShowStroke : true,
                                    segmentStrokeWidth : 1,
                                    segmentStrokeColor : "#000",
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}