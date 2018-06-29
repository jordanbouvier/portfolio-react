/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import WordpressContent from 'src/components/WordpressContent';

/*
 * Component
 */
const Skill = ({ title, content, thumbnail }) => (
  <div className="skill">
    <div className="skill-picture">
      <img src={thumbnail} alt={`icône ${title}`} />
    </div>
    <h3 className="skill-title">{title}</h3>
    <WordpressContent content={content} />
  </div>
);
Skill.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Skill;
