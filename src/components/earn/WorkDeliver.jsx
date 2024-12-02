import React, { useState } from 'react';
import ProfileDetail from '../common/ProfileDetail';
import ButtonFilled from '../common/ButtonFilled';
import profile1 from '/images/profile1.png';
import DatePickerInput from '../common/DatePickerInput';
import InputField from '../common/InputField';
import TextareaField from '../common/TextAreaField';
import Model from '../common/Model';

const WorkDeliver = () => {
    const [open, setOpen] = useState(false); // State for modal visibility
    const [formData, setFormData] = useState({
        message: '',
        attachmentLink: '',
    });

    const gig = {
        title: 'Website & Mobile App Development',
        description: 'An eco-friendly packaging business provides biodegradable, recyclable, and reusable packaging solutions for e-commerce companies...',
        skills: ['Frame Work', 'JavaScript', 'HTML', 'CSS'],
        author: 'Square Dashboard',
        authorEmail: 'karson123@gmail.com',
        profilePhoto: profile1,
        price: 500,
        datePosted: 'May 25, 2024',
    };


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

      // Handle input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        handleOpen();
    }


    return (
        <form onSubmit={handleSubmit} className="w-full px-4">
            {/* Gig Details */}
            <div className="bg-white rounded-lg p-6 border border-[#B0B0B0]">
                <div className="flex justify-between">
                    <div className="flex-[2]">
                        <h3 className="text-3xl text-[#3D434A] font-bold mb-2">{gig.title}</h3>
                        <p className="text-[#3D434A] text-sm pb-2 font-semibold">Posted {gig.datePosted}</p>
                        <p className="text-light text-xs mb-4">{gig.description}</p>
                    </div>
                    <div className="pl-28">
                        <h3 className="text-5xl text-[#3D434A] font-bold mb-2">${gig.price}</h3>
                        <p className="text-center text-md text-[#3D434A] font-bold mb-2">Fixed Price</p>
                    </div>
                </div>
                {/* Skills */}
                <div className="grid grid-cols-4">
                    <div>
                        <h2 className="text-xl text-[#3D434A]">Skill and expertise</h2>
                        <div className="flex gap-1">
                            {gig.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="bg-[#404040] bg-opacity-[70%] text-white px-2 py-2 rounded-md text-xs">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-black font-semibold">Founder</h4>
                        <ProfileDetail profileName={gig.author} profileEmail={gig.authorEmail} profilePhoto={gig.profilePhoto} />
                    </div>
                </div>
            </div>

            {/* Form */}
           

            {/* Cover Letter & Portfolio */}
            <div className="bg-white mt-3 rounded-lg p-6 border border-[#B0B0B0]">
                <h4 className="text-[#2D2D2D] text-xl font-semibold">Delivery Message</h4>
                <TextareaField
                    placeholderText=""
                    name="message"
                    rows={10}
                    value={formData.message}
                    onChange={handleInputChange}
                />
                <div className=" w-fit flex gap-2">
                    <InputField
                        inputLabel="Link for Attachment (Optional)"
                        type="text"
                        placeholderText=""
                        name="attachmentLink"
                        value={formData.attachmentLink}
                        onChange={handleInputChange}
                    />

                </div>
            </div>

            <div className="w-fit flex gap-4 mt-4 px-4 py-2 cursor-pointer rounded-lg ">
                <p className="text-primary font-semibold font-md">Upload Images</p>
                <p className='border border-l-black pl-4'>Attach file...<span className="text-[#3e3e3e] pl-2">(PNG, JPG, JPEG)</span></p>

            </div>


            {/* Buttons */}
            <div className="flex w-[19%] mt-4 mb-10 gap-4 items-center pl-8 justify-center">
                <ButtonFilled text="Deliver Work" />
                <p>Cancel</p>
            </div>
            <Model
                open={open}
                handleClose={handleClose}
                title="Work Delivered!"
                content="Your work has been successfully delivered"
                buttonText="Okay"
            />
        </form>
    )
}

export default WorkDeliver



