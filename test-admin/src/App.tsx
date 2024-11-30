import {
  Admin,
  Resource,
  EditGuesser,
  ShowGuesser,
  ListGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import myDataProvider from "./api/providers/dataProvider";
import { authProvider } from "./api/providers/authProvider";
import { useEffect } from "react";
import { MovieList } from "./modules/Movies/components/List";
import { MovieCreate } from "./modules/Movies/components/Create";
import { CityCreate } from "./modules/City/components/Create";
import { CinemaCreate } from "./modules/Cinema/components/Create";
import { CinemaList } from "./modules/Cinema/components/List";
import { CinemaEdit } from "./modules/Cinema/components/Edit";

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
      dataProvider={myDataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="movie"
        list={MovieList}
        edit={EditGuesser}
        show={ShowGuesser}
        create={MovieCreate}
      />
      <Resource
        name="city"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
        create={CityCreate}
      />
      <Resource
        name="cinema"
        list={CinemaList}
        edit={CinemaEdit}
        show={ShowGuesser}
        create={CinemaCreate}
      />
      <Resource
        name="schedule"
        list={MovieList}
        edit={EditGuesser}
        show={ShowGuesser}
        create={MovieCreate}
      />
    </Admin>
  );
};
