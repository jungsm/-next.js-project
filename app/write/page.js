export default function write(){
    return (
        <div className="list-bg">
            <form action="/api/post/new" method="POST">
                <input className="write-title" name="title" placeholder="제목 입력" ></input>
                <input className="write-content" name="content"  placeholder="내용을 입력하세요"></input>
                <button className="write-btn" type="submit">확인</button>
            </form>
            </div>
    )
}