const About = () => {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-8">About LAMSA</h1>
          <div className="prose max-w-none space-y-6">
            <p className="text-lg">
              Welcome to LAMSA, where style meets sustainability. Founded in 2024, we've made it our mission to provide high-quality, 
              ethically-produced clothing that doesn't compromise on style or comfort.
            </p>
            <p className="text-lg">
              Our collection features carefully curated pieces that blend timeless design with contemporary trends. 
              Each item is crafted using premium materials and sustainable practices, ensuring both quality and 
              responsibility to our environment.
            </p>
            <p className="text-lg">
              At LAMSA, we believe that great style should be accessible to everyone. Our commitment to quality, 
              sustainability, and customer satisfaction drives everything we do. Join us in our journey to make 
              fashion more sustainable and stylish.
            </p>
          </div>
        </div>
        <div className="relative h-[600px] rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format" 
            alt="LAMSA Store Interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;