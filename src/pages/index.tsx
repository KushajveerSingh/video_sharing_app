import type { NextPage } from 'next';

import { MetaTags } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <MetaTags title="Home" />
      <div className="text-blue-600/100 underline">Heelo</div>
    </div>
  );
};

export default Home;
