/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/*
 * Local import
 */
import Realisation from 'src/containers/Realisations/Realisation';
import Title from 'src/components/Title';
import RealisationShow from 'src/containers/Realisations/RealisationShow';

/*
 * Component
 */

const Realisations = ({ realisations, realisationOpen }) => (
  <section id="realisations">
    <Title>Mes réalisations</Title>
    <div className="flex-container">
      {
        realisations.map(realisation => (
          <Realisation
            key={realisation.id}
            {...realisation}
          />
        ))
      }
    </div>
    { realisationOpen && <RealisationShow />}
  </section>
);
Realisations.propTypes = {
  realisations: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  realisationOpen: PropTypes.bool.isRequired,
};

export default Realisations;
