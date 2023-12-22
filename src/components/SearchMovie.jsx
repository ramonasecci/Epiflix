import React from 'react'
import { Button, Form } from "react-bootstrap"

class SearchMovie extends React.Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Control type="text"
                        placeholder="Cerca..."
                        onKeyDown={handleKeyPress} />
                </Form>
            </div>
        )
    }
}

function hideMovieList() {
    document.querySelector('main').classList.add('d-none')
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        hideMovieList()
        const searchTerm = event.target.value;
        console.log(searchTerm)
    }
}

export default SearchMovie;

