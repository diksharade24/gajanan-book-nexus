import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { mockBooks, categories } from '@/data/mockBooks';
import { Plus, Pencil, Trash2, Package, TrendingUp } from 'lucide-react';

export const SellerDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showAddForm, setShowAddForm] = useState(false);

  // Mock seller's books
  const sellerBooks = mockBooks.slice(0, 3);

  if (!user || user.role !== 'seller') {
    navigate('/auth');
    return null;
  }

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Book added successfully!',
      description: 'Your book is now available in the marketplace.',
    });
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen py-8 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-serif text-primary mb-2">Seller Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user.name}!</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Books</p>
                  <p className="text-3xl font-bold">{sellerBooks.length}</p>
                </div>
                <Package className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Sales</p>
                  <p className="text-3xl font-bold">156</p>
                </div>
                <TrendingUp className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Revenue</p>
                  <p className="text-3xl font-bold">₹45,230</p>
                </div>
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg Rating</p>
                  <p className="text-3xl font-bold">4.7</p>
                </div>
                <TrendingUp className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Book Button */}
        {!showAddForm && (
          <div className="mb-6">
            <Button onClick={() => setShowAddForm(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Add New Book
            </Button>
          </div>
        )}

        {/* Add Book Form */}
        {showAddForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-serif">Add New Book</CardTitle>
              <CardDescription>Fill in the details to add a book to your inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddBook} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Book Title</Label>
                    <Input id="title" placeholder="Enter book title" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input id="author" placeholder="Enter author name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.filter(c => c !== 'All').map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (₹)</Label>
                    <Input id="price" type="number" placeholder="0.00" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stock">Stock Quantity</Label>
                    <Input id="stock" type="number" placeholder="0" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input id="image" type="url" placeholder="https://..." required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" rows={3} placeholder="Enter book description" required />
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Add Book</Button>
                  <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Books Inventory */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Your Books</CardTitle>
            <CardDescription>Manage your book inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Book</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sellerBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell className="font-medium">{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.category}</TableCell>
                    <TableCell>₹{book.price}</TableCell>
                    <TableCell>{book.stock}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
