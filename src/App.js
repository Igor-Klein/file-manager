import React, { useState, useEffect } from 'react';

import Directory from './components/Directory';

function App() {

  const [content, setСontent] = useState({});

  useEffect(() => {
    const URL = 'http://164.90.161.80:3000/api/content';
    fetch(URL).then(response => response.json()).then(data => { 
      setСontent(data);
    });
  }, []);

  return (
    <div>
      {content.children !== undefined && <Directory content={content} />}
    </div>
  );
}

export default App;
