import PropTypes from 'prop-types';

export const Giftem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

Giftem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,  
}