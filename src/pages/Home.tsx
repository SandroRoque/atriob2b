import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import Differentials from '../components/Differentials';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <Differentials />
      
      {/* Target Audience Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Para Quem é a ATRIOB2B?
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Nossas soluções são ideais para empresas que buscam eficiência, 
              dados confiáveis e processos otimizados.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Pequenas Empresas', icon: '🏢' },
              { name: 'Médias Empresas', icon: '🏛️' },
              { name: 'Startups', icon: '🚀' },
              { name: 'E-commerce', icon: '🛒' },
              { name: 'Indústrias', icon: '🏭' },
              { name: 'Serviços', icon: '💼' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <span className="text-sm font-medium text-neutral-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </main>
  );
};

export default Home;
