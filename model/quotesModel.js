import mongoose from "mongoose" ;

const QuotesSchema = new mongoose.Schema (
    {
        quote : {
            type : String,
            trim : true,
            required : true
        },
        author : {
            type : String,
            trim : true,
            required : true
        },
        category : {
            type : String,
            trim : true,
            required : true
        }
    },
    {
        timestamps : true
    }
)

const QuotesModel = new mongoose.model("quotes", QuotesSchema)
export default QuotesModel
