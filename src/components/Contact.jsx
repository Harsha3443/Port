import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState(null); // "loading" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    formData.append("access_key", "47ed45ac-f39f-4362-bf08-f48f7b61b0c3"); // 👈 replace this

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        console.error(data);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <div className="section-header">
        <div className="section-kicker">Contact</div>
        <h2 className="section-title">Let’s work together</h2>
      </div>

      <div className="contact-card">
        <p>
          Have an opportunity, internship, or project idea? Drop me a message and
          I’ll get back to you as soon as I can.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* hidden meta fields */}
          <input type="hidden" name="from_name" value="B · Portfolio" />
          <input
            type="hidden"
            name="subject"
            value="New message from B's portfolio"
          />

          <div>
            <label>Name</label>
            <input name="name" placeholder="Your name" required />
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me a bit about it..."
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="contact-status contact-status-success">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="contact-status contact-status-error">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
