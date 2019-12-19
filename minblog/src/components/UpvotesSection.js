import React from 'react';

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
    const UpvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`,{
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return(
        <div id="upvotes-section">
            <p>{upvotes} <i className="fas fa-heart"></i></p>
            <button onClick={() => UpvoteArticle()}>Add Upvote</button>
        </div>
    );
}
export default UpvoteSection;