import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const signin = () => {
        if (email.length === 0)
            toast.error('Enter the Email')
        else if (password.length === 0)
            toast.error('Enter the Password')
        else {
            axios.post('http://localhost:4000/user/Signin', { email, password }).then((response) => {
                const result = response.data
                if (result.status === 'failure')
                    toast.error('Invalid email or password')
                else {
                    toast.success('Welcome to CARS30')
                    navigate('/home')
                }
            }).catch((error) => {
                console.log('error')
                console.log(error)
            })
        }
    }
    return (
        <div style={styles.container}>
            <div className="mb-3">
                <label>Enter Your Email</label>
                <input type='email' className="form-control" onChange={(event) => {
                    setEmail(event.target.value)
                }} />
            </div>
            <div className="mb-3">
                <label>Enter Your Password</label>
                <input type='password' className="form-control" onChange={(event) => {
                    setPassword(event.target.value)
                }} />
            </div>
            <div className="mb-3">
                <label>Dont have an account?</label>
                <Link to='/SignUp'>SignUp here</Link>
            </div>
            <div>
                <button style={styles.signbutton} onClick={signin}>
                    Sign in
                </button>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: 400,
        height: 300,
        padding: 20,
        position: 'relative',
        top: 10,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        borderColor: '#db0f62',
        borderRadius: 50,
        broderWidth: 1,
        borderStyle: 'solid',
        boxShadow: '1px 1px 20px 5px #C9C9C9',
    },
    signbutton: {
        backgroundColor: '#db0f62',
        width: '100%',
        height: 40,
        borderStyle: 'solid',
        borderColor: '#db0f62',
        borderRadius: 30,



    }
}
export default Signin

/*  */ 