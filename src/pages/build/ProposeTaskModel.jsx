import React, { useState } from "react";
import UpdateModel from "../../assets/model/model-tick.png";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Box, Modal } from "@mui/material";
import { Link } from "react-router-dom";
import InputField from "../../components/common/InputField";
import TagInputField from "../../components/common/TagInputField";
import TextareaField from "../../components/common/TextAreaField";

const ProposeTaskModel = ({
    open,
    handleClose,
    title,
    content,
    buttonText,
    identifier = 'lksdj',
    finalStep,
}) => {
    console.log("identifier", identifier);
    const [tags, setTags] = useState([]);

    const handleTagChange = (newTags) => {
        setTags(newTags)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                className="flex justify-center items-center h-full w-full"
            >
                <Box className="flex justify-center outline-none p-10 rounded-2xl h-[100%] overflow-y-auto w-5/6  lg:w-[60%] gap-5 flex-col items-center bg-white relative">
                    <CloseIcon
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            cursor: "pointer",
                            color: "gray",
                        }}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 text-xs gap-2">
                        <InputField
                            inputLabel={"Task Title"}
                            type="text"
                        />
                        <InputField
                            inputLabel={"Deadline"}
                            type="text"
                        />
                        <TagInputField
                            tags={tags}
                            setTags={handleTagChange}
                            inputLabel={"Required Skills"}
                        />
                        <InputField
                            inputLabel={"Compensation (Points)"}
                            type="text"
                        />
                    </div>
                    <TextareaField
                        inputLabel={"Description"}
                    />
                    <TagInputField
                        tags={tags}
                        setTags={handleTagChange}
                        inputLabel={"Required Skills"}
                    />

                    <div className="w-fit mr-auto ">
                        <button
                            className="bg-primary shadow-md text-white w-52 h-12 text-base rounded-lg flex gap-2 items-center text-center justify-center"
                            onClick={handleClose}
                            type="submit"
                        >
                            Create Task
                        </button>

                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ProposeTaskModel;
