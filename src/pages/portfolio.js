import { Grid, Column } from '@carbon/react';
import Layout from '../components/Layout';

export default function PortfolioPage() {
  return (
    <Layout>
      <Grid>
        <Column lg={4} md={3} sm={4}>
          This is the porfolio index page
          <ul>
            <li>project link</li>
            <li>project link</li>
            <li>project link</li>
            <li>project link</li>
          </ul>
        </Column>
      </Grid>
    </Layout>
  );
}
