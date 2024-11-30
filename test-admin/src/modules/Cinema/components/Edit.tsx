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

export const CinemaEdit = () => {
  const { data: dataCities, isPending } = useGetList("city");
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="location" />
        <ArrayInput source="cities">
          <SimpleFormIterator>
            <SelectInput
              source="id"
              label="Ciudad"
              choices={dataCities}
              optionText="name"
              optionValue="id"
              isPending={isPending}
            />
          </SimpleFormIterator>
        </ArrayInput>
        {/* <ArrayInput source="movies">
          <SimpleFormIterator>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="location" />
            <TextInput source="genre" />
            <TextInput source="director" />
            <TextInput source="actors" />
            <TextInput source="description" />
            <TextInput source="image" />
            <TextInput source="videoImage" />
            <TextInput source="videoUrl" />
            <TextInput source="duration" />
          </SimpleFormIterator>
        </ArrayInput> */}
      </SimpleForm>
    </Edit>
  );
};
