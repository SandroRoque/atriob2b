<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <h2>ATRIOB2B</h2>
        </div>
        <ul class="nav-links" :class="{ active: menuOpen }">
          <li><a href="#home" @click="closeMenu">Home</a></li>
          <li><a href="#sobre" @click="closeMenu">Sobre</a></li>
          <li><a href="#servicos" @click="closeMenu">Serviços</a></li>
          <li><a href="#contato" @click="closeMenu">Contato</a></li>
        </ul>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>

<style scoped>
.header {
  background-color: var(--color-primary);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h2 {
  color: white;
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
}

.nav-links li a {
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-links li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--color-accent);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--color-primary);
    padding: 1rem;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .nav-links.active {
    max-height: 300px;
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links li a {
    display: block;
    padding: 1rem;
  }
}
</style>
