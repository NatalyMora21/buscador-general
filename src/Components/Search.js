import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import searchGeneral from '../Redux/actions/buscadorAction'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const Search = ()=>{
    const dispatch= useDispatch();
    const [word, setWord]=useState('')

    const validationSchema = Yup.object().shape({
        searchWord: Yup.string()
            .min(2, 'Debe ser una palabra')
  
          .required('El campo no debe estar vacío'),
      });

      const initialValues = {
        searchWord: '',
      };

      const handleSubmit = async (value) => {



        console.log(value.searchWord)
        setWord(value.searchWord);

        dispatch(searchGeneral(value.searchWord))

      };


    return (
        <div className="row justify-content-sm-center" >

            <div className="col-sm-8">   

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >   
                    <Form>
                        <div className="input-group mb-3 ">
                            <Field name="searchWord" type="text" className="form-control" placeholder="Palabra clave" aria-label="Palabra clave" aria-describedby="button-addon2" /> 
                            <button className="btn btn-outline-secondary search" type="submit" id="button-addon2" >Buscar <i class="fas fa-search"></i></button>
                        </div>

               
                        <ErrorMessage
                            name="searchWord"
                            className="alert alert-danger"
                            component="div"

                        />
                    </Form>

                </Formik>
            </div>

            



        </div>
    )

}

export default Search;