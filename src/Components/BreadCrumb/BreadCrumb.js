import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import '../BreadCrumb/Bread.css';

const BreadCrumb = () => {
    return (
        <div className="breadcrumbs">
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    color="inherit"
                    href="/"
                    onClick={(event) => {
                        event.preventDefault();
                    }}
                >
                    Clothing
                </Link>
                <Link
                    color="inherit"
                    href="/getting-started/installation/"
                    onClick={(event) => {
                        event.preventDefault();
                    }}
                >
                    Women's
                </Link>
                <Typography color="textPrimary">
                    Outerwear
                </Typography>
            </Breadcrumbs>
        </div>
    );
};

export default BreadCrumb;