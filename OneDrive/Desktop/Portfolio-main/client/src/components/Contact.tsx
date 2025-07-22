import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "vishal@example.com",
      link: "mailto:vishal@example.com",
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/vishal-sitamraju",
      link: "https://linkedin.com/in/vishal-sitamraju",
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/vishal-sitamraju",
      link: "https://github.com/vishal-sitamraju",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-twitter", link: "#" },
    { icon: "fab fa-dribbble", link: "#" },
    { icon: "fab fa-behance", link: "#" },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ready to bring your next project to life? Let's discuss how we can
            work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:border-electric transition-colors duration-300 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-electric peer-focus:text-sm peer-focus:bg-white dark:peer-focus:bg-dark-bg peer-focus:px-2 peer-valid:-top-2 peer-valid:left-2 peer-valid:text-electric peer-valid:text-sm peer-valid:bg-white dark:peer-valid:bg-dark-bg peer-valid:px-2"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:border-electric transition-colors duration-300 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-electric peer-focus:text-sm peer-focus:bg-white dark:peer-focus:bg-dark-bg peer-focus:px-2 peer-valid:-top-2 peer-valid:left-2 peer-valid:text-electric peer-valid:text-sm peer-valid:bg-white dark:peer-valid:bg-dark-bg peer-valid:px-2"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:border-electric transition-colors duration-300 peer resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-electric peer-focus:text-sm peer-focus:bg-white dark:peer-focus:bg-dark-bg peer-focus:px-2 peer-valid:-top-2 peer-valid:left-2 peer-valid:text-electric peer-valid:text-sm peer-valid:bg-white dark:peer-valid:bg-dark-bg peer-valid:px-2"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-electric to-neon px-8 py-4 rounded-lg text-black dark:text-white font-semibold border border-neutral-300 dark:border-white hover:border-electric transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={info.title} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-electric to-neon rounded-full flex items-center justify-center">
                  <i className={`${info.icon} text-white`}></i>
                </div>
                <div>
                  <h3 className="font-semibold">{info.title}</h3>
                  <a
                    href={info.link}
                    className="text-gray-600 dark:text-gray-300 hover:text-electric transition-colors"
                    target={info.title !== "Email" ? "_blank" : undefined}
                    rel={
                      info.title !== "Email" ? "noopener noreferrer" : undefined
                    }
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="font-semibold mb-4">Let's Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-gradient-to-br from-electric to-neon rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className={`${social.icon} text-black dark:text-white`}
                    ></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
