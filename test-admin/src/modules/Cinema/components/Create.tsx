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

export const CinemaCreate = () => {
  const { data, isPending } = useGetList("city");
  console.log(data);
  return (
    <Create>
      <SimpleForm>
        <TextInput label="Nombre" source="name" validate={[required()]} />
        <TextInput
          label="Ubicación"
          source="location"
          validate={[required()]}
        />
        <ArrayInput source="cities" label="Ciudades">
          <SimpleFormIterator inline>
            <SelectInput
              source="id"
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
