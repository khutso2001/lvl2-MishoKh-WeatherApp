import React from 'react';
import { useFormik } from 'formik';
 import "./SignUpformik.css";
 import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    inputSize:{
        height:'30px',
        borderRadius:'5px',
    },
    button:{
        width:'80px',
        marginLeft:'90px',
        marginTop: '10px',
        backgroundColor: 'green',
        borderRadius: '4px',
        padding: '10px 0',
    }
  }));
  
  
 const Signup = () => {
   
    const classes = useStyles();
   const formik = useFormik({
     initialValues: {
        title: '',
        price: '',
        description: '',
        category: '',
        img: '',
     },
     validationSchema: Yup.object({
      title: Yup.string()
      .min(6, <p className="required">Must be 8 characters or more</p>)
      .required(<p className="required">please enter your information</p>),
      price: Yup.string()
      .min(6, <p className="required">Must be 8 characters or more</p>)
      .required(<p className="required">please enter your information</p>),
        description: Yup.string().email(<p className="required">Invalid email address</p>)
      .required(<p className="required">please enter your information</p>),
      description: Yup.string()
      .min(6, <p className="required">Must be 8 characters or more</p>)
      .required(<p className="required">please enter your information</p>),
     }),
     onSubmit: (values, setStatus, resetForm, isSubmitting, setSubmitting, setErrors) => {
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: values.title,
                    price: values.price,
                    description: values.description,
                    image: values.img,
                    category: values.category
                }
            ),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
        })
          .then(res => res.json())
          .then(json => {
            console.log(json);
            setStatus(true);
            resetForm();
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
            alert('your product has been shipped ');
          })
     },
   });
   return (
     <form className="style" onSubmit={formik.handleSubmit}>
       <label htmlFor="title">Title</label>
       <input className={classes.inputSize}
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       {formik.errors.title ? <div>{formik.errors.title}</div> : null}
 
       <label htmlFor="price">price</label>
       <input className={classes.inputSize}
         id="price"
         name="price"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       {formik.errors.price ? <div>{formik.errors.price}</div> : null}
 
       <label htmlFor="description">description</label>
       <input className={classes.inputSize}
         id="description"
         name="description"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.description}
       />
       {formik.errors.description ? <div>{formik.errors.description}</div> : null}

       <label htmlFor="category">category</label>
       <input className={classes.inputSize}
         id="category"
         name="category"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.category}
       />
       {formik.errors.category ? <div>{formik.errors.category}</div> : null}

       <label htmlFor="img">img</label>
       <input className={classes.inputSize}
         id="img"
         name="img"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.img}
       />
       {formik.errors.img ? <div>{formik.errors.img}</div> : null}
 
       <button className={classes.button} type="submit">Submit</button>
     </form>
      
   );
 };

 export default Signup;