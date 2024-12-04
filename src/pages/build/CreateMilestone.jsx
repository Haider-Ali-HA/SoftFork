import React, { useState } from 'react';
import Navbar3 from '../../components/common/Navbar3';
import MainHeading from '../../components/common/MainHeading';
import SubHeading from '../../components/common/SubHeading';
import { FaMinus, FaPlus } from 'react-icons/fa';
import InputField from '../../components/common/InputField';
import TextareaField2 from '../../components/common/TextAreaField.2';
import DatePickerInput from '../../components/common/DatePickerInput';
import ButtonFilled from '../../components/common/ButtonFilled';
import { useNavigate } from 'react-router-dom';

const CreateMilestone = () => {
    const [milestoneData, setMilestoneData] = useState([
        {
            name: "",
            description: "",
            requirements: "",
            startingDate: "",
            endingDate: "",
            completeDeliverable: "",
        },
    ]);
    const navigate = useNavigate();

    // Handle input changes
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        setMilestoneData((prevMilestones) => {
            const updatedMilestones = [...prevMilestones];
            updatedMilestones[index][name] = value;
            return updatedMilestones;
        });
    };

    // Add a new milestone
    const handleAddNewMilestone = () => {
        setMilestoneData((prevMilestones) => [
            ...prevMilestones,
            {
                name: "",
                description: "",
                requirements: "",
                startingDate: "",
                endingDate: "",
                completeDeliverable: "",
            },
        ]);
    };

    // Remove a milestone
    const handleRemoveMilestone = (index) => {
        setMilestoneData((prevMilestones) =>
            prevMilestones.filter((_, i) => i !== index)
        );
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(milestoneData);
        navigate("/build/key-metrics");
    };
    

    return (
        <>
            <Navbar3 />
            <div className='w-full px-4'>
                <MainHeading text={"Create Milestones"} />
                <SubHeading text={`Bring your idea to life and connect with \nbackers ready to fund your vision.`} />

                <div className="mb-6"></div>

                <form action="" onSubmit={handleSubmitForm} className='max-w-4xl mx-auto '>
                    {milestoneData.map((milestone, index) => (
                        <div key={index} className="p-4 px-10 mb-6 shadow-lg rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className='text-2xl font-semibold'>Milestone {index + 1}</h4>
                                <button
                                    type="button"
                                    className="p-2 bg-gray-300 rounded-full"
                                    onClick={() => handleRemoveMilestone(index)}
                                    disabled={milestoneData.length === 1}
                                >
                                    <FaMinus />
                                </button>
                            </div>

                            <InputField
                                inputLabel={"Milestone Name"}
                                typeText={"text"}
                                placeholderText={""}
                                value={milestone.name}
                                onChange={(e) => handleInputChange(e, index)}
                                name={"name"}
                            />

                            <TextareaField2
                                inputLabel={"Description"}
                                placeholderText={""}
                                name={"description"}
                                value={milestone.description}
                                onChange={(e) => handleInputChange(e, index)}
                                rows={8}
                            />

                            <TextareaField2
                                inputLabel={"Requirements"}
                                placeholderText={""}
                                name={"requirements"}
                                value={milestone.requirements}
                                onChange={(e) => handleInputChange(e, index)}
                                rows={6}
                            />

                            <div className="flex gap-2">
                                <DatePickerInput
                                    inputLabel={"Starting Date"}
                                    name={"startingDate"}
                                    value={milestone.startingDate}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                                <DatePickerInput
                                    inputLabel={"Ending Date"}
                                    name={"endingDate"}
                                    value={milestone.endingDate}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            </div>

                            <TextareaField2
                                inputLabel={"Complete Deliverable"}
                                placeholderText={""}
                                name={"completeDeliverable"}
                                value={milestone.completeDeliverable}
                                onChange={(e) => handleInputChange(e, index)}
                                rows={5}
                            />

                            <div className="mt-4">
                                <ButtonFilled text='Save' />
                            </div>


                            <div className="p-2 mt-6">
                                <div className="flex justify-between">
                                    <h4 className='text-2xl font-semibold'>Add New Milestone</h4>
                                    <div className="p-2 flex items-center justify-center  rounded-full">
                                        <FaPlus onClick={handleAddNewMilestone} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="p-4 px-10 mt-6 w-full flex justify-center items-center">
                        <div className="flex w-full gap-4 items-center justify-center">
                            <h4 className='text-2xl font-semibold'>Milestone {milestoneData.length + 1}</h4>
                            <div className="p-2 flex items-center justify-center bg-gray-300 rounded-full" onClick={handleAddNewMilestone} >
                                <FaPlus />
                            </div>
                        </div>
                    </div>

                    <div className="p-4 px-10 mt-5">
                        <ButtonFilled text='Continue' />
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateMilestone;