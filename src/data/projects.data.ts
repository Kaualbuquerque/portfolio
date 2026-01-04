// src/data/projects.data.ts
export interface ProjectData {
    title: string;
    text: string;
    image: string;
    githubUrl?: string;
    appUrl?: string;
}

export const projects: ProjectData[] = [
    {
        title: "Community Connect",
        text: "É uma plataforma que conecta prestadores de serviços locais com consumidores em sua região. Ela permite o cadastro e gerenciamento de serviços, busca e contratação de profissionais, bate-papo em tempo real, histórico de interações e favoritos de serviços, promovendo a economia local e facilitando a comunicação dentro da comunidade.",
        image: "/imgs/community-connect.png",
        githubUrl: "https://github.com/Kaualbuquerque/Community-Connect",
        appUrl: "https://community-connect-six.vercel.app/",
    },
    {
        title: "Blackout Finance",
        text: "É uma plataforma financeira projetada para gerenciar finanças pessoais e investimentos. Ela permite que os usuários acompanhem despesas, monitorem rendimentos, planejem orçamentos e tomem decisões financeiras mais informadas com dados centralizados e organizados.",
        image: "/imgs/blackout-finance.png",
        githubUrl: "https://github.com/Kaualbuquerque/Blackout-Finance",
        appUrl: "https://blackout-finance-ui.vercel.app/",
    },
];
