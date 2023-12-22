import React from 'react';
import { Row } from 'react-bootstrap';
import SingleMovie from './SingleMovie';

class MovieList extends React.Component {
    state = {
        films: [],
        isLoading: true,
        isError: false,
    };

    componentDidMount = async () => {
        try {
            let response = await fetch(this.props.category);
            if (response.ok) {
                let films = await response.json();
                this.setState({ films: films, isLoading: false, isError: false });
            } else {
                this.setState({ isLoading: false, isError: true });
            }
        } catch (error) {
            this.setState({ isLoading: false, isError: true });
        }
    };

    render() {
        let filmsList = this.state.films.Search;
        let miniFilmsList = filmsList ? filmsList : []

        return (
            <div>
                <h2 className='cost-h2 fw-medium'>{this.props.title}</h2>
                <Row className="flex-nowrap overflow-x-scroll">  
                            {miniFilmsList.map((film, index) => (
                                <SingleMovie key={index} film={film} />
                            ))}      
                </Row>
            </div>
        );
    }
}

export default MovieList;
