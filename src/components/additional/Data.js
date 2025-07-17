const Data = [
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

export default Data;