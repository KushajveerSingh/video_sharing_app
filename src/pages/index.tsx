import type { NextPage } from 'next';
import axios from 'axios';

import { MetaTags } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <MetaTags title="Home" />
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`);

  console.log(response.data.name);
  return {
    props: {},
  };
};
export default Home;
