import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <img src={!imageUrl ? "https://c.ndtvimg.com/2023-10/63l1o38_rio-negro-_625x300_10_October_23.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toUTCString()}</small></p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark" rel="noreferrer">Read More...</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem