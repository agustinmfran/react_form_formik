import {Formik, Form} from 'formik'
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'

const validate = (values) =>{
  const errors = {}
  if(!values.name){ 
    errors.name = 'Requerido'
  } else if (values.name.length < 5){
      errors.name = 'El nombre es muy corto'
  }

  if(!values.lastname){ 
    errors.lastname = 'Requerido'
  } else if (values.lastname.length < 5){
      errors.lastname = 'El apellido es muy corto'
  }
  
  return errors
}

function App() {
  return (
    <Formik
        initialValues={{name: '', lastname: '', email: ''}}
        validate={validate}
        onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name='name' label='Nombre' />
        <TextInput name='lastname' label='Apellido' />
        <TextInput name='email' label='Correo' />
        <Checkbox name='accept'>
          Aceptar términos y condiciones
        </Checkbox>
        <button type='submit'>Enviar</button>      
      </Form>
    </Formik>
  );
}

export default App;
