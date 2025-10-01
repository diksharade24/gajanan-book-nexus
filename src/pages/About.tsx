import { Users, Target, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
  const team = [
    { name: 'Rahul Sharma', role: 'Project Lead & Backend Developer', email: 'rahul@gajanan.com' },
    { name: 'Priya Patel', role: 'Frontend Developer', email: 'priya@gajanan.com' },
    { name: 'Amit Kumar', role: 'Database Administrator', email: 'amit@gajanan.com' },
    { name: 'Sneha Desai', role: 'UI/UX Designer', email: 'sneha@gajanan.com' },
    { name: 'Vikram Singh', role: 'Quality Assurance', email: 'vikram@gajanan.com' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif text-primary mb-4">About Gajanan Book Depo</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted online destination for books across all genres and categories
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To make quality books accessible to everyone through our comprehensive online platform
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Our Community</h3>
              <p className="text-muted-foreground">
                Building a vibrant community of readers and sellers passionate about books
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Our Quality</h3>
              <p className="text-muted-foreground">
                Ensuring the best selection and service for all book lovers
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About Content */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Why Choose Us?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Gajanan Book Depo is a modern online bookstore designed to bring the joy of reading to everyone. 
                Our platform connects book lovers with a vast collection spanning novels, educational materials, 
                comics, scientific literature, and technology books.
              </p>
              <p>
                We've created a seamless shopping experience that makes discovering and purchasing books easier 
                than ever. Whether you're a student looking for textbooks, a professional seeking technical 
                resources, or a casual reader hunting for your next adventure, we have something for everyone.
              </p>
              <h3 className="text-xl font-serif font-bold text-primary pt-4">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Extensive collection across multiple categories</li>
                <li>Easy-to-use seller dashboard for book vendors</li>
                <li>Smart search and filtering options</li>
                <li>Secure shopping cart and checkout process</li>
                <li>Detailed book information and ratings</li>
                <li>Fast delivery and hassle-free returns</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card key={member.email}>
                <CardContent className="p-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.email}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Technology Stack</h2>
            <p className="text-muted-foreground mb-4">
              This project is built using modern web technologies to ensure a fast, reliable, and beautiful user experience:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>React.js with TypeScript</li>
                  <li>Tailwind CSS for styling</li>
                  <li>shadcn/ui components</li>
                  <li>React Router for navigation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Features</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Responsive design</li>
                  <li>Local state management</li>
                  <li>Mock data for demonstration</li>
                  <li>Beautiful UI/UX</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
