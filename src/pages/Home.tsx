import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookCard } from '@/components/BookCard';
import { mockBooks } from '@/data/mockBooks';
import { BookOpen, ShieldCheck, Truck, CreditCard } from 'lucide-react';

export const Home = () => {
  const featuredBooks = mockBooks.slice(0, 4);
  const bestsellers = mockBooks.filter(book => book.rating && book.rating >= 4.7);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-primary mb-4">
              Your One-Stop Online Bookstore
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover thousands of books across all genres. From timeless classics to modern bestsellers,
              find your next great read at Gajanan Book Depo.
            </p>
            <div className="flex gap-4">
              <Link to="/books">
                <Button size="lg" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  Browse Books
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Vast Collection</h3>
              <p className="text-sm text-muted-foreground">
                Thousands of books across all categories
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mb-4">
                <ShieldCheck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Secure Shopping</h3>
              <p className="text-sm text-muted-foreground">
                Safe and secure payment options
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Quick delivery to your doorstep
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mb-4">
                <CreditCard className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">
                Hassle-free return policy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-2">Featured Books</h2>
              <p className="text-muted-foreground">Handpicked selections just for you</p>
            </div>
            <Link to="/books">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-2">Bestsellers</h2>
              <p className="text-muted-foreground">Top-rated books loved by readers</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-primary mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Novels', 'Educational', 'Comics', 'Science', 'Technology'].map((category) => (
              <Link key={category} to={`/books?category=${category}`}>
                <div className="p-6 rounded-lg border bg-card hover:bg-primary/5 hover:border-primary transition-colors text-center">
                  <h3 className="font-serif font-semibold text-lg">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
