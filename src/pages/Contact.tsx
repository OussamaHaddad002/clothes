import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible!",
    });
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            Have a question or feedback? We'd love to hear from you. Fill out the form
            below and our team will get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">support@lamsa.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">
                123 Fashion Street<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-2">Name</label>
            <Input id="name" placeholder="Your name" required />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-2">Email</label>
            <Input id="email" type="email" placeholder="Your email" required />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium mb-2">Message</label>
            <Textarea
              id="message"
              placeholder="Your message"
              className="min-h-[150px]"
              required
            />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;