import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import Link from "next/link"
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
                   <Link href={"/edit/" + result._id}>
                   <span>수정</span>
                   </Link>
              </div>
            </div>
    )
  }
  