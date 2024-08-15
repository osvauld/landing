"use client";
import React from "react";
import { Tabs } from "../components/ui/tabs";
import CredentialCreation from "/src/assets/videos/CredentialCreation.webm";
import CredentialToEnv from "/src/assets/videos/CredentialToEnv.webm";
import CredentialToGroup from "/src/assets/videos/CredentialToGroup.webm";
import Environment from "/src/assets/videos/Environment.webm";
import FolderToUsers from "/src/assets/videos/FolderToUsers.webm";
import PrivateCredentials from "/src/assets/videos/PrivateCredentials.webm";

const CredentialCreationComponent = () => {
  return (
    // <video autoPlay loop muted>
    //   <source src={CredentialCreation} type="video/mp4"></source>
    // </video>
    <video
      src={CredentialCreation}
      key={CredentialCreation}
      alt="Credential Creation video"
      autoPlay
      loop
      muted
      controls
      className=" p-4 absolute  inset-x-0  rounded-[3.5rem] mx-auto "
    />
  );
};

const PrivateCredentialsComponent = () => {
  return (
    // <video controls autoPlay loop muted>
    //   <source src={PrivateCredentials} type="video/mp4"></source>
    // </video>
    <video
      src={PrivateCredentials}
      key={PrivateCredentials}
      alt="Private Credentials creation video"
      className=" absolute  p-4 inset-x-0 w-full rounded-[3.5rem] mx-auto "
      autoPlay
      loop
      muted
      controls
      playsInline
    />
  );
};

const CredentialToGroupComponent = () => {
  return (
    // <video controls autoPlay loop muted>
    //   <source src={CredentialToGroup} type="video/mp4"></source>
    // </video>
    <video
      src={CredentialToGroup}
      key={CredentialToGroup}
      alt="Credential To Group"
      autoPlay
      loop
      muted
      controls
      playsInline
      className="  absolute p-4 inset-x-0 w-full rounded-[3.5rem] mx-auto "
    />
  );
};

const FolderToUsersComponent = () => {
  return (
    // <video controls autoPlay loop muted>
    //   <source src={FolderToUsers} type="video/mp4"></source>
    // </video>
    <video
      src={FolderToUsers}
      key={FolderToUsers}
      alt="Folder To Users"
      autoPlay
      loop
      muted
      controls
      playsInline
      width="1000"
      height="1000"
      className="object-contain object-center h-full absolute  inset-x-0 w-full rounded-xl mx-auto "
    />
  );
};

const EnvironmentComponent = () => {
  return (
    // <video controls autoPlay loop muted>
    //   <source src={Environment} type="video/mp4"></source>
    // </video>
    <video
      src={Environment}
      key={Environment}
      alt="Folder To Users"
      loop
      autoPlay
      muted
      controls
      playsInline
      width="1000"
      height="1000"
      className="object-contain object-center h-full absolute  inset-x-0 w-full  rounded-xl mx-auto "
    />
  );
};

const CredentialToEnvComponent = () => {
  return (
    // <video controls autoPlay loop muted>
    //   <source src={CredentialToEnv} type="video/mp4"></source>
    // </video>
    <video
      src={CredentialToEnv}
      key={CredentialToEnv}
      alt="Folder To Users"
      loop
      muted
      autoPlay
      controls
      playsInline
      width="1000"
      height="1000"
      className="object-contain object-center h-full absolute  inset-x-0 w-full rounded-xl mx-auto "
    />
  );
};

const tabs = [
  {
    title: "Creation",
    value: "Credential Creation",
    id: 1,
    content: (
      <div className="w-full max-w-[95vw] mx-auto overflow-hidden relative  rounded-[3.5rem] flex justify-center items-center h-[320px]  md:h-[490px] bg-calBorder shadow-[0px_20px_56px_13px_#00000090]">
        <CredentialCreationComponent />
      </div>
    ),
  },
  {
    title: "Private",
    value: "Private Credentials",
    id: 2,
    content: (
      <div className="w-full max-w-[95vw] mx-auto  overflow-hidden relative  rounded-[3.5rem] flex justify-center items-center h-[320px] md:h-[490px] bg-calBorder shadow-[0px_20px_56px_13px_#00000090]">
        <PrivateCredentialsComponent />
      </div>
    ),
  },
  {
    title: "Sharing",
    value: "Credential To Group",
    id: 3,
    content: (
      <div className="w-full max-w-[95vw] mx-auto  overflow-hidden relative  rounded-[3.5rem] flex justify-center items-center  h-[320px] md:h-[490px] bg-calBorder shadow-[0px_20px_56px_13px_#00000090]">
        <CredentialToGroupComponent />
      </div>
    ),
  },
  // {
  //   title: "Folder To Users",
  //   value: "Folder To Users",
  //   content: (
  //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 bg-calBorder shadow-[0px_20px_56px_13px_#00000090]">
  //       <FolderToUsersComponent />
  //     </div>
  //   ),
  // },
  // {
  //   title: "Environment",
  //   value: "Environment",
  //   content: (
  //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 bg-calBorder shadow-[0px_20px_56px_13px_#00000090]">
  //       <EnvironmentComponent />
  //     </div>
  //   ),
  // },
  // {
  //   title: "Credential To Environment",
  //   value: "Credential To Env",
  //   content: (
  //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 bg-calBorder shadow-[0px_20px_56px_13px_#00000090]">
  //       <CredentialToEnvComponent />
  //     </div>
  //   ),
  // },
];

export const AnimatedTabs = React.memo(() => {
  return (
    <div className="h-[60rem] [perspective:1000px] relative gree flex flex-col max-w-5xl mx-auto  w-full  items-start justify-start mt-40 md:my-0 ">
      <Tabs propTabs={tabs} />
    </div>
  );
});
