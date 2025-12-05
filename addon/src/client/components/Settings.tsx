import * as React from 'react';
import { Settings as SettingsIcon, CheckCircle } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Icon Container */}
      <div className="bg-google-gray-100 rounded-full p-6 mb-6">
        <SettingsIcon size={48} className="text-google-gray-400" />
      </div>

      {/* Content */}
      <h2 className="text-xl font-medium text-google-gray-900 mb-2 text-center">
        Settings
      </h2>
      <p className="text-google-gray-500 text-sm text-center max-w-xs mb-6">
        Configuration options and preferences will be available here soon.
      </p>

      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 bg-google-blue-50 text-google-blue-600 px-4 py-2 rounded-full text-sm font-medium">
        <CheckCircle size={16} />
        Coming Soon
      </div>
    </div>
  );
};

export default Settings;
