import { Grid, Column } from '@carbon/react';
import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <Grid>
        <Column lg={4} md={3} sm={4}>
          This is the contact page
        </Column>
      </Grid>
    </Layout>
  );
}
