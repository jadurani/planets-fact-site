// Declare the planets
export const PLANETS = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
] as const

export type Planet = typeof PLANETS[number]

/**
 * Declaring the colors to prevent tailwind from purging them
 */
export const PLANET_COLORS = {
  mercury: ['bg-mercury', 'border-mercury'],
  venus: ['bg-venus', 'border-venus'],
  earth: ['bg-earth', 'border-earth'],
  mars: ['bg-mars', 'border-mars'],
  jupiter: ['bg-jupiter', 'border-jupiter'],
  saturn: ['bg-saturn', 'border-saturn'],
  uranus: ['bg-uranus', 'border-uranus'],
  neptune: ['bg-neptune', 'border-neptune']
}

export interface PlanetData {
  name: Planet;
  overview: PlanetFact;
  structure: PlanetFact;
  geology: PlanetFact;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
}

export interface PlanetFact {
  content: string;
  source: string;
}

export type Images = {
  planet: string;
  internal: string;
  geology: string;
}

// not sure if still needed -- see Profile.tsx
export const MapFactToImage = {
  overview: 'planet',
  structure: 'internal',
  geology: 'geology'
}

export const DESCRIPTIONS = ["overview", "structure", "geology"] as const;
export type DescriptionType = (typeof DESCRIPTIONS)[number];
