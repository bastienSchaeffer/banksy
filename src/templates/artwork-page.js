import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import PageTitle from '../components/PageTitle/PageTitle';

export default function ArtworkPage({ data }) {
  const page = data.datoCmsOeuvre;
  return (
    <Layout>
      <div className='container'>
        <PageTitle title={page.title} />

        <section>
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    datoCmsOeuvre(slug: { eq: $slug }) {
      title
    }
  }
`;
