import React, {useState} from 'react'
import APIService from '../components/APIService';

function Form(props) {

    const[title, setTitle] = useState(props.article.title)
    const[body, setBody] = useState(props.article.body)

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, body})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }


    return (
        <div>
            {props.article ? (
                <div className="mb-3">
                <label htmlFor = "title" className="form-label">Title</label>
                <input type="text" className="form-control" 
                placeholder="please enter title" value={title}
                onChange= {(e) => setTitle(e.target.value)} />

                <label htmlFor = "body" className="form-label">Description</label>
                <textarea rows="5" className="form-control" 
                placeholder="please enter Description" value={body}
                onChange= {(e) => setBody(e.target.value)} />

                <button className = "btn btn-success mt-3"
                onClick= {updateArticle}>Update</button>
                </div>
            ):null }
        </div>
    )
}

export default Form
