const Services = () => {
  const services = [
    { title: "SEO and Web", subtitle: "Optimization" },
    { title: "Data Analysis and", subtitle: "Data Visualization" },
    { title: "Management", subtitle: "Transfer" },
    { title: "Website", subtitle: "Development" },
    { title: "Modern Technology", subtitle: "Solution" },
    { title: "UI/UX Design", subtitle: "Services" }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Our <span className="text-blue-600">Specialization</span>
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-600 mb-12">Featured Services</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h4>
              <p className="text-gray-600 font-medium">{service.subtitle}</p>
            </div>
          ))}
        </div>
        
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300">
          MORE SERVICES
        </button>
      </div>
    </section>
  );
};

export default Services;