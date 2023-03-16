import {ProjectInfo} from "../interfaces/project-info";
import {IMAGE_FOLDER} from "../utls/URLs";

export const projects: ProjectInfo[] = [
    {
        projectName: 'Data Gate',
        images: [
            IMAGE_FOLDER + '/data-gate/data-gate1.webp',
            IMAGE_FOLDER + '/data-gate/data-gate2.webp',
            IMAGE_FOLDER + '/data-gate/data-gate3.webp',
            IMAGE_FOLDER + '/data-gate/data-gate4.webp',
        ],
        pageLink: '#',
        frontendDevelopers: [
            {developerName: 'Ata!', developerLink: 'https://github.com/AtaReversei'},
            {developerName: 'Maryam Sadat Razavi Taheri', developerLink: 'https://github.com/msrazavi'},
            {developerName: 'Sina Amini', developerLink: 'https://github.com/SinaMAmini'},
        ],
        backendDevelopers: [
            {developerName: 'Mahdi Montazer', developerLink: 'https://github.com/M79Montazer'},
            {developerName: 'Arya Jalali', developerLink: 'https://github.com/nothatcreative5'},
            {developerName: 'DnyaNvB', developerLink: 'https://github.com/DnyaNvB'},
            {developerName: 'Marzie Afshar', developerLink: 'https://github.com/marzieafshar'},
        ],
        frontendTechnology: 'Angular',
        backendTechnology: 'ASP.NET',
        sources: [{sourceName: 'github', sourceLink: 'https://github.com/Star-Academy/Summer1401-Project-Team01'}],
        about: "It's my greatest project with complex frontend & backend. It's a ETL(Extract, Transform & Load) project. It means we have a flow of processors that starts from raw data and at the end shows results.\n as last project is, this project needs a more powerful server which I could reach. I hope images are clear for showing how complex is this project.",
    },
    {
        projectName: 'NG Store',
        images: [IMAGE_FOLDER + '/ng-store/NG-Store1.webp'],
        pageLink: 'https://star-academy.github.io/Summer1401-FE-Team05/',
        frontendDevelopers: [
            {developerName: 'Hessam A. Cheraghi', developerLink: 'https://github.com/HessamCheraghi'},
            {developerName: 'Sina Amini', developerLink: 'https://github.com/SinaMAmini'},
        ],
        backendDevelopers: [{developerName: 'BijanProgrammer', developerLink: 'https://github.com/BijanProgrammer'}],
        frontendTechnology: 'Angular',
        backendTechnology: 'NodeJS',
        sources: [
            {sourceName: 'frontend', sourceLink: 'https://github.com/Star-Academy/Summer1401-FE-Team05'},
            {sourceName: 'backend', sourceLink: 'https://github.com/BijanProgrammerWebsites/api-games'},
        ],
        about: "I was accepted in a internship in Mohaymen. I've learnt Angular and Typescript for this. This project was built by pair programming, So it means one us was programming and other one was searching problems.\n Unfortunately I have a limited server and backend this project needs a better server, So backend is not working and It's just frontend.",
    },
    {
        projectName: 'sweet-taste',
        images: [
            IMAGE_FOLDER + '/sweet-taste/sweet-taste1.webp',
            IMAGE_FOLDER + '/sweet-taste/sweet-taste2.webp',
            IMAGE_FOLDER + '/sweet-taste/sweet-taste3.webp',
        ],
        pageLink: 'sweet-taste',
        frontendDevelopers: [
            {developerName: 'Sara Feizi', developerLink: 'https://github.com/sarafeizi'},
            {developerName: 'Sina Amini', developerLink: 'https://github.com/SinaMAmini'},
        ],
        backendDevelopers: [{developerName: 'Sina Amini', developerLink: 'https://github.com/SinaMAmini'}],
        frontendTechnology: 'React',
        backendTechnology: 'NodeJS',
        sources: [{sourceName: 'github', sourceLink: 'https://github.com/SinaMAmini/sweet-taste'}],
        about: "This project is for one of my classes in university. It was my first team project. We had too many frontend developer in our team, so I started to learn backend... after a simple researchI found out that NodeJS is one of simplest frameworks in backend. Also In front I've connected APIs.",
    },
    {
        projectName: 'chart',
        images: [IMAGE_FOLDER + '/chart.webp'],
        pageLink: 'https://sinamamini.github.io/chart/',
        frontendDevelopers: [{developerName: 'Sina Amini', developerLink: 'https://github.com/SinaMAmini'}],
        backendDevelopers: null,
        frontendTechnology: 'React',
        backendTechnology: null,
        sources: [{sourceName: 'github', sourceLink: 'https://github.com/SinaMAmini/chart'}],
        about: "It was my test project for hiring. They accept my project but somehow they didn't hire me.",
    },
    {
        projectName: 'Portfolio',
        images: [IMAGE_FOLDER + '/portfolio.webp'],
        pageLink: '#',
        frontendDevelopers: [{developerName: 'Sina Amini', developerLink: 'https://github.com/SinaMAmini'}],
        backendDevelopers: null,
        frontendTechnology: 'React / Typescript',
        backendTechnology: null,
        sources: [{sourceName: 'github', sourceLink: 'https://github.com/SinaMAmini/portfolio'}],
        about: "It's the page that you currently are watching. :))",
    },
];
