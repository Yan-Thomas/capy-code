<template>
  <main>
    <section class="card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="user-icon"
      >
        <path
          fill-rule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          clip-rule="evenodd"
        />
      </svg>
      <h1>Yan Thomas</h1>
      <main-button type="secondary" :full-width="true"
        >Editar perfil</main-button
      >
      <div class="about">
        <h2>Sobre</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci
          bibendum, tempor lorem sit amet, venenatis odio. Donec elementum
          turpis ut enim ornare, quis vehicula leo pharetra.
        </p>
      </div>
      <div class="links">
        <h2>Links</h2>
        <ul class="flow-block">
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://twitter.com">Facebook</a></li>
          <li><a href="https://twitter.com">GitHub</a></li>
          <li><a href="https://twitter.com">Mastodon</a></li>
        </ul>
      </div>
    </section>
    <section class="info">
      <div class="container">
        <h2>Estatísticas</h2>
        <div class="stats flow-inline">
          <div class="stat">
            <p>
              <span>36</span>
              DESAFIOS<br />
              CONCLUÍDOS
            </p>
          </div>
          <div class="stat">
            <p>
              <span>37</span>
              CURSOS<br />
              FINALIZADOS
            </p>
          </div>
          <div class="stat">
            <p>
              <span>99</span>
              ARTIGOS<br />
              LIDOS
            </p>
          </div>
          <div class="stat">
            <p>
              <span>02</span>
              TRILHAS<br />
              PERCORRIDAS
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <h2>Trilhas</h2>
        <div class="card-grid">
          <Card
            name="HTML e CSS"
            description="Aprenda HTML e CSS nesse curso interativo"
            :image-url="`/api/generateImage?type=curso&description=Aprenda HTML e CSS nesse curso interativo&name=HTML e CSS`"
          />
        </div>
      </div>
      <div class="container">
        <h2>Cursos</h2>
        <div class="card-grid">
          <Card
            name="HTML e CSS"
            description="Aprenda HTML e CSS nesse curso interativo"
            :image-url="`/api/generateImage?type=curso&description=Aprenda HTML e CSS nesse curso interativo&name=HTML e CSS`"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;
}

.card {
  padding: var(--space-s);
  border-right: 1px solid var(--gray-4);
}

.card h1 {
  text-align: center;
  font-size: var(--step-3);
}

.user-icon {
  width: 200px;
  height: 200px;
  fill: var(--gray-8);
  margin-inline: auto;
}

.card button {
  margin-top: var(--space-s);
}

.about {
  margin-top: var(--space-m);
}

.links {
  margin-top: var(--space-s);
}

.about h2,
.links h2 {
  font-size: var(--step--1);
  border-bottom: 1px solid var(--gray-4);
}

.about p,
.links ul {
  margin-top: var(--space-2xs);
}

.links ul {
  text-decoration: none;
  list-style: none;
  padding: 0;
  --flow-space: var(--space-3xs);
}

.links a {
  color: var(--blue-5);
}

.info {
  padding: var(--space-m);
}

.info h2 {
  font-size: var(--step-2);
  margin-bottom: var(--space-s);
}

.stats {
  display: flex;
  flex-direction: row;
  --flow-space: var(--space-l);
}

.stat p {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  font-size: var(--step--2);
}

.stat span {
  color: var(--gray-6);
  font-size: var(--step-3);
  font-weight: bold;
  margin-right: var(--space-3xs);
}

.container {
  margin-top: var(--space-m);
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: var(--space-2xs);
}
</style>
