import { Button, ButtonProps } from "./button";
import { Text } from "./text";

interface Props extends ButtonProps {
  icon: JSX.Element
}

export function ButtonIcon({ icon, children, ...args }: Props) {
  return (
    <Button className="p-0" {...args}>
      <span className="px-4 py-2 w-full h-full group flex items-center">
        <span className="group-hover:-translate-x-0 translate-x-2 transition opacity-0 group-hover:opacity-100">
          {icon}
        </span>
        <Text className="group-hover:translate-x-0 -translate-x-2 transition">
          {children}
        </Text>
      </span>
    </Button>
  )
}