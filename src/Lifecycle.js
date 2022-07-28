import React from 'react'
import Nvbar from "./Tugas/Lifecyclee/Nvbar";
import {API_URL} from './Tugas/Lifecyclee/constants';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import News from './Tugas/Lifecyclee/News'

export default class Lifecycle extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            first: [],
        }
        console.log('CONSTRUCTOR')
    }

    componentDidMount() {
        console.log('DID MOUNT')
        axios
        .get(API_URL)
        .then(res => {
        const first = res.data.articles;
        this.setState({ first });
    })
    .catch(error => {
        alert({error})
    })
    }

    render() {
        console.log('RENDER')
        const {first} = this.state
        return (
        <div>
            <Nvbar />
            <Row>
                {first && first.map((news) => (
                    <News 
                    key={news.id}
                    news={news}
                    />
                ))}
            </Row>
        </div>
        )
    }

    componentWillUnmount() {
        console.log('WILL UNMOUNT')
    }
}