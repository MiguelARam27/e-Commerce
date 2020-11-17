import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ description, title, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to Proshop',
  description: 'We sell the best products',
  keywords: 'electronics, cheap, sell',
};

export default Meta;
