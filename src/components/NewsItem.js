import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  // Limit title to 110 characters
  title = title.length > 110 ? title.substring(0, 110) + '...' : title;
  // Limit description to 120 characters
  description = description ? (description.length > 120 ? description.substring(0, 120) + '...' : description) : 'No Description available';

  const defaultImageUrl = "https://images.tijd.be/view?iid=dc:66572028&context=ONLINE&ratio=16/9&width=640&u=1464200700000";

  const handleImageError = (e) => {
    e.target.src = defaultImageUrl;
  };

  return (
    <div className='my-3'>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0', zIndex: '1' }}>
          <span className="badge rounded-pill bg-danger">
            {source || 'Unknown'}
          </span>
        </div>

        <img
          src={imageUrl || defaultImageUrl}
          className="card-img-top"
          alt='Loading....'
          style={{ objectFit: 'cover', height: '200px' }}
          onError={handleImageError}
        />
        <div className="card-body" style={{ height: '20em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author || 'Unknown'} on {new Date(date).toGMTString()} </small></p>
          <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
