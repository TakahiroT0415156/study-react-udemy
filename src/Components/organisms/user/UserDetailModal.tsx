import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import { memo } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal = memo((props: Props) => {
  const { isOpen, onClose, user, isAdmin = false } = props;

  // const { userName, setUserName } = useState<string>("");
  // const { name, setName } = useState<string>("");
  // const { email, setEmail } = useState<string>("");
  // const { phone, setPhone } = useState<string>("");

  // const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
  //   setUserName(e.target.value);
  // const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
  //   setName(e.target.value);
  // const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
  //   setEmail(e.target.value);
  // const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
  //   setPhone(e.target.value);

  // useEffect(() => {
  //   setUserName(user?.username ?? "");
  //   setName(user?.name ?? "");
  //   setEmail(user?.email ?? "");
  //   setPhone(user?.phone ?? "");
  // }, [user]);

  const onClickUpdate = () => {
    alert("アラート");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={user?.username ?? ""}
                // onChange={onChangeUserName}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={user?.name ?? ""}
                // onChange={onChangeName}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                value={user?.email ?? ""}
                // onChange={onChangeEmail}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={user?.phone ?? ""}
                // onChange={onChangePhone}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
