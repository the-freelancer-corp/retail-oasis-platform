
import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  MoreHorizontal
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import AdminLayout from './AdminLayout';
import { useToast } from '@/hooks/use-toast';

// Mock product data
const productData = [
  { 
    id: '1', 
    name: 'Classic White T-Shirt', 
    price: 29.99, 
    category: 'tops',
    stock: 150,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop'
  },
  { 
    id: '2', 
    name: 'Slim Fit Denim Jeans', 
    price: 59.99, 
    category: 'bottomwear',
    stock: 85,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=100&h=100&fit=crop'
  },
  { 
    id: '3', 
    name: 'Leather Sneakers', 
    price: 89.99, 
    category: 'footwear',
    stock: 42,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=100&h=100&fit=crop'
  },
  { 
    id: '4', 
    name: 'Minimalist Watch', 
    price: 129.99, 
    category: 'accessories',
    stock: 36,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=100&h=100&fit=crop'
  },
  { 
    id: '5', 
    name: 'Oversized Wool Coat', 
    price: 199.99, 
    category: 'layering',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1548624313-0fb941b50889?w=100&h=100&fit=crop'
  },
  { 
    id: '6', 
    name: 'Ribbed Knit Sweater', 
    price: 79.99, 
    category: 'tops',
    stock: 65,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=100&h=100&fit=crop'
  },
  { 
    id: '7', 
    name: 'Leather Crossbody Bag', 
    price: 149.99, 
    category: 'accessories',
    stock: 28,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=100&h=100&fit=crop'
  },
  { 
    id: '8', 
    name: 'Chunky Ankle Boots', 
    price: 119.99, 
    category: 'footwear',
    stock: 47,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=100&h=100&fit=crop'
  },
];

const ProductManagement: React.FC = () => {
  const { toast } = useToast();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  
  const filteredProducts = productData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const handleDeleteClick = (id: string) => {
    setSelectedProduct(id);
    setDeleteDialogOpen(true);
  };
  
  const handleDeleteConfirm = () => {
    // In a real application, this would call an API to delete the product
    console.log(`Deleting product with ID: ${selectedProduct}`);
    
    toast({
      title: "Product deleted",
      description: "The product has been successfully deleted."
    });
    
    setDeleteDialogOpen(false);
    setSelectedProduct(null);
  };
  
  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Products</h1>
          
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New Product
          </Button>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Search products..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-muted-foreground" />
            <Select 
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="tops">Tops</SelectItem>
                <SelectItem value="bottomwear">Bottom Wear</SelectItem>
                <SelectItem value="footwear">Footwear</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="layering">Layering</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Products Table */}
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="h-10 w-10 object-cover rounded"
                      />
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="capitalize">{product.category}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={`
                      ${product.stock > 50 ? 'text-green-600' : ''}
                      ${product.stock <= 50 && product.stock > 20 ? 'text-yellow-600' : ''}
                      ${product.stock <= 20 ? 'text-red-600' : ''}
                    `}>
                      {product.stock}
                    </span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Edit size={16} />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="flex items-center gap-2 text-red-600" 
                          onClick={() => handleDeleteClick(product.id)}
                        >
                          <Trash2 size={16} />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredProducts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No products found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        
        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this product? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteConfirm}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}

export default ProductManagement;
