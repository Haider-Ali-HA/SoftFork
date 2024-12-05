import React from "react";
import profile1 from "/images/profile1.png"

const ChatMessage = ({ name, role, message, time, isReply }) => {
    return (
        <div className={`flex items-start space-x-3 my-4  ${isReply && "ml-20"}`}>
            <img src={profile1} className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-300" />
            <div>
                <div className="flex items-center space-x-2">
                    <p className="font-semibold text-gray-800">{name}</p>
                    <span className="text-sm font-semibold text-gray-600">({role})</span>
                    <span className="text-sm text-gray-400">{time} ago</span>
                </div>
                <p className="mt-1 text-gray-700">{message}</p>
            </div>
        </div>
    )
}

const Comments = () => {
    const messages = [
        {
            name: "Square Dashboard",
            role: "Backer",
            message: "When will the next milestone be completed?",
            time: "20 hours",
            isReply: false
        },
        {
            name: "Square Dashboard",
            role: "Founder",
            message: "The next milestone will be completed by next week. We're ahead of schedule!",
            time: "18 hours",
            isReply: true
        },
        {
            name: "Square Dashboard",
            role: "Backer",
            message: "When will the next milestone be completed?",
            time: "20 hours",
            isReply: false
        },
        {
            name: "Square Dashboard",
            role: "Founder",
            message: "The next milestone will be completed by next week. We're ahead of schedule!",
            time: "18 hours",
            isReply: true
        },
    ];

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full mx-auto">
            {messages.map((msg, index) => (
                <ChatMessage
                    key={index}
                    name={msg.name}
                    role={msg.role}
                    message={msg.message}
                    time={msg.time}
                    isReply={msg.isReply}
                />
            ))}
        </div>
    );
};

export default Comments;
