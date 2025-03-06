import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <Image 
            src="/images/consultancy1.jpg" 
            alt="Business Consulting" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-40" 
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Transforming Businesses with Strategic Consulting
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            At DDS Consulting, we empower businesses with innovative strategies, 
            market insights, and expert guidance to achieve exponential growth.
          </p>
          <Link href="/contact" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg text-xl shadow-md transition-all">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
          <p className="mt-6 text-lg text-gray-600">
            DDS Consulting is a global consulting firm that partners with enterprises, startups, and organizations to drive innovation, efficiency, and profitability. Our team of experts brings a wealth of experience in business strategy, financial planning, market research, and digital transformation.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12 mt-10">
            {[
              { title: "Business Strategy", image: "/images/consultancy2.jpg", desc: "Tailored strategies to scale and optimize your business operations." },
              { title: "Market Analysis", image: "/images/consultancy3.jpg", desc: "Data-driven market insights to position your business for success." },
              { title: "Financial Consulting", image: "/images/consultancy4.jpg", desc: "Expert financial guidance to enhance profitability and growth." },
            ].map((service, index) => (
              <div key={index} className="p-8 bg-gray-100 rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Image src={service.image} alt={service.title} width={400} height={250} className="rounded-lg mx-auto" />
                <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-900 text-white text-center px-6">
        <h2 className="text-4xl font-bold">Why Choose DDS Consulting?</h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          We bring deep industry expertise, innovative solutions, and a data-driven approach to help businesses thrive in a competitive landscape.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
          {[
            { title: "Industry Expertise", desc: "Years of experience in diverse industries worldwide." },
            { title: "Custom Solutions", desc: "Tailored strategies designed for your unique business needs." },
            { title: "Proven Success", desc: "A track record of helping businesses achieve their goals." },
          ].map((item, index) => (
            <div key={index} className="p-8 bg-white text-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Trusted by Leading Brands</h2>
          <div className="flex flex-wrap justify-center gap-12 mt-10">
            {["brand1.jpg", "brand2.jpg", "brand3.jpg", "brand4.jpg"].map((logo, index) => (
              <Image key={index} src={`/images/${logo}`} alt="Brand Logo" width={150} height={50} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-12 mt-10">
            {[
              { name: "John Doe, CEO - GlobalTech", text: "DDS Consulting transformed our operations, increasing efficiency and revenue." },
              { name: "Jane Smith, Founder - Innovate Inc.", text: "The team’s expertise helped us scale and dominate our market segment." },
            ].map((testimonial, index) => (
              <div key={index} className="p-8 bg-gray-100 rounded-lg shadow-lg">
                <p className="text-gray-600 italic">{testimonial.text}</p>
                <h3 className="mt-6 text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-4xl font-bold">Let’s Elevate Your Business</h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Contact DDS Consulting today to discover innovative business solutions designed for success.
        </p>
        <Link href="/contact" className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-lg text-xl shadow-md transition-all">
          Get Started Now
        </Link>
      </section>
    </main>
  );
}
