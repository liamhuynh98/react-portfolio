## Technology Used
- ReactJS 
- NestJS
- TailwindCSS
- Sanity.io
- Typescript

## Structure Design
+ Components
    1. ParticleBackground
    2. Header
    3. Hero
    4. About
    5. Experience
    6. Skills -> Skill Card
    7. Project -> Project Card
    8. Contact

+ Apis
    1. getExperience
    2. getPageInfo
    3. getProjects
    4. getSkills
    5. getSocials

+ Utils
    1. fetchExperiences
    2. fetchPageInfo
    3. fetchProjects
    4. fetchSkills
    5. fetchSocials
    
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



