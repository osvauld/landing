"use client";

import { Tabs } from "../components/ui/tabs";
import CredentialCreation from "/src/assets/videos/CredentialCreation.webm";
import CredentialToEnv from "/src/assets/videos/CredentialToEnv.webm";
import CredentialToGroup from "/src/assets/videos/CredentialToGroup.webm";
import Environment from "/src/assets/videos/Environment.webm";
import FolderToUsers from "/src/assets/videos/FolderToUsers.webm";
import PrivateCredentials from "/src/assets/videos/PrivateCredentials.webm";

export function AnimatedTabs() {
  const tabs = [
    {
      title: "Credential Creation",
      value: "Credential Creation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 bg-white">
          <CredentialCreationComponent />
        </div>
      ),
    },
    {
      title: "Private Credentials",
      value: "Private Credentials",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 bg-white">
          <PrivateCredentialsComponent />
        </div>
      ),
    },
    {
      title: "Credential To Group",
      value: "Credential To Group",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 bg-white">
          <CredentialToGroupComponent />
        </div>
      ),
    },
    {
      title: "Folder To Users",
      value: "Folder To Users",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 bg-white">
          <FolderToUsersComponent />
        </div>
      ),
    },
    {
      title: "Environment",
      value: "Environment",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 bg-white">
          <EnvironmentComponent />
        </div>
      ),
    },
    {
      title: "Credential To Environment",
      value: "Credential To Env",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 bg-white">
          <CredentialToEnvComponent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const CredentialCreationComponent = () => {
  return (
    <video
      src={CredentialCreation}
      alt="Credential Creation video"
      autoPlay
      loop
      muted
      playsInline
      width="1000"
      height="1000"
      className="object-contain object-center h-full absolute  inset-x-0 w-full rounded-xl mx-auto"
    />
  );
};

const PrivateCredentialsComponent = () => {
  return (
    <video
      src={PrivateCredentials}
      alt="Private Credentials creation video"
      className="object-contain object-center h-full absolute  inset-x-0 w-full rounded-xl mx-auto"
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

const CredentialToGroupComponent = () => {
  return (
    <video
      src={CredentialToGroup}
      alt="Credential To Group"
      autoPlay
      loop
      muted
      playsInline
      width="1000"
      height="1000"
      className="object-contain object-center h-full absolute  inset-x-0 w-full rounded-xl mx-auto"
    />
  );
};

const FolderToUsersComponent = () => {
  return (
    <video
      src={FolderToUsers}
      alt="Folder To Users"
      autoPlay
      loop
      muted
      playsInline
      width="1000"
      height="1000"
      className="object-contain object-center h-full absolute  inset-x-0 w-full rounded-xl mx-auto"
    />
  );
};

const EnvironmentComponent = () => {
  return (
    <video
      src={Environment}
      alt="Folder To Users"
      autoPlay
      loop
      muted
      playsInline
      width="1000"
      height="1000"
      className="object-contain object-center h-full absolute  inset-x-0 w-full rounded-xl mx-auto"
    />
  );
};

const CredentialToEnvComponent = () => {
  return (
    <video
      src={CredentialToEnv}
      alt="Folder To Users"
      autoPlay
      loop
      muted
      playsInline
      width="1000"
      height="1000"
      className="object-contain object-center h-full absolute  inset-x-0 w-full rounded-xl mx-auto"
    />
  );
};
