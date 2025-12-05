import * as React from 'react';
import Layout from './Layout';
import Features from './Features';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Home: React.FC<ContainerProps> = () => {
  return (
    <Layout defaultTab="home">
      <Features />
    </Layout>
  );
};

export default Home;
