import { useState } from 'react';
import { BookCard } from '@/components/BookCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockBooks, categories } from '@/data/mockBooks';
import { Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Book } from '@/types/book';

export const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'mid' | 'high'>('all');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = mockBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    
    const matchesPrice =
      priceRange === 'all' ||
      (priceRange === 'low' && book.price < 400) ||
      (priceRange === 'mid' && book.price >= 400 && book.price < 700) ||
      (priceRange === 'high' && book.price >= 700);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-serif text-primary mb-2">Browse Books</h1>
          <p className="text-muted-foreground">Discover your next favorite read</p>
        </div>

        {/* Filters */}
        <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={(value: any) => setPriceRange(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under ₹400</SelectItem>
                <SelectItem value="mid">₹400 - ₹700</SelectItem>
                <SelectItem value="high">Above ₹700</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} onViewDetails={setSelectedBook} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No books found matching your criteria.</p>
            <Button variant="outline" className="mt-4" onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setPriceRange('all');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Book Details Dialog */}
      <Dialog open={!!selectedBook} onOpenChange={() => setSelectedBook(null)}>
        <DialogContent className="max-w-2xl">
          {selectedBook && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">{selectedBook.title}</DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src={selectedBook.imageUrl}
                  alt={selectedBook.title}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div>
                  <p className="text-lg mb-2">By {selectedBook.author}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Category: {selectedBook.category}
                  </p>
                  <p className="mb-4">{selectedBook.description}</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm">
                      <span className="font-semibold">Seller:</span> {selectedBook.sellerName}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Stock:</span> {selectedBook.stock} available
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-primary mb-4">₹{selectedBook.price}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
