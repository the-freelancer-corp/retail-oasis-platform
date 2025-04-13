
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AccountLayout from '@/components/account/AccountLayout';

// Sample order data (would come from API in real app)
const orders = [
  {
    id: "ORD-1234",
    date: "2025-03-25",
    status: "Delivered",
    total: 124.99,
    items: 3
  },
  {
    id: "ORD-1235",
    date: "2025-03-20",
    status: "Processing",
    total: 79.50,
    items: 2
  },
  {
    id: "ORD-1236",
    date: "2025-03-15",
    status: "Shipped",
    total: 239.99,
    items: 4
  },
  {
    id: "ORD-1237",
    date: "2025-03-08",
    status: "Delivered",
    total: 45.25,
    items: 1
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "Shipped":
      return "bg-blue-100 text-blue-800";
    case "Processing":
      return "bg-yellow-100 text-yellow-800";
    case "Cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const OrdersPage = () => {
  return (
    <AccountLayout title="My Orders">
      <div className="space-y-6">
        {orders.length > 0 ? (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>${order.total.toFixed(2)}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" asChild>
                        <Link to={`/account/orders/${order.id}`}>
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View order</span>
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No orders yet</h3>
            <p className="text-muted-foreground mb-6">You haven't placed any orders yet.</p>
            <Button asChild>
              <Link to="/">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </AccountLayout>
  );
};

export default OrdersPage;
