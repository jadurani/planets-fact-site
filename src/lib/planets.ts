import fs from 'fs';
import path from 'path';
import { Planet, PlanetData } from "./planets.constant";

const cwd = process.cwd()

export const getPlanetData = (planet: Planet) => {
  const fullPath = path.join(cwd, 'src', 'lib', 'data.json')
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const planetDataArray: PlanetData[] = JSON.parse(fileContents);
  const planetData = planetDataArray.find(p => p.name.toLowerCase() === planet.toLocaleLowerCase())
  return planetData
}