import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Box, Heading } from '@chakra-ui/react';
import Card from './Card';

const projects = [
  {
    title: 'AI Content Generator',
    description:
      'Create AI powered content generator for varied options. \n Integrated with Google Gemini AI, and buidl with Tailwind CSS, Shadcn UI with Mongo DB',
    getImageSrc: () => require('../images/photo1.jpg'),
    url: 'https://ai-gen-app-beta.vercel.app',
  },
  {
    title: 'Next.Js/React Cash App',
    description:
      'App allows to manage your transactions with income and expenses. Build with NextJs/React, Typescript, Tailwind CSS, Shadcn UI, Drizzle ORM, and PostgreSQL with Neon',
    getImageSrc: () => require('../images/photo2.jpg'),
    url: 'https://cash-app-murex.vercel.app',
  },
  {
    title: 'Photo Gallery',
    description:
      'A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income',
    getImageSrc: () => require('../images/photo3.jpg'),
    url: '/construction',
  },
  {
    title: 'Event planner',
    description:
      'A mobile application for leisure seekers to discover unique events and activities in their city with a few taps',
    getImageSrc: () => require('../images/photo4.jpg'),
    url: '/construction',
  },
];

const ProjectsSection = () => {
  return (
    <>
      <span id="projects-section" />

      <FullScreenSection
        backgroundColor="#14532d"
        isDarkBackground
        p={20}
        alignItems="flex-start"
        spacing={4}
      >
        <Heading as="h1" fontSize="2xl" className="">
          Featured Projects
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
          gridGap={4}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
              url={project.url}
            />
          ))}
        </Box>
      </FullScreenSection>
    </>
  );
};

export default ProjectsSection;
