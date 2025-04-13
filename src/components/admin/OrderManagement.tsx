
import React, { useState } from 'react';
import { Search, Filter, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import AdminLayout from './AdminLayout';

// Mock order data
const orderData = [
  { 
    id: '1001',
    customerName: 'John Doe',
    customerEmail: 'john.doe@example.com',
    date: '2025-04-12',
    status: 'Delivered',
    items: 3,
    total: 89.98,
  },
  { 
    id: '1002',
    customerName: 'Jane Smith',
    customerEmail: 'jane.smith@example.com',
    date: '2025-04-12',
    status: 'Shipped',
    items: 2,
    total: 149.95,
  },
  { 
    id: '1003',
    customerName: 'Robert Johnson',
    customerEmail: 'robert.johnson@example.com',
    date: '2025-04-11',
    status: 'Processing',
    items: 1,
    total: 59.99,
  },
  { 
    id: '1004',
    customerName: 'Emily Wilson',
    customerEmail: 'emily.wilson@example.com',
    date: '2025-04-11',
    status: 'Pending',
    items: 4,
    total: 219.97,
  },
  { 
    id: '1005',
    customerName: 'Michael Brown',
    customerEmail: 'michael.brown@example.com',
    date: '2025-04-10',
    status: 'Delivered',
    items: 2,
    total: 79.98,
  },
  { 
    id: '1006',
    customerName: 'Lisa Davis',
    customerEmail: 'lisa.davis@example.com',
    date: '2025-04-10',
    status: 'Shipped',
    items: 5,
    total: 259.95,
  },
  { 
    id: '1007',
    customerName: 'Thomas Miller',
    customerEmail: 'thomas.miller@example.com',
    date: '2025-04-09',
    status: 'Cancelled',
    items: 1,
    total: 49.99,
  },
];

// Mock order detail data
const mockOrderDetails = {
  id: '1001',
  customerName: 'John Doe',
  customerEmail: 'john.doe@example.com',
  customerPhone: '+1 (555) 123-4567',
  date: '2025-04-12',
  status: 'Delivered',
  shippingAddress: {
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States'
  },
  items: [
    {
      id: '1',
      name: 'Classic White T-Shirt',
      price: 29.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop'
    },
    {
      id: '2',
      name: 'Slim Fit Denim Jeans',
      price: 59.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=100&h=100&fit=crop'
    }
  ],
  subtotal: 89.98,
  shipping: 5.99,
  total: 95.97,
};

const OrderManagement: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(mockOrderDetails);
  
  const filteredOrders = orderData.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(search.toLowerCase()) || 
      order.customerName.toLowerCase().includes(search.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || order.status.toLowerCase() === selectedStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });
  
  const handleViewDetails = (id: string) => {
    // In a real application, this would fetch order details
    setSelectedOrder(mockOrderDetails);
    setDetailsOpen(true);
  };
  
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Orders</h1>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Search orders..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-muted-foreground" />
            <Select 
              value={selectedStatus}
              onValueChange={setSelectedStatus}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Orders Table */}
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>#{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.customerName}</div>
                      <div className="text-sm text-muted-foreground">{order.customerEmail}</div>
                    </div>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <span className={`
                      inline-block px-2 py-1 rounded-full text-xs
                      ${getStatusColor(order.status)}
                    `}>
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleViewDetails(order.id)}
                    >
                      <Eye size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filteredOrders.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    No orders found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        
        {/* Order Details Dialog */}
        <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Order #{selectedOrder.id}</DialogTitle>
              <DialogDescription>
                Placed on {selectedOrder.date}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Customer Info */}
              <div>
                <h3 className="font-medium mb-2">Customer Information</h3>
                <div className="text-sm space-y-1">
                  <p>{selectedOrder.customerName}</p>
                  <p>{selectedOrder.customerEmail}</p>
                  <p>{selectedOrder.customerPhone}</p>
                </div>
                
                <h3 className="font-medium mb-2 mt-4">Shipping Address</h3>
                <div className="text-sm space-y-1">
                  <p>{selectedOrder.shippingAddress.address}</p>
                  <p>
                    {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} {selectedOrder.shippingAddress.zipCode}
                  </p>
                  <p>{selectedOrder.shippingAddress.country}</p>
                </div>
              </div>
              
              {/* Order Status */}
              <div>
                <h3 className="font-medium mb-2">Order Status</h3>
                <div className="mb-4">
                  <Badge className={getStatusColor(selectedOrder.status)}>
                    {selectedOrder.status}
                  </Badge>
                </div>
                
                <Select defaultValue={selectedOrder.status.toLowerCase()}>
                  <SelectTrigger>
                    <SelectValue placeholder="Change status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button className="mt-2 w-full">Update Status</Button>
              </div>
            </div>
            
            {/* Order Items */}
            <div className="mt-6">
              <h3 className="font-medium mb-3">Order Items</h3>
              <div className="border rounded-md overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedOrder.items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img 
                              src={item.image}
                              alt={item.name}
                              className="h-10 w-10 object-cover rounded"
                            />
                            <span>{item.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>${item.price.toFixed(2)}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {/* Order Summary */}
              <div className="mt-4 space-y-1 text-right">
                <div className="flex justify-end">
                  <span className="w-32">Subtotal:</span>
                  <span className="w-24">${selectedOrder.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-end">
                  <span className="w-32">Shipping:</span>
                  <span className="w-24">${selectedOrder.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-end font-medium pt-2 border-t">
                  <span className="w-32">Total:</span>
                  <span className="w-24">${selectedOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}

export default OrderManagement;
