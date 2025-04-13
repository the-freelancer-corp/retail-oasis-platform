
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { ArrowUp, ArrowDown, DollarSign, ShoppingBag, Users, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import AdminLayout from './AdminLayout';

// Mock sales data
const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
  { name: 'Jul', sales: 7000 },
  { name: 'Aug', sales: 8000 },
  { name: 'Sep', sales: 6500 },
  { name: 'Oct', sales: 7500 },
  { name: 'Nov', sales: 9000 },
  { name: 'Dec', sales: 11000 },
];

// Mock category data
const categoryData = [
  { name: 'Tops', sales: 32000 },
  { name: 'Bottomwear', sales: 28000 },
  { name: 'Footwear', sales: 24000 },
  { name: 'Accessories', sales: 18000 },
  { name: 'Layering', sales: 22000 },
];

// Mock recent orders
const recentOrders = [
  { id: '1001', customer: 'John Doe', date: '2025-04-12', status: 'Delivered', total: 89.98 },
  { id: '1002', customer: 'Jane Smith', date: '2025-04-12', status: 'Shipped', total: 149.95 },
  { id: '1003', customer: 'Robert Johnson', date: '2025-04-11', status: 'Processing', total: 59.99 },
  { id: '1004', customer: 'Emily Wilson', date: '2025-04-11', status: 'Pending', total: 219.97 },
  { id: '1005', customer: 'Michael Brown', date: '2025-04-10', status: 'Delivered', total: 79.98 },
];

const AdminDashboard: React.FC = () => {
  const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
  const totalOrders = 1254;
  const totalCustomers = 857;
  
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalSales.toLocaleString()}</div>
              <div className="flex items-center text-sm text-green-500">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>12% from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Orders</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalOrders}</div>
              <div className="flex items-center text-sm text-green-500">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>8% from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCustomers}</div>
              <div className="flex items-center text-sm text-green-500">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>15% from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2%</div>
              <div className="flex items-center text-sm text-red-500">
                <ArrowDown className="h-4 w-4 mr-1" />
                <span>0.5% from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Sales Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="yearly">
              <TabsList className="mb-4">
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
              
              <TabsContent value="yearly" className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={salesData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="hsl(var(--primary))"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="monthly" className="h-80">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Monthly data view</p>
                </div>
              </TabsContent>
              
              <TabsContent value="weekly" className="h-80">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Weekly data view</p>
                </div>
              </TabsContent>
              
              <TabsContent value="daily" className="h-80">
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Daily data view</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category Sales */}
          <Card>
            <CardHeader>
              <CardTitle>Sales by Category</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={categoryData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-3 font-medium">Order ID</th>
                      <th className="pb-3 font-medium">Customer</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b last:border-0">
                        <td className="py-3">{order.id}</td>
                        <td className="py-3">{order.customer}</td>
                        <td className="py-3">
                          <span 
                            className={`inline-block px-2 py-1 rounded-full text-xs
                              ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : ''}
                              ${order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : ''}
                              ${order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : ''}
                              ${order.status === 'Pending' ? 'bg-gray-100 text-gray-800' : ''}
                            `}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 text-right">${order.total.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
