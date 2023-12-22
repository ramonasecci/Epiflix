import React from 'react';
import { Col } from 'react-bootstrap'
import CommentArea from './CommentArea'


class SingleMovie extends React.Component {
    state = {
        selected: false,
    }

    render() {
        return (
            <Col className='h-75' >
                <div onClick={() => this.setState({ selected: !this.state.selected })}>
                    <img src={this.props.film.Poster} className='img-size' />
                </div>
                {this.state.selected && <CommentArea id={this.props.film.imdbID} />}
            </Col>
        )
    }
}

export default SingleMovie





