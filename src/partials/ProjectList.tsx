import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Link OTAGO"
        description="Created website for a delivery service in New Zealand using Next.js and Typescript. It made the use of Google Maps API, Payment Gateway, Order tracking and other cool stuffs."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Windows ACL Management Tool"
        description="This is a windows ACL (access control list) management tool writen to automatically grant AD (active directory) users with filesystem access permissions directly from a web interface or through webhooks triggered based on the projects/assignments."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>C#.NET</Tags>
            <Tags color={ColorTags.EMERALD}>Haluka</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Haluka"
        description="Haluka was a backend Node.js framework inspired from Laravel made to make peeps migrating from PHP comfortable with Node.js & express.js. It was a side hobby project and is not well-maintained so it's not something to be used for Production."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Node.js</Tags>
            <Tags color={ColorTags.INDIGO}>Express.js</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
