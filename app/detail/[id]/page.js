import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Detail(props) {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id : new
        ObjectId(props.params.id)})
      
    return (
        <div className="list-bg">
              <h1>{result.title}</h1>
              <h4>{result.time}</h4>
              <div className="detail-item">
                <hr/>
                   <h1>{result.content}</h1>
              </div>
            </div>
    )
  }
  