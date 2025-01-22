import React, { useState } from 'react'

const AddContact = ({ addContact }) => {
    const [contactData, setContactData] = useState({ name: '', email: '' })
    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value })
    }
    const handleAdd = (e) => {
        e.preventDefault()
        if (contactData.name === '' || contactData.email === '') {
            alert('All fields are mandatory')
            return
        }
        addContact(contactData)
        setContactData({ name: '', email: '' })
    }
    return (
        <div className='formHeader'>
            <div className='add-contact'>
                Add Contact
            </div>
            <form>
                <label>Name:</label><br />
                <input type="text" placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange} />
                <label>Email:</label><br />
                <input type="email" placeholder='Enter Email' name='email' value={contactData.email} onChange={handleChange} />
            </form>
            <button className='btn' onClick={handleAdd}>Add Contact</button>
        </div>
    )
}

export default AddContact
