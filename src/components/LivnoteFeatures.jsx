import { motion } from "framer-motion";



const FeatureSvg = () => {
    return (
        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 27.3789C25.6569 27.3789 27 26.0358 27 24.3789C27 22.7221 25.6569 21.3789 24 21.3789C22.3431 21.3789 21 22.7221 21 24.3789C21 26.0358 22.3431 27.3789 24 27.3789Z" stroke="#FCFDFF" stroke-opacity="0.937" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0029 4.37891C25.6467 4.37891 27.2439 4.57719 28.7725 4.95115C28.4881 5.54971 28.2761 6.18919 28.1473 6.85833C26.8167 6.54479 25.4293 6.37891 24.0029 6.37891C16.8573 6.37891 10.6841 10.5427 7.77738 16.5764C7.20666 16.4471 6.6128 16.3789 6.003 16.3789C5.88944 16.3789 5.77646 16.3813 5.66406 16.386C8.74868 9.31857 15.799 4.37891 24.0029 4.37891ZM5.66406 32.3719C8.74866 39.4393 15.799 44.3789 24.0029 44.3789C35.0487 44.3789 44.0029 35.4245 44.0029 24.3789C44.0029 20.7281 43.0247 17.3058 41.3161 14.3598C40.8167 14.8038 40.2611 15.1863 39.6615 15.4952C41.1519 18.1163 42.0029 21.1481 42.0029 24.3789C42.0029 34.3201 33.9441 42.3789 24.0029 42.3789C16.8573 42.3789 10.6841 38.2151 7.77736 32.1815C7.20666 32.3107 6.6128 32.3789 6.003 32.3789C5.88946 32.3789 5.77644 32.3765 5.66406 32.3719Z" fill="#FCFDFF" fill-opacity="0.937" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1996 34.3769C24.1332 34.3783 24.0668 34.3789 24 34.3789C18.4772 34.3789 14 29.9017 14 24.3789C14 18.8561 18.4772 14.3789 24 14.3789C28.8386 14.3789 32.8746 17.8154 33.8004 22.3809C33.8668 22.3795 33.9332 22.3789 34 22.3789C34.6362 22.3789 35.2586 22.4383 35.8618 22.5519C34.9818 16.7916 30.0062 12.3789 24 12.3789C17.3726 12.3789 12 17.7515 12 24.3789C12 31.0063 17.3726 36.3789 24 36.3789C24.2756 36.3789 24.549 36.3697 24.82 36.3513C24.5482 35.7239 24.3388 35.0631 24.1996 34.3769Z" fill="#FCFDFF" fill-opacity="0.937" />
            <path d="M33 33.3789C34.6569 33.3789 36 32.0358 36 30.3789C36 28.7221 34.6569 27.3789 33 27.3789C31.3431 27.3789 30 28.7221 30 30.3789C30 32.0358 31.3431 33.3789 33 33.3789Z" fill="#FCFDFF" fill-opacity="0.937" />
            <path d="M5 27.3789C6.65685 27.3789 8 26.0358 8 24.3789C8 22.7221 6.65685 21.3789 5 21.3789C3.34315 21.3789 2 22.7221 2 24.3789C2 26.0358 3.34315 27.3789 5 27.3789Z" fill="#FCFDFF" fill-opacity="0.937" />
            <path d="M36 11.3789C37.6569 11.3789 39 10.0358 39 8.37891C39 6.72205 37.6569 5.37891 36 5.37891C34.3431 5.37891 33 6.72205 33 8.37891C33 10.0358 34.3431 11.3789 36 11.3789Z" fill="#FCFDFF" fill-opacity="0.937" />
            <path d="M23 21.3789V5.37891M25 27.3789V43.3789" stroke="#FCFDFF" stroke-opacity="0.937" />
        </svg>
    )
}

export const LivnoteFeatures = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.2 }}
            classNameName="w-full flex-grow flex flex-col items-center max-w-[1200px] mx-auto bg-dark4 px-4 pt-0 sm:pt-12 text-white "
        >
            <section className="py-20 px-5 max-w-6xl mx-auto">
                <div className="text-center mb-15">
                    <h2 className="text-5xl md:text-6xl  text-left mb-4 gradient-text font-JetBrainsMono"> Features</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    <div className="feature-card-hover bg-dark4 border border-white/10 rounded-2xl p-8  hover:border-white/20 hover:shadow-2xl relative overflow-hidden">
                        <FeatureSvg />
                        <h3 className="text-xl font-semibold mb-3 mt-3 text-white relative z-10 font-JetBrainsMono">Rich Text Editor</h3>
                        <p className="text-gray-300 text-base font-JetBrainsMono leading-relaxed relative z-10 ">
                            Write with style using our powerful editor that supports <span className="text-purple-300 font-medium">markdown syntax</span>, formatting, and seamless content creation.
                        </p>
                    </div>


                    <div className="feature-card-hover bg-dark4 border border-white/10 rounded-2xl p-8  hover:border-white/20 hover:shadow-2xl relative overflow-hidden">
                        <FeatureSvg />
                        <h3 className="text-xl font-semibold mb-3 mt-3 text-white relative z-10 font-JetBrainsMono">Real-time Collaboration</h3>
                        <p className="text-gray-300 text-base font-JetBrainsMono  leading-relaxed relative z-10">
                            Work together seamlessly with <span className="text-purple-300 font-medium">live editing</span> and instant commenting. See changes as they happen.
                        </p>
                    </div>


                    <div className="feature-card-hover bg-dark4 border border-white/10 rounded-2xl p-8  hover:border-white/20 hover:shadow-2xl relative overflow-hidden">
                        <FeatureSvg />
                        <h3 className="text-xl font-semibold mb-3 mt-3 text-white relative z-10 font-JetBrainsMono">Offline-First</h3>
                        <p className="text-gray-300 text-base font-JetBrainsMono  leading-relaxed relative z-10">
                            Work anywhere, anytime. Your notes <span className="text-purple-300 font-medium">sync automatically</span> when you're back online.
                        </p>
                    </div>


                    <div className="feature-card-hover bg-dark4 border border-white/10 rounded-2xl p-8  hover:border-white/20 hover:shadow-2xl relative overflow-hidden">
                        <FeatureSvg />
                        <h3 className="text-xl font-semibold mb-3 mt-3 text-white relative z-10 font-JetBrainsMono">Peer-to-Peer</h3>
                        <p className="text-gray-300 text-base font-JetBrainsMono  leading-relaxed relative z-10">
                            Connect directly with collaborators. <span className="text-purple-300 font-medium">No central servers</span> means faster syncing and better privacy.
                        </p>
                    </div>


                    <div className="feature-card-hover bg-dark4 border border-white/10 rounded-2xl p-8  hover:border-white/20 hover:shadow-2xl relative overflow-hidden">
                        <FeatureSvg />
                        <h3 className="text-xl font-semibold mb-3 mt-3 text-white relative z-10 font-JetBrainsMono">Cryptographic Identity</h3>
                        <p className="text-gray-300 text-base font-JetBrainsMono  leading-relaxed relative z-10">
                            Secure identity management with <span className="text-purple-300 font-medium">cryptographic keys</span>. No passwords, no accounts.
                        </p>
                    </div>


                    <div className="feature-card-hover bg-dark4 border border-white/10 rounded-2xl p-8  hover:border-white/20 hover:shadow-2xl relative overflow-hidden">
                        <FeatureSvg />
                        <h3 className="text-xl font-semibold mb-3 mt-3 text-white relative z-10 font-JetBrainsMono">End-to-End Encrypted</h3>
                        <p className="text-gray-300 text-base font-JetBrainsMono  leading-relaxed relative z-10">
                            Military-grade encryption ensures only you and your collaborators can read your content. <span className="text-purple-300 font-medium">Zero-knowledge architecture</span>.
                        </p>
                    </div>


                    <div className="feature-card-hover bg-dark4 border border-white/10 rounded-2xl p-8  hover:border-white/20 hover:shadow-2xl relative overflow-hidden">
                        <FeatureSvg />
                        <h3 className="text-xl font-semibold mb-3 mt-3 text-white relative z-10 font-JetBrainsMono">Encrypted at Rest</h3>
                        <p className="text-gray-300 text-base font-JetBrainsMono  leading-relaxed relative z-10">
                            Your data is protected even when stored locally. <span className="text-purple-300 font-medium">Multi-layer encryption</span> keeps your notes safe.
                        </p>
                    </div>


                    <div className="feature-card-hover bg-dark4 border border-white/10 rounded-2xl p-8  hover:border-white/20 hover:shadow-2xl relative overflow-hidden">
                        <FeatureSvg />
                        <h3 className="text-xl font-semibold mb-3 mt-3 text-white relative z-10 font-JetBrainsMono">No Cloud Signups</h3>
                        <p className="text-gray-300 text-base font-JetBrainsMono  leading-relaxed relative z-10">
                            Start using immediately. <span className="text-purple-300 font-medium">No registration required</span>, no email verification, no data collection.
                        </p>
                    </div>


                    <div className="feature-card-hover bg-dark4 border border-white/10 rounded-2xl p-8  hover:border-white/20 hover:shadow-2xl relative overflow-hidden">
                        <FeatureSvg />
                        <h3 className="text-xl font-semibold mb-3 mt-3 text-white relative z-10 font-JetBrainsMono">Lightweight Desktop App</h3>
                        <p className="text-gray-300 text-base font-JetBrainsMono  leading-relaxed relative z-10">
                            <span className="text-purple-300 font-medium">Extremely small binary</span> with native performance. Fast startup, minimal resource usage.
                        </p>
                    </div>



                    <div className="feature-card-hover bg-dark4 border border-white/10 rounded-2xl p-8  hover:border-white/20 hover:shadow-2xl relative overflow-hidden">
                        <FeatureSvg />
                        <h3 className="text-xl font-semibold mb-3 mt-3 text-white relative z-10 font-JetBrainsMono">Absolutely Free</h3>
                        <p className="text-gray-300 text-base font-JetBrainsMono  leading-relaxed relative z-10">
                            No premium tiers, no hidden costs. <span className="text-purple-300 font-medium">100% free forever</span> with all features included.
                        </p>
                    </div>


                    <div className="feature-card-hover bg-dark4 border border-white/10 rounded-2xl p-8  hover:border-white/20 hover:shadow-2xl relative overflow-hidden">
                        <FeatureSvg />
                        <h3 className="text-xl font-semibold mb-3 mt-3 text-white relative z-10 font-JetBrainsMono">Open Source</h3>
                        <p className="text-gray-300 text-base font-JetBrainsMono  leading-relaxed relative z-10">
                            Complete transparency with <span className="text-purple-300 font-medium">open source code</span>. Audit, contribute, and trust in community-driven development.
                        </p>
                    </div>
                </div>
            </section>
        </motion.section>
    );
};