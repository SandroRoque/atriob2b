import { Link } from 'react-router-dom';

const services = [
  {
    id: 'bpo',
    title: 'BPO Financeiro',
    description: 'Execução de tesouraria, consultoria em processos e expertise em ERP para otimizar suas operações financeiras.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-bpo',
    leader: 'Eder',
    features: ['Execução de Tesouraria', 'Consultoria em Processos', 'Expertise em ERP'],
  },
  {
    id: 'controladoria',
    title: 'Controladoria',
    description: 'DRE, KPIs, Dashboards Power BI e análises financeiras para tomada de decisões estratégicas.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'bg-controladoria',
    leader: 'Suan',
    features: ['DRE e Demonstrativos', 'KPIs Personalizados', 'Dashboards Power BI'],
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia & Desenvolvimento',
    description: 'Desenvolvimento de software, integrações com ERP, automação e criação de KPIs customizados.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'bg-tecnologia',
    leader: 'Sandro',
    features: ['Desenvolvimento de Software', 'Integrações com ERP', 'Automação de Processos'],
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Três Pilares, Uma Solução
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Oferecemos serviços modulares que se adaptam às necessidades do seu negócio. 
            Contrate cada área separadamente ou combine-as para uma gestão integrada e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className={`${service.color} p-6 text-white`}>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm">Liderado por {service.leader}</p>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-neutral-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/servicos#${service.id}`}
                  className="text-primary-500 font-medium text-sm hover:text-primary-600 transition-colors inline-flex items-center group"
                >
                  Ver planos e preços
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
