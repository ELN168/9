/* ==========================================================================
   HIVEARY - LINEAGE CLASSIC ENTERPRISE BOOSTING
   Warm Luxury Beige & Editorial Interactive Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Dynamic Interactive Warm Gold & Amber Mesh Canvas ---
  const canvas = document.getElementById('techCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 22000), 45);
    let mouse = { x: null, y: null, radius: 130 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.6 + 0.8;
        this.baseColor = Math.random() > 0.4 ? 'rgba(212, 175, 55,' : 'rgba(56, 189, 248,';
        this.alpha = Math.random() * 0.4 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.2;
            this.y -= (dy / dist) * force * 1.2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.baseColor}${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Connect to mouse
      if (mouse.x !== null && mouse.y !== null) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const lineAlpha = (1 - dist / mouse.radius) * 0.3;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  // --- 2. Dynamic Cursor Spotlight & 3D Tilt ---
  const tiltCards = document.querySelectorAll('.luxury-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -2.5;
      const rotateY = ((x - centerX) / centerX) * 2.5;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // --- 3. Mobile Navigation Drawer ---
  const navHamburger = document.getElementById('navHamburger') || document.getElementById('mobileHamburger') || document.getElementById('hamburgerBtn');
  const navLinksWrap = document.getElementById('navLinksWrap') || document.getElementById('navMenu');

  if (navHamburger && navLinksWrap) {
    navHamburger.addEventListener('click', () => {
      navLinksWrap.classList.toggle('open');
    });

    const navItems = navLinksWrap.querySelectorAll('a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinksWrap.classList.remove('open');
      });
    });
  }

  // --- 4. Navbar Scroll State & Sticky Conversion Bar ---
  const siteNavbar = document.getElementById('siteNavbar') || document.getElementById('siteHeader') || document.getElementById('navbar');
  const stickyConversionBar = document.getElementById('stickyConversionBar');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (siteNavbar) {
      if (scrollY > 50) siteNavbar.classList.add('scrolled');
      else siteNavbar.classList.remove('scrolled');
    }

    if (stickyConversionBar) {
      if (scrollY > 350) stickyConversionBar.classList.add('visible');
      else stickyConversionBar.classList.remove('visible');
    }
  });

  // --- 5. Interactive Pricing & Budget Calculator (pricing.html / index.html) ---
  const shiftRadios = document.querySelectorAll('input[name="calcShift"]');
  const pillRadioCards = document.querySelectorAll('.pill-radio-card');
  const daysSlider = document.getElementById('calcDaysInput');
  const daysDisplay = document.getElementById('calcDaysDisplay');
  const extraBuffCheck = document.getElementById('calcExtraBuff');
  const fakeCheckExtra = document.getElementById('fakeCheckExtra');

  const resShiftTitle = document.getElementById('resShiftTitle');
  const resHoursBreakdown = document.getElementById('resHoursBreakdown');
  const resRateBreakdown = document.getElementById('resRateBreakdown');
  const resBuffBreakdown = document.getElementById('resBuffBreakdown');
  const resTotalCost = document.getElementById('resTotalCost');
  const btnCopyQuote = document.getElementById('btnCopyQuote');
  const btnOrderLineQuote = document.getElementById('btnOrderLineQuote');

  const shiftConfig = {
    day: {
      name: '日班包月方案 (09:00 - 18:00)',
      shortTitle: '日班 (09:00-18:00)',
      hours: 8,
      rate: 149,
      rateLabel: 'NT$ 149 / 小時 (包月優惠價)'
    },
    night: {
      name: '夜班包月方案 (01:00 - 09:00)',
      shortTitle: '夜班 (01:00-09:00)',
      hours: 8,
      rate: 175,
      rateLabel: 'NT$ 175 / 小時 (包月優惠價)'
    },
    combo: {
      name: '日班 + 夜班 雙班包月輪替 (16 小時/日)',
      shortTitle: '日夜雙班輪替 (16hr/日)',
      hours: 16,
      rate: 152,
      rateLabel: '日班 $139/hr + 夜班 $165/hr (各折$10優惠)'
    }
  };

  function updateCalculator() {
    if (!daysSlider) return;

    let selectedKey = 'day';
    shiftRadios.forEach(r => {
      if (r.checked) selectedKey = r.value;
    });

    pillRadioCards.forEach(item => {
      const input = item.querySelector('input');
      if (input && input.checked) item.classList.add('active');
      else item.classList.remove('active');
    });

    const shift = shiftConfig[selectedKey];
    const days = parseInt(daysSlider.value, 10);
    const hasExtraBuff = extraBuffCheck ? extraBuffCheck.checked : false;

    if (fakeCheckExtra) {
      fakeCheckExtra.textContent = hasExtraBuff ? '✓' : '';
      if (hasExtraBuff) fakeCheckExtra.classList.add('checked');
      else fakeCheckExtra.classList.remove('checked');
    }

    let daysStr = `${days} 天`;
    if (days === 20) daysStr += '（標準包月 160hr）';
    if (daysDisplay) daysDisplay.textContent = daysStr;

    const totalHours = shift.hours * days;
    const totalMinutes = totalHours * 60;

    let baseCost = 0;
    if (selectedKey === 'combo') {
      const dayHours = 8 * days;
      const nightHours = 8 * days;
      baseCost = (dayHours * 139) + (nightHours * 165);
    } else {
      baseCost = totalHours * shift.rate;
    }

    let buffCost = 0;
    let buffDesc = '免費 1 台 BUFF 機';
    if (hasExtraBuff) {
      buffCost = Math.round((500 / 20) * days);
      buffDesc = `免費 1 台 + 加購第 2 台 (+NT$ ${buffCost.toLocaleString()})`;
    }

    const finalCost = baseCost + buffCost;

    if (resShiftTitle) resShiftTitle.textContent = shift.name;
    if (resHoursBreakdown) resHoursBreakdown.textContent = `${shift.hours} 小時 × ${days} 天 = ${totalHours} 小時 (${totalMinutes.toLocaleString()} 分鐘)`;
    if (resRateBreakdown) resRateBreakdown.textContent = shift.rateLabel;
    if (resBuffBreakdown) resBuffBreakdown.textContent = buffDesc;
    if (resTotalCost) resTotalCost.textContent = finalCost.toLocaleString();

    if (btnOrderLineQuote) {
      const lineMsg = encodeURIComponent(
        `您好，我想諮詢《天堂經典版》代練方案：\n` +
        `【預約班別】${shift.shortTitle}\n` +
        `【天數時數】${days} 天 (共 ${totalHours} 小時)\n` +
        `【BUFF配置】${buffDesc}\n` +
        `【試算預估總額】NT$ ${finalCost.toLocaleString()}\n` +
        `請問目前還有席位能安排 2 天試用嗎？`
      );
      btnOrderLineQuote.href = `https://line.me/ti/p/EYPnD98cYy?text=${lineMsg}`;
    }
  }

  if (daysSlider) {
    shiftRadios.forEach(r => r.addEventListener('change', updateCalculator));
    daysSlider.addEventListener('input', updateCalculator);
    if (extraBuffCheck) extraBuffCheck.addEventListener('change', updateCalculator);
    updateCalculator();
  }

  if (btnCopyQuote) {
    btnCopyQuote.addEventListener('click', () => {
      let selectedKey = 'day';
      shiftRadios.forEach(r => { if (r.checked) selectedKey = r.value; });
      const shift = shiftConfig[selectedKey];
      const days = daysSlider ? parseInt(daysSlider.value, 10) : 20;
      const totalHours = shift.hours * days;
      const amount = resTotalCost ? resTotalCost.textContent : '23,840';

      const copyText = 
`【HIVEARY 天堂經典版代練試算單】
• 選擇班別：${shift.name}
• 代練時數：${shift.hours} 小時/天 × ${days} 天 = ${totalHours} 小時
• BUFF 配置：${resBuffBreakdown ? resBuffBreakdown.textContent : '免費 1 台 BUFF 機'}
• 預估總費用：NT$ ${amount}
• 享有 2 天試用不滿意全額無條件退費保障
官方洽詢 LINE：https://line.me/ti/p/EYPnD98cYy`;

      navigator.clipboard.writeText(copyText).then(() => {
        showToast('試算清單已複製到剪貼簿，可直接發送給 LINE 客服！');
      }).catch(() => {
        showToast('請手動截圖或直接點擊按鈕加入 LINE 洽詢');
      });
    });
  }

  // --- 6. Class Filters (classes.html / index.html) ---
  const classFilterBtns = document.querySelectorAll('.class-filter-btn, .class-pill-btn');
  const classCards = document.querySelectorAll('.class-card');

  if (classFilterBtns.length > 0) {
    classFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        classFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterKey = btn.getAttribute('data-class-filter');
        classCards.forEach(card => {
          const cKey = card.getAttribute('data-class');
          if (filterKey === 'all' || cKey === filterKey) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- 7. Strategy Modal Dialog (classes.html / index.html) ---
  const strategyModal = document.getElementById('strategyModal');
  const strategyBackdrop = document.getElementById('strategyBackdrop');
  const strategyCloseBtn = document.getElementById('strategyCloseBtn');
  const stratTitle = document.getElementById('stratTitle');
  const stratDesc = document.getElementById('stratDesc');
  const stratBtnOrder = document.getElementById('stratBtnOrder');

  document.querySelectorAll('.btn-view-strategy').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      const desc = btn.getAttribute('data-desc');
      if (stratTitle) stratTitle.textContent = title;
      if (stratDesc) stratDesc.textContent = desc;

      if (strategyModal) {
        strategyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeStrategyModal() {
    if (strategyModal) {
      strategyModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (strategyCloseBtn) strategyCloseBtn.addEventListener('click', closeStrategyModal);
  if (strategyBackdrop) strategyBackdrop.addEventListener('click', closeStrategyModal);
  if (stratBtnOrder) stratBtnOrder.addEventListener('click', closeStrategyModal);

  // --- 8. Multi-View Stream Switcher HUD (monitoring.html / index.html) ---
  const btnStreamGame = document.getElementById('btnStreamGame');
  const btnStreamCam = document.getElementById('btnStreamCam');
  const btnStreamMobile = document.getElementById('btnStreamMobile');
  const streamPlayerCanvas = document.getElementById('streamPlayerCanvas');

  function setStreamView(type) {
    if (!streamPlayerCanvas) return;
    [btnStreamGame, btnStreamCam, btnStreamMobile].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });

    if (type === 'game') {
      if (btnStreamGame) btnStreamGame.classList.add('active');
      streamPlayerCanvas.style.backgroundImage = "url('images/aden-castle-bg.jpg')";
    } else if (type === 'cam') {
      if (btnStreamCam) btnStreamCam.classList.add('active');
      streamPlayerCanvas.style.backgroundImage = "url('images/office-workspace.jpg')";
    } else if (type === 'mobile') {
      if (btnStreamMobile) btnStreamMobile.classList.add('active');
      streamPlayerCanvas.style.backgroundImage = "url('images/boost-dashboard-screenshot.png')";
    }
  }

  if (btnStreamGame) btnStreamGame.addEventListener('click', () => setStreamView('game'));
  if (btnStreamCam) btnStreamCam.addEventListener('click', () => setStreamView('cam'));
  if (btnStreamMobile) btnStreamMobile.addEventListener('click', () => setStreamView('mobile'));

  // --- 9. Fullscreen Lightbox Modal (security.html / monitoring.html / index.html) ---
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const studioCards = document.querySelectorAll('.studio-photo-card');

  function openLightbox(src, caption) {
    if (lightboxModal && lightboxImg) {
      lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = caption || '';
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  studioCards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-img');
      const imgElem = card.querySelector('img');
      const caption = imgElem ? imgElem.getAttribute('alt') : '';
      if (src) openLightbox(src, caption);
    });
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeStrategyModal();
    }
  });

  // --- 10. FAQ Accordion (terms.html / index.html) ---
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(card => {
    const head = card.querySelector('.faq-head');
    if (head) {
      head.addEventListener('click', () => {
        const isActive = card.classList.contains('active');
        faqCards.forEach(c => c.classList.remove('active'));
        if (!isActive) card.classList.add('active');
      });
    }
  });

  // --- 11. Toast Notification Hub ---
  function showToast(message) {
    const hub = document.getElementById('toastHub');
    if (!hub) return;
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    hub.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }
});
