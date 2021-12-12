import axios from 'axios';

export default class ApiRESTful {
  constructor(baseURL, apiV = 'api/v1/') {
    this.require = axios.create({
      baseURL,
      headers: {
        common: {
          Authorization: null,
        },
      },
    });
    this.apiV = apiV;
  }

  async authorization(userName, userPassword) {
    let userToken = null;
    try {
      const response = await this.require.post('api-token-auth/', {
        username: userName,
        password: userPassword,
      });
      userToken = response.data.token;
    } catch (err) {
      console.log(err);
    }
    return userToken;
  }

  setHeaderToken(token) {
    // console.log(token);
    this.require.defaults.headers.common = { Authorization: `Token ${token}` };
  }

  setHeaderURL(url) {
    this.require.defaults.headers.common = { baseURL: url };
  }

  hasToken() {
    return Boolean(this.require.defaults.headers.common.Authorization);
  }

  async create(sourceName, formData) {
    let response = null;
    try {
      response = await this.require.post(`${this.apiV}${sourceName}/`, formData);
    } catch (err) {
      console.log(err);
      return false;
    }
    return response;
  }

  async delete(sourceName, elementId) {
    let response = null;
    try {
      response = await this.require.delete(`${this.apiV}${sourceName}/${elementId}`);
    } catch (err) {
      console.log(err);
    }
    return response;
  }

  async getAll(sourceName, parametersURL = '') {
    let response = null;
    try {
      response = await this.require.get(`${this.apiV}${sourceName}/?${parametersURL}`);
    } catch (err) {
      console.log(err);
      return false;
    }
    return response;
  }

  async get(sourceName, elementId) {
    let response = null;
    try {
      response = await this.require.get(`${this.apiV}${sourceName}/?id=${elementId}`);
    } catch (err) {
      console.log(err);
    }
    return response;
  }

  async options(sourceName) {
    let response = null;
    try {
      response = await this.require.options(`${this.apiV}${sourceName}`);
    } catch (err) {
      console.log(err);
      return null;
    }
    return response;
  }

  async posted(sourceName) {
    let response = null;
    try {
      response = await this.require.post(`${this.apiV}${sourceName}/`);
    } catch (err) {
      console.log(err);
      return false;
    }
    return response;
  }

  async fill(sourceName, id) {
    let response = null;
    try {
      response = await this.require.post(`${this.apiV}${sourceName}/${id}/fill_table/`);
    } catch (err) {
      console.log(err);
      return false;
    }
    return response;
  }

  async calculate(sourceName, id) {
    let response = null;
    try {
      response = await this.require.patch(`${this.apiV}${sourceName}/${id}/calculate/`);
    } catch (err) {
      console.log(err);
      return false;
    }
    return response;
  }

  async alignment(sourceName, id, form) {
    let response = null;
    try {
      response = await this.require.patch(`${this.apiV}${sourceName}/${id}/alignment/`, form);
    } catch (err) {
      console.log(err);
      return false;
    }
    return response;
  }

  async update(sourceName, formData, elementId) {
    let response = null;
    try {
      response = await this.require.put(`${this.apiV}${sourceName}/${elementId}/`, formData);
    } catch (err) {
      console.log(err);
    }
    return response;
  }
}
