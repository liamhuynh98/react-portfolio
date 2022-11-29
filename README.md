## Technology Used
- ReactJS 
- NestJS
- TailwindCSS
- Sanity.io
- Typescript

## Structure Design
Components
    ParticleBackground
    Header
    Hero
    About
    Experience
    Skills
        Skill Card
    Project
        Project Card
    Contact

Apis
    getExperience
    getPageInfo
    getProjects
    getSkills
    getSocials

Utils
    fetchExperiences
    fetchPageInfo
    fetchProjects
    fetchSkills
    fetchSocials
    
## Features still in-progress
- Mobile View on some sections 
- Document Ordering in Sanity
- Setting up the email server

## Start the project
```bash
npm run dev
```

## Deploy on Vercel from CLI
- Run ```bash npm i -g vercel``` to install Vercel
- Deploy project run 
```bash
vercel build
vercel deploy --prebuild
```



