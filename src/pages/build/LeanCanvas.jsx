import React, { useState } from 'react'
import Navbar3 from '../../components/common/Navbar3'
import MainHeading from '../../components/common/MainHeading'
import SubHeading from '../../components/common/SubHeading'
import clock from "/icons/clock.png"
import TextareaField2 from '../../components/common/TextAreaField.2'
import ButtonOutline from '../../components/common/ButtonOutline'
import ButtonFilled from '../../components/common/ButtonFilled'
import { useNavigate } from 'react-router-dom'

const LeanCanvas = () => {
    const [formData, setFormData] = useState({
        problem: "",
        existingAlternatives: "",
        solutions: "",
        keyMetrics: "",
        uniqueValueProposition: "",
        highLevelConcept: "",
        unfairAdvantage: "",
        channels: "",
        customerSegment: "",
        earlyAdopters: "",
        costStructure: "",
        revenueStreams: ""
    })
    const navigate = useNavigate();

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        e.preventDefault();
        navigate("/build/project-details")
        console.log(formData);
    }

    return (
        <>
            <Navbar3 />
            <div className='w-full px-4'>
                <MainHeading text={"Lean Canvas"} />
                <SubHeading text={`Bring your idea to life and connect with \nbackers ready to fund your vision.`} />

                <div className="mt-6"></div>
                <MainHeading className="text-xl md:text-2xl" text={"Keep it Lean and Simple!"} />
                <div className="flex items-center justify-center gap-1">
                    <img src={clock} alt="clock" className='w-5' />
                    <p className='text-primary text-xl font-bold'>00:19:15</p>
                </div>



                {/* grid */}
                <div className="grid grid-cols-5 border-4 border-black mt-6 mx-4">
                    <div className=" border-2 border-black text-black p-4 row-span-2">

                        <TextareaField2
                            placeholderText=""
                            inputLabel={"Problem"}
                            name="problem"
                            value={formData.problem}
                            onChange={handleInputChange}
                            maxWordCount={80}
                            lableStyling="text-xs"
                            textStyling='text-xs'
                        />
                        <TextareaField2
                            placeholderText={""}
                            inputLabel={"Existing Alternatives"}
                            name={"existingAlternatives"}
                            value={formData.existingAlternatives}
                            onChange={handleInputChange}
                            maxWordCount={80}
                            lableStyling="text-xs"
                            textStyling='text-xs'
                        />

                    </div>
                    <div className=" border-2 border-black text-black p-4">
                        <TextareaField2
                            placeholderText=""
                            inputLabel={"Solutions"}
                            name="solutions"
                            value={formData.solutions}
                            onChange={handleInputChange}
                            maxWordCount={80}
                            lableStyling="text-xs"
                            textStyling='text-xs'
                        />
                    </div>
                    <div className="border-2 border-black text-black p-4 row-span-2">
                        <TextareaField2
                            placeholderText=""
                            inputLabel={"Unique Value Propositions"}
                            name="uniqueValueProposition"
                            value={formData.uniqueValueProposition}
                            onChange={handleInputChange}
                            maxWordCount={80}
                            lableStyling="text-xs"
                            textStyling='text-xs'
                        />
                        <TextareaField2
                            placeholderText=""
                            inputLabel={"High Level Concept"}
                            name="highLevelConcept"
                            value={formData.highLevelConcept}
                            onChange={handleInputChange}
                            maxWordCount={80}
                            lableStyling="text-xs"
                            textStyling='text-xs'
                        />
                    </div>
                    <div className=" border-2 border-black text-black p-4">
                        <TextareaField2
                            placeholderText=""
                            inputLabel={"Unfair Advantage"}
                            name="unfairAdvantage"
                            value={formData.unfairAdvantage}
                            onChange={handleInputChange}
                            maxWordCount={80}
                            lableStyling="text-xs"
                            textStyling='text-xs'
                        />
                    </div>
                    <div className=" border-2 border-black text-black p-4 row-span-2">
                        <TextareaField2
                            placeholderText=""
                            inputLabel={"Customer Segment"}
                            name="customerSegment"
                            value={formData.customerSegment}
                            onChange={handleInputChange}
                            maxWordCount={80}
                            lableStyling="text-xs"
                            textStyling='text-xs'
                        />
                        <TextareaField2
                            placeholderText=""
                            inputLabel={"Early Adopters"}
                            name="earlyAdopters"
                            value={formData.earlyAdopters}
                            onChange={handleInputChange}
                            maxWordCount={80}
                            lableStyling="text-xs"
                            textStyling='text-xs'
                        />
                    </div>
                    <div className="border-2 border-black text-black p-4">
                        <TextareaField2
                            placeholderText=""
                            inputLabel={"Key Metrics"}
                            name="keyMetrics"
                            value={formData.keyMetrics}
                            onChange={handleInputChange}
                            maxWordCount={80}
                            lableStyling="text-xs"
                            textStyling='text-xs'
                        />
                    </div>
                    <div className="border-2 border-black text-black p-4">
                        <TextareaField2
                            placeholderText=""
                            inputLabel={"Channels"}
                            name="channels"
                            value={formData.channels}
                            onChange={handleInputChange}
                            maxWordCount={80}
                            lableStyling="text-xs"
                            textStyling='text-xs'
                        />
                    </div>

                    <div className="col-span-5 grid grid-cols-1 sm:grid-cols-2 border-t-4 border-black">
                        <div className=" border-2 border-black text-black p-4">
                            <TextareaField2
                                placeholderText=""
                                inputLabel={"Cost Structure"}
                                name="costStructure"
                                value={formData.costStructure}
                                onChange={handleInputChange}
                                maxWordCount={80}
                                lableStyling="text-xs"
                                textStyling='text-xs'
                                rows={2}
                            />
                        </div>
                        <div className=" border-2 border-black text-black p-4">
                            <TextareaField2
                                placeholderText=""
                                inputLabel={"Reserve Streams"}
                                name="revenueStreams"
                                value={formData.revenueStreams}
                                onChange={handleInputChange}
                                maxWordCount={80}
                                lableStyling="text-xs"
                                textStyling='text-xs'
                                rows={2}
                            />
                        </div>
                    </div>
                </div>

                <div className="gap-2 w-full flex items-center justify-center mt-8">
                    <div>
                        <ButtonOutline className='px-8' text={"Achived Lean Canvas"} />
                    </div>
                    <div onClick={handleSubmit}>
                        <ButtonFilled className='px-8' text={"Save and Preview"} />
                    </div>
                </div>


            </div>
        </>
    )
}

export default LeanCanvas
