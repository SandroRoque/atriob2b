<template>
  <section class="services-overview" id="servicos">
    <div class="container">
      <div class="section-header">
        <h2>Nossos Serviços</h2>
        <p>Soluções completas e modulares para impulsionar sua empresa</p>
      </div>
      
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">📊</div>
          <h3>BPO Financeiro</h3>
          <p class="service-lead">Por Eder</p>
          <p>
            Organização, operação e consultoria de tesouraria. 
            Da execução diária às estratégias avançadas de fluxo de caixa.
          </p>
          <ul class="service-highlights">
            <li>Contas a pagar e receber</li>
            <li>Conciliação bancária</li>
            <li>Implantação de ERP</li>
            <li>Consultoria de tesouraria</li>
          </ul>
          <a href="#servicos-detalhes" class="btn btn-outline">Ver planos</a>
        </div>

        <div class="service-card">
          <div class="service-icon">📈</div>
          <h3>Controladoria</h3>
          <p class="service-lead">Por Suan</p>
          <p>
            Inteligência financeira, indicadores e insights estratégicos. 
            Transforme dados em decisões com dashboards e KPIs customizados.
          </p>
          <ul class="service-highlights">
            <li>DRE e relatórios financeiros</li>
            <li>Dashboards em Power BI</li>
            <li>KPIs personalizados</li>
            <li>Controladoria CFO Lite</li>
          </ul>
          <a href="#servicos-detalhes" class="btn btn-outline">Ver planos</a>
        </div>

        <div class="service-card">
          <div class="service-icon">💻</div>
          <h3>Desenvolvimento</h3>
          <p class="service-lead">Por Sandro</p>
          <p>
            Integrações, automações e sistemas sob medida. 
            Da configuração de ERPs ao desenvolvimento de software completo.
          </p>
          <ul class="service-highlights">
            <li>Integrações entre sistemas</li>
            <li>Automação de processos</li>
            <li>KPIs customizados</li>
            <li>Desenvolvimento sob demanda</li>
          </ul>
          <a href="#servicos-detalhes" class="btn btn-outline">Ver planos</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesOverview'
}
</script>

<style scoped>
.services-overview {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: var(--color-text-light);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.service-lead {
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.service-card > p {
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.service-highlights {
  list-style: none;
  margin-bottom: 2rem;
  padding-left: 0;
}

.service-highlights li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--color-text-light);
  font-size: 0.95rem;
}

.service-highlights li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

.service-card .btn {
  margin-top: auto;
}

@media (max-width: 768px) {
  .services-overview {
    padding: 3rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
