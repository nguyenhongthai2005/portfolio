export const projects = [
  {
    id: "bs86",
    title: "BS86 Booking System",
    description: "A high-concurrency booking platform for sports facilities. Built to handle 1,000+ simultaneous requests during peak booking windows with strict consistency requirements.",
    technologies: ["Spring Boot", "PostgreSQL", "Redis"],
    githubUrl: "#",
    demoUrl: "",
    youtubeUrl: "",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNlToqE5yLQ6l1S0U9DYU77vp_cMUfAlFtfDfvRVl9E38n2t80kO43HIcG4zt0eegj4dvSYvCee-Hc9K2MPBDvH9iVFsfLFaur5rvlYvp8AxNIsGIG-PLniHrlcJpjadXmrKlfkmkfspOuwwn7A97jVSbEzYzEGWadKVp7nntEjqA-7V8TN15IocNHn8GQUFzmi557TXyLKDU_XgbigDZj3FXug0NGXilKWkahHXhm-dzMQ4M46rHFGGdp4_EJuFd-o91Un8iLGZLv",
    isCaseStudy: true,
    stats: [
      { label: "Uptime Target", value: "99.9%" },
      { label: "API Latency", value: "< 200ms" }
    ],
    codeSnippet: `// Optimized Booking Reservation Logic\n@Transactional\npublic BookingResponse reserveSlot(Long slotId, Long userId) {\n    Slot slot = slotRepo.findByIdWithLock(slotId)\n        .orElseThrow(() -> new SlotNotFoundException());\n        \n    if (slot.isAvailable()) {\n        slot.setBookedBy(userId);\n        slot.setStatus(Status.RESERVED);\n        return new BookingResponse("Success", slotRepo.save(slot));\n    }\n    throw new SlotAlreadyBookedException();\n}`
  },
  {
    id: "ai-recipe",
    title: "AI Recipe Architect",
    description: "Generative AI tool that builds curated recipes based on pantry inventory and dietary goals. Integrates OpenAI GPT-4 API.",
    technologies: ["Next.js", "OpenAI"],
    githubUrl: "#",
    demoUrl: "",
    youtubeUrl: "",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlJcDfZijMWhSV55EtnZQZjlHfA7D0Cfs7DMc0IPQI3y7guapWWpnEdzO8suWhoAEzLD94p4ryXMnjZBFg0Y82bRxHCUfLkm5JEZnw1MgcvKGy01zteIzDazSDGPtr8I7mSsEl2Zmxl8Wi61YK3rgfFq5wsS8NmJLZi9ropyuuje2YLPle0kmHnR5bxkxVlqD_eBfjKuBtOR8f8V1ZbF6KqwSPS3s4_yEwNlXuLanFQq7qJInkkXoEcthbXTnXrvxK1wjqlvU0vmF1",
    isCaseStudy: false
  },
  {
    id: "devcircle",
    title: "DevCircle Social",
    description: "A social network for engineers to share snippets and pair-program. Real-time updates via WebSockets and React Query.",
    technologies: ["React", "Node.js"],
    githubUrl: "#",
    demoUrl: "",
    youtubeUrl: "",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPJNCrhcFTKbzTL6tqSFetftzVMJhwMM5r_L1AQvSawUA93LkKfkWwu7GYDpMD94WCdJCzZ9mJFCOMB6vFKIU8yCxJRd30A7ZCNqYERMysk239g_ba-tH_O3i-fO_foOtiBo7FA3q6M3fvX9PkzW18UwUyv2y3RyQGFcbX4CywKhuKv3sNq3aflD5POM2mTZodN1ugUsS-Debl_VF1SF6UEjr3cAyWtAoxOQhlP2VC7YAdDVU5WtV2fWg8hcW_0F7pDg7e0IYpdkeb",
    isCaseStudy: false
  }
];
