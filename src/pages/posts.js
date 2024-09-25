import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Layout, PostCard } from "../components/common";
import { MetaData } from "../components/common/meta";

/**
 * Posts page to display all posts
 */
const PostsPage = ({ data, location }) => {
    const posts = data.allGhostPost.edges;

    return (
        <>
            <MetaData title="Objave" location={location} />
            <Layout>
                <div className="container">
                    <section className="post-feed">
                        {posts.map(({ node }) => (
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                </div>
            </Layout>
        </>
    );
};

PostsPage.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
};

export default PostsPage;

// GraphQL query to fetch all posts
export const pageQuery = graphql`
    query {
        allGhostPost(
            sort: { order: DESC, fields: [published_at] }
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }
    }
`;
