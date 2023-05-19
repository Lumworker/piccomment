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
        <Button
          type={`submit`}
          ClassName="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          send
        </Button>
      </form>{" "}
      <div className="grid place-items-center mt-5 ">
        {/* Logout button - updated */}
        <Button
          onClick={() => dispatch(setAuthState(false))}
          ClassName="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          logout
        </Button>
      </div>
    </section>
  );
}
