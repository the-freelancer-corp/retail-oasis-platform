
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Menu, 
  X,
  LogIn
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';

const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            StyleHub
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/category/all" className="text-sm font-medium hover:text-primary/70 transition-colors">
              All Products
            </Link>
            <Link to="/category/tops" className="text-sm font-medium hover:text-primary/70 transition-colors">
              Tops
            </Link>
            <Link to="/category/bottomwear" className="text-sm font-medium hover:text-primary/70 transition-colors">
              Bottom Wear
            </Link>
            <Link to="/category/footwear" className="text-sm font-medium hover:text-primary/70 transition-colors">
              Footwear
            </Link>
            <Link to="/category/accessories" className="text-sm font-medium hover:text-primary/70 transition-colors">
              Accessories
            </Link>
            <Link to="/category/layering" className="text-sm font-medium hover:text-primary/70 transition-colors">
              Layering
            </Link>
          </nav>
          
          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-primary/70 transition-colors"
            >
              <Search size={20} />
            </button>
            
            <Link to="/wishlist" className="hidden sm:block hover:text-primary/70 transition-colors">
              <Heart size={20} />
            </Link>
            
            {/* User Authentication */}
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8"
                  }
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>
            
            <SignedOut>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="hover:text-primary/70 transition-colors">
                    <User size={20} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate("/login")}>
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/register")}>
                    <User className="mr-2 h-4 w-4" />
                    Register
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedOut>
            
            <Link to="/cart" className="hover:text-primary/70 transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -mt-2 -mr-2 bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
            </Link>
            
            <Button
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className={cn(
          "overflow-hidden transition-all duration-300",
          isSearchOpen ? "h-16 opacity-100 mt-4" : "h-0 opacity-0"
        )}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search for products..." 
              className="pl-10 w-full" 
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-background z-40 transition-transform duration-300 md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container py-8">
          <div className="flex flex-col space-y-6">
            <Link 
              to="/category/all" 
              className="text-lg font-medium py-2 border-b"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Products
            </Link>
            <Link 
              to="/category/tops" 
              className="text-lg font-medium py-2 border-b"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tops
            </Link>
            <Link 
              to="/category/bottomwear" 
              className="text-lg font-medium py-2 border-b"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bottom Wear
            </Link>
            <Link 
              to="/category/footwear" 
              className="text-lg font-medium py-2 border-b"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Footwear
            </Link>
            <Link 
              to="/category/accessories" 
              className="text-lg font-medium py-2 border-b"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accessories
            </Link>
            <Link 
              to="/category/layering" 
              className="text-lg font-medium py-2 border-b"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Layering
            </Link>

            {/* Mobile Auth Links */}
            <SignedOut>
              <Link 
                to="/login" 
                className="text-lg font-medium py-2 border-b flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogIn className="mr-2 h-5 w-5" /> Login
              </Link>
              <Link 
                to="/register" 
                className="text-lg font-medium py-2 border-b flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="mr-2 h-5 w-5" /> Register
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
