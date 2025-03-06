import Image from "next/image";

export default function Testimonials() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <Image 
            src="/images/testimonials-hero.jpg" 
            alt="What Our Clients Say" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-40" 
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            What Our Clients Say
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from business leaders and entrepreneurs who have transformed their success with DDS Consulting.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Client Success Stories</h2>
          <p className="mt-6 text-lg text-gray-600">
            Trusted by businesses worldwide, our consulting expertise has helped companies achieve exponential growth.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
            {[
              {
                name: "Sarah Mitchell",
                title: "CEO, TechNova Solutions",
                testimonial:
                  "DDS Consulting provided us with strategic guidance that boosted our revenue by 35% in just six months. Their insights were a game-changer!",
                image: "/images/joseph-kirika.jpg",
              },
              {
                name: "James Carter",
                title: "Founder, Carter & Co.",
                testimonial:
                  "The financial consulting services we received were outstanding. We optimized our operations and increased efficiency across all departments.",
                image: "/images/joseph-kirika.jpg",
              },
              {
                name: "Emily Rodriguez",
                title: "Managing Director, FutureStart",
                testimonial:
                  "Thanks to DDS Consulting, we successfully navigated digital transformation. Our online presence and automation improved dramatically!",
                image: "/images/joseph-kirika.jpg",
              },
              {
                name: "Daniel Lee",
                title: "COO, Global Market Insights",
                testimonial:
                  "Their market research services were top-tier. We gained deep insights that helped us make data-driven decisions with confidence.",
                image: "/images/joseph-kirika.jpg",
              },
              {
                name: "Olivia Martinez",
                title: "CFO, BrightPath Ventures",
                testimonial:
                  "The best financial strategy team we’ve worked with! They streamlined our budgeting and investment planning, leading to massive growth.",
                image: "/images/joseph-kirika.jpg",
              },
              {
                name: "Michael Johnson",
                title: "CTO, BlueSky Innovations",
                testimonial:
                  "The expert advice from DDS Consulting helped us integrate cutting-edge technology into our business. Highly recommend their services!",
                image: "/images/joseph-kirika.jpg",
              },
            ].map((client, index) => (
              <div key={index} className="p-8 bg-gray-100 rounded-lg shadow-lg text-left">
                <div className="flex items-center space-x-4 mb-6">
                  <Image 
                    src={client.image} 
                    alt={client.name} 
                    width={60} 
                    height={60} 
                    className="rounded-full" 
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                    <p className="text-gray-600 text-sm">{client.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{client.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-4xl font-bold">Join Our Success Stories</h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Be the next business to achieve remarkable growth with DDS Consulting. Let&apos;s work together to unlock your full potential.
        </p>
        <a href="/contact" className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-lg text-xl shadow-md transition-all">
          Get Started Today
        </a>
      </section>
    </main>
  );
}
