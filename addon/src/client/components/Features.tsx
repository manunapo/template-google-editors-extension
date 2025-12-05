import * as React from 'react';
import {
  FileText,
  RefreshCw,
  Shield,
  Zap,
  Plus,
  LucideIcon,
} from 'lucide-react';

interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    id: 'documents',
    icon: FileText,
    title: 'Document Processing',
    description:
      'Seamlessly work with Google Docs, Sheets, and Slides with powerful automation tools.',
    color: 'bg-google-blue-50 text-google-blue-600',
  },
  {
    id: 'sync',
    icon: RefreshCw,
    title: 'Real-time Sync',
    description:
      'Changes sync instantly across all your devices and collaborators.',
    color: 'bg-google-green-500/10 text-google-green-600',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Your data is protected with industry-leading security and encryption.',
    color: 'bg-google-yellow-500/10 text-google-yellow-600',
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Optimized performance for smooth experience even with large documents.',
    color: 'bg-google-red-500/10 text-google-red-600',
  },
];

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div className="bg-white rounded-lg shadow-material-1 p-4 transition-all duration-200 hover:shadow-material-2 hover:-translate-y-0.5">
      <div className={`inline-flex p-3 rounded-full ${feature.color} mb-3`}>
        <Icon size={24} />
      </div>
      <h3 className="text-google-gray-900 font-medium text-base mb-1.5">
        {feature.title}
      </h3>
      <p className="text-google-gray-600 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-medium text-google-gray-900 mb-2">
          Welcome to Your Extension
        </h1>
        <p className="text-google-gray-600 text-sm max-w-md mx-auto">
          Enhance your Google Workspace experience with powerful features and
          seamless integrations.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>

      {/* Quick Action Button */}
      <div className="text-center pt-2">
        <button className="inline-flex items-center gap-2 bg-google-blue-600 hover:bg-google-blue-700 text-white font-medium px-6 py-2.5 rounded-full transition-colors duration-200 shadow-material-1 hover:shadow-material-2">
          <Plus size={20} />
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Features;
