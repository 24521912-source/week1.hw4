const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="vi">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>My Node.js Blog</title>

      <style>

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: Arial, sans-serif;

          background: #070a12;

          color: white;

          line-height: 1.6;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        /* NAVBAR */

        header {
          position: fixed;

          top: 0;
          left: 0;

          width: 100%;

          z-index: 1000;

          background: rgba(7, 10, 18, 0.85);

          backdrop-filter: blur(15px);

          border-bottom:
            1px solid rgba(255,255,255,0.08);
        }

        nav {
          width: min(1100px, 90%);

          height: 72px;

          margin: auto;

          display: flex;

          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
        }

        .logo span {
          color: #a78bfa;
        }

        .menu {
          display: flex;

          gap: 30px;
        }

        .menu a {
          color: #9ca3af;

          font-size: 14px;

          transition: 0.3s;
        }

        .menu a:hover {
          color: #a78bfa;
        }

        /* HERO */

        .hero {
          min-height: 100vh;

          padding-top: 100px;

          display: flex;
          align-items: center;

          background:
            radial-gradient(
              circle at 75% 30%,
              rgba(124, 58, 237, 0.25),
              transparent 30%
            ),
            #070a12;
        }

        .container {
          width: min(1100px, 90%);

          margin: auto;
        }

        .hero-grid {
          display: grid;

          grid-template-columns: 1.2fr 0.8fr;

          gap: 70px;

          align-items: center;
        }

        .mini-title {
          color: #a78bfa;

          font-size: 12px;

          letter-spacing: 2px;

          margin-bottom: 15px;
        }

        .hero h1 {
          font-size: 65px;

          line-height: 1.05;

          margin-bottom: 20px;
        }

        .hero h1 span {
          display: block;

          color: #a78bfa;
        }

        .hero p {
          color: #949bad;

          max-width: 570px;

          margin-bottom: 30px;
        }

        .buttons {
          display: flex;

          gap: 12px;
        }

        .btn {
          display: inline-block;

          padding: 13px 22px;

          border-radius: 10px;

          transition: 0.3s;
        }

        .primary {
          background:
            linear-gradient(
              135deg,
              #8b5cf6,
              #6366f1
            );
        }

        .secondary {
          border: 1px solid #292f40;
        }

        .btn:hover {
          transform: translateY(-4px);
        }

        /* PROFILE */

        .profile {
          padding: 14px;

          border-radius: 24px;

          border:
            1px solid rgba(255,255,255,0.1);

          background: #0e131e;

          box-shadow:
            0 30px 70px rgba(0,0,0,0.4);

          animation: floating 4s
            ease-in-out infinite;
        }

        @keyframes floating {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }

        }

        .profile img {
          width: 100%;

          height: 360px;

          object-fit: cover;

          border-radius: 18px;
        }

        .profile-info {
          padding: 18px 5px 5px;
        }

        .profile-info p {
          margin: 4px 0 0;

          font-size: 13px;
        }

        /* STATS */

        .stats {
          background: #0b0f18;

          border-top: 1px solid #202532;

          border-bottom: 1px solid #202532;
        }

        .stats-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);
        }

        .stat {
          padding: 30px;

          text-align: center;

          transition: 0.3s;
        }

        .stat:hover {
          background: #111622;
        }

        .stat strong {
          display: block;

          color: #a78bfa;

          font-size: 26px;
        }

        .stat span {
          color: #818899;

          font-size: 12px;
        }

        /* SECTION */

        section.content {
          padding: 100px 0;
        }

        .section-title {
          text-align: center;

          margin-bottom: 50px;
        }

        .section-title span {
          color: #a78bfa;

          font-size: 11px;

          letter-spacing: 2px;
        }

        .section-title h2 {
          margin-top: 8px;

          font-size: 40px;
        }

        .section-title p {
          margin-top: 10px;

          color: #8990a2;
        }

        /* CARDS */

        .cards {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 20px;
        }

        .card {
          padding: 28px;

          border-radius: 18px;

          border: 1px solid #222837;

          background: #0e131e;

          transition: 0.35s;
        }

        .card:hover {
          transform: translateY(-8px);

          border-color: #8b5cf6;

          box-shadow:
            0 20px 40px rgba(0,0,0,0.25);
        }

        .card .icon {
          font-size: 35px;

          margin-bottom: 20px;
        }

        .card h3 {
          margin-bottom: 10px;
        }

        .card p {
          color: #8f96a8;

          font-size: 13px;
        }

        /* PROJECT */

        .projects {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 20px;
        }

        .project {
          overflow: hidden;

          border-radius: 18px;

          background: #0e131e;

          border: 1px solid #222837;

          transition: 0.35s;
        }

        .project:hover {
          transform: translateY(-8px);

          border-color: #8b5cf6;
        }

        .project img {
          width: 100%;

          height: 190px;

          object-fit: cover;
        }

        .project-body {
          padding: 22px;
        }

        .project-body p {
          color: #8f96a8;

          font-size: 13px;

          margin-top: 10px;
        }

        .tags {
          display: flex;

          gap: 7px;

          margin-top: 15px;
        }

        .tags span {
          padding: 5px 9px;

          border-radius: 6px;

          color: #c4b5fd;

          background:
            rgba(124,58,237,0.15);

          font-size: 10px;
        }

        /* CONTACT */

        .contact {
          padding: 50px;

          border-radius: 25px;

          border:
            1px solid rgba(139,92,246,0.4);

          background:
            radial-gradient(
              circle at 10%,
              rgba(124,58,237,0.18),
              transparent 35%
            ),
            #0d111b;
        }

        .contact h2 {
          font-size: 38px;

          margin-bottom: 15px;
        }

        .contact p {
          max-width: 600px;

          color: #9097a8;

          margin-bottom: 25px;
        }

        /* FOOTER */

        footer {
          padding: 30px;

          text-align: center;

          border-top: 1px solid #202532;

          color: #747b8d;

          font-size: 12px;
        }

        /* RESPONSIVE */

        @media(max-width: 850px) {

          .menu {
            display: none;
          }

          .hero-grid {
            grid-template-columns: 1fr;

            text-align: center;
          }

          .buttons {
            justify-content: center;
          }

          .hero p {
            margin-left: auto;
            margin-right: auto;
          }

          .profile {
            max-width: 380px;

            margin: auto;
          }

          .stats-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .cards,
          .projects {
            grid-template-columns: 1fr;
          }

        }

      </style>

    </head>


    <body>

      <header>

        <nav>

          <a href="#" class="logo">
            <span>N</span>Blog
          </a>

          <div class="menu">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </nav>

      </header>


      <!-- HERO -->

      <section class="hero" id="home">

        <div class="container hero-grid">

          <div>

            <div class="mini-title">

              NODE.JS PERSONAL WEBSITE

            </div>

            <h1>

              Xin chào,
              <span>mình là Nguyễn Thị Cẩm Tú.</span>

            </h1>

            <p>

              Mình là sinh viên yêu thích
              lập trình, Web Development,
              Artificial Intelligence và
              Data Science.

              Đây là website cá nhân được
              chạy bằng Node.js.

            </p>

            <div class="buttons">

              <a
                href="#about"
                class="btn primary">

                Khám phá →

              </a>

              <a
                href="#projects"
                class="btn secondary">

                Xem Project

              </a>

            </div>

          </div>


          <div class="profile">

            <img
              src="https://avatarngau.sbs/wp-content/uploads/2025/05/avatar-minions-1.jpg"
              alt="avatar"
            >

            <div class="profile-info">

              <h3>Your Name</h3>

              <p>
                Information Technology Student
              </p>

            </div>

          </div>

        </div>

      </section>


      <!-- STATS -->

      <section class="stats">

        <div class="container stats-grid">

          <div class="stat">
            <strong>10+</strong>
            <span>Projects</span>
          </div>

          <div class="stat">
            <strong>5+</strong>
            <span>Technologies</span>
          </div>

          <div class="stat">
            <strong>20+</strong>
            <span>Blog Posts</span>
          </div>

          <div class="stat">
            <strong>∞</strong>
            <span>Coffee</span>
          </div>

        </div>

      </section>


      <!-- ABOUT -->

      <section
        class="content"
        id="about">

        <div class="container">

          <div class="section-title">

            <span>ABOUT ME</span>

            <h2>
              Một chút về mình
            </h2>

            <p>
              Những thứ mình đang học
              và quan tâm.
            </p>

          </div>


          <div class="cards">

            <div class="card">

              <div class="icon">
                🎓
              </div>

              <h3>
                Education
              </h3>

              <p>
                Information Technology
                Student.
              </p>

            </div>


            <div class="card">

              <div class="icon">
                💻
              </div>

              <h3>
                Development
              </h3>

              <p>
                Web Development,
                Node.js và JavaScript.
              </p>

            </div>


            <div class="card">

              <div class="icon">
                🤖
              </div>

              <h3>
                Artificial Intelligence
              </h3>

              <p>
                Machine Learning,
                AI và Data Science.
              </p>

            </div>

          </div>

        </div>

      </section>


      <!-- PROJECTS -->

      <section
        class="content"
        id="projects"
        style="background:#0b0f18">

        <div class="container">

          <div class="section-title">

            <span>
              MY PROJECTS
            </span>

            <h2>
              Dự án nổi bật
            </h2>

          </div>


          <div class="projects">

            <div class="project">

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
              >

              <div class="project-body">

                <h3>
                  University Finder
                </h3>

                <p>
                  Website tìm kiếm thông tin
                  trường đại học.
                </p>

                <div class="tags">

                  <span>Node.js</span>

                  <span>HTML</span>

                  <span>CSS</span>

                </div>

              </div>

            </div>


            <div class="project">

              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80"
              >

              <div class="project-body">

                <h3>
                  AI Recommendation
                </h3>

                <p>
                  Hệ thống gợi ý sử dụng
                  trí tuệ nhân tạo.
                </p>

                <div class="tags">

                  <span>AI</span>

                  <span>Python</span>

                </div>

              </div>

            </div>


            <div class="project">

              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
              >

              <div class="project-body">

                <h3>
                  Data Dashboard
                </h3>

                <p>
                  Phân tích và trực quan
                  hóa dữ liệu.
                </p>

                <div class="tags">

                  <span>Data</span>

                  <span>Analytics</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <!-- CONTACT -->

      <section
        class="content"
        id="contact">

        <div class="container">

          <div class="contact">

            <div class="mini-title">
              GET IN TOUCH
            </div>

            <h2>
              Hãy kết nối với mình.
            </h2>

            <p>
              Nếu bạn muốn trao đổi về
              công nghệ, lập trình hoặc
              cùng thực hiện một dự án,
              hãy liên hệ với mình.
            </p>

            <a
              href="mailto:yourname@gmail.com"
              class="btn primary">

              Gửi Email

            </a>

          </div>

        </div>

      </section>


      <footer>

        © 2026 My Node.js Website

      </footer>

    </body>

    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});