import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactCTA from '../components/ContactCTA';

type PlanFeature = {
  name: string;
  basic: boolean | string;
  pro: boolean | string;
  premium: boolean | string;
};

type ServiceArea = {
  id: string;
  title: string;
  description: string;
  color: string;
  textColor: string;
  plans: PlanFeature[];
  basicPrice: string;
  proPrice: string;
  premiumPrice: string;
};

const services: ServiceArea[] = [
  {
    id: 'bpo',
    title: 'BPO Financeiro',
    description: 'Execução de tesouraria, consultoria em processos e expertise em ERP para otimizar suas operações financeiras do dia a dia.',
    color: 'bg-bpo',
    textColor: 'text-bpo',
    basicPrice: 'A partir de R$ 2.500/mês',
    proPrice: 'A partir de R$ 5.000/mês',
    premiumPrice: 'A partir de R$ 10.000/mês',
    plans: [
      { name: 'Contas a Pagar', basic: true, pro: true, premium: true },
      { name: 'Contas a Receber', basic: true, pro: true, premium: true },
      { name: 'Conciliação Bancária', basic: true, pro: true, premium: true },
      { name: 'Fluxo de Caixa', basic: false, pro: true, premium: true },
      { name: 'Gestão de Fornecedores', basic: false, pro: true, premium: true },
      { name: 'Consultoria em Processos', basic: false, pro: 'Básica', premium: 'Avançada' },
      { name: 'Integração com ERP', basic: false, pro: 'Parcial', premium: 'Completa' },
      { name: 'Relatórios Personalizados', basic: 'Mensal', pro: 'Semanal', premium: 'Diário' },
      { name: 'Suporte Dedicado', basic: 'Email', pro: 'Email + Chat', premium: '24/7' },
    ],
  },
  {
    id: 'controladoria',
    title: 'Controladoria',
    description: 'DRE, KPIs, Dashboards Power BI e análises financeiras para embasar suas decisões estratégicas com dados confiáveis.',
    color: 'bg-controladoria',
    textColor: 'text-controladoria',
    basicPrice: 'A partir de R$ 3.000/mês',
    proPrice: 'A partir de R$ 6.000/mês',
    premiumPrice: 'A partir de R$ 12.000/mês',
    plans: [
      { name: 'DRE Mensal', basic: true, pro: true, premium: true },
      { name: 'Análise de Resultados', basic: 'Básica', pro: 'Detalhada', premium: 'Estratégica' },
      { name: 'KPIs Financeiros', basic: '5 KPIs', pro: '15 KPIs', premium: 'Ilimitados' },
      { name: 'Dashboard Power BI', basic: false, pro: true, premium: true },
      { name: 'Análise de Margens', basic: false, pro: true, premium: true },
      { name: 'Projeções e Forecasting', basic: false, pro: 'Trimestral', premium: 'Mensal' },
      { name: 'Budget Anual', basic: false, pro: false, premium: true },
      { name: 'Reuniões de Resultado', basic: 'Mensal', pro: 'Quinzenal', premium: 'Semanal' },
      { name: 'Consultoria Estratégica', basic: false, pro: 'Básica', premium: 'Avançada' },
    ],
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia & Desenvolvimento',
    description: 'Desenvolvimento de software, integrações com ERP, automação e criação de KPIs customizados para potencializar sua operação.',
    color: 'bg-tecnologia',
    textColor: 'text-tecnologia',
    basicPrice: 'A partir de R$ 4.000/mês',
    proPrice: 'A partir de R$ 8.000/mês',
    premiumPrice: 'Sob consulta',
    plans: [
      { name: 'Suporte Técnico', basic: true, pro: true, premium: true },
      { name: 'Manutenção de Sistemas', basic: true, pro: true, premium: true },
      { name: 'Integração com ERP', basic: '1 Sistema', pro: '3 Sistemas', premium: 'Ilimitado' },
      { name: 'Automação de Processos', basic: false, pro: '3 processos', premium: 'Ilimitado' },
      { name: 'KPIs Customizados', basic: false, pro: true, premium: true },
      { name: 'Desenvolvimento de Software', basic: false, pro: 'Sob demanda', premium: 'Dedicado' },
      { name: 'APIs e Integrações', basic: false, pro: true, premium: true },
      { name: 'Consultoria Tecnológica', basic: false, pro: 'Mensal', premium: 'Contínua' },
      { name: 'Time Dedicado', basic: false, pro: false, premium: true },
    ],
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to section if hash is present
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const renderCheckOrText = (value: boolean | string) => {
    if (value === true) {
      return (
        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
    }
    if (value === false) {
      return (
        <svg className="w-5 h-5 text-neutral-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    }
    return <span className="text-sm text-neutral-600">{value}</span>;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Três áreas de especialização, cada uma com planos flexíveis para 
              atender exatamente às necessidades do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-colors ${service.color} text-white hover:opacity-90`}
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="py-20 scroll-mt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-12">
              <div className={`inline-block px-4 py-2 rounded-full ${service.color} text-white text-sm font-medium mb-4`}>
                {service.title}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Planos de {service.title}
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl">
                {service.description}
              </p>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Basic Plan */}
              <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
                <div className="p-6 border-b border-neutral-200">
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">BASIC</h3>
                  <p className="text-neutral-500 text-sm mb-4">Para empresas que estão começando</p>
                  <div className={`text-2xl font-bold ${service.textColor}`}>
                    {service.basicPrice}
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {service.plans.map((plan, index) => (
                      <li key={index} className="flex items-center justify-between text-sm">
                        <span className="text-neutral-700">{plan.name}</span>
                        {renderCheckOrText(plan.basic)}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contato"
                    className={`mt-6 block w-full text-center py-3 rounded-lg border-2 border-current ${service.textColor} font-medium hover:bg-neutral-50 transition-colors`}
                  >
                    Solicitar Proposta
                  </a>
                </div>
              </div>

              {/* Pro Plan */}
              <div className={`rounded-2xl shadow-xl overflow-hidden relative ${service.color}`}>
                <div className="absolute top-4 right-4 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Mais Popular
                </div>
                <div className="p-6 border-b border-white/20 text-white">
                  <h3 className="text-xl font-bold mb-2">PRO</h3>
                  <p className="text-white/80 text-sm mb-4">Para empresas em crescimento</p>
                  <div className="text-2xl font-bold">
                    {service.proPrice}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-4">
                    {service.plans.map((plan, index) => (
                      <li key={index} className="flex items-center justify-between text-sm">
                        <span className="text-neutral-700">{plan.name}</span>
                        {renderCheckOrText(plan.pro)}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contato"
                    className={`mt-6 block w-full text-center py-3 rounded-lg ${service.color} text-white font-medium hover:opacity-90 transition-colors`}
                  >
                    Solicitar Proposta
                  </a>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
                <div className="p-6 border-b border-neutral-200">
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">PREMIUM</h3>
                  <p className="text-neutral-500 text-sm mb-4">Para empresas que buscam excelência</p>
                  <div className={`text-2xl font-bold ${service.textColor}`}>
                    {service.premiumPrice}
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {service.plans.map((plan, index) => (
                      <li key={index} className="flex items-center justify-between text-sm">
                        <span className="text-neutral-700">{plan.name}</span>
                        {renderCheckOrText(plan.premium)}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contato"
                    className={`mt-6 block w-full text-center py-3 rounded-lg border-2 border-current ${service.textColor} font-medium hover:bg-neutral-50 transition-colors`}
                  >
                    Solicitar Proposta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Integration Section */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Combine os Serviços e Ganhe Mais
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
            Quando você contrata mais de uma área, os serviços se integram e você 
            obtém condições especiais. Fale conosco para uma proposta personalizada.
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-bpo/10 rounded-lg p-4">
                <span className="text-bpo font-bold">BPO</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl">+</span>
              </div>
              <div className="bg-controladoria/10 rounded-lg p-4">
                <span className="text-controladoria font-bold">Controladoria</span>
              </div>
            </div>
            <p className="text-sm text-neutral-600 mb-4">
              = Visão completa da operação financeira com dados estratégicos
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-controladoria/10 rounded-lg p-4">
                <span className="text-controladoria font-bold">Controladoria</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl">+</span>
              </div>
              <div className="bg-tecnologia/10 rounded-lg p-4">
                <span className="text-tecnologia font-bold">Tecnologia</span>
              </div>
            </div>
            <p className="text-sm text-neutral-600 mb-4">
              = KPIs automatizados e dashboards inteligentes
            </p>
            <div className="bg-gradient-to-r from-bpo via-controladoria to-tecnologia rounded-lg p-6 text-white">
              <span className="font-bold text-lg">BPO + Controladoria + Tecnologia</span>
              <p className="text-white/90 text-sm mt-2">
                = Gestão completa e integrada com máxima eficiência
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
};

export default Services;
