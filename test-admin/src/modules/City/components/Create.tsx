import {
  Create,
  SimpleForm,
  TextInput,
  required,
  ArrayInput,
  SimpleFormIterator,
  useGetList,
  SelectInput,
} from "react-admin";

export const CityCreate = () => {
  const { data, isPending } = useGetList("movie");
  return (
    <Create>
      <SimpleForm>
        <TextInput label="Nombre" source="name" validate={[required()]} />
        <ArrayInput source="Cinemas" label="Cines">
          <SimpleFormIterator inline>
            <SelectInput
              source="country"
              label="Ciudad"
              choices={data}
              optionText="name"
              optionValue="id"
              isPending={isPending}
            />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};
