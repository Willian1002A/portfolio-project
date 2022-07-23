import { useRouter } from 'next/router';
// import Header from "../components/Header";
import Header from "../components/Header/index";
// import Header from "../components/Header2";
import Footer from "../components/Footer";
import Project from "../components/Project";
import LinkA from "../components/LinkA";
import homeContentPt from "../assets/languages/pt/home.json"
import homeContentEn from "../assets/languages/en/home.json"
import homeContentEs from "../assets/languages/es/home.json"
export default function Home() {
  const { query } = useRouter();
  let hrefAtrib = "";
  if(query.idioma){
      hrefAtrib = "?idioma=" + query.idioma;
  }
  let homeContentTranslated = homeContentPt;
  switch(query.idioma){
    case "PT":
      homeContentTranslated = homeContentPt;
      break;
    case "EN":
      homeContentTranslated = homeContentEn;
      break;
    case "ES":
      homeContentTranslated = homeContentEs;
      break
  }
  const project = homeContentTranslated.featuredProjectsDiv.featuredProjects.Project;
  return (
    <div className="Background">
      <Header />
      <div className="perfil">
          <div id="photo" />
          <h1>Willian A. S. D&apos;Amico</h1>
          <p>{homeContentTranslated.perfil.description}</p>
          <div className="socialMedias">
            <LinkA href="https://www.linkedin.com/in/willian-anderson-suriz-d-amico-716b831a8/" className="socialIcon">
              <svg id="linkedin" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </LinkA>
            <LinkA href="mailto:wasdamico@gmail.com" className="socialIcon">
              <svg id="gmail" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Gmail</title>
                <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </LinkA>
            <LinkA href="https://github.com/Willian1002A" className="socialIcon">
              <svg id="gitHub" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path fill="#181717" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </LinkA>
            <LinkA href="/" className="socialIcon">
              <svg id="discord" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Discord</title>
                <path fill="#5865F2" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
            </LinkA>
            <LinkA href="https://steamcommunity.com/profiles/76561198078624054" className="socialIcon">
              <svg id="steam" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Steam</title>
                <path fill="#000000" d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
              </svg>
            </LinkA>
          </div>
      </div>
      <div id="about">
        <h1>{homeContentTranslated.about.h1}</h1>
        <p>{homeContentTranslated.about.p[0]}</p>
        <p>{homeContentTranslated.about.p[1]}</p>
        <p>{homeContentTranslated.about.p[2]}</p>
      </div>
      <div id="featuredProjects">
        <div className="titleSeeMoreRegion">
          <h1>{homeContentTranslated.featuredProjectsDiv.titleSeeMore.h1}</h1>
          <LinkA href={`/${homeContentTranslated.featuredProjectsDiv.titleSeeMore.seeMore.Link.href + hrefAtrib}`} className="seeMore">
            {homeContentTranslated.featuredProjectsDiv.titleSeeMore.seeMore.Link.a}
          </LinkA>
        </div>
        <div className="content">
          {project.map((item,index) => (
            <Project key={index} title={item.title} href={item.href + hrefAtrib} imgClass={item.imgClass}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}