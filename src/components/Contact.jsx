import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Linkedin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { resumeData } from '../data/resume.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const object = {
      access_key: "a56cf936-c822-41fe-805e-afc34b87ebac",
      ...formData,
      subject: `New Portfolio Contact from ${formData.name}`
    };
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const res = await response.json();

      if (res.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8">
              Let's Build Something <br />
              <span className="text-gradient-accent">Amazing Together</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Whether you have a project in mind, need technical consultation, or just want to chat about the latest in tech, I'm always open to new conversations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-white/5 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-1">Email Me</h4>
                  <a href={`mailto:${resumeData.personal.email}`} className="text-lg font-medium hover:text-primary transition-colors">
                    {resumeData.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-white/5 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-medium text-gray-300">
                    {resumeData.personal.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl border border-white/10"
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Milan Bhimani"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="milanhbhimani@gmail.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-primary hover:bg-indigo-600 disabled:bg-indigo-500/50 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>Sending... <Loader2 className="animate-spin" size={20} /></>
                ) : status === 'success' ? (
                  <>Message Sent! <CheckCircle2 size={20} /></>
                ) : status === 'error' ? (
                  <>Failed. Try Again <AlertCircle size={20} /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
