const commentsData=[
    {
        name:"Anubhav Srivastava",
        text:"lorem ipsum again again",
        replies:[
            {
                name:"Anubhav Srivastava",
                text:"lorem ipsum again again",
                replies:[
                    {
                        name:"Anubhav Srivastava",
                        text:"lorem ipsum again again",
                        replies:[
                            {
                                name:"Anubhav Srivastava",
                                text:"lorem ipsum again again",
                                replies:[
                                  
                                ]
                            }
                        ]
                    },
                    {
                        name:"Anubhav Srivastava",
                        text:"lorem ipsum again again",
                        replies:[
                          
                        ]
                    }
                ]
            },
            {
                name:"Anubhav Srivastava",
                text:"lorem ipsum again again",
                replies:[
                  
                ]
            },
            {
                name:"Anubhav Srivastava",
                text:"lorem ipsum again again",
                replies:[
                  
                ]
            },
            {
                name:"Anubhav Srivastava",
                text:"lorem ipsum again again",
                replies:[
                  
                ]
            }
        ]
    },
    {
        name:"Anubhav Srivastava",
        text:"lorem ipsum again again",
        replies:[
          
        ]
    },
    {
        name:"Anubhav Srivastava",
        text:"lorem ipsum again again",
        replies:[
          
        ]
    },{
        name:"Anubhav Srivastava",
        text:"lorem ipsum again again",
        replies:[
          
        ]
    },
    {
        name:"Anubhav Srivastava",
        text:"lorem ipsum again again",
        replies:[
          
        ]
    }
]


const Comment = ({data}) =>{
    const {name , text,replies}=data
    return (
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
            <img className="w-12 h-12" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
        
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
} 

const CommentList = ({comments}) =>{
    //Disclaimer never use index as keys
    return comments.map((comment,i) =>(<div><Comment key={i} data={comment} />
   
    <div className="pl-5 border border-l-black ml-5">
            <CommentList comments={comment.replies} />
    </div>
    </div> 
    
    
    ))
}

const CommentsContainer = () =>{
    return (
        <div className="m-5 p-2">
           <h1 className="text-2xl font-bold"> comments</h1>
           {/* <Comment data={commentsData[0]} /> */}
            <CommentList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer 