import Image from "next/image";

export default function Contact() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Get in Touch"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">Get in Touch</h1>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            Have a question or need expert advice? Contact DDS Consulting today.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Contact Information</h2>
            <p className="mt-6 text-lg text-gray-600">
              Reach out to us via phone, email, or visit our office. We are here to help.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-blue-500 text-2xl">📍</span>
                <p className="text-lg text-gray-700">123 Business Street, Nairobi, Kenya</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-500 text-2xl">📞</span>
                <p className="text-lg text-gray-700">+254 712 345 678</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-500 text-2xl">✉️</span>
                <p className="text-lg text-gray-700">contact@ddsconsulting.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-500 text-2xl">🌍</span>
                <p className="text-lg text-gray-700">www.ddsconsulting.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800">Send Us a Message</h2>
            <p className="mt-4 text-gray-600">Fill out the form below and our team will respond within 24 hours.</p>
            <form className="mt-6 space-y-6">
              <div>
                <label className="block text-gray-700 font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={5}
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-md transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="mt-12">
        <iframe
          className="w-full h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.13868252457!2d36.8219467!3d-1.2863895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f3b7d8b7e7%3A0x7f7a4c7a6542a5e6!2sNairobi!5e0!3m2!1sen!2ske!4v1619562342342!5m2!1sen!2ske"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-4xl font-bold">Let’s Work Together</h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Need expert business consulting? Let’s discuss your needs and how we can help you succeed.
        </p>
        <a
          href="mailto:contact@ddsconsulting.com"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-md transition-all"
        >
          Contact Us Today
        </a>
      </section>
    </main>
  );
}
