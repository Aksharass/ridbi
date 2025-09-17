import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      company: "TechCorp Industries",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with this company has been an absolute game-changer for our business. Their expertise and dedication to excellence is unmatched. The results speak for themselves.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "Digital Solutions Inc.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The level of professionalism and attention to detail is outstanding. They delivered exactly what we needed, on time and within budget. Highly recommended!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder & CEO",
      company: "StartupHub",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From concept to completion, the team exceeded our expectations. Their innovative approach and commitment to quality made all the difference in our project's success.",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Operations Manager",
      company: "Global Enterprises",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Exceptional service and results. The team's expertise and collaborative approach helped us achieve our goals faster than we ever imagined possible.",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="star">
        {index < rating ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>

            <div className="testimonial-author">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="author-image"
              />
              <div className="author-info">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-position">{testimonial.position}</p>
                <p className="author-company">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
