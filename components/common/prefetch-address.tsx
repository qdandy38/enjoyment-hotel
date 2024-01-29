import { readJsonFile } from '@/utils/readFile';
import ContextAddress from './context-address';

async function PrefetchAddress() {
  const res = await readJsonFile('/assets/json/CityCountyData.json');

  return <ContextAddress data={res} />;
}

export default PrefetchAddress;
