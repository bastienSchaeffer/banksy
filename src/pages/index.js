import * as React from 'react';
import Layout from '../components/Layout/Layout';
import PageTitle from '../components/PageTitle/PageTitle';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className='container'>
        <PageTitle title='Home ' />
      </div>
    </Layout>
  );
};

export default IndexPage;
