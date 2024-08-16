import React, { ComponentProps } from "react"
import { CommentAuthorDTO } from "../../../src/shared/dtos/commentAuthorDTO"
import Avatar from "../ui/avatar"
import { Text } from "../ui/text"
import Link from "next/link"
import moment from "moment"
import { CommentIsland } from "./CommentIsland"

type Props = ComponentProps<"li"> & {
  comment: CommentAuthorDTO
}

export const Comment = React.forwardRef<HTMLLIElement, Props>(({ comment, ...args }, ref) => {
  return (
    <li className="relative group/options flex gap-2 hover:bg-secondary p-2" {...args} ref={ref}>
      <CommentIsland id={comment.id} author_id={comment.author.id} />
      <Avatar />
      <article className="flex flex-col gap-2">
        <header className="flex gap-2 items-baseline">
          <Link href={`/${comment.author.username}`}>
            <Text intent={"title"} hoverable>
              {comment.author.username}
            </Text>
          </Link>
          <Text size={"tiny"}>
            {moment(comment.created_at).fromNow()}
          </Text>
        </header>
        <Text>
          {comment.content}
        </Text>
      </article>
    </li>
  )
})