import Image from "next/image";

export default function About() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <Image 
            src="/images/consultancy2.jpg" 
            alt="About DDS Consulting" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-40" 
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            About DDS Consulting
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            A trusted partner in business transformation, guiding organizations toward success with strategic expertise and innovative solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 text-center px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">Our Mission & Vision</h2>
          <p className="mt-6 text-lg text-gray-600">
            At DDS Consulting, we are committed to empowering businesses with innovative strategies, expert insights, and data-driven solutions to drive sustainable growth.
          </p>
          <div className="grid md:grid-cols-2 gap-12 mt-10">
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
              <p className="mt-4 text-gray-600">
                To revolutionize business operations through cutting-edge strategies and solutions that maximize efficiency, profitability, and long-term success.
              </p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
              <p className="mt-4 text-gray-600">
                To be the world`&apos;s leading consulting firm, driving innovation and empowering businesses to achieve extraordinary success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800">Our Core Values</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Our foundation is built on strong principles that guide every decision and strategy we implement.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {[
            { title: "Integrity", desc: "We uphold the highest ethical standards in all business dealings." },
            { title: "Innovation", desc: "We embrace forward-thinking strategies to drive competitive advantage." },
            { title: "Client-Centric", desc: "We prioritize our clients’ success with tailored, data-driven solutions." },
            { title: "Excellence", desc: "We strive for perfection in execution and client service." },
            { title: "Collaboration", desc: "We believe in teamwork and partnership for maximum impact." },
            { title: "Results-Driven", desc: "Our focus is on delivering measurable success for our clients." },
          ].map((value, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">{value.title}</h3>
              <p className="mt-4 text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">Meet Our Leadership</h2>
          <p className="mt-6 text-lg text-gray-600">
            Our team of industry experts brings decades of experience in business strategy, finance, and technology.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mt-10">
            {[
              { name: "Joseph Kirika", role: "CEO & Founder", image: "/images/joseph-kirika.jpg" },
              { name: "Sarah Johnson", role: "Chief Strategy Officer", image: "/images/joseph-kirika.jpg" },
              { name: "Michael Lee", role: "Head of Consulting", image: "/images/joseph-kirika.jpg" },
            ].map((leader, index) => (
              <div key={index} className="p-8 bg-gray-100 rounded-lg shadow-lg">
                <Image src={leader.image} alt={leader.name} width={200} height={200} className="rounded-full mx-auto" />
                <h3 className="mt-6 text-2xl font-semibold text-gray-800">{leader.name}</h3>
                <p className="mt-2 text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-4xl font-bold">Let’s Build Something Great Together</h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Get in touch with our team to discover how we can help your business thrive with expert consulting services.
        </p>
        <a href="/contact" className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-lg text-xl shadow-md transition-all">
          Contact Us Today
        </a>
      </section>
    </main>
  );
}
