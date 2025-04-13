
import React, { useState } from 'react';
import { Search, Star, MoreHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AdminLayout from '@/components/admin/AdminLayout';

// Sample reviews data (would come from API in real app)
const initialReviews = [
  {
    id: 1,
    product: "Classic White T-Shirt",
    customer: "John Doe",
    rating: 5,
    review: "Great quality and fits perfectly. Very comfortable to wear all day.",
    date: "2025-03-25",
    status: "published"
  },
  {
    id: 2,
    product: "Vintage Denim Jacket",
    customer: "Jane Smith",
    rating: 4,
    review: "Love the design, slightly smaller than expected but still a great purchase.",
    date: "2025-03-23",
    status: "published"
  },
  {
    id: 3,
    product: "Leather Chelsea Boots",
    customer: "Robert Johnson",
    rating: 2,
    review: "The quality doesn't match the price. Disappointed with this purchase.",
    date: "2025-03-20",
    status: "published"
  },
  {
    id: 4,
    product: "Slim Fit Chinos",
    customer: "Sarah Williams",
    rating: 5,
    review: "Perfect fit and great material. Will definitely buy more colors!",
    date: "2025-03-18",
    status: "pending"
  },
  {
    id: 5,
    product: "Wool Overcoat",
    customer: "Michael Brown",
    rating: 3,
    review: "Decent coat but the buttons feel cheap. Not sure if it's worth the price.",
    date: "2025-03-15",
    status: "published"
  }
];

const ReviewsPage = () => {
  const [reviews] = useState(initialReviews);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredReviews = reviews.filter(
    review => 
      (review.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
       review.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
       review.review.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter === 'all' || review.status === statusFilter)
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Product Reviews</h1>
        </div>

        <div className="bg-background rounded-lg border shadow-sm">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search reviews..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Select 
                value={statusFilter} 
                onValueChange={setStatusFilter}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Reviews</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Review</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReviews.map((review) => (
                  <TableRow key={review.id}>
                    <TableCell className="font-medium">{review.product}</TableCell>
                    <TableCell>{review.customer}</TableCell>
                    <TableCell>
                      <div className="flex">{renderStars(review.rating)}</div>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="truncate">{review.review}</div>
                    </TableCell>
                    <TableCell>{new Date(review.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        review.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {review.status === "published" ? "Published" : "Pending"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>
                            {review.status === "pending" ? "Approve" : "Hide"}
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Delete Review
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ReviewsPage;
