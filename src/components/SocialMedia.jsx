import React from 'react';
import { BsTwitter, BsGithub, BsArchive } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://drive.google.com/file/d/1_Hc0eI1koOUwDlv0h0d-97WA5_NI2jCd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <div>
        <BsArchive />
      </div>
    </a>
    <a href="https://twitter.com/ama_knng" target="_blank" rel="noopener noreferrer">
      <div>
        <BsTwitter />
      </div>
    </a>
    <a href="https://github.com/officialamaaa" target="_blank" rel="noopener noreferrer">
      <div>
        <BsGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;
