import {
  CalendarMonth as CalendarIcon,
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
} from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";

import moment from "moment";
import React from "react";
import { transformImage } from "../../Lib/Features";

const Profile = ({ user }) => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "3px solid white",
        }}
        src={transformImage(user?.avatar?.url)}
      />

      <ProfileCard
        heading={"Username"}
        text={user?.username}
        Icon={<UsernameIcon />}
      />
      <ProfileCard heading={"Name"} text={user?.name} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment(user?.createdAt).fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
