import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

const Home = () => {
  const { user } = useUser();
  console.log(user);

  return <h1>{user && user.email}</h1>;
};

export default Home;

export const getServerSideProps = withPageAuthRequired();
