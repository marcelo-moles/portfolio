export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  status?: 'completed' | 'coming soon' | 'planned'
  github?: string
  demo?: string
  featured?: boolean
}

export interface Experiencia {
  empresa: string
  cargo: string
  periodo: string
  descripcion: string[]
  technologies: string[]
}

export interface Arquitectura {
  id: string
  titulo: string
  descripcion: string
}

export const projects: Project[] = [
  {
    id: 'corporateexpenses',
    title: 'Corporate Expenses',
    description:
      'Backend application focused on expense management, implemented with .NET, Domain-Driven Design, Clean Architecture and MongoDB.',
    technologies: [
      '.NET 8',
      'C#',
      'DDD',
      'Clean Architecture',
      'MongoDB',
      'Docker'
    ],
    status: 'completed',
    featured: true,
    github: 'https://github.com/marcelo-moles/corporate-expenses-code-sample',
  },
  {
    id: 'ecommerceapi',
    title: 'ECommerce API',
    description:
      'Backend API for an e-commerce solution using .NET, MongoDB and RESTful API principles.',
    technologies: [
      'C#',
      '.NET',
      'REST API',
      'MongoDB',
      'Docker'
    ],
    status: 'coming soon',
    featured: true,
    //github: 'https://github.com/marcelo-moles/corporate-expenses-code-sample',
  },
  {
    id: 'apiprocesaarchivos',
    title: 'Api Procesa Archivos',
    description:'API designed for processing large text files, focusing on performance, reliability and efficient backend processing.',
    technologies: [
      'C#',
      '.NET',
      'REST API',
      'SQL Server',
    ],
    status: 'coming soon',
    featured: true,
    //github: 'https://github.com/marcelo-moles/corporate-expenses-code-sample',
  },
  {
    id: 'ai',
    title: 'AI Data Analysis Platform',
    description: 'AI-powered solution built with Python and .NET for analyzing large data files, detecting inconsistencies and potential anomalies, and persisting analysis results in SQL Server.',
    technologies: [
      'Python',
      '.NET',
      'C#',
      'SQL Server',
      'Artificial Intelligence',
      'Data Analysis',
      'Large File Processing'
    ],
    featured: false,
    status: 'coming soon',
    //github: 'https://github.com/marcelo-moles/corporate-expenses-code-sample',
  }
]

export const experiencias: Experiencia[] = [
  {
    empresa: 'Freelance Software Developer',
    cargo: 'Full Stack Developer',
    periodo: 'March 2014 – Present',
    descripcion: [
      'Freelance software development for different clients and projects, working across backend, web applications, APIs and database solutions.',
      'Backend development using C# / .NET, Java, Python and Node.js.',
      'Frontend development using Vue.js and React.js.',
      'Database development and data management using SQL Server and MongoDB.',
      'Designed and implemented REST APIs, business logic, integrations and backend services.',
      'Worked independently throughout the software development lifecycle, from requirements analysis and solution design to implementation and delivery.',
      'Adapted technology and architecture to the specific requirements of each project.'
    ],
    technologies: [
      'C#',
      '.NET',
      'Java',
      'Python',
      'Microservices',
      'Node.js',
      'REST API',
      'Mongo DB',
      'SQL Server',
      'Vue.js',
      'React.js'
    ],
  },
  {
    empresa: 'Banco ICBC Argentina',
    cargo: 'Senior Backend .NET Developer',
    periodo: 'February 2024 – May 2026',
    descripcion: [
      'Developed and maintained backend microservices for a SaaS platform using .NET. And JAVA',
      'Designed and implemented RESTful APIs integrated with SQL Server',
      'Diagnosis and resolution of critical incidents in microservices',
      'API response validation and log analysis'
    ],
    technologies: [
      'C#',
      '.NET',
      'Java',
      'Python',
      'Microservices',
      'Kafka',
      'REST API',
      'Event-driven architecture'
    ],
  },

  {
    empresa: 'Visma Latam',
    cargo: 'SSr Backend .NET Developer',
    periodo: 'March 2020 – September 2022',
    descripcion: [
      'Development and maintenance of microservices for a SaaS platform.',
      'Implementation of REST APIs using .NET and SQL Server.',
      'Integration with Angular and backend process optimization',
      'Participation in Agile Scrum/Kanban teams'
    ],
    technologies: [
      'C#',
      '.NET',
      'Java',
      'Python',
      'Microservices',
      'Kafka',
      'REST API'
    ],
  }
]

export const aquitecturas: Arquitectura[] = [
  {
    id: '0',
    titulo: 'Clean Architecture',
    descripcion: 'Separation of concerns and dependency inversion to keep business rules independent from infrastructure concerns.'
  },
  {
    id: '1',
    titulo: 'SOLID Principles',
    descripcion: 'Application of SOLID principles to promote maintainable, scalable and loosely coupled software through clear responsibilities, abstraction and dependency management.'
  },

  {
    id: '2',
    titulo: 'Domain-Driven Design (DDD)',
    descripcion: 'Modeling software around business domains, entities, value objects and explicit business rules.'
  },
  {
    id: '3',
    titulo: 'Microservices',
    descripcion: 'Designing independently deployable services around clear business capabilities and boundaries.'
  },
  {
    id: '4',
    titulo: 'API First',
    descripcion: 'Defining clear contracts and API boundaries before implementation when the project benefits from a contract-first approach.'
  }
]