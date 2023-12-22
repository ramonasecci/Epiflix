import { Row, Col } from 'react-bootstrap'

const CommentList = (props) => {
    return (
        <Row>
            {props.commenti.length === 0 ? (
                <Col>
                    <p className='text-white'>Non ci sono commenti</p>
                </Col>
            ) : (
                props.commenti.map((commento) => (
                    // <SingleComment commento = {commento}/>
                    <Col>
                        <p className='text-white'>{commento.comment}</p>
                    </Col>
                ))
            )}
        </Row>

    )
}

export default CommentList