import React from 'react'


class PostForm extends  React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            qty:'',
            price: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        const { name, description, qty, price } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input name="name" value={name}  onChange={this.changeHandler}>
                        </input>
                    </div>
                    <div>
                        <input name='description' value={description} onChange={this.changeHandler}>
                        </input>
                    </div>
                    <div>
                        <input name='qty' value={qty}  onChange={this.changeHandler}>
                        </input>
                    </div>
                    <div>
                        <input name='price' value={price}  onChange={this.changeHandler}>
                        </input>
                    </div>
                    <button type='submit' > submit </button>
                </form>

            </div>
        )
    }
}

export default PostForm