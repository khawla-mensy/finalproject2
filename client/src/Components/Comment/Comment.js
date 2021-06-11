import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../Redux/actions/ProductActions";
import {
    allUsers,
    current,
    deleteComments,
    getUser,
} from "../../Redux/actions/user";
// import { Button } from "react-bootstrap";

function Comment({ infoCom, productId }) {
    const user = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();
    // const com = {
    //     comment: infoCom.comment,
    //     id: infoCom.id,
    // };
    function refreshPage() {
        window.location.reload(false);
    }
    useEffect(() => {
        // dispatch(getUser(user._id));
        dispatch(current());
        dispatch(allUsers());
    }, []);
    console.log(productId);
    return (
        <div className="h_r_com">
            <hr className="h_r_com" />
            <p style={{ color: "black" }}>{infoCom && infoCom.comment}</p>
            <p style={{ color: "black" }}>{infoCom && infoCom.name}</p>

            {/* <p style={{ color: "black" }}>{infoCom && infoCom.comment.nom}</p> */}
            <p>
                Published on : <span>{infoCom && infoCom.date}</span>
            </p>
            <p>Added by : {infoCom && infoCom.name}</p>
            {/* {user && !user.isAdmin ? (
                <button
                    id="del_but"
                    onClick={() => {
                        //dispatch(deleteComment(user._id));
                        // refreshPage();
                    }}
                >
                    Report
                </button>
            ) : null} */}
            {user && user.isAdmin ? (
                <button
                    id="admin_user_del"
                    onClick={() => {
                        dispatch(
                            deleteComment(infoCom.commentId, {
                                productId: productId,
                            })
                        );
                    }}
                >
                    Delete
                </button>
            ) : null}
            <hr className="h_r_com" />
        </div>
    );
}
export default Comment;
