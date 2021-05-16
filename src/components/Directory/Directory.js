import PropTypes from 'prop-types';

import Member from '../../components/Member';

const Directory = ({ content }) => (
  <div className="" style={{ 'paddingLeft': '10px' }}>
    {content.children.map(child => {
      return ( 
      <div key={`${content.title} - ${child.title} - ${child.id}`}>
        {<Member member={child} />}
      </div>)
    })}

  </div>
);

Directory.propTypes = {
  content: PropTypes.shape({}).isRequired,
};

export default Directory;
