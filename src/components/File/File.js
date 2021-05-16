import PropTypes from 'prop-types';

const File = ({ title }) => (
    <div className="" style={{ 'paddingLeft': '10px', fontStyle: 'italic' }}>
      {title}
    </div>
)

File.propTypes = {
  title: PropTypes.string.isRequired,
};

export default File;
