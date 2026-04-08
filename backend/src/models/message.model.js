import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
{
    senderId: {
        types: moongose.Schema.Types.ObjectsId,
        ref: "User",
        required: true,
    },
    receiverId: {
        type:mongoose.Schema.Types.ObjectsId,
        ref: "User",
        required: true,
    },
    text: {
        type: String,
    },
    image: {
        type: string,
    },
},
{timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;