import * as React from 'react';
import { Home as HomeIcon, Settings as SettingsIcon } from 'lucide-react';
import { TabsList, TabsTrigger } from './ui/tabs';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <TabsList>
        <TabsTrigger value="home">
          <HomeIcon size={20} />
          <span>Home</span>
        </TabsTrigger>
        <TabsTrigger value="settings">
          <SettingsIcon size={20} />
          <span>Settings</span>
        </TabsTrigger>
      </TabsList>
    </header>
  );
};

export default Header;
