import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Linkedin } from 'lucide-react';
import { resumeData } from '../data/resume';

const Contact = () => {
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
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-primary hover:bg-indigo-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
