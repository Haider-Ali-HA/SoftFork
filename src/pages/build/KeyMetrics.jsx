import React, { useEffect, useState } from "react";
import MainHeading from "../../components/common/MainHeading";
import SubHeading from "../../components/common/SubHeading";
import TextareaField from "../../components/common/TextAreaField";
import ButtonFilled from "../../components/common/ButtonFilled";
import Navbar3 from "../../components/common/Navbar3";

const KeyMetrics = () => {
    const [formData, setFormData] = useState({
        keyMetrics: "",
        successCriteria: "",
    });
    const [keyMetricsWordCount, setKeyMetricsWordCount] = useState(0);
    const [successCriteriaWordCount, setSuccessCriteriaWordCount] = useState(0);

    // Handle input changes and update word counts
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        
    };

    useEffect(() => {
        // Update word count for key metrics
        setKeyMetricsWordCount(formData.keyMetrics.length);

        // Update word count for success criteria
        setSuccessCriteriaWordCount(formData.successCriteria.length);
    }, [formData.keyMetrics, formData.successCriteria]);    

    return (
        <>
            <Navbar3 />
            <div className="w-full px-4 max-w-4xl mx-auto">
                <MainHeading text={"Key Metrics and Insights"} />
                <SubHeading
                    text={`Bring your idea to life and connect with \nbackers ready to fund your vision.`}
                />

                <form action="" className="flex flex-col gap-2">
                    <TextareaField
                        inputLabel="Key Metrics"
                        placeholderText=""
                        name="keyMetrics"
                        value={formData.keyMetrics}
                        onChange={handleInputChange}
                        wordCount={keyMetricsWordCount}
                        rows={8}
                    />
                    <TextareaField
                        inputLabel="Success Criteria"
                        placeholderText=""
                        name="successCriteria"
                        value={formData.successCriteria}
                        onChange={handleInputChange}
                        wordCount={successCriteriaWordCount}
                        rows={8}
                    />

                    <div className="w-[30%] mx-auto">
                    <ButtonFilled  text="Continue" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default KeyMetrics;
