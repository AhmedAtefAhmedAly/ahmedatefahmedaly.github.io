// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A selection of my research and industry projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My Github profile and highlighted repositories from my projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "My resume, last updated July 2026.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "projects-cardiobench",
          title: 'CardioBench',
          description: "Do echocardiography foundation models generalize beyond the lab? (IJCAI-ECAI 2026)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cardiobench/";
            },},{id: "projects-koralyze-ai",
          title: 'Koralyze AI',
          description: "Co-founded sports analytics startup turning broadcast footage into player tracking and event data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/koralyze/";
            },},{id: "projects-surgical-room-understanding",
          title: 'Surgical Room Understanding',
          description: "Real-time multimodal pipeline for surgical room understanding at Labib AI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/surgical-room/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%68%6D%65%64.%61%6C%79@%6D%62%7A%75%61%69.%61%63.%61%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ahmedatefahmedaly", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=r3SGloUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
