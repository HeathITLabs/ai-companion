"use client";


import { Avatar, AvatarImage } from "@/components/ui/avatar"

export const UserAvatar = () => {
  const user ="user";

  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={user} />
    </Avatar>
  );
};
