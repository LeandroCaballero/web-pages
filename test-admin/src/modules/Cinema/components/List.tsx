import {
  Datagrid,
  List,
  TextField,
  ImageField,
  ArrayField,
  CreateButton,
} from "react-admin";

export const CinemaList = () => (
  <List>
    <Datagrid>
      <TextField source="name" label="Nombre" />
      <TextField source="location" label="Ubicación" />
    </Datagrid>
  </List>
);
