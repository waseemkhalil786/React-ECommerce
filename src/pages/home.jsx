import React from "react";
import HeroSection from "../components/heroSection";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your orders delivered quickly with our reliable shipping
                service.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-gray-600">
                Pay with confidence using our secure and encrypted payment
                methods.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <p className="text-gray-600">
                Our team is here to assist you 24/7 with any inquiries or
                concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="border rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={`https://via.placeholder.com/300x200?text=Product+${item}`}
                  alt={`Product ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Product {item}</h3>
                  <p className="text-gray-600 mb-4">$99.99</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-6 border rounded-lg shadow-sm bg-gray-50"
              >
                <p className="text-gray-600 italic mb-4">
                  "Amazing product! Great quality and fast shipping. Highly
                  recommended!"
                </p>
                <h3 className="text-lg font-semibold">Customer {item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-8">Update</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to get the latest updates and exclusive
            deals!
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 border rounded-lg shadow-sm w-full sm:w-auto"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500">
              Follow
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
