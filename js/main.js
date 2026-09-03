/* ============================================================================
   Digititup Media — media.digititup.com
   Sister Company of Digititup Agency Pvt Ltd (digititup.com)
   Main Interactive Logic
   ============================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initReelsShowcase();
  initPricingToggle();
  initContactForm();
  initFAQ();
});

/* ================= REELS DATA ================= */
const REELS_DATA = [
  {
    id: 'dew-yamaha',
    client: 'Mountain Dew Nepal',
    title: 'Yamaha FZ-F1 Giveaway Viral Reel Campaign',
    category: 'campaigns',
    views: '1.2M+',
    likes: '85.4K',
    tag: 'Brand Viral',
    poster: 'assets/images/card_mountain_dew.png',
    youtubeId: null, // Custom visual reel
    desc: 'High-energy Reels campaign integrating unique QR code-driven participation for the Yamaha FZ-F1 giveaway across Nepal. Generated record-breaking digital engagement.',
    metrics: { reach: '1.8M Reach', engagement: '14.2% Rate' }
  },
  {
    id: 'presidential-school',
    client: 'The Presidential School',
    title: 'Youth Campus Culture & Admissions Showcase Reel',
    category: 'campaigns',
    views: '350K+',
    likes: '24.8K',
    tag: 'Campus Story',
    poster: 'assets/images/reel_presidential.png',
    youtubeId: null,
    desc: 'Fast-paced, emotionally engaging vertical reel connecting students and parents. Crisp storytelling, dynamic campus cuts, and youthful rhythm.',
    metrics: { inquiries: '+68% Inquiries', shares: '4.2K Shares' }
  },
  {
    id: 'yt-focus-secret',
    client: 'DigititUp / Pratik Chaudhary',
    title: '18-Hour Energy Secret: The Science of High Focus & Output',
    category: 'explainers',
    views: '950K+',
    likes: '72.1K',
    tag: 'High-Retention',
    poster: 'assets/images/reel_yt_-ysj9kfpgzo.jpg',
    youtubeId: '-ysj9kfpgzo',
    desc: 'Deeply researched productivity breakdown with kinetic typography, retention-optimized pacing, and visual diagram overlays.',
    metrics: { retention: '86% Watch-Time', views: '950K Views' }
  },
  {
    id: 'swastik-bajaj',
    client: 'Swastik Nepal (Bajaj)',
    title: 'Bajaj AMC Short-Form Brand Dominance Engine',
    category: 'commercial',
    views: '480K+',
    likes: '31.2K',
    tag: 'Automotive',
    poster: 'assets/images/card_swastik_bajaj.png',
    youtubeId: null,
    desc: 'Short-form content engine engineered to maximize organic reach and brand dominance. Converted brand emotion into measurable service bookings.',
    metrics: { conversions: '+45% Walk-ins', shares: '2.8K' }
  },
  {
    id: 'piro-khursani',
    client: 'Hulas Finserv',
    title: '"Baya Hat ko Khel" Consumer FinTech Campaign',
    category: 'commercial',
    views: '620K+',
    likes: '41.5K',
    tag: 'FinTech',
    poster: 'assets/images/reel_piro.png',
    youtubeId: null,
    desc: 'Demystifying consumer electronics financing in Nepal with engaging, comedic, relatable vertical storytelling that went viral organically.',
    metrics: { reach: '920K Reach', leads: '+80% Signups' }
  },
  {
    id: 'yt-cars-customs',
    client: 'DigititUp Research',
    title: 'Indian Number Plate Cars in Nepal: Rules & Customs Decoded',
    category: 'explainers',
    views: '780K+',
    likes: '58.4K',
    tag: 'Explainer',
    poster: 'assets/images/reel_yt_GSl17LsbpE4.jpg',
    youtubeId: 'GSl17LsbpE4',
    desc: 'Fact-checked legal and policy explainer reel on cross-border vehicular regulations with dynamic motion graphics and tax breakdowns.',
    metrics: { retention: '91% Retention', shares: '18K Shares' }
  },
  {
    id: 'mg-s5-ev',
    client: 'MG Motors Nepal',
    title: 'MG S5 EV TVC & Vertical Cinematic Strategy',
    category: 'commercial',
    views: '540K+',
    likes: '39.0K',
    tag: 'EV TVC',
    poster: 'assets/images/card_mg_s5.png',
    youtubeId: null,
    desc: 'High-impact TVC and vertical feature strategy for the MG S5 EV focused on modernity, sustainability, and cinematic urban driving dynamics.',
    metrics: { testDrives: '+120 Bookings', impressions: '1.4M' }
  },
  {
    id: 'aas-in-asia',
    client: 'AAS.IN.ASIA Conference',
    title: 'Global Academic Conference Dynamic Highlight Reels',
    category: 'campaigns',
    views: '210K+',
    likes: '15.6K',
    tag: 'Event Coverage',
    poster: 'assets/images/card_aas_asia.png',
    youtubeId: null,
    desc: 'Complete event coverage showcasing keynotes, high-profile interviews, and attendee energy across international delegates.',
    metrics: { countries: '42 Countries', watchRate: '79%' }
  },
  {
    id: 'yt-yatri-p2',
    client: 'DigititUp Tech Series',
    title: 'Inside Nepal’s Made-In-Nepal EV Revolution: Yatri P2',
    category: 'explainers',
    views: '820K+',
    likes: '64.3K',
    tag: 'Tech & EV',
    poster: 'assets/images/reel_yt_VJcx64BvP2M.jpg',
    youtubeId: 'VJcx64BvP2M',
    desc: 'On-location industrial walkthrough highlighting Nepalese engineering, battery architecture, and proprietary EV hardware.',
    metrics: { retention: '89% Watch-Time', comments: '3.4K Comments' }
  },
  {
    id: 'kajaria-tiles',
    client: 'Kajaria Tiles Nepal',
    title: 'Redefining Luxury Flooring: Architectural Visual Strategy',
    category: 'commercial',
    views: '390K+',
    likes: '28.1K',
    tag: 'Interior & Luxury',
    poster: 'assets/images/card_kajaria_tiles.png',
    youtubeId: null,
    desc: 'Elevating Kajaria Tiles into an aspirational interior statement with high-end lighting, seamless 4K texture closeups, and architectural aesthetics.',
    metrics: { catalogViews: '45K Downloads', brandIndex: '+52%' }
  },
  {
    id: 'metro-dental',
    client: 'Metro Dental Clinic',
    title: 'Modern Smile Transformation & Healthcare Trust Reel',
    category: 'campaigns',
    views: '180K+',
    likes: '14.2K',
    tag: 'Healthcare',
    poster: 'assets/images/card_metro_dental.png',
    youtubeId: null,
    desc: 'Patient smile transformation journey engineered to build patient trust, showcase hygienic clinic tech, and drive appointment inquiries.',
    metrics: { appointments: '+55% Growth', reviews: '4.9★ Avg' }
  },
  {
    id: 'yt-road-sinkholes',
    client: 'DigititUp Engineering',
    title: 'The Science Behind Road Sinkholes in Kathmandu',
    category: 'explainers',
    views: '670K+',
    likes: '51.9K',
    tag: 'Engineering',
    poster: 'assets/images/reel_yt_rbQErZEaBpM.jpg',
    youtubeId: 'rbQErZEaBpM',
    desc: 'Civil engineering breakdown of soil mechanics, stormwater pipe leaks, and road subsidence in urban Kathmandu.',
    metrics: { retention: '88% Retention', shares: '12K Shares' }
  }
];

/* ================= NAVBAR & SCROLL ================= */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const burgerBtn = document.querySelector('.burger-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-links a');

  // Sticky navbar with blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (burgerBtn && drawer) {
    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('open');
      drawer.classList.toggle('active');
      document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        burgerBtn.classList.remove('open');
        drawer.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Active link indicator
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  });
}

/* ================= REELS SHOWCASE & MODAL ================= */
function initReelsShowcase() {
  const track = document.getElementById('reelTrack');
  const prevBtn = document.getElementById('scrollLeft');
  const nextBtn = document.getElementById('scrollRight');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('reelModal');
  const modalClose = document.getElementById('modalClose');

  if (!track) return;

  // Render cards
  function renderReels(category = 'all') {
    track.innerHTML = '';
    const filtered = category === 'all' 
      ? REELS_DATA 
      : REELS_DATA.filter(r => r.category === category);

    filtered.forEach(reel => {
      const card = document.createElement('div');
      card.className = 'reel-card';
      card.dataset.id = reel.id;

      card.innerHTML = `
        <img class="reel-poster" src="${reel.poster}" alt="${reel.title}" loading="lazy" />
        <div class="reel-card-gradient"></div>
        <div class="reel-card-header">
          <span class="reel-tag-badge">${reel.tag}</span>
          <span class="reel-views">🔥 ${reel.views}</span>
        </div>
        <div class="reel-play-overlay">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <div class="reel-card-footer">
          <span class="reel-client-name">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
            ${reel.client}
          </span>
          <h4 class="reel-card-title">${reel.title}</h4>
          <div class="reel-stats-bar">
            <span class="reel-like-count">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" color="#ff4757"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              ${reel.likes}
            </span>
            <span>Click to watch ↗</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openReelModal(reel));
      track.appendChild(card);
    });
  }

  // Initial render
  renderReels('all');

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      renderReels(cat);
    });
  });

  // Horizontal Scroll Arrows
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -320, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  // Drag to scroll
  let isDown = false;
  let startX, scrollLeft;
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mouseleave', () => { isDown = false; });
  track.addEventListener('mouseup', () => { isDown = false; });
  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.6;
    track.scrollLeft = scrollLeft - walk;
  });

  // Modal Functions
  function openReelModal(reel) {
    const videoBox = document.getElementById('modalVideoBox');
    const titleEl = document.getElementById('modalTitle');
    const tagEl = document.getElementById('modalTag');
    const descEl = document.getElementById('modalDesc');
    const metricVal1 = document.getElementById('modalMetricVal1');
    const metricLbl1 = document.getElementById('modalMetricLbl1');
    const metricVal2 = document.getElementById('modalMetricVal2');
    const metricLbl2 = document.getElementById('modalMetricLbl2');
    const orderBtn = document.getElementById('modalOrderBtn');

    titleEl.textContent = reel.title;
    tagEl.textContent = `${reel.client} · ${reel.tag}`;
    descEl.textContent = reel.desc;

    // Metrics
    const keys = Object.keys(reel.metrics);
    metricVal1.textContent = reel.metrics[keys[0]] || reel.views;
    metricLbl1.textContent = keys[0] || 'Views';
    metricVal2.textContent = reel.metrics[keys[1]] || reel.likes;
    metricLbl2.textContent = keys[1] || 'Likes';

    // WhatsApp Order Button
    const waText = encodeURIComponent(`Hi Digititup Media! I saw your reel for "${reel.client}" (${reel.title}). I would love to produce a similar high-retention vertical video for my brand!`);
    orderBtn.href = `https://wa.me/9779812414094?text=${waText}`;

    // Video source
    if (reel.youtubeId) {
      videoBox.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1" 
          title="${reel.title}" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;
    } else {
      videoBox.innerHTML = `
        <div style="position:relative;width:100%;height:100%;overflow:hidden;background:#000;">
          <img src="${reel.poster}" style="width:100%;height:100%;object-fit:cover;" alt="${reel.title}" />
          <div style="position:absolute;inset:0;background:radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;">
            <div style="width:70px;height:70px;border-radius:50%;background:#21d800;color:#050a06;display:flex;align-items:center;justify-content:center;box-shadow:0 0 35px rgba(33,216,0,0.6);margin-bottom:16px;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div style="font-size:16px;font-weight:700;color:#fff;margin-bottom:6px;">${reel.client}</div>
            <div style="font-size:13px;color:rgba(255,255,255,0.7);max-width:280px;line-height:1.4;">Official Short-Form Reel Campaign produced by Digititup Media</div>
            <a href="${orderBtn.href}" target="_blank" class="btn btn-whatsapp btn-sm" style="margin-top:20px;">
              <span>Order Similar Reel on WhatsApp</span>
            </a>
          </div>
        </div>
      `;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeReelModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    const videoBox = document.getElementById('modalVideoBox');
    videoBox.innerHTML = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeReelModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeReelModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeReelModal();
    }
  });
}

/* ================= PRICING TOGGLE ================= */
function initPricingToggle() {
  const switchBtn = document.getElementById('pricingSwitch');
  const labelMonthly = document.getElementById('lblMonthly');
  const labelProject = document.getElementById('lblProject');
  const monthlyGrid = document.getElementById('pricingMonthlyGrid');
  const projectGrid = document.getElementById('pricingProjectGrid');

  if (!switchBtn || !monthlyGrid || !projectGrid) return;

  let isProject = false;

  function updatePricingView() {
    if (isProject) {
      switchBtn.classList.add('checked');
      labelMonthly.classList.remove('active');
      labelProject.classList.add('active');
      monthlyGrid.style.display = 'none';
      projectGrid.style.display = 'grid';
    } else {
      switchBtn.classList.remove('checked');
      labelMonthly.classList.add('active');
      labelProject.classList.remove('active');
      monthlyGrid.style.display = 'grid';
      projectGrid.style.display = 'none';
    }
  }

  switchBtn.addEventListener('click', () => {
    isProject = !isProject;
    updatePricingView();
  });

  if (labelMonthly) labelMonthly.addEventListener('click', () => {
    isProject = false;
    updatePricingView();
  });

  if (labelProject) labelProject.addEventListener('click', () => {
    isProject = true;
    updatePricingView();
  });

  // Ensure all CTA buttons lead to WhatsApp with accurate pre-filled content
  document.querySelectorAll('[data-plan]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const planName = btn.dataset.plan;
      const planPrice = btn.dataset.price || '';
      const message = `Hi Digititup Media! I am interested in ordering the "${planName}" package (${planPrice}). Please share the onboarding details!`;
      btn.href = `https://wa.me/9779812414094?text=${encodeURIComponent(message)}`;
    });
  });
}

/* ================= CONTACT FORM & WHATSAPP REDIRECT ================= */
function initContactForm() {
  const form = document.getElementById('orderForm');
  const toast = document.getElementById('toastNotice');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value.trim();
    const business = document.getElementById('formBusiness').value.trim();
    const phone = document.getElementById('formPhone').value.trim();
    const service = document.getElementById('formService').value;
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !phone || !service) {
      showToast('⚠️ Please fill in all required fields (Name, Phone, Service).');
      return;
    }

    // Build formatted WhatsApp message
    const formattedText = 
`🔥 *New Project Inquiry - Digititup Media*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${name}
🏢 *Business / Brand:* ${business || 'N/A'}
📱 *Contact No.:* ${phone}
🎯 *Service Requested:* ${service}
💬 *Message:* ${message || 'Looking forward to working together.'}
━━━━━━━━━━━━━━━━━━━━
_Submitted from media.digititup.com_`;

    const waUrl = `https://wa.me/9779812414094?text=${encodeURIComponent(formattedText)}`;

    // Show on-screen toast
    showToast('🚀 Redirecting to WhatsApp with your details filled...');

    // Open WhatsApp in new tab / app
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  });

  function showToast(msg) {
    if (!toast) return;
    const textEl = toast.querySelector('.toast-text');
    if (textEl) textEl.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }
}

/* ================= FAQ ACCORDION ================= */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(other => other.classList.remove('active'));

      // Toggle clicked
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}
