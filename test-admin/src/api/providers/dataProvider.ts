import { DataProvider, fetchUtils, GetListParams } from "react-admin";

const apiUrl = "http://localhost:3000"; // Cambia esto a la URL de tu API
const httpClient = fetchUtils.fetchJson;

const myDataProvider: DataProvider = {
  getList: async (resource: string, _params: GetListParams) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`);
    return {
      data: json,
      total: json.length,
    };
  },

  getOne: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);
    return {
      data: json,
    };
  },

  create: async (resource: string, params: GetListParams) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return {
      data: { ...params.data, id: json.id }, // Asegúrate de que el backend devuelva el id
    };
  },

  update: async (resource: string, params: GetListParams) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return {
      data: json,
    };
  },

  // delete: async (resource: string, params: GetListParams) => {
  //   await httpClient(`${apiUrl}/${resource}/${params.id}`, {
  //     method: "DELETE",
  //   });
  //   return {
  //     data: params.previousData,
  //   };
  // },

  // Otros métodos como getMany, updateMany, etc. si los necesitas.
};

export default myDataProvider;
