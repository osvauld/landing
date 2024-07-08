const Data = [
  {
    Question: "Is Osvauld free to use?",
    Answer:
      "Osvauld is currently Community edition only. It is free to use under AGPL 3.0, no strings attached.",
  },
  {
    Question: "How Osvauld reduces cyber security risks?",
    Answer:
      "Osvauld enterprise password manager facilitates secure sharing of credentials, mitigates common security risks such as password reuse and weak passwords, enforces password hygiene and enhances visibility of credential access across the team.",
  },
  {
    Question: "Is Osvauld suitable only for big companies?",
    Answer:
      "Osvauld is suitable for both big and small companies alike. It's a good fit if you have a team and want to securely manage access to credentials within that team effectively.",
  },
  {
    Question: "How many people can share their passwords using Osvauld?",
    Answer:
      "Osvauld imposes no limit on the number of users who can share passwords within the system. The platform is designed to accommodate organizations of any size, from small teams to large enterprises, without restrictions on user count.",
  },
  {
    Question: "What is the cost to implement Osvauld  into a workplace?",
    Answer:
      "The cost to implement Osvauld in a workplace is limited to the infrastructure expenses associated with hosting it within your company's environment. Due to Osvauld's lightweight architecture and optimized code-base, these costs are typically minimal.",
  },
  {
    Question:
      "How safe is Osvauld as an enterprise password management solution?",
    Answer:
      "Osvauld enterprise password management system has secure storage with multiple levels of encryption. On top of that, it has two-factor authentication for its users for extra safety.",
  },
  {
    Question:
      "Can my organization trust Osvauld enterprise password management software?",
    Answer: `Yes, your organization can trust Osvauld enterprise password management software due to its robust security features designed to protect sensitive information\n
      1) Two-Factor Authentication: Osvauld implements two-factor authentication by default, enhancing security significantly. This involves the use of OpenPGP encryption and signing certificates alongside a passphrase. Users must register these certificates with the server, which are then used in combination with a passphrase for secure access\n
      2) Secure Storage and Use of Certificates: The encryption certificates are securely stored in local storage. Upon entering the passphrase, these certificates are decrypted but only remain in memory while they are needed and are not stored persistently. This approach minimizes the risk of unauthorized access and exposure.\n
      3) Secure Communication: For certain critical requests, Osvauld hashes and signs the payload. These signed hashes are then verified on the backend to ensure the integrity and security of the data transmitted over the network.\n
      4) Client-Side Decryption: All sensitive fields are decrypted exclusively on the client side, ensuring that sensitive data is never exposed in decrypted form outside of the client’s secure environment.`,
  },
  {
    Question:
      "What if the database gets leaked? Is it safe to save all my passwords in one place?",
    Answer:
      "Osvauld employs a zero-knowledge architecture, ensuring robust security for stored passwords. Your sensitive data in Osvauld's database is encrypted using OpenPGP, a widely respected encryption standard. Crucially, the decryption of sensitive data occurs exclusively within the client-side browser extension, never on the server. Osvauld never stores any of users cryptographic keys or their derivatives.",
  },
  {
    Question: "Do I need to be connected to the internet to use Osvauld?",
    Answer:
      "Yes, you need internet access to use Osvauld. An active internet connection is required to fetch the encrypted passwords from your self-hosted backend. This ensures that you always have access to the most up-to-date version of your passwords stored in the centralized system.",
  },
  {
    Question: "What is a super Admin?",
    Answer:
      "Super admin is the first user ever created in Osvauld. By default all the shared folders will be shared with the super admin by default.",
  },
  {
    Question: "Can I share an entire folder with another user?",
    Answer:
      "Yes, folders can be shared with users or groups. Any new credential added to a shared folder automatically inherits the same sharing properties, ensuring all authorized users or groups have access.",
  },
  {
    Question: "How do I revoke permissions to certain users using folders?",
    Answer:
      "Permissions can be adjusted by accessing the 'Access List' option for a folder. This list allows you to modify or revoke access rights for specific users or groups.",
  },
  {
    Question: "Can I remove access to a single credential?",
    Answer:
      "Yes, you can remove access to a single credential, If a credential was shared individually, you can adjust its access settings to remove specific users or groups by clicking on the credential details. However, if the folder itself was shared, you cannot selectively remove access to that specific credential without altering the access settings for the entire folder. This is because the credential inherits the sharing properties of the folder.",
  },
  {
    Question: "What are environments?",
    Answer:
      "Environments are a way to organize and manage credentials and settings that developers use in their local development.  They are collections of credentials grouped under a single name. This allows developers to invoke an environment-specific command (e.g., osvauld env env_name npm run dev) to inject these credentials into the shell, and when a credential changes they don't have to manage it since it will be automatically synced eliminating the need for .env files.",
  },
  {
    Question:
      "How do environments help developers with local secrets management?",
    Answer:
      "Environments help by centralizing the management of local credentials used during development workflow, allowing developers to access all necessary configurations under one label. This approach minimizes the risks associated with hard-coded credentials in source code and makes it easier to update credentials without changing multiple configuration files. When a credential is updated in Osvauld, it's automatically reflected in the development processes that rely on that environment.",
  },
  {
    Question:
      "Can users add a secret to a folder that someone else created and shared with them?",
    Answer:
      "Users with 'Manage' access to a folder can add secrets to it, even if the folder was created and shared by someone else.",
  },
  {
    Question: "What are the recovery options that Osvauld has?",
    Answer: `Osvauld provides two primary recovery options:

    1. Users have option to retrieve their certificates and store it somewhere safe, allowing them to recover their account when logging in from a new browser.\n
    2. For enhanced safety, shared folders are by default is accessible to a super admin, who can recover data in case a user's PGP certificates are lost or if they forget their passphrase.`,
  },
  {
    Question: "How can I contribute to Osvauld?",
    Answer:
      "You can contribute to Osvauld by joining our community on Discord. We welcome contributions from developers and enthusiasts in improving the project.",
  },
  {
    Question:
      "What is the difference between Osvauld Community Edition (CE) and Enterprise Edition (EE)?",
    Answer: `The main differences between the Osvauld Community Edition (CE) and the Enterprise Edition (EE) are focused on the added functionalities tailored for larger organizations that require more robust security and management features. The Enterprise Edition includes:

    1) Audit Logs: Comprehensive logging of all actions and changes within the system, which is crucial for compliance and security audits.\n
    2) Multi-Factor Authentication (MFA): An additional layer of security that requires users to verify their identity using more than one method of authentication, significantly reducing the risk of unauthorized access.`,
  },
  {
    Question:
      "Is a business password manager scalable for growing organizations?",
    Answer:
      "Yes, business password managers are designed to be scalable and can accommodate the needs of growing organizations. There is no limit how many passwords or Folders or persons who can use Osvauld.",
  },
  {
    Question: " How do I get started with  Osvauld? ",
    Answer:
      "Osvauld is an on-premise first solution, ie, you need to self-host Osvauld backed instance in cloud provider of your choice. Refer Osvauld documentation for detailed instructions - https://docs.osvauld.com/installation/setting-up-osvauld/",
  },
  {
    Question:
      "What is an organization? How do I add a user who’s already registered with another organization to my Vault?",
    Answer:
      "Each backend will represent individual organization and someone who’s already registered with another organization does not exist in your organization and thus you will not be able to add them to a folder or share  credential to them.",
  },
  {
    Question: "Who can add new users? ",
    Answer:
      "When a user is created you have option to make them and admin or a regular user.Only admin users can add new users.",
  },
  {
    Question: " Is it possible to join two team at the same time?",
    Answer:
      "By using different profiles in chrome, you are able to be part of two different teams at the same time. Keep in mind you have to install and register for each profile separately.",
  },
  {
    Question: "What is the difference between shared vs. private Folders?",
    Answer:
      "Private Folders will not be shared with anyone. It will not be part of your organization backup. All Shared folders are shared by default with superadmin for recovery purposes.",
  },
  {
    Question: "Why can't I edit Secrets that are shared with me?",
    Answer:
      "If you are assigned read only access at the time of sharing, you will not be able to edit the credential. You can ask your manager/Assignee for elevated access.",
  },
  {
    Question:
      "What happens to new Secrets added to a Folder that has already been shared with other users?",
    Answer:
      "It will automatically get shared with everyone who has access to the folder. The credential inherits the sharing properties of the folder",
  },
  {
    Question:
      "Is there a restriction on the number of Secrets stored in Vault?",
    Answer: "No, there are no limits.",
  },
  {
    Question: "How to do I revoke access to or unshare Secrets?",
    Answer:
      "Each credential comes with an Access list where you can edit the assigned permission or delete access.",
  },
];

export default Data;
