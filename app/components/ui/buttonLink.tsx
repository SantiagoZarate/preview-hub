import { ComponentProps, PropsWithChildren } from "react";
import { Button, ButtonProps } from "./button";
import { Text } from "./text";

interface Props extends ButtonProps {
  icon: JSX.Element
}

export function ButtonLink({ icon, children, ...args }: Props) {
  return (
    <Button className="group" {...args}>
      <span className="group-hover:-translate-x-0 translate-x-2 transition opacity-0 group-hover:opacity-100">
        {icon}
      </span>
      <Text className="group-hover:translate-x-0 -translate-x-2 transition">
        {children}
      </Text>
    </Button>
  )
}