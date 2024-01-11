
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchMovie = (props) => {

  const [searchQuery, setSearchQuery] = useState('')
  const [goSearch, setGoSearch] = useState (false)
  const navigate = useNavigate();


  const handleSearch = () => {
    setGoSearch(true)
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
      navigate('/search')
      
    
    }
  };

 
    return (
      <>
        <Row className="mb-3 mx-5">
          <Col>
            <Form.Group>
              <Form.Label>Search a Film</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={(e) => (setSearchQuery(e.target.value))}
                onKeyDown={handleKeyDown}
              />
            </Form.Group>
          </Col>
        </Row>
        {goSearch && (
          props.getNewSearch(searchQuery))}
      </>
    );
  
}

export default SearchMovie;

