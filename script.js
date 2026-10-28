/* =========================================================
   Leonardo Moretti — portfolio
   1. Textos (PT-BR / EN)
   2. Projetos
   3. Render dos projetos
   4. Troca de idioma
   5. Fade ao rolar
   ========================================================= */

(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  /* ---------------------------------------------------------
     1. Textos
     Para editar um texto, mude aqui — o HTML so marca o lugar
     com data-i18n="chave".
     --------------------------------------------------------- */

  var translations = {
    pt: {
      "doc.title": "Leonardo Moretti — Desenvolvimento de software e IA",
      "meta.description":
        "Portfólio de Leonardo Moretti, estudante de Ciência da Computação no Insper, focado em desenvolvimento de software e Inteligência Artificial.",

      "a11y.skip": "Ir para o conteúdo",
      "a11y.nav": "Navegação principal",
      "a11y.langToggle": "Switch to English",

      "nav.projects": "Projetos",
      "nav.about": "Sobre",
      "nav.contact": "Contato",

      "hero.subtitle":
        "Ciência da Computação @ Insper · Desenvolvimento de software e Inteligência Artificial",
      "hero.tagline":
        "Membro da Insper AI. Buscando estágio em desenvolvimento de IA.",
      "hero.email": "E-mail",
      "hero.resume": "Baixar currículo",

      "projects.title": "Projetos",
      "projects.code": "Código",
      "projects.demo": "Demo",
      "projects.docs": "Documentação",

      "about.title": "Sobre",
      "about.text":
        "Estudo Ciência da Computação no Insper (2025–2029), onde fui aprovado em 4º lugar, e faço parte da Insper AI. Morei na França na infância e hoje falo inglês fluente e espanhol intermediário. Fui medalhista em olimpíadas científicas: ouro na OBA, prata na OBF e ouro no Canguru de Matemática. Fora do código, treino Boxe e Jiu-Jitsu.",
      "about.skillsTitle": "Habilidades",

      "contact.title": "Contato",
      "contact.text":
        "Estou aberto a conversas sobre estágio, projetos de IA ou qualquer ideia interessante. Me escreva.",

      "lang.toggleLabel": "EN"
    },

    en: {
      "doc.title": "Leonardo Moretti — Software Development and AI",
      "meta.description":
        "Portfolio of Leonardo Moretti, Computer Science student at Insper, focused on software development and Artificial Intelligence.",

      "a11y.skip": "Skip to content",
      "a11y.nav": "Main navigation",
      "a11y.langToggle": "Mudar para português",

      "nav.projects": "Projects",
      "nav.about": "About",
      "nav.contact": "Contact",

      "hero.subtitle":
        "Computer Science @ Insper · Software development and Artificial Intelligence",
      "hero.tagline":
        "Member of Insper AI. Looking for an internship in AI development.",
      "hero.email": "Email",
      "hero.resume": "Download résumé",

      "projects.title": "Projects",
      "projects.code": "Code",
      "projects.demo": "Live demo",
      "projects.docs": "Documentation",

      "about.title": "About",
      "about.text":
        "I'm studying Computer Science at Insper (2025–2029), where I was admitted in 4th place, and I'm part of Insper AI. I lived in France as a child and today I speak fluent English and intermediate Spanish. I've won medals in science olympiads: gold in the Brazilian Astronomy Olympiad, silver in the Brazilian Physics Olympiad and gold in the Math Kangaroo. Away from code, I train boxing and jiu-jitsu.",
      "about.skillsTitle": "Skills",

      "contact.title": "Contact",
      "contact.text":
        "I'm always up for a conversation about internships, AI projects or any interesting idea. Drop me a line.",

      "lang.toggleLabel": "PT"
    }
  };

  /* ---------------------------------------------------------
     2. Projetos
     Para adicionar um projeto, copie um bloco abaixo.
     A partir de 2 projetos a secao vira grid automaticamente.
     Botao sem link (string vazia) nao aparece.
     --------------------------------------------------------- */

  var projects = [
    {
      image: "images/memoria-viva.jpg",
      alt: {
        pt: "Captura de tela da plataforma Memória Viva Escolar",
        en: "Screenshot of the Memória Viva Escolar platform"
      },
      title: "Memória Viva Escolar",
      description: {
        pt:
          "Plataforma de memória e portfólio estudantil para a EMEF Gonzaguinha, escola pública em Heliópolis (SP). O projeto começou com pesquisa de campo e entrevistas com a comunidade escolar, em parceria com a UNAS, para entender o problema antes de construir a solução. Projeto em grupo, com documentação técnica completa (diagramas UML, jornadas de usuário e arquitetura).",
        en:
          "A memory and student-portfolio platform for EMEF Gonzaguinha, a public school in Heliópolis, São Paulo. The project started with field research and interviews with the school community, in partnership with UNAS, so we understood the problem before building the solution. Built as a team project, with full technical documentation: UML diagrams, user journeys and architecture."
      },
      tags: ["React", "FastAPI", "PostgreSQL"],
      links: {
        // Preencha com as URLs. O que ficar vazio nao gera botao.
        code: "",
        demo: "",
        docs: ""
      }
    },

    {
      image: "images/sono360.png",
      alt: {
        pt: "Captura de tela do painel administrativo do Sono360",
        en: "Screenshot of the Sono360 admin dashboard"
      },
      title: "Sono360",
      description: {
        pt:
          "Plataforma que digitaliza a avaliação da qualidade do sono feita por profissionais de saúde, construída em equipe de cinco pessoas para um cliente real do Insper. O paciente responde a seis instrumentos validados em formulários com lógica condicional, e o sistema calcula os escores e gera relatórios interpretados. Trabalhei no full-stack, incluindo o assistente de IA que recebe o contexto clínico do paciente e responde em streaming.",
        en:
          "A platform that replaces the paper-based sleep quality assessment used by health professionals, built by a team of five for a real client at Insper. Patients answer six scientifically validated instruments through forms with conditional logic, and the system scores them and generates interpreted reports. I worked across the full stack, including the AI assistant that reads the patient's clinical context and streams its answers back."
      },
      tags: ["Django", "Python", "TailwindCSS", "OpenAI", "Docker"],
      links: {
        code: "",
        demo: "",
        docs: ""
      }
    },

    {
      image: "images/cnsaude.png",
      alt: {
        pt: "Captura de tela do painel de indicadores do CNSaúde",
        en: "Screenshot of the CNSaúde indicators dashboard"
      },
      title: "CNSaúde",
      description: {
        pt:
          "Aplicação full-stack de indicadores de saúde pública municipal, feita em equipe. O backend em Flask integra dados de SIOPS, DataSUS, CAGED e RAIS e controla o acesso por RBAC com permissões por UF e autenticação JWT; um segundo serviço entrega dados agregados a partir de tabelas alimentadas por um pipeline de ETL em pandas. O frontend em React 19 consome as duas APIs e cruza as informações com o IBGE.",
        en:
          "A full-stack application for Brazilian municipal public health indicators, built as a team project. The Flask backend integrates data from SIOPS, DataSUS, CAGED and RAIS and guards access with RBAC down to per-state permissions and JWT authentication; a second service serves aggregated data from tables fed by a pandas ETL pipeline. The React 19 front end consumes both APIs and cross-references them with IBGE data."
      },
      tags: ["React", "TypeScript", "Flask", "PostgreSQL", "MySQL"],
      links: {
        code: "",
        demo: "",
        docs: ""
      }
    },

    {
      image: "images/hemodoctor.png",
      alt: {
        pt: "Diagrama da API TeleHemato, do projeto HemoDoctor",
        en: "Diagram of the TeleHemato API, part of the HemoDoctor project"
      },
      title: "HemoDoctor — TeleHemato",
      description: {
        pt:
          "API REST do módulo B2B da plataforma HemoDoctor, que digitaliza o pedido de parecer de hematologista por médicos generalistas. No backend, construí o ciclo de vida do caso clínico em sete estados, a triagem por gravidade, o roteamento que escolhe o especialista cruzando subespecialidade com carga de trabalho, e o parecer com assinatura digital. Inclui controle de SLA por caso, autorização de cinco perfis sobre JWT e trilha de auditoria para a LGPD.",
        en:
          "REST API for the B2B module of the HemoDoctor platform, which digitizes how general practitioners request a hematologist's opinion. On the backend I built the seven-state clinical case lifecycle, severity triage, the routing that picks the specialist by matching subspecialty against workload, and the digitally signed medical opinion. It also covers per-case SLA tracking, five-role authorization over JWT and an audit trail for data protection compliance."
      },
      tags: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "Docker"],
      links: {
        code: "",
        demo: "",
        docs: ""
      }
    }
  ];

  /* ---------------------------------------------------------
     3. Render dos projetos
     --------------------------------------------------------- */

  var projectsList = document.getElementById("projects-list");

  function createChip(label) {
    var li = document.createElement("li");
    li.className = "chip";
    li.textContent = label;
    return li;
  }

  function createProjectLink(href, label) {
    var a = document.createElement("a");
    a.className = "btn btn--small";
    a.href = href;
    a.textContent = label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }

  function createProjectCard(project, lang) {
    var t = translations[lang];

    var article = document.createElement("article");
    article.className = "project-card reveal";

    // Imagem
    var figure = document.createElement("figure");
    figure.className = "project-card__media";

    var img = document.createElement("img");
    img.src = project.image;
    img.alt = project.alt[lang] || project.alt.pt;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 1200;
    img.height = 750;
    figure.appendChild(img);

    // Conteudo
    var body = document.createElement("div");
    body.className = "project-card__body";

    var title = document.createElement("h3");
    title.className = "project-card__title";
    title.textContent = project.title;
    body.appendChild(title);

    var text = document.createElement("p");
    text.className = "project-card__text";
    text.textContent = project.description[lang] || project.description.pt;
    body.appendChild(text);

    if (project.tags && project.tags.length) {
      var tags = document.createElement("ul");
      tags.className = "project-card__tags";
      project.tags.forEach(function (tag) {
        tags.appendChild(createChip(tag));
      });
      body.appendChild(tags);
    }

    var linkDefs = [
      { href: project.links.code, label: t["projects.code"] },
      { href: project.links.demo, label: t["projects.demo"] },
      { href: project.links.docs, label: t["projects.docs"] }
    ].filter(function (link) {
      return Boolean(link.href);
    });

    if (linkDefs.length) {
      var links = document.createElement("div");
      links.className = "project-card__links";
      linkDefs.forEach(function (link) {
        links.appendChild(createProjectLink(link.href, link.label));
      });
      body.appendChild(links);
    }

    article.appendChild(figure);
    article.appendChild(body);
    return article;
  }

  function renderProjects(lang) {
    if (!projectsList) return;

    projectsList.textContent = "";

    // 1 projeto: card de destaque horizontal. 2+: grid.
    projectsList.classList.toggle("projects--featured", projects.length < 2);
    projectsList.classList.toggle("projects--grid", projects.length >= 2);

    projects.forEach(function (project) {
      projectsList.appendChild(createProjectCard(project, lang));
    });
  }

  /* ---------------------------------------------------------
     4. Troca de idioma
     --------------------------------------------------------- */

  var STORAGE_KEY = "portfolio-lang";
  var toggle = document.getElementById("lang-toggle");
  var toggleLabel = document.getElementById("lang-toggle-label");

  function readStoredLang() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      return translations[stored] ? stored : null;
    } catch (error) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* modo privado ou storage bloqueado: segue sem persistir */
    }
  }

  function applyLang(lang) {
    var t = translations[lang];
    if (!t) return;

    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t["doc.title"];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t[el.getAttribute("data-i18n")];
      if (value === undefined) return;

      if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var value = t[el.getAttribute("data-i18n-aria-label")];
      if (value !== undefined) el.setAttribute("aria-label", value);
    });

    if (toggleLabel) toggleLabel.textContent = t["lang.toggleLabel"];

    renderProjects(lang);
    observeReveals();
  }

  var currentLang = readStoredLang() || "pt"; // padrao: PT-BR

  if (toggle) {
    toggle.addEventListener("click", function () {
      currentLang = currentLang === "pt" ? "en" : "pt";
      storeLang(currentLang);
      applyLang(currentLang);
    });
  }

  /* ---------------------------------------------------------
     5. Fade ao rolar
     --------------------------------------------------------- */

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var revealObserver = null;

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
  }

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      if (revealObserver) {
        revealObserver.observe(el);
      } else {
        el.classList.add("is-visible");
      }
    });
  }

  applyLang(currentLang);
})();
