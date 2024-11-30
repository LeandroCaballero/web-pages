import {
  Create,
  SimpleForm,
  TextInput,
  required,
  ArrayInput,
  SimpleFormIterator,
  ImageInput,
  ImageField,
  useGetList,
  SelectInput,
} from "react-admin";

export const MovieCreate = () => {
  const { data: dataCities, isPending } = useGetList("cinema");

  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput
          source="description"
          multiline={true}
          label="Descripción"
          validate={[required()]}
        />
        <TextInput source="genre" validate={[required()]} />
        <TextInput source="director" validate={[required()]} />
        <ArrayInput source="actors" label="Actores" validate={[required()]}>
          <SimpleFormIterator inline>
            <TextInput source="name" helperText={false} />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput source="duration" validate={[required()]} />
        <ImageInput
          source="image"
          label="Imágen principal"
          validate={[required()]}
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <ImageInput source="videoImage" label="Imágen pequeña de video">
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="videoUrl" validate={[required()]} />
        <ArrayInput source="cinemas" validate={[required()]}>
          <SimpleFormIterator>
            <SelectInput
              source="id"
              label="Cine"
              choices={dataCities}
              optionText="name"
              optionValue="id"
              isPending={isPending}
            />
          </SimpleFormIterator>
        </ArrayInput>
        {/* <DateInput
        label="Publication date"
        source="published_at"
        defaultValue={new Date()}
      /> */}
      </SimpleForm>
    </Create>
  );
};
