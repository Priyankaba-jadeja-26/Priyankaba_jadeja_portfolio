import { useState } from "react";
import { Icons } from "./icons";
import { profile } from "./profile";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_b4soqaw",
        "template_whtwbfl",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "iexAYN-Yta8RqM614",
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  // TODO: set values in profile.ts
  const contactItems = [
    { icon: <Icons.Mail />, label: "Email", val: profile.email, href: `mailto:${profile.email}` },
    { icon: <Icons.Github />, label: "GitHub", val: "View profile", href: profile.github },
    { icon: <Icons.Linkedin />, label: "LinkedIn", val: "Connect", href: profile.linkedin },
    {
      icon: <Icons.ExternalLink />,
      label: "Portfolio",
      val: "Visit site",
      href: profile.portfolio,
    },
  ];

  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="section-tag fade-up">
          <span>✦</span> Connect
        </div>
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
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, marginBottom: 4 }}>
              Let's connect!
            </h3>
            <p style={{ color: "var(--c-muted)", fontSize: 14, marginBottom: 16, lineHeight: 1.7 }}>
              I'm always open to new opportunities, collaborations, and interesting conversations.
              Feel free to reach out!
            </p>
            {contactItems.map((item) => (
              <a
                className="contact-item"
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-item-icon">{item.icon}</div>
                <div>
                  <div className="contact-item-label">{item.label}</div>
                  <div className="contact-item-val">{item.val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
