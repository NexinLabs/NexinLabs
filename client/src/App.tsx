import './App.css'
import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa'
// import { HiOutlineChip } from 'react-icons/hi'
import { RiGamepadLine } from 'react-icons/ri'
import { TbApi } from 'react-icons/tb'
import { IoMdAdd } from 'react-icons/io'
import { CiMonitor } from 'react-icons/ci'
import { BiBot } from 'react-icons/bi'

function App() {
    const aboutRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    const teamRef = useRef<HTMLDivElement>(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
        elementRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prevState => !prevState)
    }

    return (
        <div className="app-container">
            <div className="bg-pattern"></div>

            <header>
                <div className="header-content">
                    <div className="logo">
                        <img className="logo-icon w-12 h-12" style={{ background: 'white' }} height={50} width={50} src='/favicon.svg'/>
                        <span className="logo-text">NexinLabs</span>
                    </div>
                    <div
                        className="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                toggleMobileMenu()
                            }
                        }}
                    >
                        <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <nav className={mobileMenuOpen ? 'open' : ''}>
                        <ul>
                            <li
                                onClick={() => { scrollToSection(aboutRef); setMobileMenuOpen(false); }}
                                tabIndex={0}
                                role="button"
                                aria-label="Go to Vision section"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        scrollToSection(aboutRef);
                                        setMobileMenuOpen(false);
                                    }
                                }}
                            >
                                Vision
                            </li>
                            <li
                                onClick={() => { scrollToSection(projectsRef); setMobileMenuOpen(false); }}
                                tabIndex={0}
                                role="button"
                                aria-label="Go to Projects section"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        scrollToSection(projectsRef);
                                        setMobileMenuOpen(false);
                                    }
                                }}
                            >
                                Projects
                            </li>
                            <li
                                onClick={() => { scrollToSection(teamRef); setMobileMenuOpen(false); }}
                                tabIndex={0}
                                role="button"
                                aria-label="Go to Team section"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        scrollToSection(teamRef);
                                        setMobileMenuOpen(false);
                                    }
                                }}
                            >
                                Team
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                onClick={() => { scrollToSection(aboutRef); setMobileMenuOpen(false); }}
                                tabIndex={0}
                                role="button"
                                aria-label="Go to Vision section"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        scrollToSection(aboutRef);
                                        setMobileMenuOpen(false);
                                    }
                                }}
                            >
                                Vision
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                onClick={() => { scrollToSection(projectsRef); setMobileMenuOpen(false); }}
                                tabIndex={0}
                                role="button"
                                aria-label="Go to Projects section"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        scrollToSection(projectsRef);
                                        setMobileMenuOpen(false);
                                    }
                                }}
                            >
                                Projects
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                onClick={() => { scrollToSection(teamRef); setMobileMenuOpen(false); }}
                                tabIndex={0}
                                role="button"
                                aria-label="Go to Team section"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        scrollToSection(teamRef);
                                        setMobileMenuOpen(false);
                                    }
                                }}
                            >
                                Team
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <section className="hero-section">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Empowering Innovation Through Technology, Research, and Development</h1>
                    <p>NexinLabs is a tech-focused organization building impactful, scalable solutions through real-world innovation.</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(projectsRef)}
                    >
                        Explore Our Projects
                    </motion.button>
                </motion.div>
            </section>

            <section ref={aboutRef} className="vision-section">
                <div className="section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Our Vision</h2>
                        <div className="underline"></div>
                    </motion.div>
                    <motion.div
                        className="vision-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p>
                            At NexinLabs, we're building a unified ecosystem where innovation thrives.
                            Our mission is to unite all our projects under one umbrella, creating a
                            structure that supports growth, fosters community, and enables sustainable
                            development of technologies that solve real-world problems.
                        </p>
                        <p>
                            We believe in the power of open collaboration, transparent development,
                            and creating tools that genuinely improve experiences across various
                            technological domains.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section ref={projectsRef} className="projects-section">
                <div className="section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Projects</h2>
                        <div className="underline"></div>
                    </motion.div>

                    <div className="projects-grid">
                        <motion.div
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-icon">
                                <RiGamepadLine />
                            </div>
                            <h3>Spruce</h3>
                            <p>Esports management tool designed to streamline team organization and tournament operations.</p>
                            <div className="project-links">
                                <a href="https://sprucbot.tech" className="project-link">Learn More</a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-icon">
                                <TbApi />
                            </div>
                            <h3>Flapi</h3>
                            <p>A versatile mock data API that provides developers with realistic test data for application development.</p>
                            <div className="project-links">
                                <a href="https://flapi.sprucbot.tech" className="project-link">Learn More</a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="project-card "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-icon">
                                <BiBot />
                            </div>
                            <h3>Gameonix Community Bot</h3>
                            <p>A community-driven bot designed to enhance the gaming experience on Discord.</p>
                            <div className="project-links">
                                <a href="https://github.com/nexinlabs/gameonix-dc" className="project-link">Learn More</a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="project-card "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-icon">
                                <CiMonitor />
                            </div>
                            <h3>Uptime Client</h3>
                            <p>A powerful uptime monitoring and managing tool designed to keep your services online and responsive.</p>
                            <div className="project-links">
                                <a href="https://uptime-client.vercel.app/" className="project-link">Learn More</a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="project-card future-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-icon">
                                <IoMdAdd/>
                            </div>
                            <h3>Future Projects</h3>
                            <p>Innovative tools and platforms coming soon to expand our ecosystem of open-source solutions.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section ref={teamRef} className="team-section">
                <div className="section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Our Team</h2>
                        <div className="underline"></div>
                    </motion.div>

                    <motion.div
                        className="team-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p>
                            NexinLabs is powered by a passionate team of developers, designers, and
                            technologists committed to creating meaningful technology solutions.
                        </p>
                        <p>
                            We're currently expanding our team and community. If you're interested in
                            contributing to our projects or joining our initiatives, reach out through
                            our social channels.
                        </p>
                    </motion.div>
                </div>
            </section>

            <footer>
            <div className="footer-content">
                <div className="social-links">
                    <a href="#" aria-label="Discord">
                        <FaDiscord />
                    </a>
                    <a href="#" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
                <div className="copyright">
                    &copy; {new Date().getFullYear()} NexinLabs. All rights reserved.
                </div>
            </div>
        </footer>
        </div>
    )
}

export default App;
