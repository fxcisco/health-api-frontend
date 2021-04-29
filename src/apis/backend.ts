import { clientApi } from './client';
import { parseErrors } from '@/utils/errors';

const jsonConfig = {
  headers: { 'Content-Type': 'application/json' },
};

export class BackendApi {
  private static BASEURL = 'http://localhost:5000';
  static async subscribe(email: string): Promise<any> {
    try {
      const { data } = await clientApi.post(
        `${this.BASEURL}/api/services/users/subscribe`,
        {
          email
        },
        jsonConfig
      );
      return { data, error: null};
    } catch (error) {
      const { message } = parseErrors(error);
      return { data: null, error: message };
    }
  }

  static async postMessage({ name, email, message }): Promise<any> {
    try {
      const { data } = await clientApi.post(
        `${this.BASEURL}/api/services/users/contact`,
        {
          name,
          email,
          message,
        },
        jsonConfig
      );
      return { data, error: null};
    } catch (error) {
      const { message } = parseErrors(error);
      return { data: null, error: message };
    }
  }

  static async getNews(): Promise<any> {
    try {
      const { data } = await clientApi.get(
        `${this.BASEURL}/api/services/news/recent`,
        jsonConfig
      );
      return { data, error: null};
    } catch (error) {
      const { message } = parseErrors(error);
      return { data: null, error: message };
    }
  }


  static async getDoctors(): Promise<any> {
    try {
      const { data } = await clientApi.get(
        `${this.BASEURL}/api/services/doctors`,
        jsonConfig
      );
      return { data, error: null};
    } catch (error) {
      const { message } = parseErrors(error);
      return { data: null, error: message };
    }
  }

  static async getDoctorAppts(docId: string): Promise<any> {
    try {
      const { data } = await clientApi.get(
        `${this.BASEURL}/api/services/doctors/${docId}/schedule`,
        jsonConfig
      );
      return { data, error: null};
    } catch (error) {
      const { message } = parseErrors(error);
      return { data: null, error: message };
    }
  }
}
