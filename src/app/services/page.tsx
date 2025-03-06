import Image from "next/image";

export default function Services() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <Image 
            src="/images/services-hero.jpg" 
            alt="Our Services" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-40" 
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Our Consulting Services
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Unlock business success with our expert consulting services tailored to drive growth, efficiency, and innovation.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">Our Expertise</h2>
          <p className="mt-6 text-lg text-gray-600">
            We provide strategic solutions across multiple industries, delivering measurable success.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mt-10">
            {[
              {
                title: "Business Strategy",
                desc: "Developing high-impact strategies that drive business growth and operational excellence.",
                image: "/images/consultancy1.jpg"
              },
              {
                title: "Financial Consulting",
                desc: "Optimizing financial structures and investment strategies for maximum profitability.",
                image: "/images/consultancy2.jpg"
              },
              {
                title: "Digital Transformation",
                desc: "Leveraging technology to streamline processes and enhance digital capabilities.",
                image: "/images/consultancy3.jpg"
              },
              {
                title: "Market Research & Analysis",
                desc: "Providing deep market insights to support data-driven decision-making.",
                image: "/images/consultancy4.jpg"
              },
              {
                title: "Operational Efficiency",
                desc: "Enhancing productivity and efficiency with innovative operational strategies.",
                image: "/images/consultancy1.jpg"
              },
              {
                title: "Risk Management",
                desc: "Helping businesses identify and mitigate risks to ensure stability and resilience.",
                image: "/images/consultancy2.jpg"
              },
            ].map((service, index) => (
              <div key={index} className="p-8 bg-gray-100 rounded-lg shadow-lg text-left">
                <Image src={service.image} alt={service.title} width={400} height={250} className="rounded-md mb-6" />
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose DDS Consulting?</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Our commitment to excellence and client success makes us a trusted partner for businesses worldwide.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {[
            { title: "Expert Insights", desc: "Our consultants are industry leaders with years of experience." },
            { title: "Data-Driven Solutions", desc: "We base our strategies on real-world data and market research." },
            { title: "Client-Centered Approach", desc: "Your business success is our top priority." },
            { title: "Innovative Thinking", desc: "We bring fresh, cutting-edge solutions to modern business challenges." },
            { title: "Global Reach", desc: "We operate across industries and borders, serving businesses worldwide." },
            { title: "Proven Track Record", desc: "Hundreds of businesses have achieved measurable success with our strategies." },
          ].map((value, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">{value.title}</h3>
              <p className="mt-4 text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-4xl font-bold">Let’s Elevate Your Business</h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Partner with DDS Consulting today and take your business to the next level with our expert solutions.
        </p>
        <a href="/contact" className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-lg text-xl shadow-md transition-all">
          Get a Free Consultation
        </a>
      </section>
    </main>
  );
}
