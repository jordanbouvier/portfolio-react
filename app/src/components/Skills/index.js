/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Title from 'src/components/Title';
import Skill from 'src/components/Skills/Skill';

/*
 * Component
 */
const Skills = ({ skills }) => (
  <section id="skills">
    <Title>mes compétences</Title>
    <div className="flex-container flex-center">
      {
        skills.map(skill => (
          <Skill
            key={skill.id}
            {...skill}
          />
        ))
      }
    </div>
  </section>
);
Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export default Skills;
