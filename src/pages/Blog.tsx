import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog ATRIOB2B</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Conteúdos sobre BPO Financeiro, Controladoria, Tecnologia e gestão 
              empresarial para ajudar sua empresa a crescer.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-8 flex items-center justify-center">
            <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">
            Em Breve
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Estamos preparando conteúdos incríveis sobre gestão financeira, 
            controladoria, tecnologia e muito mais. Fique ligado!
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-neutral-800 mb-4">
              Receba novidades por e-mail
            </h3>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>

          {/* Topics Preview */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-neutral-800 mb-6">
              Temas que abordaremos
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'BPO Financeiro',
                'Controladoria',
                'Tecnologia',
                'KPIs',
                'Power BI',
                'Automação',
                'Gestão Financeira',
                'ERP',
                'Processos',
                'Startups',
              ].map((topic, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white rounded-full text-sm text-neutral-600 shadow-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-600 mb-6">
            Enquanto isso, se você tem dúvidas sobre nossos serviços, entre em contato!
          </p>
          <Link
            to="/contato"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Blog;
