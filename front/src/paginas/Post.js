import React from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Post = () => {
    const {postId} = useParams();
    const [post, setListaPosts] = React.useState([]);
    const [replies, setListaReplies] = React.useState([]);
    React.useEffect(()=>{
        const res = axios.get("blog/api/v1/rest/post/"+postId);
        res.then((query) => {
            setListaPosts(query.data);
            console.log(query.data);
        })
        const res2 = axios.get("blog/api/v1/rest/postreply/"+postId);
        res2.then((query) => {
            setListaReplies(query.data);
            console.log(query.data);
        })
    }, []);


    return (
        <div>
          {post && (
            <div className='row'>
                <h1>{post.title}</h1>
                <h2>{post.post}</h2>
                <h5>Post #{post.id}, created {post.createdAt},
                    updated {post.updatedAt}</h5>
                <div className='row'>
                    {replies.length > 0 && (<table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Resposta</th>
                                <th>Criado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {replies &&
                                replies.map((reply, index) => {
                                    <tr key={index}>
                                        <th key={reply.id}>{reply.id}</th>
                                        <th key={reply.reply}>{reply.reply}</th>
                                        <th key={reply.createdAt}>{reply.createdAt}</th>
                                    </tr>
                                })

                            }
                        </tbody>
                    </table>
                    )}
                </div>
            </div>
        )}
        </div>
      )

}

export default Post;