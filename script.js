/**
 * Melanie Moya - Portfolio Scripts
 * Handles project filtering, testimonial rendering, and contact submission.
 */

// 1. Projects Data (Matches Melanie's Experience)
const projectsData = [
  {
    title: "Fuji-Haya Product Catalog",
    category: "Graphic Design",
    image: "", // Insert direct image URL or leave blank for placeholder
    link: "#"
  },
  {
    title: "Aplus Pack Website Redesign",
    category: "Web Design",
    image: "",
    link: "#"
  },
  {
    title: "QA Automation Script & Tracker",
    category: "Automation",
    image: "",
    link: "#"
  },
  {
    title: "Aruze Game Screen & Character Art",
    category: "Game UI",
    image: "",
    link: "#"
  },
  {
    title: "Social Media Marketing Visuals",
    category: "Graphic Design",
    image: "",
    link: "#"
  },
  {
    title: "Internal Systems Documentation & UI",
    category: "Automation",
    image: "",
    link: "#"
  }
];

// 2. Testimonials Data
const testimonialsData = [
  {
    name: "Engineering Lead",
    role: "Fuji-Haya Electric Corp.",
    quote: "Melanie streamlined our QA reporting using custom Google Apps Scripts, saving our team hours of manual tracking every week.",
    avatar: ""
  },
  {
    name: "Marketing Manager",
    role: "Aplus Pack Inc.",
    quote: "Her social media creatives increased our post engagement by 60%, and our website redesign significantly improved our visibility.",
    avatar: ""
  },
  {
    name: "Game Producer",
    role: "Aruze Global Shared Services",
    quote: "Delivered over 100+ creative game assets and screens on schedule. Very adaptable and detail-oriented team player.",
    avatar: ""
  }
];

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderGallery(projectsData);
  renderTestimonials(testimonialsData);
  setupContactForm();
});

// Render Portfolio Cards with Dynamic Placeholders
function renderGallery(items) {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  grid.innerHTML = items.map(p => {
    const imageContent = p.image && p.image.trim() !== ""
      ? `<img src="${p.image}" class="h-44 w-full object-cover">`
      : `<div class="h-44 w-full bg-slate-900 flex flex-col items-center justify-center text-slate-400">
           <i class="fa-regular fa-image text-2xl text-brandPink mb-1"></i>
           <span class="text-[10px] font-bold uppercase tracking-wider text-slate-300">Project Thumbnail</span>
           <span class="text-[9px] text-slate-500">${p.category}</span>
         </div>`;

    return `
      <div class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition animate-fade">
        ${imageContent}
        <div class="p-4">
          <span class="text-[10px] font-bold uppercase tracking-wider text-brandPink bg-pink-50 px-2 py-0.5 rounded-md">${p.category}</span>
          <h4 class="font-bold text-brandBlue text-base mt-2">${p.title}</h4>
          <a href="${p.link}" target="_blank" class="inline-block mt-2 text-xs font-bold text-slate-500 hover:text-brandBlue">View Project &rarr;</a>
        </div>
      </div>
    `;
  }).join("");
}

// Filter Portfolio Items
function filterGallery(category) {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    if (btn.innerText.toUpperCase() === category.toUpperCase()) {
      btn.className = "filter-btn active bg-brandBlue text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase transition";
    } else {
      btn.className = "filter-btn bg-white border border-slate-200 text-slate-600 px-5 py-1.5 rounded-full text-xs font-bold uppercase hover:bg-slate-100 transition";
    }
  });

  if (category === "All") {
    renderGallery(projectsData);
  } else {
    renderGallery(projectsData.filter(p => p.category.toLowerCase().includes(category.toLowerCase())));
  }
}

// Render Testimonials with Fallback Avatars
function renderTestimonials(testimonials) {
  const container = document.getElementById("testimonials-grid");
  if (!container) return;

  container.innerHTML = testimonials.map(t => {
    const avatar = t.avatar && t.avatar.trim() !== ""
      ? `<img src="${t.avatar}" class="w-9 h-9 rounded-full object-cover">`
      : `<div class="w-9 h-9 rounded-full bg-brandBlue text-white text-xs font-bold flex items-center justify-center">
           ${t.name.charAt(0)}
         </div>`;

    return `
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
        <p class="text-xs text-slate-600 italic leading-relaxed">"${t.quote}"</p>
        <div class="flex items-center gap-3 mt-4 pt-4 border-t border-slate-50">
          ${avatar}
          <div>
            <div class="text-xs font-bold text-brandBlue">${t.name}</div>
            <div class="text-[10px] text-slate-400">${t.role}</div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Contact Form Handler
function setupContactForm() {
  const form = document.getElementById("contactForm");
  const btn = document.getElementById("submitBtn");
  const status = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    btn.innerHTML = "Sending...";
    btn.disabled = true;

    // Simulate sending (or replace with your Apps Script Web App fetch URL)
    setTimeout(() => {
      btn.innerHTML = "Send Message";
      btn.disabled = false;
      status.innerText = "Thank you! Your message has been sent to Melanie.";
      status.className = "text-xs font-semibold mt-1 text-emerald-600 block";
      form.reset();
    }, 800);
  });
}