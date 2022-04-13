import * as React from 'react';
import Layout from '../components/Layout/Layout';
import PageTitle from '../components/PageTitle/PageTitle';

// markup
const BiographyPage = () => {
  return (
    <Layout>
      <div className='container'>
        <PageTitle title='Biography' />
      </div>
    </Layout>
  );
};

export default BiographyPage;
