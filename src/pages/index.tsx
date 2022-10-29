import type { NextPage } from 'next';

import { MetaTags } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <MetaTags title="Home" />
      <>Hello</>
    </div>
  );
};

export default Home;
