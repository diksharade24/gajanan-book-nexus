import { Book } from '@/types/book';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface BookCardProps {
  book: Book;
  onViewDetails?: (book: Book) => void;
}

export const BookCard = ({ book, onViewDetails }: BookCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(book);
    toast({
      title: 'Added to cart',
      description: `${book.title} has been added to your cart.`,
    });
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative h-64 overflow-hidden bg-muted">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-primary">
            {book.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-serif text-lg font-semibold line-clamp-1 mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
        {book.rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{book.rating}</span>
          </div>
        )}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">₹{book.price}</span>
          <span className="text-xs text-muted-foreground">
            {book.stock > 0 ? `${book.stock} in stock` : 'Out of stock'}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 gap-2">
        <Button
          onClick={handleAddToCart}
          disabled={book.stock === 0}
          className="flex-1 gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
        {onViewDetails && (
          <Button variant="outline" onClick={() => onViewDetails(book)}>
            Details
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
