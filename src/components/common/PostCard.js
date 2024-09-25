import * as React from 'react';
import { useState } from 'react';
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Tags } from "@tryghost/helpers-gatsby";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

const PostCard = ({ post, handleDeletePost, handleUpdatePost }) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    const [editMode, setEditMode] = useState(false); 
    const [updatedTitle, setUpdatedTitle] = useState(post.title);
    const [updatedExcerpt, setUpdatedExcerpt] = useState(post.excerpt);

    const url = `/${post.slug}/`;
    const readingTime = readingTimeHelper(post);

    const onDeletePost = (e) => {
        e.stopPropagation();
        handleDeletePost(post.id);
        setIsDeleted(true);
    };

    const onUpdatePost = async (e) => {
        e.stopPropagation();
        const updatedData = {
            title: updatedTitle,
            excerpt: updatedExcerpt,
        };
    
        await handleUpdatePost(post.id, updatedData); 
        setIsUpdated(true);
        setEditMode(false);
    };
    

    if (isDeleted) {
        return <div>Objava izbrisana</div>;
    }

    return (
        <div className="post-card">
            <Link to={url}>
                <header className="post-card-header">
                    {post.feature_image && (
                        <div
                            className="post-card-image"
                            style={{
                                backgroundImage: `url(${post.feature_image})`,
                            }}
                        ></div>
                    )}
                    {post.tags && (
                        <div className="post-card-tags">
                            <Tags
                                post={post}
                                visibility="public"
                                autolink={false}
                            />
                        </div>
                    )}
                    {post.featured && <span>Featured</span>}
                    <h2 className="post-card-title">{post.title}</h2>
                </header>
                <section className="post-card-excerpt">
                    {post.excerpt}
                </section>
                <footer className="post-card-footer">
                    <div className="post-card-footer-left">
                        <div className="post-card-avatar">
                            {post.primary_author.profile_image ? (
                                <img
                                    className="author-profile-image"
                                    src={post.primary_author.profile_image}
                                    alt={post.primary_author.name}
                                />
                            ) : (
                                <img
                                    className="default-avatar"
                                    src="/images/icons/avatar.svg"
                                    alt={post.primary_author.name}
                                />
                            )}
                        </div>
                        <span>{post.primary_author.name}</span>
                    </div>
                    <div className="post-card-footer-right"></div>
                </footer>
            </Link>

            {/* Display edit form if editMode is active */}
            {editMode ? (
                <div className="post-edit-form">
                    <input
                        type="text"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        placeholder="Novi naslov"
                    />
                    <textarea
                        value={updatedExcerpt}
                        onChange={(e) => setUpdatedExcerpt(e.target.value)}
                        placeholder="Novi sažetak"
                    />
                    <button onClick={onUpdatePost}>Spremi promjene</button>
                </div>
            ) : (
                <div className="post-card-buttons">
                    <button
                        className="delete-post-button"
                        onClick={onDeletePost}
                    >
                        Obriši
                    </button>
                    <button
                        className="update-post-button"
                        onClick={() => setEditMode(true)} // Activate edit mode
                    >
                        Ažuriraj
                    </button>
                </div>
            )}

            {/* Display update confirmation */}
            {isUpdated && <div className="update-message">Objava ažurirana</div>}
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    handleDeletePost: PropTypes.func.isRequired,
    handleUpdatePost: PropTypes.func.isRequired, // Ensure handleUpdatePost is passed as a prop
};

export default PostCard;
