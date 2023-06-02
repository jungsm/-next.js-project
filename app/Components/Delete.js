'use client'
export default function Delete({result}){
    return(
        <div>
                 <span onClick={(e)=> {
                        fetch('/api/post/delete', {method : 'POST', body : result[i]._id})
                        .then((r)=>{
                            return r.json()
                        })
                        .then((r)=>{
                            alert(r)
                            e.target.parentElement.style.opacity = 0;
                            setTimeout(()=>{
                                e.target.parentElement.style.display = 'none';
                            },1000)
                          
                        })
                        }}>
                            삭제</span>
        </div>
    )
}