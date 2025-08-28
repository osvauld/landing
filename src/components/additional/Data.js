const data = [
  {
    question: "Is Osvauld free to use? What's the licensing model?",
    answer:
      "Yes, Osvauld is completely free and open source. It's released under the MIT license, which means you can use it freely for both personal and commercial projects without any restrictions or licensing fees. You can modify, distribute, and use Osvauld in any way you choose.",
  },
  {
    question: "How do users discover and connect to each other without servers?",
    answer:
      "Osvauld uses modern P2P networking protocols (powered by Iroh) that enable devices to find and connect to each other directly. This includes techniques like NAT traversal, relay nodes for initial connection establishment, and distributed hash tables for peer discovery. Once connected, devices communicate directly without any intermediary servers.",
  },
  {
    question: "What happens if a user is offline? How does synchronization work?",
    answer:
      "Osvauld follows an offline-first philosophy. Applications work fully offline, storing data locally using SQLite. When connectivity returns, the framework automatically synchronizes changes using Conflict-free Replicated Data Types (CRDTs), ensuring all peers eventually have consistent data without conflicts.",
  },
  {
    question: "How secure is the data encryption? What cryptographic standards does Osvauld use?",
    answer:
      "Osvauld implements end-to-end encryption using industry-standard cryptography through Sequoia-PGP. All data is encrypted both in transit and at rest following a zero-knowledge architecture. The framework also provides self-sovereign identity management with digital signatures and certificate-based authentication.",
  },
  {
    question: "Can Osvauld applications scale to handle many users collaborating simultaneously?",
    answer:
      "Yes, Osvauld is designed to handle collaborative scenarios efficiently. The CRDT integration ensures that multiple users can edit shared data simultaneously without conflicts. The P2P architecture means that performance scales with the number of participants rather than being bottlenecked by a central server.",
  },
  {
    question: "What platforms and devices does Osvauld support?",
    answer:
      "Osvauld applications can run on Android, iOS, Linux, Windows, and macOS. Since it's built in Rust, you get native performance across all these platforms while maintaining a consistent codebase and user experience.",
  },
  {
    question: "How do I handle user authentication and identity management?",
    answer:
      "Osvauld provides self-sovereign identity management, meaning users control their own digital identities without relying on external authentication providers. The framework handles digital signatures, certificate-based identity verification, and secure key management automatically.",
  },
  {
    question: "Are there any limitations or trade-offs compared to traditional server-based applications?",
    answer:
      "The main considerations are: initial peer discovery can take slightly longer than server connections, real-time collaboration requires at least one peer to be online, and some complex queries that would typically use server-side databases need to be handled differently in a P2P context. However, you gain complete user privacy, no server costs, and applications that work offline.",
  },
  {
    question: "How does Osvauld handle data backup and recovery without servers?",
    answer:
      "Since Osvauld applications work without central servers, data backup and recovery is handled through the peer-to-peer network itself. Each device stores data locally, and the distributed nature of the network means that data is naturally replicated across multiple devices. Users can backup their data locally or to their preferred storage solutions, and recovery happens through synchronization with other peers who have the shared data.",
  },
  {
    question: "What kind of support and community resources are available for developers?",
    answer:
      "We have active Discord and WhatsApp communities where developers can get help, share ideas, and collaborate. For more detailed technical support or business inquiries, you can reach out directly to abe@osvauld.com. We also maintain GitHub Discussions for longer-form questions and project sharing.",
  },
];


const livnotedata = [
  {
    question: "How does LivNote work without servers?",
    answer:
      "LivNote uses peer-to-peer technology to connect your devices directly to each other. When you collaborate on a document, changes are shared instantly between connected devices without going through any servers. All your documents stay completely private and under your control.",
  },
  {
    question: "Can I work on documents offline?",
    answer:
      "Yes! LivNote is designed to work offline-first. You can create, edit, and modify documents even without an internet connection. When you reconnect, all changes automatically sync with your collaborators without any conflicts.",
  },
  {
    question: "How secure are my documents in LivNote?",
    answer:
      "Your documents are protected with end-to-end encryption both when sharing and when stored locally on your device. Even if someone intercepts the data, they can't read your documents without your encryption keys. No one except you and your chosen collaborators can access your content.",
  },
  {
    question: "Do I need to create an account to use LivNote?",
    answer:
    "No account needed! LivNote works immediately after installation. Your identity is managed locally on your device using cryptographic keys. You can start collaborating by simply sharing a cryptographic identification with others.",
  },
  {
    question: "What file formats does LivNote support?",
    answer:
    "LivNote is a Rich-Text Editor that supports markdown also for writing and formatting, giving you a clean, distraction-free writing experience. You can use all standard Markdown syntax for headers, lists, links, and formatting. The editor also supports rich text editing with a smooth, responsive interface powered by ProseMirror.",
  },
  {
    question: "What happens if multiple people edit the same part of a document?",
    answer:
      "LivNote uses advanced conflict-free technology (Yjs CRDT) that automatically merges changes from multiple editors without creating conflicts. Everyone sees the same final result, and no one's work gets lost - even if you're editing the exact same sentence simultaneously.",
  },
];


export { data, livnotedata };