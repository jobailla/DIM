import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// note: `as any`s below are because type definitions are hardcoded
//       with the list of existing icons
export const dimPowerIcon: IconDefinition = {
  iconName: 'dimPower' as any,
  prefix: 'dim' as any,
  icon: [
    32,
    32,
    [],
    '',
    'M15.12 31.97C2.82 31.33-4.16 17.37 2.69 7.12 9.02-2.37 23-2.38 29.29 7.1c6.88 10.35-.1 24.23-12.5 24.87-.8.04-.84.04-1.67 0zm2.36-3.62a12.46 12.46 0 0 0 7.85-20.58C19.22.77 7.77 2.82 4.39 11.5 1.02 20.2 8.25 29.5 17.48 28.35zm-1.8-5.4a13.78 13.78 0 0 0-6.64-6.64c-.75-.36-.73-.3-.15-.57a13.99 13.99 0 0 0 6.84-6.83c.3-.62.24-.62.51-.04a13.91 13.91 0 0 0 6.83 6.85c.63.3.64.23-.12.59a13.78 13.78 0 0 0-6.63 6.63l-.32.64c-.01 0-.16-.29-.32-.64z'
  ]
};

export default dimPowerIcon;
