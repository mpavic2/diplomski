import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } =
        pageContext;

    return (
        <nav className="pagination" role="navigation">
            <div>
                {previousPagePath && (
                    <Link to={previousPagePath} rel="prev">
                        Prethodno
                    </Link>
                )}
            </div>
            {numberOfPages > 1 && (
                <div className="pagination-location">
                    Stranica {humanPageNumber} od {numberOfPages}
                </div>
            )}
            <div>
                {nextPagePath && (
                    <Link to={nextPagePath} rel="next">
                        Sljedeće
                    </Link>
                )}
            </div>
        </nav>
    );
};

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
};

export default Pagination;
