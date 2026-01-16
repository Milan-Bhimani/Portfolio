import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';
import { resumeData } from '../data/resume.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission or real Web3Forms call here (using existing logic)
    const object = {
      access_key: "a56cf936-c822-41fe-805e-afc34b87ebac",
      ...formData,
      subject: `New Portfolio Contact from ${formData.name}`
    };
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(object)
        });
        const res = await response.json();
        if(res.success) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-32 bg-surface-light relative">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20">
            
            {/* Info Side */}
            <div>
                <h2 className="font-serif text-5xl md:text-7xl mb-8">
                    Let's Start a <br />
                    <span className="text-primary italic">Project</span>
                </h2>
                <p className="text-foreground-muted text-lg max-w-md mb-12">
                    Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
                </p>

                <div className="space-y-8">
                    <ContactDetail label="Location" value={resumeData.personal.location} />
                    <ContactDetail label="Email" value={resumeData.personal.email} href={`mailto:${resumeData.personal.email}`} />
                    
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-4 block">Scheduling</span>
                        <a 
                            href="https://cal.com/milan-nmvatl/" 
                            target="_blank" 
                            rel="noreferrer"
                            className="group inline-flex items-center gap-4 px-6 py-3 border border-primary/20 rounded-full hover:bg-primary hover:text-black transition-all duration-300"
                        >
                            <span className="text-sm uppercase tracking-widest">Book a Meeting</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="pt-8">
                        <span className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-4 block">Socials</span>
                        <div className="flex gap-6">
                            <SocialLink href={resumeData.personal.social.github} text="Github" />
                            <SocialLink href={resumeData.personal.social.linkedin} text="LinkedIn" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <form onSubmit={handleSubmit} className="space-y-8 mt-12 lg:mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-foreground-muted pl-4">Your Name</label>
                        <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-transparent border-b border-white/10 px-4 py-4 focus:border-primary transition-colors outline-none text-lg"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-foreground-muted pl-4">Your Email</label>
                        <input 
                            type="email" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-transparent border-b border-white/10 px-4 py-4 focus:border-primary transition-colors outline-none text-lg"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-foreground-muted pl-4">Tell me about your project</label>
                    <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 px-4 py-4 focus:border-primary transition-colors outline-none text-lg resize-none"
                        placeholder="Project details..."
                    />
                </div>

                <div className="pt-4">
                    <button 
                        type="submit"
                        disabled={status === 'submitting'}
                        className="group flex items-center gap-4 text-xl font-serif italic hover:text-primary transition-colors disabled:opacity-50"
                    >
                        {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
                        <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-300">
                            {status === 'submitting' ? <Loader2 className="animate-spin w-5 h-5" /> : status === 'success' ? <Check className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                        </span>
                    </button>
                </div>
            </form>

        </div>
      </div>
    </section>
  );
};

const ContactDetail = ({ label, value, href }) => (
    <div>
        <span className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-1 block">{label}</span>
        {href ? (
            <a href={href} className="text-xl hover:text-primary transition-colors">{value}</a>
        ) : (
            <p className="text-xl">{value}</p>
        )}
    </div>
);

const SocialLink = ({ href, text }) => (
    <a href={href} target="_blank" rel="noreferrer" className="text-sm uppercase tracking-widest border-b border-transparent hover:border-primary hover:text-primary transition-all pb-1">
        {text}
    </a>
);

export default Contact;