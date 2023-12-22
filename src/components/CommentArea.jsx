import React from 'react'
import CommentList from './CommentList'
// import AddComment from './AddComment'


class CommentArea extends React.Component {
    state = {
        comments: [],
        isLoading: true,
        isError: false,
    }

    componentDidMount = async () => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/' +
                this.props.id,
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDhkOGI1MjViYjAwMThlZDA4MWEiLCJpYXQiOjE3MDMxNjgyMTYsImV4cCI6MTcwNDM3NzgxNn0.KYyNWJmCM527pFJgTNYFIrznduNAOR37QBrNkslFTU8',
                    },
                }
            )
            if (response.ok) {
                let comments = await response.json()
                this.setState({ comments: comments, isLoading: false, isError: false })
            } else {
                console.log('error')
                this.setState({ isLoading: false, isError: true })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, isError: true })
        }
    }

    render() {
        console.log(this.state.comments)
        return (
            <div>
                <CommentList commenti={this.state.comments} />
                {/* <AddComment /> */}
            </div>
        )
    }
}

export default CommentArea