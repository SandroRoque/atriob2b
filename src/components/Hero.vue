<template>
  <section class="hero" id="home">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Estrutura, dados e tecnologia para acelerar empresas.</h1>
        <p class="hero-subtitle">
          Consultoria completa em BPO financeiro, Controladoria e Desenvolvimento de Software. 
          Soluções modulares, sob demanda.
        </p>
        <div class="hero-ctas">
          <a 
            href="https://wa.me/5511987654321?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor%20da%20ATRIOB2B" 
            target="_blank" 
            class="btn btn-primary"
          >
            Fale com um consultor
          </a>
          <a href="#contato" class="btn btn-secondary">
            Solicite uma proposta
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, #1f2d42 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  color: white;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-ctas {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-ctas .btn {
    width: 100%;
  }
}
</style>
