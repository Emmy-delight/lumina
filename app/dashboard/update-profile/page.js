  "use client"
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FaUserEdit } from "react-icons/fa";
import * as yup from "yup";

const schema =yup.object().shape ({
    firstname: yup.string().required().min(3),
    lastname: yup.string().required().min(3),
    phone: yup.number().required().min(11).max(17),
    address:yup.string().required().min(12).max(300)
});

export default function UpdateProfile () {
    const {handleSubmit, handleChange, handleBlur, errors,touched,values} = useFormik({
        initialValues:{firstname:"",lastname:"",phone:"",address:""},
        onSubmit: () => {
            console.log("form has been submitted")
        }
    })
    return(
        <main className="min-h-screen flex justify-center px-2 md:px-16 lg:px-20 py-16 bg-gray-300">
          <div className="w-full md:w-[400px] p-4 rounded-md bg-white">
            <blockquote className="flex items-center gap-2 mb-5">
            <FaUserEdit  className="text-2xl"/>
              <span  className="block text-2xl">Update Your Profile</span>
            </blockquote>

            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                  <TextField 
                  type="text"
                  id="firstname"
                  label="first name"
                  variant="outlined"
                  placeholder="e.g Emmanuel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                  className="w-full"/>
                  {touched.firstname && errors.firstname ? <span className="text-xs text-red-500">{errors.firstname} </span>: null}
                </div>
                <div className="mb-3">
                  <TextField 
                  type="text"
                  id="lastname"
                  label="last name"
                  variant="outlined"
                  placeholder="e.g Emmanuel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                  className="w-full"/>
                   {touched.lastname && errors.lastname ? <span className="text-xs text-red-500">{errors.lastname} </span>: null}
                </div>
                <div className="mb-3">
                  <TextField 
                  type="tel"
                  id="phone"
                  label="phone"
                  variant="outlined"
                  placeholder="e.g +234..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  className="w-full"/>
                   {touched.phone && errors.phone ? <span className="text-xs text-red-500">{errors.phone} </span>: null}
                </div>
                <div className="mb-3">
                  <TextField 
                  multiline
                  rows={4}
                  type="text"
                  id="address"
                  label="address"
                  variant="outlined"
                  placeholder="Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  className="w-full"/>
                   {touched.address && errors.address ? <span className="text-xs text-red-500">{errors.address} </span>: null}
                </div>

                <Button type="submit" variant="contained">Update Profile</Button>
            </form>
          </div>
        </main>
    )
}