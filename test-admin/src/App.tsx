import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./api/providers/authProvider";
import { useEffect } from "react";
import { request } from "./api/api";

export const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // const res = request({ method: "get" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Admin
      layout={Layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="posts"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="comments"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
    </Admin>
  );
};
