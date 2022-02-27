import * as React from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { BiErrorCircle } from 'react-icons/bi';
import { getAuth, updatePassword } from 'firebase/auth'

export const FormUpdatePassword = () => {

    const formik = useFormik({
        initialValues: {
            password: ""
        },
        validationSchema: Yup.object({
            password: Yup.string().max(18).required('Podaj nowe hasło'),
        }),
        onSubmit: (values) => {

        }
    })
    console.log(formik.errors);
    

    const handleUpdatePassword = (e) => {

        const auth = getAuth();
        const user = auth.currentUser;
        const newPassword = getASecureRandomPassword();


        updatePassword(user, newPassword)
            .then(() => {
                console.log("update password");
            }).catch((error) => {

            })

        }



        return (
            <form>
                <div className="input-content">
                    <input className="profile-input"
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Nowe hasło'

                    />
                    {formik.touched.password && formik.errors.password ? <p className='error'>{formik.errors.password}<BiErrorCircle
                        style={{ width: "20px", height: "20px" }} /></p> : null}
                    <button className='form-button' type='submit' onClick={handleUpdatePassword}> Zmień hasło
                    </button>
                </div>
            </form>
        )
    }
