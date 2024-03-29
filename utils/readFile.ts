import { promises as fs, read } from 'fs';

export async function readJsonFile(path: string) {
  const json = await fs.readFile(process.cwd() + path, 'utf8');
  return JSON.parse(json);
}
