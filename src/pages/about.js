import { Grid, Column } from '@carbon/react';
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <Grid>
        <Column lg={4} md={3} sm={4}>
          This is the about page
        </Column>
      </Grid>
    </Layout>
  );
}
