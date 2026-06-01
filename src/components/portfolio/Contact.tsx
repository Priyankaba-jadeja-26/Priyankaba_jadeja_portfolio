import { useState } from "react";
import { Icons } from "./icons";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission (e.g. email service or backend endpoint)
    console.log("Contact form submitted:", formData);
  };

  const contactItems = [
    { icon: <Icons.Mail />, label: "Email", val: "priyankaba@email.com" }, // TODO: real email
    { icon: <Icons.Github />, label: "GitHub", val: "github.com/priyankaba" }, // TODO: real handle
    { icon: <Icons.Linkedin />, label: "LinkedIn", val: "linkedin.com/in/priyankaba" }, // TODO: real handle
  ];

  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="section-tag fade-up"><span>✦</span> Connect</div>
        <h2 className="section-title fade-up">Get In Touch</h2>
        <div className="contact-grid">
          <div className="glass fade-up" style={{ padding: "32px" }}>
            <form className="contact-form-group" onSubmit={handleSubmit}>
              <div>
                <label>Your Name</label>
                <input
                  className="form-field"
                  placeholder="Priya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label>Email Address</label>
                <input
                  className="form-field"
                  type="email"
                  placeholder="priya@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  className="form-field"
                  placeholder="Let's build something together..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button className="btn-primary" type="submit">
                <Icons.Send /> Send Message
              </button>
            </form>
          </div>

          <div className="contact-info glass fade-up">
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginBottom: 4 }}>Let's connect!</h3>
            <p style={{ color: "var(--c-muted)", fontSize: 14, marginBottom: 16, lineHeight: 1.7 }}>
              I'm always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out!
            </p>
            {contactItems.map((item) => (
              <div className="contact-item" key={item.label}>
                <div className="contact-item-icon">{item.icon}</div>
                <div>
                  <div className="contact-item-label">{item.label}</div>
                  <div className="contact-item-val">{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}