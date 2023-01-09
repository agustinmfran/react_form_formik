import {Formik, Form, ErrorMessage} from 'formik'
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'
import Select from './components/Select'
import Radio from './components/Radio'

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

  if(!values.radio){
    errors.radio = 'Requerido'
  }
  
  return errors
}

function App() {
  return (
    <Formik
        initialValues={{name: '', lastname: '', email: '', origin: '', radio: ''}}
        validate={validate}
        onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name='name' label='Nombre' />
        <br/>
        <TextInput name='lastname' label='Apellido' />
        <br/>
        <TextInput name='email' label='Correo' />
        <br/>
        <Select name='origin' label='País de origen  '>
          <option value=''>Seleccione</option>
          <option value='arg'>Argentina</option>
          <option value='bra'>Brasil</option>
          <option value='chi'>Chile</option>
          <option value='uru'>Uruguay</option>          
        </Select>
        <br/>
        <label>Edad</label>
        <Radio name='radio' value='menor20' label='Menor a 20 años'/>
        <Radio name='radio' value='entre20y30' label='Entre 20 y 30 años'/>
        <Radio name='radio' value='mayor30' label='Mayor a 30 años'/>
        <ErrorMessage name='radio' />
        <br/>
        <Checkbox name='accept'>
          Aceptar términos y condiciones
        </Checkbox>
        <br/>
        <button type='submit'>Enviar</button>      
      </Form>
    </Formik>
  );
}

export default App;
