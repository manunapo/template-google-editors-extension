import * as React from 'react';
import { Tabs, TabsContent } from './ui/tabs';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import Settings from './Settings';

interface LayoutProps {
  defaultTab?: 'home' | 'settings';
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, defaultTab = 'home' }) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Tabs defaultValue={defaultTab} className="flex flex-col h-full">
        <Header />

        <TabsContent value="home" className="flex-1 min-h-0 animate-fadeIn">
          <Container>{children}</Container>
        </TabsContent>

        <TabsContent value="settings" className="flex-1 min-h-0 animate-fadeIn">
          <Container>
            <Settings />
          </Container>
        </TabsContent>

        <Footer />
      </Tabs>
    </div>
  );
};

export default Layout;
