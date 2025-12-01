<template>
  <footer class="footer" id="contato">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>ATRIOB2B</h3>
          <p>Estrutura, dados e tecnologia para acelerar empresas.</p>
          <div class="social-links">
            <a 
              href="https://wa.me/5511987654321" 
              target="_blank" 
              class="social-link"
              aria-label="WhatsApp"
            >
              📱 WhatsApp
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Navegação</h4>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Serviços</h4>
          <ul class="footer-links">
            <li><a href="#servicos">BPO Financeiro</a></li>
            <li><a href="#servicos">Controladoria</a></li>
            <li><a href="#servicos">Desenvolvimento</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contato</h4>
          <ul class="footer-links">
            <li>
              <a href="mailto:contato@atriob2b.com.br">
                contato@atriob2b.com.br
              </a>
            </li>
            <li>
              <a href="tel:+5511987654321">
                +55 11 98765-4321
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/5511987654321?text=Olá!%20Gostaria%20de%20solicitar%20uma%20proposta" 
                target="_blank"
                class="btn btn-primary btn-sm"
              >
                Solicite uma proposta
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} ATRIOB2B. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--color-footer);
  color: white;
  padding: 4rem 0 2rem;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h3,
.footer-section h4 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}

.footer-section p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-accent);
}

.social-links {
  margin-top: 1rem;
}

.social-link {
  display: inline-block;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-weight: 500;
}

.social-link:hover {
  background-color: var(--color-accent);
  color: white;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  display: inline-block;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
