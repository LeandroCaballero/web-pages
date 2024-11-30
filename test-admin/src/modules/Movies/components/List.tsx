import {
  Datagrid,
  List,
  TextField,
  ImageField,
  ArrayField,
  CreateButton,
} from "react-admin";

export const MovieList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="location" />
      <TextField source="genre" />
      <TextField source="director" />
      <TextField source="actors" />
      {/* <TextField
        className="text-ellipsis"
        source="description"
        style={{ textOverflow: "ellipsis", color: "red" }}
      /> */}
      <ImageField source="image" />
      <ImageField source="videoImage" />
      <TextField source="videoUrl" />
      <TextField source="duration" />
    </Datagrid>
  </List>
);
