/* ============================================================================
   Digititup Media — media.digititup.com
   Sister Company of Digititup Agency Pvt Ltd (digititup.com)
   Main Interactive Logic & VIP Features
   ============================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initInteractive3DHeroPhone();
  initReelsShowcase();
  initLongformShowcase();
  initPricingToggle();
  initContactForm();
  initFAQ();
});

/* ================= REELS DATA (REAL CHANNELS & PORTFOLIO) ================= */
const REELS_DATA = [
  {
    id: 'yt-yatri-p2',
    client: 'Yatri Motorcycles',
    title: 'I Visited Yatri P2 🤯 Made-In-Nepal EV Revolution',
    category: 'commercial',
    views: '640K+',
    likes: '48.2K',
    tag: 'Made in Nepal',
    poster: 'assets/images/reel_yt_VJcx64BvP2M.jpg',
    youtubeId: 'VJcx64BvP2M',
    desc: 'High-voltage on-ground tour of Nepal\'s breakthrough electric mobility startup. Precision cinema sound design, dynamic cuts, and founder engineering vision.',
    youtube: { views: '641K', likes: '48.2K', retention: '89%' },
    facebook: { reach: '920K', shares: '14.8K', reactions: '58K' },
    metrics: { views: '641K Views', shares: '14.8K Shares' }
  },
  {
    id: 'yt-focus-secret',
    client: 'Pratik Chaudhary / VIP Personal Brand',
    title: '18-Hour Energy Secret: The Science of High Output',
    category: 'explainers',
    views: '950K+',
    likes: '72.1K',
    tag: 'High-Retention',
    poster: 'assets/images/reel_yt_-ysj9kfpgzo.jpg',
    youtubeId: '-ysj9kfpgzo',
    desc: 'Deeply researched productivity breakdown with kinetic typography, retention-optimized pacing, and visual diagram overlays for founder audience.',
    youtube: { views: '950K', likes: '72.1K', retention: '88%' },
    facebook: { reach: '1.2M', shares: '18.5K', reactions: '76K' },
    metrics: { retention: '88% Retention', views: '950K Views' }
  },
  {
    id: 'yt-nims-purja',
    client: 'Pratik Chaudhary · Decodes',
    title: 'We Will Not Forget What Nirmal Purja Achieved 🇳🇵',
    category: 'campaigns',
    views: '5.2M+',
    likes: '310K',
    tag: 'National Pride',
    poster: 'assets/images/reel_yt_kv2hh62Tfak.jpg',
    youtubeId: 'kv2hh62Tfak',
    desc: 'An epic, high-retention tribute to 14 Peaks record-breaker Nimsdai. Cinema pacing, orchestral sound design, and emotional mass resonance.',
    youtube: { views: '5.2M', likes: '310K', retention: '94%' },
    facebook: { reach: '6.8M', shares: '46.0K', reactions: '280K' },
    metrics: { views: '5.2M Views', shares: '46K Shares' }
  },
  {
    id: 'yt-luxury-hotel',
    client: 'Shinta Mani Mustang / Luxury Tourism',
    title: 'Nepal\'s Most Luxury Hotel On Earth 🇳🇵',
    category: 'campaigns',
    views: '4.2M+',
    likes: '185K',
    tag: 'Ultra-Luxury',
    poster: 'assets/images/reel_yt_NK8dD5vUsPw.jpg',
    youtubeId: 'NK8dD5vUsPw',
    desc: 'A bespoke ultra-luxury visual tour of Shinta Mani Mustang. Breathtaking Himalayan cinematography and high-status brand positioning.',
    youtube: { views: '4.2M', likes: '185K', retention: '86%' },
    facebook: { reach: '5.5M', shares: '38.0K', reactions: '190K' },
    metrics: { views: '4.2M Views', inquiries: '+140% Bookings' }
  },
  {
    id: 'yt-cars-customs',
    client: 'DigititUp Research',
    title: 'Indian Number Plate Cars in Nepal: Rules Decoded 🇳🇵',
    category: 'explainers',
    views: '980K+',
    likes: '64.2K',
    tag: 'Policy Explainer',
    poster: 'assets/images/reel_yt_GSl17LsbpE4.jpg',
    youtubeId: 'GSl17LsbpE4',
    desc: 'Fact-checked legal and policy explainer reel on cross-border vehicular regulations with dynamic motion graphics and tax breakdowns.',
    youtube: { views: '980K', likes: '64.2K', retention: '91%' },
    facebook: { reach: '1.5M', shares: '22.4K', reactions: '82K' },
    metrics: { retention: '91% Retention', shares: '22K Shares' }
  },
  {
    id: 'yt-balen-agreement',
    client: 'Civic Analysis',
    title: 'Performance Agreement With PM Balen 😲',
    category: 'explainers',
    views: '536K+',
    likes: '41.8K',
    tag: 'Governance',
    poster: 'assets/images/reel_yt_ZiwaBCvdEtU.jpg',
    youtubeId: 'ZiwaBCvdEtU',
    desc: 'High-tempo breakdown of governmental contracts and performance metrics in modern Nepal governance.',
    youtube: { views: '536K', likes: '41.8K', retention: '89%' },
    facebook: { reach: '840K', shares: '12.3K', reactions: '49K' },
    metrics: { views: '536K Views', retention: '89% Retention' }
  },
  {
    id: 'yt-domestic-flight',
    client: 'Aviation Economics',
    title: 'Decoding Real Cost of a 25-Min Flight in Nepal ✈️',
    category: 'explainers',
    views: '310K+',
    likes: '22.5K',
    tag: 'Aviation Cost',
    poster: 'assets/images/reel_yt_CXJo3bXvOi0.jpg',
    youtubeId: 'CXJo3bXvOi0',
    desc: 'Where does Rs 5,500 actually go? Complete transparent aviation fuel, airport tax, and airline operating margin breakdown.',
    youtube: { views: '310K', likes: '22.5K', retention: '92%' },
    facebook: { reach: '650K', shares: '9.8K', reactions: '34K' },
    metrics: { retention: '92% Retention', shares: '9.8K Shares' }
  },
  {
    id: 'yt-google-ai',
    client: 'Tech & AI Insights',
    title: 'Google AI Plus Free for Nepali Students Too 🤯',
    category: 'explainers',
    views: '390K+',
    likes: '28.1K',
    tag: 'AI Workflows',
    poster: 'assets/images/reel_yt_DHLrxr6W16s.jpg',
    youtubeId: 'DHLrxr6W16s',
    desc: 'Actionable guide helping university students claim free cutting-edge Gemini / Google AI models in Nepal.',
    youtube: { views: '390K', likes: '28.1K', retention: '87%' },
    facebook: { reach: '710K', shares: '16.2K', reactions: '41K' },
    metrics: { shares: '16K Shares', saves: '9.2K Saves' }
  },
  {
    id: 'yt-auto-show',
    client: 'Naima Auto Show',
    title: 'I Visited Naima Auto Show 2026: EV Future 🚗',
    category: 'commercial',
    views: '1.6M+',
    likes: '94.0K',
    tag: 'Automotive Expo',
    poster: 'assets/images/reel_yt_2wB8aNNzYoI.jpg',
    youtubeId: '2wB8aNNzYoI',
    desc: 'Rapid-cut cinematic tour of premier automotive brands, concept EVs, and cutting-edge battery technology in Kathmandu.',
    youtube: { views: '1.6M', likes: '94.0K', retention: '90%' },
    facebook: { reach: '2.1M', shares: '28.0K', reactions: '110K' },
    metrics: { views: '1.6M Views', engagement: '11.4%' }
  },
  {
    id: 'yt-sinkhole',
    client: 'Civic Journalism',
    title: 'Actually K Ho Bato Ko Khaldo 😲 Sinkholes Decoded',
    category: 'campaigns',
    views: '596K+',
    likes: '38.6K',
    tag: 'Civic Engineering',
    poster: 'assets/images/reel_yt_rbQErZEaBpM.jpg',
    youtubeId: 'rbQErZEaBpM',
    desc: 'Civil engineering breakdown of urban road sinking and municipal contractor accountability in Kathmandu.',
    youtube: { views: '596K', likes: '38.6K', retention: '86%' },
    facebook: { reach: '940K', shares: '15.1K', reactions: '54K' },
    metrics: { views: '596K Views', comments: '1.8K Comments' }
  },
  {
    id: 'yt-cursor-ai',
    client: 'AI & Systems',
    title: 'Inside the Strategic Rescue Mission: AI Coding Future',
    category: 'explainers',
    views: '280K+',
    likes: '19.4K',
    tag: 'Tech & AI',
    poster: 'assets/images/reel_yt_zZr4o6qqhnM.jpg',
    youtubeId: 'zZr4o6qqhnM',
    desc: 'Fast-paced tech documentary on modern coding assistants, Silicon Valley pivots, and the generative engineering revolution.',
    youtube: { views: '280K', likes: '19.4K', retention: '88%' },
    facebook: { reach: '520K', shares: '8.4K', reactions: '29K' },
    metrics: { watchRate: '88%', shares: '8.4K' }
  },
  {
    id: 'yt-ai-emotion',
    client: 'Humanity & AI',
    title: 'AI Ma Emotion 🙄 Can Neural Networks Really Feel?',
    category: 'explainers',
    views: '327K+',
    likes: '24.1K',
    tag: 'AI Psychology',
    poster: 'assets/images/reel_yt_qBeofk5Azzo.jpg',
    youtubeId: 'qBeofk5Azzo',
    desc: 'A philosophical and technical breakdown on LLM alignment, simulated emotion, and the boundary of artificial intelligence.',
    youtube: { views: '327K', likes: '24.1K', retention: '85%' },
    facebook: { reach: '590K', shares: '11.2K', reactions: '36K' },
    metrics: { retention: '85%', views: '327K Views' }
  }
];

/* ================= LONG-FORM YOUTUBE DOCUMENTARIES ================= */
const LONGFORM_DATA = {
  'aK_RPqNULQc': {
    title: 'Why 18-Year-Old Nepalis Are Skipping College for Japan',
    client: 'Pratik Chaudhary · @PratikkChaudhary',
    tag: 'Migration & Economy',
    desc: 'An investigative deep-dive uncovering the macroeconomic push factors, educational arbitrage, and visa economics driving young Nepalis abroad. Packed with data visualisations, on-ground interviews, and high-retention storytelling.',
    views: '1.8M Reach',
    duration: '24:18',
    youtube: { views: '385K', likes: '24.8K', comments: '1.6K', retention: '89%' },
    facebook: { reach: '1.4M', shares: '4.2K', reactions: '18K' },
    metrics: { reach: '1.8M Reach', duration: '24:18 Mins' }
  },
  'db6fRZjr4yY': {
    title: '3 Corporate Empires Control What You Eat in Nepal',
    client: 'Pratik Chaudhary · @PratikkChaudhary',
    tag: 'Monopoly & Business',
    desc: 'A gripping investigative breakdown revealing the supply chain monopolies controlling commodity imports, FMCG distribution, and daily prices across Nepal.',
    views: '1.2M Reach',
    duration: '19:42',
    youtube: { views: '290K', likes: '18.2K', comments: '980', retention: '87%' },
    facebook: { reach: '910K', shares: '3.1K', reactions: '12K' },
    metrics: { reach: '1.2M Reach', duration: '19:42 Mins' }
  },
  'dXNKgdlzy5o': {
    title: 'Accidental EV Revolution in Nepal 🇳🇵',
    client: 'Pratik Chaudhary · @PratikkChaudhary',
    tag: 'Clean Tech & Auto',
    desc: 'How tax arbitrage, domestic hydropower surpluses, and Chinese tech innovation unexpectedly propelled Nepal to the forefront of global EV adoption.',
    views: '940K Reach',
    duration: '16:55',
    youtube: { views: '215K', likes: '14.5K', comments: '820', retention: '91%' },
    facebook: { reach: '725K', shares: '2.8K', reactions: '9.4K' },
    metrics: { reach: '940K Reach', duration: '16:55 Mins' }
  },
  'QXAc0jkZMI0': {
    title: 'Kathmandu को Traffic Lights किन सधैं बन्द हुन्छन्? (The Engineering Failure)',
    client: 'Pratik Chaudhary · @PratikkChaudhary',
    tag: 'Urban Infrastructure',
    desc: 'An engineering breakdown investigating why smart traffic lights fail in the capital, unpacking sensor malfunctions and contractor bottlenecks.',
    views: '880K Reach',
    duration: '14:20',
    youtube: { views: '198K', likes: '12.1K', comments: '1.1K', retention: '86%' },
    facebook: { reach: '680K', shares: '2.4K', reactions: '8.9K' },
    metrics: { reach: '880K Reach', duration: '14:20 Mins' }
  },
  'V6rVkqZ_sDg': {
    title: "Farmers are Broke, Consumers are Broke: Who is Stealing Nepal's Wealth?",
    client: 'Pratik Chaudhary · @PratikkChaudhary',
    tag: 'Investigative Economy',
    desc: 'Tracking the 400% price markup between rural farmers in Tarai and Kathmandu retail grocery carts, unmasking middleman syndicates.',
    views: '1.1M Reach',
    duration: '21:10',
    youtube: { views: '310K', likes: '21.4K', comments: '1.4K', retention: '92%' },
    facebook: { reach: '820K', shares: '3.9K', reactions: '14K' },
    metrics: { reach: '1.1M Reach', duration: '21:10 Mins' }
  },
  'kPijUoqayOM': {
    title: 'Dark Reality of IT Jobs in Nepal 😔 | Pratik Tharu',
    client: 'Pratik Chaudhary · @PratikkChaudhary',
    tag: 'Tech Careers & Reality',
    desc: 'An insider audit on tech outsourcing sweatshops, developer salary ceilings, client contract disparities, and the realistic path for high-earning tech talent.',
    views: '1.5M Reach',
    duration: '28:34',
    youtube: { views: '420K', likes: '31.0K', comments: '2.2K', retention: '90%' },
    facebook: { reach: '1.1M', shares: '5.8K', reactions: '22K' },
    metrics: { reach: '1.5M Reach', duration: '28:34 Mins' }
  }
};

/* ================= ADAPTIVE CINEMA MODAL MANAGER ================= */
function openCinemaModal({ youtubeId, title, client, tag, desc, metrics = {}, youtube = {}, facebook = {}, mode = 'mode-vertical', poster = '' }) {
  const modal = document.getElementById('reelModal');
  const container = document.getElementById('modalContainer');
  const videoBox = document.getElementById('modalVideoBox');
  const titleEl = document.getElementById('modalTitle');
  const tagEl = document.getElementById('modalTag');
  const descEl = document.getElementById('modalDesc');

  // Dual Verified Channel Metric Targets
  const ytViewsEl = document.getElementById('modalYtViews');
  const ytLikesEl = document.getElementById('modalYtLikes');
  const ytRetEl = document.getElementById('modalYtRetention');

  const fbReachEl = document.getElementById('modalFbReach');
  const fbSharesEl = document.getElementById('modalFbShares');
  const fbReactEl = document.getElementById('modalFbReactions');

  // Fallback metrics elements if present
  const metricVal1 = document.getElementById('modalMetricVal1');
  const metricLbl1 = document.getElementById('modalMetricLbl1');
  const metricVal2 = document.getElementById('modalMetricVal2');
  const metricLbl2 = document.getElementById('modalMetricLbl2');

  const orderBtn = document.getElementById('modalOrderBtn');
  const ytBtn = document.getElementById('modalYtBtn');

  if (!modal || !container || !videoBox) return;

  // Set Modal Display Mode
  container.className = `reel-modal-container ${mode}`;

  titleEl.textContent = title;
  tagEl.textContent = `${client} · ${tag}`;
  descEl.textContent = desc;

  // Populate YouTube Verified Card
  if (ytViewsEl) ytViewsEl.textContent = youtube.views || '500K+';
  if (ytLikesEl) ytLikesEl.textContent = youtube.likes || '45K';
  if (ytRetEl) ytRetEl.textContent = youtube.retention || '88%';

  // Populate Facebook Viral Card
  if (fbReachEl) fbReachEl.textContent = facebook.reach || '800K+';
  if (fbSharesEl) fbSharesEl.textContent = facebook.shares || '12K';
  if (fbReactEl) fbReactEl.textContent = facebook.reactions || '40K';

  // Populate fallback single-grid
  if (metricVal1) metricVal1.textContent = youtube.views || metrics['views'] || '600K+';
  if (metricLbl1) metricLbl1.textContent = 'YouTube Views';
  if (metricVal2) metricVal2.textContent = facebook.reach || metrics['reach'] || '900K+';
  if (metricLbl2) metricLbl2.textContent = 'Facebook Reach';

  // Pre-filled WhatsApp CTA
  const waText = encodeURIComponent(`Hi Digititup Media! I watched "${title}". I want to produce a high-retention video project like this for my brand!`);
  orderBtn.href = `https://wa.me/9779812414094?text=${waText}`;

  // Direct YouTube Link
  if (ytBtn) {
    if (youtubeId) {
      ytBtn.href = `https://www.youtube.com/watch?v=${youtubeId}`;
      ytBtn.style.display = 'inline-flex';
    } else {
      ytBtn.href = 'https://www.youtube.com/@PratikkChaudhary';
      ytBtn.style.display = 'inline-flex';
    }
  }

  // Inject Iframe with Autoplay
  if (youtubeId) {
    videoBox.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1" 
        title="${title}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  } else {
    videoBox.innerHTML = `
      <div style="position:relative;width:100%;height:100%;overflow:hidden;background:#000;">
        <img src="${poster}" style="width:100%;height:100%;object-fit:cover;" alt="${title}" />
        <div style="position:absolute;inset:0;background:radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.85) 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;">
          <div style="width:72px;height:72px;border-radius:50%;background:#21d800;color:#050a06;display:flex;align-items:center;justify-content:center;box-shadow:0 0 35px rgba(33,216,0,0.7);margin-bottom:16px;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <div style="font-size:17px;font-weight:800;color:#fff;margin-bottom:6px;">${client}</div>
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

function closeCinemaModal() {
  const modal = document.getElementById('reelModal');
  const videoBox = document.getElementById('modalVideoBox');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
  if (videoBox) videoBox.innerHTML = '';
}

// Global modal backdrop and close bindings
document.addEventListener('DOMContentLoaded', () => {
  const modalClose = document.getElementById('modalClose');
  const backdrop = document.getElementById('modalBackdrop');
  if (modalClose) modalClose.addEventListener('click', closeCinemaModal);
  if (backdrop) backdrop.addEventListener('click', closeCinemaModal);

  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('reelModal');
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeCinemaModal();
    }
  });
});

/* ================= REELS SHOWCASE (3D INTERACTIVE & AUTO-PULSE) ================= */
function initReelsShowcase() {
  const track = document.getElementById('reelTrack');
  const prevBtn = document.getElementById('scrollLeft');
  const nextBtn = document.getElementById('scrollRight');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!track) return;

  const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <div class="reel-card-footer">
          <span class="reel-client-name">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
            ${reel.client}
          </span>
          <h4 class="reel-card-title">${reel.title}</h4>

          <!-- Dual Real Platform Verification Badges -->
          <div class="reel-platform-chips">
            <span class="platform-chip chip-yt">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#ff0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YT: ${reel.youtube ? reel.youtube.views : reel.views}
            </span>
            <span class="platform-chip chip-fb">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#1877f2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              FB: ${reel.facebook ? reel.facebook.reach : '820K'}
            </span>
          </div>

          <div class="reel-stats-bar">
            <span class="reel-like-count">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" color="#ff4757"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              ${reel.likes}
            </span>
            <span style="color:var(--green);font-weight:700;">Click to watch ↗</span>
          </div>
        </div>
      `;

      // 3D Parallax Tilt on Mouse Move
      if (isDesktopPointer) {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `translateY(-10px) scale(1.03) rotateY(${(x * 14).toFixed(2)}deg) rotateX(${(-y * 14).toFixed(2)}deg)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      }

      // Open Modal on Card Click
      card.addEventListener('click', () => {
        openCinemaModal({
          youtubeId: reel.youtubeId,
          title: reel.title,
          client: reel.client,
          tag: reel.tag,
          desc: reel.desc,
          metrics: reel.metrics,
          youtube: reel.youtube,
          facebook: reel.facebook,
          mode: 'mode-vertical',
          poster: reel.poster
        });
      });

      track.appendChild(card);
    });
  }

  renderReels('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderReels(btn.dataset.filter);
    });
  });

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
}

/* ================= LONG-FORM YOUTUBE SHOWCASE ================= */
function initLongformShowcase() {
  const cards = document.querySelectorAll('.longform-card');

  cards.forEach(card => {
    const playBtn = card.querySelector('.longform-play-btn');
    const triggerBtn = card.querySelector('.longform-trigger-btn');
    const thumbWrap = card.querySelector('.longform-thumb-wrap');
    const ytId = (playBtn && playBtn.dataset.ytId) || (triggerBtn && triggerBtn.dataset.ytId);

    function triggerVideo(e) {
      if (e) e.stopPropagation();
      const data = LONGFORM_DATA[ytId];
      if (!data) return;

      openCinemaModal({
        youtubeId: ytId,
        title: data.title,
        client: data.client,
        tag: data.tag,
        desc: data.desc,
        metrics: data.metrics,
        youtube: data.youtube,
        facebook: data.facebook,
        mode: 'mode-widescreen',
        poster: ''
      });
    }

    if (playBtn) playBtn.addEventListener('click', triggerVideo);
    if (triggerBtn) triggerBtn.addEventListener('click', triggerVideo);
    if (thumbWrap) thumbWrap.addEventListener('click', triggerVideo);
  });
}

/* ================= INTERACTIVE 3D HERO PHONE ================= */
function initInteractive3DHeroPhone() {
  const stage = document.getElementById('heroVisualStage');
  const anchor = document.getElementById('phone3dAnchor');
  const sheen = document.getElementById('phoneGlassSheen');
  const badge1 = document.getElementById('heroBadge1');
  const badge2 = document.getElementById('heroBadge2');

  const heroImg = document.getElementById('heroPhoneImg');
  const heroBadge = document.getElementById('heroPhoneBadge');
  const heroViews = document.getElementById('heroPhoneViews');
  const heroClient = document.getElementById('heroPhoneClient');
  const heroCaption = document.getElementById('heroPhoneCaption');
  const heroPlayBtn = document.getElementById('heroPhonePlayBtn');
  const switcherBtns = document.querySelectorAll('.switcher-pill');

  if (!stage || !anchor) return;

  // 3D Parallax on Mouse Move (only on devices with hover capability)
  const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;
  let isHovering = false;

  if (!isTouch) {
    stage.addEventListener('mousemove', (e) => {
      isHovering = true;
      const rect = stage.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    });

    stage.addEventListener('mouseenter', () => {
      isHovering = true;
    });

    stage.addEventListener('mouseleave', () => {
      isHovering = false;
      mouseX = 0;
      mouseY = 0;
    });
  }

  // Smooth animation loop using lerp for ultra-satisfying inertia
  function render3D() {
    const lerpSpeed = 0.08;
    currentX += (mouseX - currentX) * lerpSpeed;
    currentY += (mouseY - currentY) * lerpSpeed;

    const tiltX = -currentY * 16;
    const tiltY = currentX * 18;
    const liftZ = isHovering ? 28 : 8;

    anchor.style.transform = `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(${liftZ}px)`;

    if (sheen) {
      const sheenOffset = (currentX * 60) + 50;
      sheen.style.transform = `translateX(${sheenOffset}%) skewX(-25deg)`;
    }

    if (badge1) {
      badge1.style.transform = `translate3d(${-currentX * 24}px, ${-currentY * 18}px, 60px)`;
    }
    if (badge2) {
      badge2.style.transform = `translate3d(${currentX * 24}px, ${currentY * 18}px, 75px)`;
    }

    requestAnimationFrame(render3D);
  }

  requestAnimationFrame(render3D);

  // Interactive Story Data Switcher
  const STORIES = {
    vip: {
      img: 'assets/images/hero_phone_vip.jpg',
      badge: '<i>●</i> VIP FOUNDER REEL',
      views: '🔥 1.4M Reach',
      client: 'Founder & Executive Suite',
      caption: 'Scaling digital authority on LinkedIn & Reels with 4K on-location cinema shoots and high-retention ghost-scripting.',
      targetReelId: 'yt-focus-secret'
    },
    dew: {
      img: 'assets/images/card_mountain_dew.png',
      badge: '<i>●</i> VIRAL CAMPAIGN',
      views: '🔥 1.2M Views',
      client: 'Mountain Dew Nepal',
      caption: 'Yamaha FZ-F1 Giveaway campaign featuring high-energy pacing and interactive QR scan integration.',
      targetReelId: 'yt-auto-show'
    },
    mg: {
      img: 'assets/images/card_mg_s5.png',
      badge: '<i>●</i> AUTOMOTIVE TVC',
      views: '🔥 540K Views',
      client: 'MG Motors Nepal',
      caption: 'High-impact TVC and vertical feature strategy for the MG S5 EV focused on luxury, sustainability, and urban dynamics.',
      targetReelId: 'yt-yatri-p2'
    }
  };

  let activeStory = 'vip';

  switcherBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const storyKey = btn.dataset.reel;
      if (!STORIES[storyKey] || storyKey === activeStory) return;

      switcherBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeStory = storyKey;

      const story = STORIES[storyKey];
      heroImg.style.opacity = '0';
      heroImg.style.transform = 'scale(1.06)';

      setTimeout(() => {
        heroImg.src = story.img;
        heroBadge.innerHTML = story.badge;
        heroViews.textContent = story.views;
        heroClient.innerHTML = `${story.client} <span class="verified-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></span>`;
        heroCaption.textContent = story.caption;

        heroImg.style.opacity = '1';
        heroImg.style.transform = 'scale(1)';
      }, 180);
    });
  });

  // Play button on hero phone triggers the cinema modal
  if (heroPlayBtn) {
    heroPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = STORIES[activeStory]?.targetReelId || 'yt-focus-secret';
      const reel = REELS_DATA.find(r => r.id === targetId) || REELS_DATA[0];
      openCinemaModal({
        youtubeId: reel.youtubeId,
        title: reel.title,
        client: reel.client,
        tag: reel.tag,
        desc: reel.desc,
        metrics: reel.metrics,
        youtube: reel.youtube,
        facebook: reel.facebook,
        mode: 'mode-vertical',
        poster: reel.poster
      });
    });
  }
}

/* ================= NAVBAR & MOBILE DRAWER ================= */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const burger = document.querySelector('.burger-btn');
  const drawer = document.getElementById('mobileDrawer') || document.querySelector('.mobile-drawer');
  const drawerClose = document.getElementById('mobileDrawerClose');
  const drawerLinks = document.querySelectorAll(
    '.mobile-minimal-menu a, .mobile-nav-item, .mobile-cta-btn, .m-social-btn, .mobile-drawer a'
  );

  // Glass header scroll transformation
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Mobile luxury drawer open / close
  function openDrawer() {
    if (!drawer) return;
    if (burger) {
      burger.classList.add('open');
      burger.classList.add('active');
    }
    drawer.classList.add('open');
    drawer.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer) return;
    if (burger) {
      burger.classList.remove('open');
      burger.classList.remove('active');
    }
    drawer.classList.remove('open');
    drawer.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (burger) {
    burger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = drawer && (drawer.classList.contains('open') || drawer.classList.contains('active'));
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDrawer();
    });
  }

  // Close drawer on link click
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && (drawer.classList.contains('open') || drawer.classList.contains('active'))) {
      closeDrawer();
    }
  });
}

/* ================= PRICING TOGGLE (MONTHLY VS ANNUALLY 20% OFF) ================= */
function initPricingToggle() {
  const switchBtn = document.getElementById('pricingSwitch');
  const labelMonthly = document.getElementById('lblMonthly');
  const labelAnnually = document.getElementById('lblAnnually');
  const saveBadge = document.querySelector('.pricing-toggle-wrap .save-badge');

  const priceStarter = document.getElementById('priceStarter');
  const periodStarter = document.getElementById('periodStarter');
  const discountStarter = document.getElementById('discountStarter');
  const btnStarter = document.getElementById('btnStarter');

  const priceFlow = document.getElementById('priceFlow');
  const periodFlow = document.getElementById('periodFlow');
  const discountFlow = document.getElementById('discountFlow');
  const btnFlow = document.getElementById('btnFlow');

  const btnViral = document.getElementById('btnViral');

  if (!switchBtn) return;

  let isAnnual = false;

  function updatePricing() {
    if (isAnnual) {
      switchBtn.classList.add('checked');
      if (labelAnnually) labelAnnually.classList.add('active');
      if (labelMonthly) labelMonthly.classList.remove('active');

      // Starter Plan: 25,000 -> 20,000 (-20%)
      if (priceStarter) priceStarter.textContent = '20,000';
      if (periodStarter) periodStarter.textContent = '/ month (billed monthly)';
      if (discountStarter) {
        discountStarter.textContent = '⚡ Save NPR 5,000/mo (NPR 60,000/year)';
        discountStarter.style.display = 'inline-block';
      }
      if (btnStarter) {
        btnStarter.href = `https://wa.me/9779812414094?text=${encodeURIComponent("Hi Digititup Media! I want to lock the Starter Plan with Annual 20% Discount (NPR 20,000/month - 4 reels/month). Let's discuss!")}`;
      }

      // Flow Plan: 50,000 -> 40,000 (-20%)
      if (priceFlow) priceFlow.textContent = '40,000';
      if (periodFlow) periodFlow.textContent = '/ month (billed monthly)';
      if (discountFlow) {
        discountFlow.textContent = '⚡ Save NPR 10,000/mo (NPR 1,20,000/year)';
        discountFlow.style.display = 'inline-block';
      }
      if (btnFlow) {
        btnFlow.href = `https://wa.me/9779812414094?text=${encodeURIComponent("Hi Digititup Media! I want to lock the Flow Plan with Annual 20% Discount (NPR 40,000/month - 10-12 reels/month). Let's discuss!")}`;
      }

      if (btnViral) {
        btnViral.href = `https://wa.me/9779812414094?text=${encodeURIComponent("Hi Digititup Media! I want to discuss an Annual Custom Viral Plan for enterprise video production.")}`;
      }
    } else {
      switchBtn.classList.remove('checked');
      if (labelMonthly) labelMonthly.classList.add('active');
      if (labelAnnually) labelAnnually.classList.remove('active');

      // Starter Plan: 25,000
      if (priceStarter) priceStarter.textContent = '25,000';
      if (periodStarter) periodStarter.textContent = '/ month';
      if (discountStarter) {
        discountStarter.textContent = '';
        discountStarter.style.display = 'none';
      }
      if (btnStarter) {
        btnStarter.href = `https://wa.me/9779812414094?text=${encodeURIComponent("Hi Digititup Media! I want to get started with the Starter Plan (NPR 25,000/month - 4 reels/month). Let's discuss!")}`;
      }

      // Flow Plan: 50,000
      if (priceFlow) priceFlow.textContent = '50,000';
      if (periodFlow) periodFlow.textContent = '/ month';
      if (discountFlow) {
        discountFlow.textContent = '';
        discountFlow.style.display = 'none';
      }
      if (btnFlow) {
        btnFlow.href = `https://wa.me/9779812414094?text=${encodeURIComponent("Hi Digititup Media! I want to get started with the Flow Plan (NPR 50,000/month - 10-12 reels/month). Let's discuss!")}`;
      }

      if (btnViral) {
        btnViral.href = `https://wa.me/9779812414094?text=${encodeURIComponent("Hi Digititup Media! I want to discuss a Custom Viral Plan for enterprise video production.")}`;
      }
    }
  }

  // Click on the switch slider
  switchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isAnnual = !isAnnual;
    updatePricing();
  });

  // Click on "Pay Monthly" label
  if (labelMonthly) {
    labelMonthly.addEventListener('click', (e) => {
      e.preventDefault();
      if (isAnnual) {
        isAnnual = false;
        updatePricing();
      }
    });
  }

  // Click on "Contracted Annually" label
  if (labelAnnually) {
    labelAnnually.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isAnnual) {
        isAnnual = true;
        updatePricing();
      }
    });
  }

  // Click on "20% OFF" badge
  if (saveBadge) {
    saveBadge.style.cursor = 'pointer';
    saveBadge.addEventListener('click', (e) => {
      e.preventDefault();
      isAnnual = true;
      updatePricing();
    });
  }

  // Keyboard accessibility (Space / Enter)
  switchBtn.setAttribute('tabindex', '0');
  switchBtn.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      isAnnual = !isAnnual;
      updatePricing();
    }
  });

  // Initialize correct prices and WhatsApp links on page load
  updatePricing();
}

/* ================= CONTACT FORM ================= */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toastNotice');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('cName')?.value || 'Client';
    const brand = document.getElementById('cBrand')?.value || 'Brand';
    const service = document.getElementById('cService')?.value || 'Vertical Video Production';
    const shoot = document.getElementById('cShoot')?.value || 'Not sure';
    const msg = document.getElementById('cMsg')?.value || '';

    const text = encodeURIComponent(
      `Hello Digititup Media!\n\n` +
      `*Name:* ${name}\n` +
      `*Brand / Handle:* ${brand}\n` +
      `*Service Required:* ${service}\n` +
      `*On-Location Shoot:* ${shoot}\n` +
      `*Project Details:* ${msg}\n\n` +
      `I want to book a free 30-minute creative strategy call.`
    );

    const waUrl = `https://wa.me/9779812414094?text=${text}`;

    if (toast) {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
        window.open(waUrl, '_blank');
      }, 1200);
    } else {
      window.open(waUrl, '_blank');
    }
  });
}

/* ================= FAQ ACCORDION ================= */
function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}
