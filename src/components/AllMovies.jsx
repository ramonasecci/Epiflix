import { Col, Container, Row } from 'react-bootstrap'
import  MovieList from './MovieList'
import SearchMovie from './SearchMovie'


const AllMovies = (props) => {
  
  return (
    <Container className="mx-5">
        <Row>       
          <Col xs={12}>     
            <SearchMovie />
            <MovieList category="http://www.omdbapi.com/?apikey=1b936975&s=avengers" title="Avengers"/>
            <MovieList category="http://www.omdbapi.com/?apikey=1b936975&s=harry%20potter" title="Harry Potter"/>
            <MovieList category="http://www.omdbapi.com/?apikey=1b936975&s=lord%20of%20the%20rings" title="Lord of the Rings"/>            
          </Col>       
        </Row>
    </Container>    
  )
}

export default AllMovies