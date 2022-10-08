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
    cep: "01001-000",
    about: "Blogueira e vende pack do pé",
    experience:
      "Trabalha a 10 anos na área em diversos setores como sistemas financeiros, e-commerce, CRM e etc",
    function: "Social media",
    graduation: "Sistemas para internet",
    hobbie: "Influencer",
    photoUrl: "",
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
    photoUrl: "",
  },
  {
    id: 3,
    name: "Flavio Fernando da Silva",
    age: 30,
    cep: "01001-000",
    about: "Informar sobre",
    experience: "Informar experiencia",
    function: "Desenvolvedor",
    graduation: "Sistemas para internet",
    hobbie: "Informar os hobbies",
    photoUrl: "",
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
    cep: "01001-000",
    about: "Informar sobre",
    experience: "Informar experiencia",
    function: "Desenvolvedor",
    graduation: "Sistemas para internet",
    hobbie: "Informar os hobbies",
    photoUrl: "",
  },
];
