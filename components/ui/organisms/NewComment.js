import { useDispatch, useSelector } from "react-redux"; //updated
import { selectAuthUser } from "@/store/slices/authSlice"; // updated
import { addComment } from "@/store/slices/commentSlice"; // updated
import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { setAuthState, setAuthUser } from "@/store/slices/authSlice";

export default function NewComment() {
  const dispatch = useDispatch(); // updatedStage
  const userState = useSelector(selectAuthUser); // get State from redux

  // Updated function
  function handleNewComment(e) {
    e.preventDefault();
    dispatch(
      addComment({
        comment: e.target.comment.value,
        username: userState,
      })
    );
    e.target.comment.value = "";
  }

  return (
    <section>
      <form
        className="flex space-x-2 items-center h-full"
        onSubmit={handleNewComment}
      >
        <Avatar />
        <div className="input-box">
          <Input
            id={`comment`}
            type={`text`}
            placeholder={`${userState}'s comment`}
          />
        </div>
        <Button type={`submit`}>send</Button>
      </form>
      <div className="py-2">
        {/* Logout button - updated */}
        <Button onClick={() => dispatch(setAuthState(false))}>logout</Button>
      </div>
    </section>
  );
}
