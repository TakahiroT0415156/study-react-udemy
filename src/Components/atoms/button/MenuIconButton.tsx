import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo } from "react";

type props = {
  onOpen: () => void;
};

export const MenuIconButton = memo((props: props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニィーボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
