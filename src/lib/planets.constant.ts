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