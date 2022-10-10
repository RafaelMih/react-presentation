export interface IPerson {
  id: number;
  cep: string;
  name: string;
  age: number;
  photoUrl: string;
  about: string;
  experience: string;
  graduation: string;
  hobbie: string;
  function: string;
}

export const persons: IPerson[] = [
  {
    id: 1,
    name: "Diane Cristina Lopes Losano",
    age: 20,
    cep: "09780-595",
    about: "Blogueira e vende pack do pé",
    experience:
      "Trabalha a 10 anos na área em diversos setores como sistemas financeiros, e-commerce, CRM e etc",
    function: "Social media",
    graduation: "Sistemas para internet",
    hobbie: "Influencer",
    photoUrl: `https://pps.whatsapp.net/v/t61.24694-24/300865425_7986848801389821_4848649359692664996_n.jpg?ccb=11-4&oh=01_AVyky8jTNRSz3WKuDmk1duEmtMXuw-pPXoGRkAxLMalX1g&oe=6351C4A1`,
  },
  {
    id: 2,
    name: "Cristina Choung Chen",
    age: 20,
    cep: "01001-000",
    about: "Informar sobre",
    experience: "Informar experiencia",
    function: "Especialista UX",
    graduation: "Sistemas para internet",
    hobbie: "Informar os hobbies",
    photoUrl: `https://media-exp1.licdn.com/dms/image/C4E03AQGYkEGlrD8-Sg/profile-displayphoto-shrink_800_800/0/1584068565057?e=1671062400&v=beta&t=jz1JUefYtdNxfA33_I81YkqtsaI4XCF4YZlAws_NWbU`,
  },
  {
    id: 3,
    name: "Flavio Fernando da Silva",
    age: 31,
    cep: "19061-250",
    about: `Sou Fernando e moro em Presidente Prudente, uma pequena e tranquila cidade no oeste do estado de São Paulo. Sou casado, tenho um filho e trabalho como desenvolvedor.`,
    experience: `Me formei e atuei como professor de lingua inglesa e como já conhecia um pouco de programação, resolvi migrar para a área em 2020.`,
    function: "Desenvolvedor",
    graduation: "Sistemas para internet",
    hobbie: `Ouvir musica é um dos meus maiores prazeres. Gosto muito dos anos 80 e as bandas Grunge.`,
    photoUrl: `https://media-exp1.licdn.com/dms/image/D4D03AQHps2RdSbR0Og/profile-displayphoto-shrink_800_800/0/1665356929982?e=1671062400&v=beta&t=UW00_dpy289pefrY57WVZjJwJqYEaYqaZZfInoHmBmY`,
  },
  {
    id: 4,
    name: "Rafael W. dos Santos",
    age: 35,
    cep: "13026-515",
    about:
      "Desde pequeno se amarra em tecnologia, começou a programar com revistas de bancas e nunca mais parou",
    experience:
      "Trabalha a 10 anos na área em diversos setores como sistemas financeiros, e-commerce, CRM e etc",
    function: "Tech lead",
    graduation: "Sistemas de informação e Sistemas para internet",
    hobbie: "Adora tocar ou tentar tocar qualquer tipo de instrumento",
    photoUrl: "https://i1.sndcdn.com/avatars-000437808954-vgh3vc-t500x500.jpg",
  },
  {
    id: 5,
    name: "Renato Lucas dos Santos",
    age: 25,
    cep: "05588-000",
    about: `Sou um homem nascido em 1996, casado, brasileiro, sem religião, sem partido político e a favor do estado mínimo.`,
    experience: `Atuei durante 3 anos liderando desenvolvimentos de soluções contábeis fiscais compatíveis com as versões SAP ERP ECC superior ou igual a 4.6. São exemplos de produtos desenvolvidos ECF, REINF, EFD ICMS IPI, EFD Contribuições. 
    
    Atualmente estou atuando como consultor técnico na empresa SAP. 

    Por ser idealizador e fundador da plataforma MyTrader, adquiri conhecimento em tecnologias e linguagens de programação como C#, ASP CORE 2.0, Javascript, CSS.`,
    function: "Desenvolvedor",
    graduation: "Sistemas para internet",
    hobbie: "Programar, debater, questionar e assistir vídeos no YouTube.",
    photoUrl: `https://media-exp1.licdn.com/dms/image/C4D03AQGUIj9akUYT9Q/profile-displayphoto-shrink_800_800/0/1593007744309?e=1671062400&v=beta&t=LZszoPJSpXm9a-8pOe4huS7nv5Ef8ObzRn90YQC1Nao`,
  },
];
