import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            About Our Store
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a dedicated e-commerce platform, bringing you the best in quality, value, and customer service. Explore our journey, our mission, and what makes us the preferred choice for online shoppers.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="file:///C:/Users/kk/AppData/Roaming/Microsoft/Windows/Network%20Shortcuts/image_files/405647879_334246529325651_7770486216155481866_n.jpg"
              alt="Our Story"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded with a passion for quality and a commitment to excellence, we have grown into a trusted destination for online shoppers. From our humble beginnings to where we are now, we’ve been driven by a desire to bring the best to our customers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in creating a seamless shopping experience, from browsing to checkout, with an unwavering focus on customer satisfaction.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Our Mission</h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto">
            To provide a diverse range of top-quality products, exceptional customer service, and a smooth shopping experience that exceeds expectations. We strive to be a reliable and trusted name in online retail, fostering long-term relationships with our valued customers.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <img src="https://via.placeholder.com/50" alt="Quality" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">High Quality</h3>
            <p className="text-gray-600">
              Our products go through rigorous quality checks to ensure only the best reaches our customers.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <img src="https://via.placeholder.com/50" alt="Customer Service" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Excellent Support</h3>
            <p className="text-gray-600">
              We pride ourselves on outstanding customer service, always ready to help with any inquiries.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <img src="https://via.placeholder.com/50" alt="Fast Shipping" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Fast Shipping</h3>
            <p className="text-gray-600">
              Quick and reliable delivery options to get your favorite products to you as soon as possible.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full w-32 h-32 shadow-md hover:scale-105 transition-transform duration-300 mb-4"
              />
              <h3 className="text-xl font-medium text-gray-800">John Doe</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full w-32 h-32 shadow-md hover:scale-105 transition-transform duration-300 mb-4"
              />
              <h3 className="text-xl font-medium text-gray-800">Jane Smith</h3>
              <p className="text-gray-500">Marketing Head</p>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full w-32 h-32 shadow-md hover:scale-105 transition-transform duration-300 mb-4"
              />
              <h3 className="text-xl font-medium text-gray-800">Emily Johnson</h3>
              <p className="text-gray-500">Product Manager</p>
            </div>
            {/* Team Member 4 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full w-32 h-32 shadow-md hover:scale-105 transition-transform duration-300 mb-4"
              />
              <h3 className="text-xl font-medium text-gray-800">Michael Brown</h3>
              <p className="text-gray-500">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
