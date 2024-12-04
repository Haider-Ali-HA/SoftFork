import React, { useState } from 'react'
import Navbar3 from '../../components/common/Navbar3'
import UploadOutline from '../../components/common/UploadOutline'
import MainHeading from '../../components/common/MainHeading'
import SubHeading from '../../components/common/SubHeading'
import InputField from '../../components/common/InputField'
import ButtonFilled from '../../components/common/ButtonFilled'
import TagInputField from '../../components/common/TagInputField'

const Profile = () => {
    const [formData, setFormData] = useState({
        image: null,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
    });
    const [skills, setSkills] = useState([]);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTagsChange = (newTags) => {
        setSkills(newTags);
    };

    const handleFileSelect = (file) => {
        setFormData((prev) => ({
            ...prev,
            image: file,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        console.log('Skills:', skills);

        // Perform form submission logic here, such as API call or validation
    };

    return (
        <>
            <Navbar3 />
            <div className='w-full px-4'>
                <div className="mt-8"></div>
                <MainHeading text={"Profile Setup"} />
                <SubHeading text={`Bring your idea to life and connect with \nbackers ready to fund your vision.`} />

                <form action="" onSubmit={handleFormSubmit} className='flex flex-col gap-4 mt-8'>
                    <UploadOutline 
                    text='Profile Picture' 
                    buttonText='Upload Picture' 
                    onFileSelect={handleFileSelect}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <InputField
                            inputLabel={'Your First Name'}
                            typeText={'text'}
                            placeholderText={''}
                            value={formData.firstName}
                            onChange={handleInputChange}
                            name={'firstName'}
                        />
                        <InputField
                            inputLabel={'Your Last Name'}
                            typeText={'text'}
                            placeholderText={''}
                            value={formData.lastName}
                            onChange={handleInputChange}
                            name={'lastName'}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <InputField
                            inputLabel={'Your Email'}
                            typeText={'email'}
                            placeholderText={''}
                            value={formData.email}
                            onChange={handleInputChange}
                            name={'email'}
                        />
                        <InputField
                            inputLabel={'Your Password'}
                            typeText={'password'}
                            extraText={'sign up'}
                            placeholderText={''}
                            value={formData.password}
                            onChange={handleInputChange}
                            name={'password'}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <InputField
                            inputLabel={'Your Address'}
                            typeText={'text'}
                            placeholderText={''}
                            value={formData.address}
                            onChange={handleInputChange}
                            name={'address'}
                        />
                        <div className='-mt-4'>
                        <TagInputField
                            label="Project Tags"
                            placeholder="Type a tag and press Enter"
                            tags={skills}
                            setTags={handleTagsChange}
                        />
                        </div>
                    </div>
                    <div className="w-[20%] mx-auto mt-6">
                    <ButtonFilled text='Save Changes' />
                    </div>
                </form>


            </div>
        </>
    )
}

export default Profile
