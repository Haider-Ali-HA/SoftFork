import React, { useState } from 'react'
import Navbar3 from '../../components/common/Navbar3'
import MainHeading from '../../components/common/MainHeading'
import SubHeading from '../../components/common/SubHeading'
import TextareaField from '../../components/common/TextAreaField'
import InputField from '../../components/common/InputField'
import DatePickerInput from '../../components/common/DatePickerInput'
import ButtonOutline from '../../components/common/ButtonOutline'
import ButtonFilled from '../../components/common/ButtonFilled'
import TagInputField from '../../components/common/TagInputField'
import { useNavigate } from 'react-router-dom'


const CreateProject = () => {
    const [projectTags, setProjectTags] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        ideaName: "",
        shortDescription: "",
        projectDescription: "",
        fundingRequired: "",
        startingDate: "",
        endingDate: "",
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTagsChange = (newTags) => {
        setProjectTags(newTags);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, projectTags });
        navigate('/build/create-milestone');  
    }

 

    return (
        <>
            <Navbar3 />
            <div className='w-full max-w-4xl px-4 mx-auto'>
                <MainHeading text={"Create Idea"} />
                <SubHeading text={`Bring your idea to life and connect with \nbackers ready to fund your vision.`} />

                <div className="mb-6"></div>

                <form onSubmit={handleSubmit} action="">
                    <div className='flex flex-col gap-4'>
                        <InputField
                            inputLabel="Idea Name"
                            type="text"
                            placeholderText="Enter your idea name"
                            name="ideaName"
                            value={formData.ideaName}
                            onChange={handleInputChange}
                        />
                        <TextareaField
                            inputLabel="Short Description"
                            placeholderText="Short Description"
                            name="shortDescription"
                            rows={5}
                            value={formData.shortDescription}
                            onChange={handleInputChange}
                        />
                        <TextareaField
                            inputLabel="Project Description"
                            placeholderText="Project Description"
                            name="projectDescription"
                            rows={10}
                            value={formData.projectDescription}
                            onChange={handleInputChange}
                        />
                        <InputField
                            inputLabel="Funding Required"
                            type="number"
                            placeholderText="Enter the amount"
                            name="fundingRequired"
                            value={formData.fundingRequired}
                            onChange={handleInputChange}
                        />

                        <TagInputField
                            label="Project Tags"
                            placeholder="Type a tag and press Enter"
                            tags={projectTags}
                            setTags={handleTagsChange}
                        />

                        <div className="flex gap-4 w-[40%] items-center">
                            <div
                                className={`bg-white border-primary hover:bg-primary hover:text-white border text-primary font-gilroy font-semibold text-sm md:text-md transition-all duration-200 py-1 md:py-2 rounded-lg w-full flex items-center justify-center cursor-pointer`}
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <p>Upload Video</p>
                                </div>
                            </div>
                            <p className='w-full'>Upload Pitch Video</p>
                        </div>


                        <div
                            className={`bg-white border-primary hover:bg-primary hover:text-white border text-primary font-gilroy font-semibold text-sm md:text-md transition-all duration-200 py-1 md:py-2 rounded-lg w-full flex items-center justify-center cursor-pointer`}
                        >
                            <div className="flex items-center justify-center gap-3">
                                <p>Record Your Video</p>
                            </div>
                        </div>

                        <div className="mt-6"></div>
                        <MainHeading text={"Project Timeline"} />
                        <SubHeading text={`Bring your idea to life and connect with \nbackers ready to fund your vision.`} />

                        <div className="mb-6"></div>

                        <div className="flex gap-2 ">
                            <DatePickerInput
                                name="startingDate"
                                placeholderText="Starting Date"
                                value={formData.startingDate}
                                onChange={handleInputChange}
                            />
                            <DatePickerInput
                                name="endingDate"
                                placeholderText="Ending Date"
                                value={formData.endingDate}
                                onChange={handleInputChange}
                            />
                        </div>

                        <p>Helping Documents</p>
                       <div className="w-[20%]">
                       <div
                            className={`bg-white border-primary hover:bg-primary hover:text-white border text-primary font-gilroy font-semibold text-sm md:text-md transition-all duration-200 py-1 md:py-2 rounded-lg w-full flex items-center justify-center cursor-pointer`}
                        >
                            <div className="flex items-center justify-center gap-3">
                                <p>Insert Link</p>
                            </div>
                        </div>
                       </div>

                        <ButtonFilled type="submit" text="Continue" />

                    </div>
                </form>

            </div>
        </>
    )
}

export default CreateProject
