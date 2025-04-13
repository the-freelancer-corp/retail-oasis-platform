
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserCircle, Package, MapPin, Heart, ChevronRight } from 'lucide-react';
import Layout from '../layout/Layout';
import { cn } from '@/lib/utils';

interface AccountLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ children, title }) => {
  const location = useLocation();
  
  const navItems = [
    {
      label: 'Profile',
      icon: <UserCircle size={20} />,
      href: '/account/profile',
      active: location.pathname === '/account/profile'
    },
    {
      label: 'Orders',
      icon: <Package size={20} />,
      href: '/account/orders',
      active: location.pathname === '/account/orders'
    },
    {
      label: 'Addresses',
      icon: <MapPin size={20} />,
      href: '/account/addresses',
      active: location.pathname === '/account/addresses'
    },
    {
      label: 'Wishlist',
      icon: <Heart size={20} />,
      href: '/account/wishlist',
      active: location.pathname === '/account/wishlist'
    }
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-1/4">
            <div className="bg-background rounded-lg border shadow-sm">
              <h3 className="font-medium text-lg p-4 border-b">My Account</h3>
              <nav className="p-2">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-secondary",
                          item.active && "bg-secondary font-medium"
                        )}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                        <ChevronRight size={16} className="ml-auto" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="bg-background rounded-lg border shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">{title}</h2>
              {children}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AccountLayout;
