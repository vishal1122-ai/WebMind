// interface Testimonial {
//   id: number;
//   name: string;
//   position: string;
//   company: string;
//   content: string;
//   avatar: string;
// }

// export default function Testimonials() {
//   const testimonials: Testimonial[] = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       position: "CEO",
//       company: "TechStart Inc.",
//       content: "Vishal transformed our vision into a stunning web application. His attention to detail and expertise in modern technologies exceeded our expectations. The 3D animations he implemented made our product stand out in the market.",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612e2c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       position: "Creative Director",
//       company: "Design Studio",
//       content: "Working with Vishal was an absolute pleasure. His creativity and technical skills are unmatched. He delivered a beautiful, responsive website that perfectly captures our brand's essence with stunning animations and interactions.",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
//     },
//     {
//       id: 3,
//       name: "Emma Williams",
//       position: "Product Manager",
//       company: "InnovateCorp",
//       content: "Vishal's expertise in React and Three.js helped us create an innovative product showcase that impressed our investors and customers alike. His professionalism and dedication to quality made the entire process seamless.",
//       avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
//     }
//   ];

//   return (
//     <section id="testimonials" className="py-20 px-6 bg-gray-50 dark:bg-dark-card/50">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">What Clients Say</h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300">
//             Feedback from satisfied clients and collaborators.
//           </p>
//         </div>

//         {/* Static Testimonial Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   src={testimonial.avatar}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full mr-3"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-sm">{testimonial.name}</h4>
//                   <p className="text-gray-600 dark:text-gray-300 text-xs">
//                     {testimonial.position}, {testimonial.company}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 italic">
//                 "{testimonial.content}"
//               </p>
//               <div className="flex text-yellow-400 text-sm">
//                 {[...Array(5)].map((_, i) => (
//                   <i key={i} className="fas fa-star"></i>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
