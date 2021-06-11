import React, { useEffect } from "react";
import Comment from "../Comment/Comment";
import { useSelector, useDispatch } from "react-redux";
import { allUsers } from "../../Redux/actions/user";
import "./CommentList.css";
function CommentList() {
    const users = useSelector((state) => state.userReducer.users);
    // const comments = useSelector((state) => state.userReducer.user.infoCom);
    // const user = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allUsers());
    }, []);
    return !users ? (
        <h1>loading</h1>
    ) : (
        <div id="f_l_bl">
            <div className="comments">
                {users &&
                    users.map((person) =>
                        person.infoCom.map((el) => <Comment infoCom={el} />)
                    )}
            </div>
        </div>
    );
}
export default CommentList;
