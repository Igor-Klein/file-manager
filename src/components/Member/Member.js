import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Member.css';

import arrow from '../../arrow.svg';
import fileDirectory from '../../file-directory.svg';

import Directory from '../../components/Directory';
import File from '../../components/File';

const Member = ({ member }) => {
  const { id, title } = member;
  const [content, setСontent] = useState({});
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  const URL = `http://164.90.161.80:3000/api/content?dirId=${id}`;
  const loadContent = () => {
    fetch(URL).then(response => response.json()).then(data => { 
      setСontent(data);
    });
  };

  const hasChildren = () => {
    return member.children !== undefined
  }

  const handleLoad = () => {
    setIsDirectoryOpen(!isDirectoryOpen);
  }

  useEffect(() => {
    if (hasChildren()) {
      loadContent();
    }
  }, [member]);

  return (
    <div className="member" >
      {hasChildren()  ? (
        <div>
          <button type="submit" className="member__button" onClick={() => handleLoad()}>
            <div className="member__button-text">
              <img src={arrow} className={clsx('member__icon', 'member__directory-arrow', {'member__directory-arrow-open':isDirectoryOpen })} alt="arrow" />
              <img src={fileDirectory} className="member__icon" alt="file directory icon" />
              <span style={{ width: '100%' }}>{content.title}</span>
            </div>
          </button>
          {isDirectoryOpen && <Directory content={content} />}
        </div>
      ) : (
        <div>
          <File title={title} />
        </div>
      )}
    </div>
  );
};

Member.propTypes = {
  member: PropTypes.shape({}).isRequired,
};

export default Member;
