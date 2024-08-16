import { ServiceLocator } from "@service/serviceLocator";
import { PropsWithChildren } from "react";
import { CrossMicroIcon } from "../icons/CrossMicroIcon";
import { ThumbsDownIcon } from "../icons/ThumbsDownIcon";
import { ThumbsUpIcon } from "../icons/ThumbsUpIcon";
import { toast } from "../ui/use-toast";

interface Props {
  id: string,
  author_id: string
}

export async function CommentIsland({ id, author_id }: Props) {
  const authService = ServiceLocator.getService("authService")
  const user = await authService.getUser()

  const deleteComment = async () => {
    "use server"
    console.log("DELETING COMMENT");

    const commentService = ServiceLocator.getService("commentService")
    try {
      await commentService.delete(id)
    } catch (error) {
      toast({ title: "Comment deleted succesfully" })
    }
  }

  return (
    <span className="absolute -translate-y-4 group-hover/options:-translate-x-4 translate-x-0 top-0 right-0 group-hover/options:opacity-100 opacity-0 transition rounded-full flex border border-border divide-x bg-background overflow-hidden">
      <ClickableIcon>
        <ThumbsUpIcon />
      </ClickableIcon>

      <ClickableIcon>
        <ThumbsDownIcon />
      </ClickableIcon>

      {
        author_id === user?.id &&
        <ClickableIcon action={deleteComment}>
          <CrossMicroIcon />
        </ClickableIcon>
      }
    </span>
  )
}

function ClickableIcon(args: PropsWithChildren & { action?: () => void }) {
  return (
    <form action={args.action}>
      <button className="hover:bg-neutral-400 px-4 py-2 transition">
        {args.children}
      </button>
    </form>
  )
}