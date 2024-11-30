import {
  Create,
  SimpleForm,
  TextInput,
  required,
  ArrayInput,
  SimpleFormIterator,
  useGetList,
  SelectInput,
  Edit,
} from "react-admin";

export const MovieEdit = () => {
  // const { data: dataMovies, isPending } = useGetList("movie");
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="location" />
        {/* <ArrayInput source="cities">
            <SimpleFormIterator>
              <SelectInput
                source="id"
                label="Ciudad"
                choices={dataMovies}
                optionText="name"
                optionValue="id"
                isPending={isPending}
              />
            </SimpleFormIterator>
          </ArrayInput> */}
      </SimpleForm>
    </Edit>
  );
};
