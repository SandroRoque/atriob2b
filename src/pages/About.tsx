import ContactCTA from '../components/ContactCTA';

const founders = [
  {
    name: 'Eder',
    role: 'BPO Financeiro',
    description: 'Especialista em execução de tesouraria e consultoria em processos financeiros. Com vasta experiência em sistemas ERP, Eder lidera a área de BPO Financeiro, garantindo que as operações do dia a dia sejam executadas com precisão e eficiência.',
    image: null,
    color: 'bg-bpo',
  },
  {
    name: 'Suan',
    role: 'Controladoria',
    description: 'Expert em controladoria e análises financeiras. Suan é responsável pela elaboração de DREs, definição de KPIs estratégicos e criação de dashboards em Power BI que transformam dados em insights acionáveis para a tomada de decisão.',
    image: null,
    color: 'bg-controladoria',
  },
  {
    name: 'Sandro',
    role: 'Tecnologia & Desenvolvimento',
    description: 'Desenvolvedor de software e especialista em integrações tecnológicas. Sandro lidera a área de Tecnologia, desenvolvendo soluções customizadas, automações e integrações com ERPs que potencializam a eficiência operacional dos clientes.',
    image: null,
    color: 'bg-tecnologia',
  },
];

const values = [
  {
    title: 'Excelência',
    description: 'Buscamos sempre entregar o melhor resultado possível em cada projeto.',
    icon: '⭐',
  },
  {
    title: 'Integridade',
    description: 'Agimos com transparência e ética em todas as nossas relações.',
    icon: '🤝',
  },
  {
    title: 'Inovação',
    description: 'Utilizamos tecnologia de ponta para resolver problemas de forma criativa.',
    icon: '💡',
  },
  {
    title: 'Colaboração',
    description: 'Trabalhamos em parceria com nossos clientes para alcançar objetivos comuns.',
    icon: '👥',
  },
];

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a ATRIOB2B</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Somos uma empresa de consultoria que une BPO Financeiro, Controladoria e 
              Tecnologia para transformar a gestão das empresas brasileiras.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  A ATRIOB2B nasceu da percepção de que muitas empresas enfrentam desafios 
                  semelhantes: processos financeiros ineficientes, falta de dados confiáveis 
                  para tomada de decisão e tecnologia subutilizada.
                </p>
                <p>
                  Fundada por três profissionais com expertise complementar, a ATRIOB2B 
                  foi concebida para oferecer uma solução diferente: em vez de pacotes 
                  fechados e genéricos, desenvolvemos um modelo modular que permite às 
                  empresas contratar exatamente o que precisam.
                </p>
                <p>
                  Nosso diferencial está na integração. Embora cada área possa ser 
                  contratada separadamente, todas trabalham de forma coordenada para 
                  entregar uma visão completa e consistente do negócio do cliente.
                </p>
                <p>
                  Hoje, atendemos empresas de diversos portes e segmentos, desde startups 
                  em crescimento até indústrias estabelecidas, sempre com o mesmo 
                  compromisso: eficiência, dados confiáveis e resultados mensuráveis.
                </p>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-500 mb-2">3</div>
                  <div className="text-sm text-neutral-600">Áreas de Especialização</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
                  <div className="text-sm text-neutral-600">Modular</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-500 mb-2">+50</div>
                  <div className="text-sm text-neutral-600">Projetos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-500 mb-2">+30</div>
                  <div className="text-sm text-neutral-600">Clientes Ativos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Nossos Fundadores
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Cada fundador é especialista em sua área, garantindo expertise real 
              e resultados consistentes para nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`${founder.color} h-32 flex items-center justify-center`}>
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{founder.name[0]}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-1">{founder.name}</h3>
                  <p className="text-primary-500 font-medium text-sm mb-4">{founder.role}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission & Vision */}
            <div className="space-y-8">
              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">Nossa Missão</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Transformar a gestão financeira, controladoria e tecnologia das empresas 
                  brasileiras por meio de soluções modulares, personalizadas e orientadas 
                  a resultados, proporcionando eficiência operacional e dados confiáveis 
                  para tomada de decisões estratégicas.
                </p>
              </div>
              <div className="bg-secondary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">Nossa Visão</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Ser referência nacional em consultoria integrada de BPO Financeiro, 
                  Controladoria e Tecnologia, reconhecida pela excelência no atendimento, 
                  inovação constante e resultados consistentes para nossos clientes.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Nossos Valores</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-neutral-50 rounded-xl p-6"
                  >
                    <span className="text-3xl mb-3 block">{value.icon}</span>
                    <h4 className="font-semibold text-neutral-800 mb-2">{value.title}</h4>
                    <p className="text-sm text-neutral-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modularity Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Modularidade com Integração
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              Nosso modelo de negócio foi desenhado para oferecer flexibilidade sem 
              sacrificar a integração. Você pode contratar cada serviço de forma 
              independente, mas quando combinados, eles se complementam e potencializam 
              os resultados.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-800 rounded-xl p-6">
                <div className="text-bpo text-3xl font-bold mb-2">BPO</div>
                <p className="text-neutral-400 text-sm">Operação Financeira Eficiente</p>
              </div>
              <div className="bg-neutral-800 rounded-xl p-6">
                <div className="text-controladoria text-3xl font-bold mb-2">Controladoria</div>
                <p className="text-neutral-400 text-sm">Dados para Decisão</p>
              </div>
              <div className="bg-neutral-800 rounded-xl p-6">
                <div className="text-tecnologia text-3xl font-bold mb-2">Tecnologia</div>
                <p className="text-neutral-400 text-sm">Automação e Inovação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
};

export default About;
