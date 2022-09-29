import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Robin</GradientText> 👋
        </>
      }
      description={
        <>
          Not just some rando on the internet, but, some guy I guess.
          <em> Some spice of optimistic nihilism that I've got </em> 😆. The
          important part of all is I like{' '}
          <span className="text-cyan-400">making </span>
          stuffs.
          <em> (sometimes breaking too, cuz why not LMAO).</em>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/Robin_Panta" target="_blank">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://linkedin.com/in/robinpanta" target="_blank">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
