import { parseErrors } from '@/utils/errors';
import axios from 'axios';

const jsonConfig = {
  headers: { 'Content-Type': 'application/json' },
};

export class DrugsApi {
  private static BASEURL = 'https://fxcisco-api-pharmacy.herokuapp.com';
  static async findDrugs(searchTerm: string): Promise<any> {
    try {
      const { data } = await axios.post(
        `${this.BASEURL}/api/pharmacy/drugs/search`,
        {
          term: searchTerm,
          type: 'name',
          page: 0,
        },
        jsonConfig
      );
      return { data, error: null };
    } catch (error) {
      const { message } = parseErrors(error);
      return { data: null, error: message };
    }
  }
}
