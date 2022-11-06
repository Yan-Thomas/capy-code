<script setup>
const route = useRoute();
const { session } = await useSession();

const { data: user } = await useFetch(`/api/users/${route.params.user}`);

const { data: courses } = await useFetch("/api/courses/", {
  method: "get",
  params: {
    user: route.params.user,
  },
});

if (!user.value) {
  await navigateTo("/404", { redirectCode: 404 });
}

const editProfile = ref(false);

const name = ref(user.value.name);
const description = ref(
  user.value.description === '""' ? "Sem descrição" : user.value.description
);
const socials = ref(user.value.socials);
const readonlySocials = ref(JSON.parse(JSON.stringify(user.value.socials)));

function addSocial() {
  socials.value.push({
    name: "",
    link: "",
    id: socials.length + 1,
  });
}

function removeSocial(index) {
  socials.value.splice(index, 1);
  console.log(socials.value.length);
}
</script>

<template>
  <main>
    <section class="profile">
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
      <h1>{{ user.name }}</h1>
      <main-button
        v-if="session?.user.id === route.params.user"
        type="primary"
        :full-width="true"
        @click="editProfile = !editProfile"
        >{{ !editProfile ? "Editar perfil" : "Salvar alterações" }}</main-button
      >
      <main-button
        v-if="session?.user.id === route.params.user && editProfile === true"
        type="secondary"
        :full-width="true"
        @click="editProfile = !editProfile"
        >Descartar alterações</main-button
      >
      <div class="about">
        <h2>Sobre</h2>
        <p>
          {{ user.description === '""' ? "Sem descrição" : user.description }}
        </p>
      </div>
      <div class="links">
        <h2>Links</h2>
        <ul class="flow-block">
          <template v-for="social in readonlySocials" :key="social.id">
            <li>
              <a :href="social.link">{{ social.name }}</a>
            </li>
          </template>
        </ul>
      </div>
    </section>
    <section v-if="!editProfile" class="info">
      <div class="container">
        <h2>Estatísticas</h2>
        <div class="stats flow-inline">
          <div class="stat">
            <p>
              <span>{{ user._count.challenges }}</span>
              DESAFIOS<br />
              CONCLUÍDOS
            </p>
          </div>
          <div class="stat">
            <p>
              <span>{{ courses.length }}</span>
              CURSOS<br />
              INICIADOS
            </p>
          </div>
          <div class="stat">
            <p>
              <span>{{ user._count.articles }}</span>
              ARTIGOS<br />
              LIDOS
            </p>
          </div>
          <div class="stat">
            <p>
              <span>{{ user.roadmaps.length }}</span>
              TRILHAS<br />
              ADICIONADAS
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <h2>Trilhas</h2>
        <div class="card-grid">
          <template v-for="{ roadmap } in user.roadmaps" :key="roadmap.name">
            <roadmap-modal :name="roadmap.name" :courses="roadmap.courses">
              <Card
                :name="roadmap.name"
                :description="roadmap.description"
                :image-url="`/api/generateImage?type=trilha&description=${roadmap.description}&name=${roadmap.name}`"
              />
            </roadmap-modal>
          </template>
        </div>
      </div>
      <div class="container">
        <h2>Cursos</h2>
        <div class="card-grid">
          <template v-for="course in courses" :key="course.id">
            <NuxtLink :to="`/curso/${course.id}`">
              <Card
                :name="course.name"
                :description="course.description"
                :image-url="`/api/generateImage?type=curso&description=${course.description}&name=${course.name}`"
              />
            </NuxtLink>
          </template>
        </div>
      </div>
    </section>
    <section v-else class="info edit">
      <div class="container">
        <h2>Editar perfil</h2>
        <form class="flow-block" @submit.prevent="submitForm">
          <form-input
            v-model="name"
            label="Nome"
            name="name"
            type="text"
          ></form-input>
          <form-input
            v-model="description"
            label="Sobre"
            name="description"
            type="text"
            :textarea="true"
          ></form-input>
          <div class="links-container flow-block">
            <h3>Links</h3>
            <template v-for="(social, index) in socials" :key="social.id">
              <div class="links-edit">
                <button class="remove" @click="removeSocial(index)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                    />
                  </svg>
                </button>
                <form-input
                  v-model="social.name"
                  :label="social.name"
                  :not-labeled="true"
                  type="text"
                  placeholder="Nome"
                ></form-input>
                <form-input
                  v-model="social.link"
                  :label="social.name"
                  :not-labeled="true"
                  type="text"
                  placeholder="Link"
                ></form-input>
                <button v-if="!socials[index + 1]" @click="addSocial">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                    />
                  </svg>
                </button>
              </div>
            </template>
            <main-button
              v-if="socials.length < 1"
              type="primary"
              @click="addSocial"
            >
              Adicionar link
            </main-button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 2fr 5fr;
  width: 100%;
}
.profile {
  padding: var(--space-s);
  border-right: 1px solid var(--gray-4);
}

.profile h1 {
  text-align: center;
  font-size: var(--step-3);
}

.user-icon {
  width: 200px;
  height: 200px;
  fill: var(--gray-8);
  margin-inline: auto;
}

.profile button {
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

.card-grid a {
  text-decoration: none;
}

:deep(textarea),
:deep(input) {
  width: 100%;
  max-width: 400px;
}

:deep(textarea) {
  height: 150px;
}

.links-container div {
  --flow-space: var(--space-3xs);
}

.links-edit {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.links-edit .remove {
  margin-right: var(--space-2xs);
}

.links-edit :deep(input) {
  max-width: 300px;
  margin-right: var(--space-2xs);
}

.links-edit button {
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  margin-bottom: var(--space-s);
}
</style>
