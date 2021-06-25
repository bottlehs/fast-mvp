import { client } from './api';
import { Tea } from '@/models';

export default {
  async getAll(): Promise<Array<Tea>> {
    return client.get('/tea-categories').then(res => res.data);
  },
};
