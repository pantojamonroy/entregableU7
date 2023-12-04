import { Formik, Field, FormikHelpers, ErrorMessage } from  "formik"
import * as Yup from 'yup';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
}
const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Name is required / El nombre es requerido'),
  lastName: Yup.string().required('Last name is required / El apellido es requerido'),
  email: Yup.string().required('The email is not valid / El email no es valido').required('Email is required / El email es requerido'),
});

function App() {
  const onSubmit = (values: typeof initialValues, {resetForm, setFieldError}: FormikHelpers<typeof initialValues>)  => {
    console.log("values", values);
    setFieldError('email', 'el email ya existe');
    resetForm();
  };

  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-2/6">
        <h1>Register in pantosaurio Art</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SignupSchema}
        >
        {({ errors, touched, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
              First Name
              </label>

              <Field name="firstName"
                id="first_name"
                className=" bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-grey-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Hebert" required
                />
                <ErrorMessage name="firstName" component="small" className="text-red-400"/>

            </div>
            <div>
              <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
              Last Name
              </label>

              <Field name="lastName"
                id="first_name"
                className=" bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-grey-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pantoja" required
                />
                <ErrorMessage name="lastName" component="small" className="text-red-400" />
            </div>
            <div>
              <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
              Email
              </label>

              <Field name="email"
                id="first_name"
                className=" bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-grey-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@gmail.com" required
                />
                <ErrorMessage name="email" component="small" className="text-red-400" />
            </div>
            <div className="flex justify-center">
              <button type="submit" className=" text-white dark:bg-blue-600 dark: bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
            </div>
        </form>
        )}
        </Formik>
      </div>
    </div>
    );
}

export default App
