//import type { CommentWithAuthor } from "@/db/queries/comments";
import CommentShow from "@/components/comments/comment-show";
import { fetchCommentsByPostId } from "@/db/queries/comments";

// interface CommentListProps {
//   fetchData: () => Promise<CommentWithAuthor[]>
// }
interface CommentListProps {
  postId: string
}

// export default async function CommentList({ fetchData }: CommentListProps) {

//   const comments = await fetchData()

//   const topLevelComments = comments.filter(
//     (comment) => comment.parentId === null
//   );
//   const renderedComments = topLevelComments.map((comment) => {
//     return (
//       <CommentShow
//         key={comment.id}
//         commentId={comment.id}
//         comments={comments}
//       />
//     );
//   });

//   return (
//     <div className="space-y-3">
//       <h1 className="text-lg font-bold">All {comments.length} comments</h1>
//       {renderedComments}
//     </div>
//   );
// }
export default async function CommentList({ postId }: CommentListProps) {

  const comments = await fetchCommentsByPostId(postId)

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow
        key={comment.id}
        commentId={comment.id}
        postId={postId}
      />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
