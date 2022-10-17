<template>
  <main>
    <div class="content flow-block">
      <h1>Aprender a programar <br /><span>nunca foi tão fácil.</span></h1>
      <p>
        Aprenda programação com cursos extensivos e interativos direto do seu
        navegador, de forma 100% gratuita.
      </p>
      <div class="buttons flow-inline">
        <a href="/cursos">
          <main-button type="primary" :arrow="true">Ver cursos</main-button>
        </a>
        <a href="/sobre">
          <main-button type="secondary">Saiba mais</main-button>
        </a>
      </div>
    </div>
    <div class="hero"><img src="/hero-image.svg" alt="" /></div>
  </main>
</template>

<style scoped>
main {
  max-height: calc(100% - 79px);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-inline: var(--space-s);
}

.content {
  flex: 1.5;
  height: 100%;
}

h1 {
  color: var(--gray-9);
  font-size: var(--step-5);
  line-height: 1.2;
}

h1 span {
  color: var(--orange-5);
}

p {
  max-width: 50ch;
  font-size: var(--step-0);
  --flow-space: var(--space-2xs);
  line-height: 1.3;
}

.hero {
  flex: 1;
}

.hero img {
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  margin-left: auto;
  object-fit: contain;
}

.buttons {
  display: flex;
  flex-direction: row;
  --flow-space: var(--space-s);
}

a {
  text-decoration: none;
}

a + a {
  margin-left: var(--space-2xs);
}
</style>
