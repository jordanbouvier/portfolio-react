/*
 * Npm import
 */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Header from 'src/components/Header';
import About from 'src/components/About';
import Realisations from 'src/containers/Realisations';
import Skills from 'src/containers/Skills';
import Footer from 'src/components/Footer';
import Contact from 'src/components/Contact';


class App extends React.Component {
  componentDidMount() {
    this.props.actions.getRealisations();
    this.props.actions.skillsGet();
    this.props.actions.pageGet('a-propos');
    this.props.actions.pageGet('contact');
  }
  render() {
    return (
      <div id="app">
        <Header />
        <Route path="/a-propos" component={About} />
        <Route path="/mes-competences" component={Skills} />
        <Route path="/mes-realisations" component={Realisations} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    );
  }
}
App.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};
export default App;
