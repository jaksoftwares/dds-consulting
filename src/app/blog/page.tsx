import Image from "next/image";

export default function Blogs() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <Image 
            src="/images/consultancy3.jpg" 
            alt="Insights & Strategies" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-40" 
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Insights & Strategies for Business Growth
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Stay ahead with the latest trends, insights, and expert strategies from DDS Consulting.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center">Latest Articles</h2>
          <p className="mt-6 text-lg text-gray-600 text-center">
            Explore our expert business insights, financial strategies, and leadership guides.
          </p>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {[
              {
                title: "Top 5 Business Trends for 2025",
                description:
                  "Discover the upcoming business trends shaping industries in 2025 and beyond.",
                image: "/images/consultancy4.jpg",
                link: "/blogs/top-business-trends-2025",
              },
              {
                title: "How to Scale Your Business Successfully",
                description:
                  "A step-by-step guide on how to scale your business while maintaining profitability.",
                image: "/images/consultancy3.jpg",
                link: "/blogs/how-to-scale-business",
              },
              {
                title: "Financial Planning for Startups",
                description:
                  "Essential financial strategies every startup founder must know to succeed.",
                image: "/images/consultancy2.jpg",
                link: "/blogs/financial-planning-startups",
              },
              {
                title: "The Role of AI in Business Growth",
                description:
                  "How artificial intelligence is transforming business operations and decision-making.",
                image: "/images/consultancy1.jpg",
                link: "/blogs/ai-in-business",
              },
              {
                title: "Effective Leadership in Uncertain Times",
                description:
                  "Learn key leadership principles to navigate challenges and inspire teams.",
                image: "/images/consultancy3.jpg",
                link: "/blogs/effective-leadership",
              },
              {
                title: "The Future of Digital Marketing",
                description:
                  "Emerging digital marketing strategies that will define business success in the next decade.",
                image: "/images/consultancy2.jpg",
                link: "/blogs/future-digital-marketing",
              },
            ].map((blog, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  width={600} 
                  height={400} 
                  className="w-full h-56 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900">{blog.title}</h3>
                  <p className="mt-4 text-gray-700">{blog.description}</p>
                  <a
                    href={blog.link}
                    className="mt-6 inline-block text-blue-500 font-semibold hover:text-blue-700 transition"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-4xl font-bold">Stay Updated with Business Insights</h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Subscribe to our newsletter and get exclusive strategies and insights delivered to your inbox.
        </p>
        <form className="mt-8 max-w-lg mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-r-lg text-lg shadow-md transition-all"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
