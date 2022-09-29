import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="border-t border-gray-600 pt-5">
        <div className="text-sm text-gray-200">
          &copy; Copyright 2022 by {AppConfig.site_name}
        </div>
      </div>
    </div>
  </Section>
);

export { Footer };
