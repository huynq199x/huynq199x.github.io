// ─── Scroll fade-up ──────────────────────────────────────────────────────────
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.fade-up').forEach((el, i) => {
    el.style.transitionDelay = (i % 5 * 0.08) + 's';
    obs.observe(el);
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(a => a.classList.remove('active'));
            const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

// Custom cursor
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursorTrail');
let mx = 0, my = 0;
document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
});
setInterval(() => {
    trail.style.left = mx + 'px';
    trail.style.top = my + 'px';
}, 80);

// ─── i18n ────────────────────────────────────────────────────────────────────
// Rule: English is the international default.
// Tech terms, company names, project names stay in English always.
const translations = {
    en: {
        nav_about: "About", nav_skills: "Skills", nav_exp: "Experience",
        nav_projects: "Projects", nav_contact: "Contact",
        name_line1: "NGUYEN QUANG", name_line2: "HUY",
        hero_role: "IoT System Engineer · iOS Developer · Full-stack Developer",
        status_text: "Available for Opportunities",
        hero_desc: "Software engineer passionate about building intelligent IoT systems and high-quality applications.",
        btn_contact: "Get in Touch", btn_work: "View Work",
        sec_about: "01 — About",
        about_p1: "Hi! I'm <strong>Nguyen Quang Huy</strong> — a software engineer graduated from PTIT, majoring in Information Systems.",
        about_p2: "Currently working as <strong>IoT System Engineer</strong> at <strong>MINHVIET., JSC</strong>, focusing on LoRaWAN-based IoT solutions.",
        about_p3: "I enjoy solving real-world problems through smart technology — from embedded devices to cloud applications.",
        stat_yoe: "Years of Experience", stat_proj: "Real-world Projects",
        stat_tech: "Technologies", stat_intl: "International XP",
        sec_skills: "02 — Skills", cat_lang: "Programming Languages",
        cat_tools: "Tools & IDEs", cat_platforms: "Platforms & Frameworks",
        sec_exp: "03 — Experience",
        role_freelance: "Freelance Developer", period_freelance: "2025 — Present",
        desc_freelance_1: "Fullstack Web development: frontend, API, database",
        desc_freelance_2: "Mobile apps (iOS, Android) on demand",
        desc_freelance_3: "Cross-platform Desktop apps (macOS, Windows)",
        desc_freelance_4: "Automation tools for workflow optimization",
        role_minhviet: "IoT System Engineer", period_minhviet: "07/2023 — Present",
        desc_mv_1: "Research & develop IoT systems using LoRaWAN (Server, Cloud, Gateway, Sensor...)",
        desc_mv_2: "Install and optimize IoT device software for real-world environments",
        desc_mv_3: "Apply AI tools to accelerate problem-solving and task completion",
        desc_mv_4: "Research remote healthcare solutions & wireless broadcasting using IT",
        desc_mv_5: "Design and deploy LAN/TEL network systems",
        role_beetech: "iOS Developer", period_beetech: "11/2022 — 07/2023",
        desc_bt_1: "Worked in Agile / Scrum model, developed and optimized system features",
        desc_bt_2: "Proficient in RESTful API, Git, GitLab/GitHub",
        desc_bt_3: "Experience with Japanese clients, followed strict QA processes",
        role_alobridge: "iOS Development Intern", period_alobridge: "07/2022 — 10/2022",
        desc_al_1: "Developed iOS UI with Swift, UIKit, SwiftUI",
        desc_al_2: "Applied design patterns: MVP, MVC, MVVM, VIPER",
        desc_al_3: "Worked with Core Data and Apple-recommended frameworks",
        role_vnpt: "Web Development Intern", period_vnpt: "05/2021 — 07/2021",
        desc_vn_1: "Developed and maintained websites using HTML, CSS, JavaScript and VueJS",
        desc_vn_2: "API integration, responsive UI design and UX improvements",
        sec_projects: "04 — Projects",
        proj_thingsawake: "Complete LoRaWAN IoT system: Gateway, End Device, Bridge, Sensor Hub. Deployed in Hanoi, Da Nang, Ho Chi Minh City. Supports Smart Farm & Smart Home. Platform: Web + Android + iOS.",
        proj_scada: "Control & monitoring software for tidal sluice system in District 8, HCMC. Equipment installation, configuration and real-world testing.",
        proj_prodmgmt: "Production management system with Japanese partners. Progress tracking, 2D/3D charts, statistics following Japanese quality standards.",
        proj_medda: "Healthcare app: live chat with doctors, appointments, medical records, medication reminders. Focused on UX and medical data accuracy.",
        proj_network: "Infrastructure design: LAN, internal TEL, rack, UPS, switch, firewall, access points, cameras. Full IP and VLAN partitioning.",
        sec_contact: "05 — Contact",
        contact_desc: "Have an interesting project or opportunity? I'm always open to new conversations!",
        about_loc: "Thanh Xuan District, Hanoi, Vietnam",
        scroll: "scroll",
        about_edu: "Posts and Telecommunications Institute of Technology (PTIT) <br>Information Systems, 2017–2022",
    },
    vi: {
        nav_about: "Về tôi", nav_skills: "Kỹ năng", nav_exp: "Kinh nghiệm",
        nav_projects: "Dự án", nav_contact: "Liên hệ",
        name_line1: "NGUYỄN QUANG", name_line2: "HUY",
        hero_role: "Kỹ sư hệ thống IoT · Lập trình viên iOS · Full-stack Developer",
        status_text: "Sẵn sàng cho cơ hội mới",
        hero_desc: "Kỹ sư phần mềm với đam mê xây dựng các giải pháp IoT thông minh và ứng dụng chất lượng cao.",
        btn_contact: "Liên hệ ngay", btn_work: "Xem dự án",
        sec_about: "01 — Về tôi",
        about_p1: "Xin chào! Tôi là <strong>Nguyễn Quang Huy</strong> — kỹ sư phần mềm tốt nghiệp tại PTIT, chuyên ngành Hệ thống Thông tin.",
        about_p2: "Hiện đang làm <strong>Kỹ sư hệ thống IoT</strong> tại <strong>MINHVIET., JSC</strong>, tập trung nghiên cứu và triển khai giải pháp IoT LoRaWAN.",
        about_p3: "Tôi thích giải quyết bài toán thực tế qua công nghệ thông minh — từ thiết bị nhúng đến ứng dụng đám mây.",
        stat_yoe: "Năm kinh nghiệm", stat_proj: "Dự án thực tế",
        stat_tech: "Công nghệ", stat_intl: "Kinh nghiệm quốc tế",
        sec_skills: "02 — Kỹ năng", cat_lang: "Ngôn ngữ lập trình",
        cat_tools: "Công cụ & IDE", cat_platforms: "Nền tảng & Framework",
        sec_exp: "03 — Kinh nghiệm",
        role_freelance: "Lập trình viên Freelance", period_freelance: "2025 — Hiện tại",
        desc_freelance_1: "Phát triển Web Fullstack: giao diện, API, cơ sở dữ liệu",
        desc_freelance_2: "Xây dựng ứng dụng Mobile (iOS, Android) theo yêu cầu",
        desc_freelance_3: "Ứng dụng Desktop đa nền tảng (macOS, Windows)",
        desc_freelance_4: "Automation tools hỗ trợ tự động hóa quy trình làm việc",
        role_minhviet: "Kỹ sư phát triển hệ thống IoT", period_minhviet: "07/2023 — Hiện tại",
        desc_mv_1: "Nghiên cứu & phát triển hệ thống IoT sử dụng LoRaWAN (Server, Cloud, Gateway, Sensor...)",
        desc_mv_2: "Cài đặt và tối ưu hóa phần mềm thiết bị IoT trong môi trường thực tế",
        desc_mv_3: "Ứng dụng công cụ AI để tăng tốc giải quyết bài toán công việc",
        desc_mv_4: "Nghiên cứu giải pháp chăm sóc sức khỏe từ xa & truyền thanh không dây",
        desc_mv_5: "Thiết kế và triển khai hệ thống mạng LAN/TEL",
        role_beetech: "Lập trình viên iOS", period_beetech: "11/2022 — 07/2023",
        desc_bt_1: "Làm việc theo mô hình Agile / Scrum, phát triển và tối ưu tính năng",
        desc_bt_2: "Thành thạo RESTful API, Git, GitLab/GitHub",
        desc_bt_3: "Kinh nghiệm với khách hàng Nhật Bản, tuân thủ quy trình QA nghiêm ngặt",
        role_alobridge: "Thực tập sinh iOS", period_alobridge: "07/2022 — 10/2022",
        desc_al_1: "Phát triển UI iOS với Swift, UIKit, SwiftUI",
        desc_al_2: "Áp dụng design patterns: MVP, MVC, MVVM, VIPER",
        desc_al_3: "Làm việc với Core Data và các framework theo chuẩn Apple",
        role_vnpt: "Thực tập sinh Web", period_vnpt: "05/2021 — 07/2021",
        desc_vn_1: "Phát triển và bảo trì website sử dụng HTML, CSS, JavaScript và VueJS",
        desc_vn_2: "Tích hợp API, thiết kế UI responsive và cải thiện UX",
        sec_projects: "04 — Dự án",
        proj_thingsawake: "Hệ thống IoT LoRaWAN hoàn chỉnh: Gateway, End Device, Bridge, Sensor Hub. Triển khai tại Hà Nội, Đà Nẵng, TP.HCM. Hỗ trợ Smart Farm & Smart Home. Platform: Web + Android + iOS.",
        proj_scada: "Phần mềm điều khiển & giám sát hệ thống cống ngăn triều Quận 8, TP.HCM. Lắp đặt thiết bị, cấu hình và kiểm thử thực tế.",
        proj_prodmgmt: "Hệ thống quản lý sản xuất hợp tác với đối tác Nhật Bản. Theo dõi tiến độ, biểu đồ 2D/3D, báo cáo theo tiêu chuẩn Nhật.",
        proj_medda: "Ứng dụng chăm sóc sức khỏe: live chat bác sĩ, quản lý lịch hẹn, theo dõi bệnh án, nhắc uống thuốc. Tập trung UX và độ chính xác dữ liệu y tế.",
        proj_network: "Thiết kế hạ tầng: LAN, TEL nội bộ, rack, UPS, switch, firewall, access point, camera. Phân hoạch IP và VLAN toàn bộ.",
        sec_contact: "05 — Liên hệ",
        contact_desc: "Bạn có dự án thú vị hoặc cơ hội hợp tác? Tôi luôn sẵn sàng lắng nghe!",
        about_loc: "Quận Thanh Xuân, TP. Hà Nội, Việt Nam",
        scroll: "Cuộn xuống",
        about_edu: "Học viện Công nghệ Bưu chính Viễn thông (PTIT) <br>Hệ thống Thông tin, 2017–2022",
    },
    ja: {
        nav_about: "自己紹介", nav_skills: "スキル", nav_exp: "経験",
        nav_projects: "プロジェクト", nav_contact: "連絡先",
        name_line1: "グエン・クアン", name_line2: "フイ",
        hero_role: "IoTシステムエンジニア · iOSデベロッパー · フルスタック開発者",
        status_text: "新しい機会を求めています",
        hero_desc: "スマートIoTソリューションと高品質アプリの開発に情熱を持つソフトウェアエンジニア。",
        btn_contact: "お問い合わせ", btn_work: "作品を見る",
        sec_about: "01 — 自己紹介",
        about_p1: "こんにちは！私は<strong>Nguyen Quang Huy</strong>です。PTIT（郵便通信工科大学）情報システム学科卒のソフトウェアエンジニアです。",
        about_p2: "現在は<strong>MINHVIET., JSC</strong>でIoTシステムエンジニアとして、LoRaWAN技術を活用したIoTソリューションの研究・導入を担当しています。",
        about_p3: "組み込みデバイスからクラウドアプリまで、スマート技術で現実の課題を解決することが好きです。",
        stat_yoe: "年の経験", stat_proj: "実プロジェクト数",
        stat_tech: "技術スタック", stat_intl: "海外経験",
        sec_skills: "02 — スキル", cat_lang: "プログラミング言語",
        cat_tools: "ツール & IDE", cat_platforms: "プラットフォーム & フレームワーク",
        sec_exp: "03 — 経験",
        role_freelance: "フリーランス開発者", period_freelance: "2025年 — 現在",
        desc_freelance_1: "フルスタックWeb開発：フロントエンド、API、データベース",
        desc_freelance_2: "モバイルアプリ開発（iOS、Android）受託",
        desc_freelance_3: "クロスプラットフォームDesktopアプリ（macOS、Windows）",
        desc_freelance_4: "業務自動化ツールの開発",
        role_minhviet: "IoTシステムエンジニア", period_minhviet: "2023年7月 — 現在",
        desc_mv_1: "LoRaWAN技術を用いたIoTシステム（サーバー、クラウド、ゲートウェイ、センサー等）の研究・開発",
        desc_mv_2: "実環境向けIoTデバイスソフトウェアのインストール・最適化",
        desc_mv_3: "AIツールを活用した業務効率化・問題解決の加速",
        desc_mv_4: "遠隔ヘルスケアソリューション・IT活用無線放送システムの研究",
        desc_mv_5: "LAN/TELネットワークシステムの設計・構築",
        role_beetech: "iOSデベロッパー", period_beetech: "2022年11月 — 2023年7月",
        desc_bt_1: "Agile / Scrumモデルでのシステム機能開発・最適化",
        desc_bt_2: "RESTful API、Git、GitLab/GitHubに精通",
        desc_bt_3: "日本人クライアントとの協業経験、厳格なQAプロセス遵守",
        role_alobridge: "iOSインターン", period_alobridge: "2022年7月 — 2022年10月",
        desc_al_1: "Swift、UIKit、SwiftUIを使ったiOS UI開発",
        desc_al_2: "設計パターン（MVP、MVC、MVVM、VIPER）の適用",
        desc_al_3: "Core DataおよびApple推奨フレームワークの活用",
        role_vnpt: "Web開発インターン", period_vnpt: "2021年5月 — 2021年7月",
        desc_vn_1: "HTML、CSS、JavaScript、VueJSを使ったWebサイト開発・保守",
        desc_vn_2: "API連携、レスポンシブUIデザイン、UX改善",
        sec_projects: "04 — プロジェクト",
        proj_thingsawake: "完全なLoRaWAN IoTシステム：Gateway、End Device、Bridge、Sensor Hub。ハノイ・ダナン・ホーチミンに導入。スマート農場・スマートホーム対応。Web + Android + iOSプラットフォーム。",
        proj_scada: "ホーチミン市8区の潮止水門システム向け制御・監視ソフトウェア。機器設置、システム設定、実環境テストを担当。",
        proj_prodmgmt: "日本パートナーとの生産管理システム。進捗管理、2D/3Dチャート、日本品質基準に準拠した統計レポート。",
        proj_medda: "医療アプリ：医師とのライブチャット、予約管理、診療記録追跡、服薬リマインダー。UXと医療データ精度に注力。",
        proj_network: "インフラ設計：LAN、内線TEL、ラック、UPS、スイッチ、ファイアウォール、APカメラ。IPおよびVLAN全体設計。",
        sec_contact: "05 — 連絡先",
        contact_desc: "面白いプロジェクトや機会があればぜひご連絡ください！",
        about_loc: "タインスアン区、ハノイ、ベトナム",
        scroll: "スクロール",
        about_edu: "郵便通信工科大学（PTIT）<br>情報システム学科、2017–2022",
    },
    zh: {
        nav_about: "关于我", nav_skills: "技能", nav_exp: "经验",
        nav_projects: "项目", nav_contact: "联系",
        name_line1: "NGUYEN QUANG", name_line2: "HUY",
        hero_role: "物联网系统工程师 · iOS开发者 · 全栈开发者",
        status_text: "寻找新机会",
        hero_desc: "热衷于构建智能IoT解决方案和高质量应用程序的软件工程师。",
        btn_contact: "联系我", btn_work: "查看作品",
        sec_about: "01 — 关于我",
        about_p1: "你好！我是<strong>Nguyen Quang Huy</strong>，毕业于越南邮政电信学院（PTIT）信息系统专业的软件工程师。",
        about_p2: "目前在<strong>MINHVIET., JSC</strong>担任IoT系统工程师，专注于LoRaWAN技术的物联网解决方案研究与部署。",
        about_p3: "我热衷于通过智能技术解决现实问题——从嵌入式设备到云端应用程序。",
        stat_yoe: "年工作经验", stat_proj: "实际项目数",
        stat_tech: "技术栈", stat_intl: "国际经验",
        sec_skills: "02 — 技能", cat_lang: "编程语言",
        cat_tools: "工具 & IDE", cat_platforms: "平台 & 框架",
        sec_exp: "03 — 工作经历",
        role_freelance: "自由职业开发者", period_freelance: "2025年 — 至今",
        desc_freelance_1: "全栈Web开发：前端、API、数据库",
        desc_freelance_2: "按需开发移动应用（iOS、Android）",
        desc_freelance_3: "跨平台桌面应用（macOS、Windows）",
        desc_freelance_4: "开发自动化工具优化工作流程",
        role_minhviet: "IoT系统工程师", period_minhviet: "2023年7月 — 至今",
        desc_mv_1: "使用LoRaWAN技术研发IoT系统（服务器、云端、网关、传感器等）",
        desc_mv_2: "为实际环境安装和优化IoT设备软件",
        desc_mv_3: "应用AI工具加速问题解决和任务完成",
        desc_mv_4: "研究远程医疗解决方案及IT无线广播系统",
        desc_mv_5: "设计和部署LAN/TEL网络系统",
        role_beetech: "iOS开发工程师", period_beetech: "2022年11月 — 2023年7月",
        desc_bt_1: "采用Agile / Scrum模式开发和优化系统功能",
        desc_bt_2: "熟练掌握RESTful API、Git、GitLab/GitHub",
        desc_bt_3: "有与日本客户合作经验，严格遵守QA流程",
        role_alobridge: "iOS开发实习生", period_alobridge: "2022年7月 — 2022年10月",
        desc_al_1: "使用Swift、UIKit、SwiftUI开发iOS界面",
        desc_al_2: "应用设计模式：MVP、MVC、MVVM、VIPER",
        desc_al_3: "使用Core Data及Apple推荐框架",
        role_vnpt: "Web开发实习生", period_vnpt: "2021年5月 — 2021年7月",
        desc_vn_1: "使用HTML、CSS、JavaScript和VueJS开发维护网站",
        desc_vn_2: "API集成、响应式UI设计及用户体验优化",
        sec_projects: "04 — 项目",
        proj_thingsawake: "完整LoRaWAN IoT系统：网关、终端设备、桥接器、传感器集线器。已在河内、岘港、胡志明市部署。支持智慧农场及智能家居。平台：Web + Android + iOS。",
        proj_scada: "胡志明市第8区潮汐闸门系统的控制与监控软件。负责设备安装、系统配置和实地测试。",
        proj_prodmgmt: "与日本合作伙伴联合开发的生产管理系统。进度跟踪、2D/3D图表、符合日本质量标准的统计报告。",
        proj_medda: "医疗健康应用：与医生实时聊天、预约管理、病历追踪、服药提醒。注重用户体验和医疗数据准确性。",
        proj_network: "基础设施设计：LAN、内线电话、机柜、UPS、交换机、防火墙、接入点、摄像头。完整IP与VLAN规划。",
        sec_contact: "05 — 联系我",
        contact_desc: "有有趣的项目或合作机会？欢迎随时联系！",
        about_loc: "清春郡，河内，越南",
        scroll: "向下滚动",
        about_edu: "越南邮政电信学院（PTIT）<br>信息系统专业，2017–2022",
    }
};

function changeLanguage(lang) {
    if (!translations[lang]) lang = 'vi';
    localStorage.setItem('preferred_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = (translations[lang] && translations[lang][key])
            ? translations[lang][key]
            : (translations['vi'][key] || '');
        if (val) el.innerHTML = val;
    });

    // Handle exp list items with individual data-i18n keys
    // (already handled by the loop above since li also uses data-i18n)

    const icons = { vi: '🇻🇳', en: '🇺🇸', zh: '🇨🇳', ja: '🇯🇵' };
    const langIcon = document.getElementById('current-lang-icon');
    const langText = document.getElementById('current-lang-text');
    if (langIcon) langIcon.innerText = icons[lang] || '🌐';
    if (langText) langText.innerText = lang.toUpperCase();
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    // Default: Vietnamese
    const savedLang = localStorage.getItem('preferred_lang') || 'vi';
    changeLanguage(savedLang);
});

function toggleFloatMenu() {
  const btn  = document.getElementById('floatBtn');
  const menu = document.getElementById('floatMenu');
  btn.classList.toggle('open');
  menu.classList.toggle('open');
}
 
// Close when clicking outside
document.addEventListener('click', (e) => {
  const fc = document.getElementById('floatContact');
  if (fc && !fc.contains(e.target)) {
    document.getElementById('floatBtn')?.classList.remove('open');
    document.getElementById('floatMenu')?.classList.remove('open');
  }
});
 
// WeChat: copy ID to clipboard
function copyWechat(e) {
  e.preventDefault();
  navigator.clipboard.writeText('nqh_1999').then(() => {
    const label = document.getElementById('wechatLabel');
    if (label) {
      label.textContent = '✓ Copied!';
      setTimeout(() => { label.textContent = 'WeChat'; }, 2000);
    }
  });
}