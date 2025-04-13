
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  FileText, 
  MessageSquare, 
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { 
      label: 'Dashboard', 
      icon: <LayoutDashboard size={20} />, 
      href: '/admin',
      active: location.pathname === '/admin'
    },
    { 
      label: 'Products', 
      icon: <ShoppingBag size={20} />, 
      href: '/admin/products',
      active: location.pathname.includes('/admin/products')
    },
    { 
      label: 'Orders', 
      icon: <FileText size={20} />, 
      href: '/admin/orders',
      active: location.pathname.includes('/admin/orders')
    },
    { 
      label: 'Customers', 
      icon: <Users size={20} />, 
      href: '/admin/customers',
      active: location.pathname.includes('/admin/customers')
    },
    { 
      label: 'Reviews', 
      icon: <MessageSquare size={20} />, 
      href: '/admin/reviews',
      active: location.pathname.includes('/admin/reviews')
    },
    { 
      label: 'Settings', 
      icon: <Settings size={20} />, 
      href: '/admin/settings',
      active: location.pathname.includes('/admin/settings')
    }
  ];
  
  return (
    <div className="flex h-screen bg-secondary/50">
      {/* Sidebar */}
      <div 
        className={cn(
          "bg-background h-screen border-r flex flex-col transition-all duration-300 overflow-hidden",
          collapsed ? "w-[80px]" : "w-[250px]"
        )}
      >
        {/* Logo */}
        <div className="p-6 flex items-center">
          <span className={cn(
            "font-bold text-lg transition-all",
            collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          )}>
            StyleHub Admin
          </span>
        </div>
        
        <Separator />
        
        {/* Navigation */}
        <nav className="flex-1 px-3 py-6">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
                    "hover:bg-secondary",
                    item.active && "bg-secondary font-medium"
                  )}
                >
                  {item.icon}
                  <span className={cn(
                    "transition-all",
                    collapsed ? "opacity-0 w-0" : "opacity-100"
                  )}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 mt-auto">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="w-full"
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </Button>
        </div>
        
        {/* User Profile */}
        <div className={cn(
          "border-t p-4 flex items-center gap-3",
          collapsed && "justify-center"
        )}>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="Admin" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground truncate">admin@stylehub.com</p>
            </div>
          )}
          
          {!collapsed && (
            <Button variant="ghost" size="icon" className="ml-auto">
              <LogOut size={16} />
            </Button>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
