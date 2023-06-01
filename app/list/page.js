import { connectDB } from "@/util/database"
import Link from "next/link"
export default async function list() {

  const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    return (
      <div className="list-bg">
        <h1>자유 게시판</h1>
      <div className="line"></div>
      <div className="board-item">
        <h2>제목</h2>
        <h2 className="board-time">작성일</h2>
      </div>
      {
        result.slice(0, 8).map((a,i)=>
        <Link href={"/detail/" + result[i]._id}>
        <div className="list-item">
        <h2>{result[i].number}</h2>
      <h2 className="list-title">{result[i].title}</h2>
      <h2 >{result[i].time}</h2>
    </div>
    </Link>
      )}
      <Link href={"/write"}>
      <button className="list-btn">글쓰기</button>
      </Link>
    </div>
    )
  }
  