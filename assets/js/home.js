(() => {
  const body = document.body;
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const themeLabel = document.querySelector('.theme-label');
  const languageToggle = document.querySelector('[data-language-toggle]');
  const languageLabel = document.querySelector('[data-language-label]');
  const siteHeader = document.querySelector('.site-header');
  const hoverCapable = window.matchMedia('(hover: hover)');
  const togglePreviews = new WeakMap();
  const isPreviewing = (button) => {
    const state = button && togglePreviews.get(button);
    return Boolean(state && (state.hovered || state.keyboardFocused));
  };
  const watchTogglePreview = (button, updateLabel) => {
    if (!button) return;
    const state = { hovered: false, keyboardFocused: false };
    togglePreviews.set(button, state);
    button.addEventListener('pointerenter', (event) => {
      state.hovered = hoverCapable.matches && event.pointerType !== 'touch';
      updateLabel();
    });
    button.addEventListener('pointerleave', () => {
      state.hovered = false;
      updateLabel();
    });
    button.addEventListener('pointerdown', () => {
      state.keyboardFocused = false;
      updateLabel();
    });
    button.addEventListener('focus', () => {
      state.keyboardFocused = button.matches(':focus-visible');
      updateLabel();
    });
    button.addEventListener('blur', () => {
      state.keyboardFocused = false;
      updateLabel();
    });
    hoverCapable.addEventListener('change', () => {
      state.hovered = false;
      updateLabel();
    });
  };

  const translations = {
    en: {
      skip: 'Skip to content', menu: 'Menu', 'nav-about': 'About', 'nav-team': 'AI4C Team', 'nav-experience': 'Experience', 'nav-publications': 'Publications', 'nav-ongoing': 'Ongoing work',
      kicker: 'Ph.D.·Fudan University ｜ Founder·AIGC Research', 'hero-subtitle': 'From Creativity, Based Science, To Art', 'hero-note': 'I am relatively stronger at 0-to-1 innovative research (creating new tasks).<br>本人相对来说更擅长偏 0-1 的创新型研究（开创新的任务）。',
      'contact-eyebrow': 'Open to collaboration', 'contact-title': "Let's make the next <em>shot.</em>", 'contact-copy': 'I am currently seeking research collaborations and industry internship opportunities in video generation and world models.', 'scholar-label': 'Google Scholar',
      'section-about': 'About me', 'focus-image': 'Image generation', 'focus-video': 'Video world models', 'focus-3d': '3D / 4D AIGC', 'focus-neuro': 'Neuroscience', 'tag-generative': 'Generative AI', 'tag-creative': 'Creative AI', 'tag-filmmaking': 'Filmmaking', 'tag-vision': 'Computer Vision', 'tag-graphics': 'Computer Graphics', 'about-education': 'I received my Master degree in Computer Science at <a href="https://www.youtube.com/@shanghaitechdigitalhuman4076/videos" target="_blank" rel="noreferrer">VRVC Lab</a>, <a href="https://sist.shanghaitech.edu.cn/" target="_blank" rel="noreferrer">School of Information Science and Technology (SIST)</a>, <a href="https://www.shanghaitech.edu.cn/" target="_blank" rel="noreferrer">ShanghaiTech University</a> (supervised by Prof. <a href="http://xu-lan.com/" target="_blank" rel="noreferrer">Lan Xu</a> and Ph.D. <a href="https://aoliao12138.github.io/" target="_blank" rel="noreferrer">Li-ao Wang</a>), and I am currently pursuing my Ph.D. in Computer Science at <a href="https://github.com/fudan-generative-vision" target="_blank" rel="noreferrer">Fudan Generative Vision Lab (Fusion Lab)</a>, <a href="https://ai.fudan.edu.cn/" target="_blank" rel="noreferrer">College of Computer Science and Artificial Intelligence (AICS)</a> &amp; <a href="https://ai3.fudan.edu.cn/" target="_blank" rel="noreferrer">Artificial Intelligence Innovation and Industry Institute (AI³)</a>, <a href="https://www.fudan.edu.cn/" target="_blank" rel="noreferrer">Fudan University</a> (supervised by Prof. <a href="https://sites.google.com/site/zhusiyucs/home" target="_blank" rel="noreferrer">Siyu Zhu</a>).', 'about-research': 'My research interests focus on AI+Art, including Image/Video/3D/4D AIGC, World Model, Computer Vision, Computer Graphics, Digital Media, Computational Photography, and Neuroscience. Currently, I primarily work on narrative filmmaking and neural signal-guided visual reconstruction, leading the <a href="https://aigcresearch.github.io/" target="_blank" rel="noreferrer"><strong>AIGC Research｜AI for Creativity (AI4C) Team</strong></a>. AI4C Team is dedicated to Creative General Intelligence (CGI), exploring how AI can empower artistic creation and creative workflows, and investigating the nature of human creativity.',
      'education-eyebrow': 'Academic background', 'education-title': 'Education', 'education-master': 'M.S. in Computer Science · VRVC Lab', 'education-phd': 'Ph.D. in Computer Science · Fusion Lab',
      'section-team': 'AI4C Team', 'team-eyebrow': 'Researching creative intelligence.', 'team-title': 'AI for Creativity Lab', 'team-welcome': 'Welcome to <a href="https://aigcresearch.github.io/" target="_blank" rel="noreferrer">AIGC Research (AI4C Team) Homepage</a> for more details.', 'team-members-label': 'Team Members', 'team-mentors-label': 'Team Mentors', 'team-visit': 'Visit the team homepage ↗',
      'section-experience': 'Experience', 'experience-eyebrow': 'Where research meets practice.', 'experience-title': 'Internships Experience', 'experience-output': 'Output', 'experience-sais-role': 'Research Intern in Filmmaking and Video World Model', 'experience-teleai-role': 'Research Intern in Video Generation (Multi-Shot Filmmaking)', 'experience-stepfun-role': 'Research Intern in Image Generation (Story Visualization)',
      'section-publications': 'Publications', 'publications-eyebrow': 'Selected work', 'publications-title': 'Publications', 'publications-count': '03 papers',
      'section-ongoing': 'Ongoing work', 'ongoing-eyebrow': 'Something still unfolding.', 'ongoing-title': 'In progress', 'ongoing-label': 'CVPR 2027 · In progress', 'ongoing-narrative': 'Video narrative generation · AIGC Research', 'ongoing-contact': 'Contact for details ↗', 'back-top': 'Back to top ↑',
      'theme-dark': 'Dark', 'theme-light': 'Light'
    },
    zh: {
      skip: '跳转到内容', menu: '菜单', 'nav-about': '关于我', 'nav-team': 'AI4C 团队', 'nav-experience': '实习经历', 'nav-publications': '论文发表', 'nav-ongoing': '进行中的工作',
      kicker: '复旦大学·博士研究生｜创意人工智能研究院·创始人', 'hero-subtitle': '始于创意，基于科学，终于艺术', 'hero-note': '本人相对来说更擅长偏 0-1 的创新型研究（开创新的任务）。',
      'contact-eyebrow': '寻求合作', 'contact-title': '一起创造下一个<em>镜头</em>', 'contact-copy': '我正在寻找视频生成与世界模型方向的科研合作和工业界实习机会。', 'scholar-label': '谷歌学术',
      'section-about': '关于我', 'focus-image': '图像生成', 'focus-video': '视频世界模型', 'focus-3d': '3D / 4D AIGC', 'focus-neuro': '神经科学', 'tag-generative': '生成式人工智能', 'tag-creative': '创意智能', 'tag-filmmaking': '电影制作', 'tag-vision': '计算机视觉', 'tag-graphics': '计算机图形学', 'about-education': '我在<a href="https://www.shanghaitech.edu.cn/" target="_blank" rel="noreferrer">上海科技大学</a><a href="https://sist.shanghaitech.edu.cn/" target="_blank" rel="noreferrer">信息科学与技术学院</a> <a href="https://www.youtube.com/@shanghaitechdigitalhuman4076/videos" target="_blank" rel="noreferrer">VRVC 实验室</a>获得计算机科学硕士学位，导师为<a href="http://xu-lan.com/" target="_blank" rel="noreferrer">许岚</a>教授和<a href="https://aoliao12138.github.io/" target="_blank" rel="noreferrer">王力翱</a>博士；目前已入学<a href="https://www.fudan.edu.cn/" target="_blank" rel="noreferrer">复旦大学</a><a href="https://ai.fudan.edu.cn/" target="_blank" rel="noreferrer">计算与智能创新学院</a>&amp;<a href="https://ai3.fudan.edu.cn/" target="_blank" rel="noreferrer">人工智能创新与产业研究院</a>，在<a href="https://github.com/fudan-generative-vision" target="_blank" rel="noreferrer">复旦视觉生成实验室（Fusion Lab）</a>攻读计算机科学博士，导师为<a href="https://sites.google.com/site/zhusiyucs/home" target="_blank" rel="noreferrer">朱思语</a>教授。', 'about-research': '我的研究兴趣聚焦于 AI+艺术，包括图像/视频/3D/4D AIGC，世界模型、计算机视觉、计算机图形学、数字媒体、计算摄影和神经科学。目前主要从事叙事电影制作与神经信号引导的视觉重建，并负责<a href="https://aigcresearch.github.io/" target="_blank" rel="noreferrer"><strong>AIGC Research｜AI for Creativity（AI4C）团队</strong></a>。AI4C 团队致力于通用创意智能（CGI），探索 AI 技术赋能艺术创作/创意工作流，并研究人类创造力的本质。',
      'education-eyebrow': '学术经历', 'education-title': '教育经历', 'education-master': '计算机科学硕士 · VRVC 实验室', 'education-phd': '计算机科学博士 · Fusion 实验室',
      'section-team': 'AI4C 团队', 'team-eyebrow': '探索创意智能。', 'team-title': '创意人工智能实验室', 'team-welcome': '欢迎访问 <a href="https://aigcresearch.github.io/" target="_blank" rel="noreferrer">AIGC Research（AI4C Team）主页</a> 了解更多。', 'team-members-label': '团队成员', 'team-mentors-label': '团队导师', 'team-visit': '访问团队主页 ↗',
      'section-experience': '经历', 'experience-eyebrow': '研究与实践相遇。', 'experience-title': '实习经历', 'experience-output': '成果产出', 'experience-sais-role': '电影生成与视频世界模型研究实习生', 'experience-teleai-role': '视频生成（多镜头电影生成）研究实习生', 'experience-stepfun-role': '图像生成（故事可视化）研究实习生',
      'section-publications': '论文发表', 'publications-eyebrow': '精选工作', 'publications-title': '论文发表', 'publications-count': '3 篇论文',
      'section-ongoing': '进行中', 'ongoing-eyebrow': '仍在探索的问题。', 'ongoing-title': '进行中', 'ongoing-label': 'CVPR 2027 · 进行中', 'ongoing-narrative': '视频叙事生成 · AIGC Research', 'ongoing-contact': '联系了解详情 ↗', 'back-top': '返回顶部 ↑',
      'theme-dark': '深色', 'theme-light': '浅色'
    }
  };
  let currentLanguage = localStorage.getItem('cz-language') === 'zh' ? 'zh' : 'en';
  const updateLanguageLabel = () => {
    const displayedLanguage = isPreviewing(languageToggle)
      ? (currentLanguage === 'zh' ? 'en' : 'zh')
      : currentLanguage;
    if (languageLabel) languageLabel.textContent = displayedLanguage === 'zh' ? '中' : 'EN';
    languageToggle?.setAttribute('aria-label', currentLanguage === 'zh' ? 'Switch to English' : '切换到中文');
  };

  const updateLanguage = () => {
    const copy = translations[currentLanguage];
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = copy[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const value = copy[element.dataset.i18nHtml];
      if (value !== undefined) element.innerHTML = value;
    });
    updateLanguageLabel();
    document.title = currentLanguage === 'zh' ? '庄才林 · AIGC Research' : 'Cailin Zhuang · AIGC Research';
  };

  menuToggle?.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  siteNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  const storedTheme = localStorage.getItem('cz-theme');
  if (storedTheme === 'dark') body.dataset.theme = 'dark';
  const updateThemeLabel = () => {
    const dark = body.dataset.theme === 'dark';
    const preview = isPreviewing(themeToggle);
    const mode = preview ? (dark ? 'theme-light' : 'theme-dark') : (dark ? 'theme-dark' : 'theme-light');
    if (themeLabel) themeLabel.textContent = translations[currentLanguage][mode];
    themeToggle?.setAttribute('data-display-theme', mode === 'theme-light' ? 'light' : 'dark');
    themeToggle?.setAttribute('aria-label', translations[currentLanguage][mode]);
  };
  updateLanguage();
  updateThemeLabel();
  themeToggle?.addEventListener('click', () => {
    if (body.dataset.theme === 'dark') {
      delete body.dataset.theme;
      localStorage.setItem('cz-theme', 'light');
    } else {
      body.dataset.theme = 'dark';
      localStorage.setItem('cz-theme', 'dark');
    }
    updateThemeLabel();
    updateHeaderOnScroll();
  });
  watchTogglePreview(themeToggle, updateThemeLabel);
  watchTogglePreview(languageToggle, updateLanguageLabel);
  languageToggle?.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    localStorage.setItem('cz-language', currentLanguage);
    updateLanguage();
    updateThemeLabel();
  });

  const navItems = Array.from(document.querySelectorAll('.site-nav > a[href^="#"]')).map((link) => ({
    link,
    section: document.querySelector(link.getAttribute('href'))
  })).filter((item) => item.section);
  const updateActiveNav = () => {
    if (!navItems.length) return;
    const marker = Math.min(Math.max(window.innerHeight * 0.38, 180), 360);
    let current = navItems[0];
    navItems.forEach((item) => {
      if (item.section.getBoundingClientRect().top <= marker) current = item;
    });
    navItems.forEach((item) => item.link.classList.toggle('active', item === current));
  };

  let headerScrollTick = false;
  const updateHeaderOnScroll = () => {
    if (!siteHeader) return;
    const scrollRange = window.innerWidth > 900 ? 140 : 110;
    const progress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
    const dark = body.dataset.theme === 'dark';
    const background = dark ? [251, 253, 254] : [24, 50, 67];
    const mobile = window.innerWidth <= 900;
    const alpha = mobile ? 0.98 - (0.38 * progress) : 1 - (0.22 * progress);
    const targetWidth = Math.min(920, Math.max(260, window.innerWidth - 36));
    siteHeader.style.setProperty('--nav-shrink', `${Math.max(0, window.innerWidth - targetWidth) * progress}px`);
    siteHeader.style.setProperty('--nav-top', `${12 * progress}px`);
    siteHeader.style.setProperty('--nav-top-radius', `${999 * progress}px`);
    siteHeader.style.setProperty('--nav-bottom-radius', `${14 + (985 * progress)}px`);
    siteHeader.style.setProperty('--nav-bg', `rgba(${background.join(',')},${alpha.toFixed(3)})`);
    siteHeader.style.setProperty('--nav-border-alpha', progress.toFixed(3));
    siteHeader.style.setProperty('--nav-shadow-alpha', `${(mobile ? 0.22 : 0.16) * progress}`);
    siteHeader.style.setProperty('--nav-blur', `${12 + ((mobile ? 8 : 4) * progress)}px`);
    siteHeader.style.setProperty('--nav-saturation', `${100 + (40 * progress)}%`);
    siteHeader.classList.toggle('is-scrolled', progress > 0.01);
    updateActiveNav();
    headerScrollTick = false;
  };
  window.addEventListener('scroll', () => {
    if (headerScrollTick) return;
    headerScrollTick = true;
    window.requestAnimationFrame(updateHeaderOnScroll);
  }, { passive: true });
  window.addEventListener('resize', updateHeaderOnScroll);
  updateHeaderOnScroll();

  const filterButtons = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('[data-category]');
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    projects.forEach((project) => project.classList.toggle('is-hidden', filter !== 'all' && project.dataset.category !== filter));
  }));

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
