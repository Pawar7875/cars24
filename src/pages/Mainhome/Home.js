import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    const sw = () => {
        navigate('/buycar')
    }
    const sw2 = () => {
        navigate('/sellcar')
    }
    return (
        <div style={{
            margin: 0,
            display: 'flex',


        }} >
            <button style={mystyles} onClick={sw} >
                Buy Car
            </button>
            <button style={mystyles} onClick={sw2}>
                Sell Car
            </button>
        </div >
    )
}
const mystyles = {
    backgroundColor: 'yellow',
    height: '250px',
    width: '250px',
    position: 'relative',
    top: 160,
    left: 0,
    right: 0,
    margin: 'auto',
    borderRadius: 50,
    broderWidth: 1,
    borderStyle: 'solid',
    boxShadow: '1px 1px 20px 5px #C9C9C9',

}
const mystyles2 = {
    position: 'relative',
    top: 100,
    left: 60,
    right: 0,
    margin: 'auto',
}
export default Home