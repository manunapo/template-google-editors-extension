import * as React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <main className={`h-full overflow-y-auto p-4 ${className}`}>
      {children}
    </main>
  );
};

export default Container;
