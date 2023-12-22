import { Row, Col } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = (props) => {
    return (
        <Row className="mt-4 mx-2">
            {props.commenti.length === 0 ? (
                <Col>
                    <p className='text-white'>Non ci sono commenti</p>
                </Col>
            ) : (
                props.commenti.map((commento) => (
                    <SingleComment key={commento._id} commento = {commento}/> 
                ))
            )}
        </Row>

    )
}

export default CommentList