import './styles.css'

const ApiCard = ({postInfo}) => {
    return (
        <div className='ApiCard'>
            <h1>{postInfo.name}</h1>
            <p>{postInfo.body}</p>
            <h2>{postInfo.email}</h2>
            <h5>{postInfo.id}</h5>
            <h5>{postInfo.postid}</h5>
        </div>
    )
}

export default ApiCard;