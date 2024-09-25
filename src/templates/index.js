import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout, PostCard, Pagination } from "../components/common";
import { MetaData } from "../components/common/meta";

const Index = ({ data, location, pageContext }) => {
    const initialPosts = data.allGhostPost.edges;
    const [posts, setPosts] = useState(initialPosts); 

    // Funkcija za brisanje objave
    const handleDeletePost = async (postId) => {
        const apiUrl = `http://localhost:2368/ghost/api/admin/posts/${postId}/`;
        const apiKey = `66f2725397bcb54204450e4d:ff5ba5fbf412c5e51501c1d563cb6a62dc0e4b7703b0b089b9b28c77c664438f`;

        try {
            const response = await fetch(apiUrl, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Ghost ${apiKey}`,
                },
            });

            if (response.ok) {
                setPosts((prevPosts) =>
                    prevPosts.filter(({ node }) => node.id !== postId)
                );
                alert("Objava je uspješno obrisana!");
            } else {
                alert("Uspješno brisanje objave");
            }
        } catch (error) {
            console.error("Greška prilikom brisanja objave:", error);
        }
    };

    const handleUpdatePost = async (postId, updatedData) => {
        const apiUrl = `http://localhost:2368/ghost/api/v4/admin/posts/${postId}/`;
        const apiKey = `66f2725397bcb54204450e4d:ff5ba5fbf412c5e51501c1d563cb6a62dc0e4b7703b0b089b9b28c77c664438f`;
    
        try {
            const response = await fetch(apiUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Ghost ${apiKey}`,
                },
                body: JSON.stringify({
                    body: JSON.stringify({ posts: [updatedData] }), 
                }),
            });
    
            if (response.ok) {
                const responseData = await response.json();
                console.log("API Response:", responseData);
    
                alert("Objava uspješno ažurirana!");
    
                setPosts((prevPosts) =>
                    prevPosts.map(({ node }) =>
                        node.id === postId ? { node: { ...node, ...updatedData } } : { node }
                    )
                );
            } else {
                const errorData = await response.json();
                console.error("API Error Response:", errorData);
                alert("Neuspješno ažuriranje objave.");
            }
        } catch (error) {
            console.error("Greška prilikom ažuriranja objave:", error);
        }
    };
    

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container">
                    <section className="post-feed">
                        {posts.map(({ node }) => (
                            <PostCard
                                key={node.id}
                                post={node}
                                handleDeletePost={handleDeletePost}
                                handleUpdatePost={handleUpdatePost}  
                            />
                        ))}
                    </section>
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    );
};

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
};

export default Index;


export const pageQuery = graphql`
    query GhostPostQuery($limit: Int!, $skip: Int!) {
        allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }
    }
`;
