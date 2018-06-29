/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Title from 'src/components/Title';
import WordpressContent from 'src/components/WordpressContent';

/*
 * Component
 */
const PageWordpress = ({ page }) => {
  const { title, content } = page;
  return (
    <div className="page-wordpress">
      <Title>{title}</Title>
      <WordpressContent content={content} />
    </div>
  );
};
PageWordpress.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    slug: PropTypes.string,
  }),
};
PageWordpress.defaultProps = {
  page: {
    title: '',
    content: '',
    slug: '',
  },
};

/*
 * Export default
 */
export default PageWordpress;
