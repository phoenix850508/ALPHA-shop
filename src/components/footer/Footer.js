import logo from "../../icons/logo.svg";
import facebook from "../../icons/facebook.svg";
import instagram from "../../icons/instagram.svg";
import whatsapp from "../../icons/whatsapp.svg";
import styles from "../styles/Footer.module.scss";

export function FooterSection({ sectionTitle, children }) {
  return (
    <section className="footer-section">
      <h2 className={`section-title ${styles.sectionTitle}`}>{sectionTitle}</h2>
      <div className={`section-content ${styles.sectionContent}`}>
        {children}
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className={`site-footer ${styles.siteFooter}`}>
      <div className={`footer-container ${styles.footerContainer}`}>
        <div className={`footer-logo-container ${styles.footerLogoContainer}`}>
          <img className="nav-icon cursor-point" src={logo} alt="logo.svg" />
        </div>
        <FooterSection sectionTitle={"客戶服務"}>
          <a className="page-link" href="#">
            運送說明
          </a>
          <a className="page-link" href="#">
            退換貨相關
          </a>
          <a className="page-link" href="#">
            付款資訊
          </a>
          <a className="page-link" href="#">
            FAQ
          </a>
        </FooterSection>
        <FooterSection sectionTitle={"關於我們"}>
          <a className="page-link" href="#">
            品牌故事
          </a>
          <a className="page-link" href="#">
            媒體聯繫
          </a>
          <a className="page-link" href="#">
            Press kit
          </a>
        </FooterSection>
        <FooterSection sectionTitle={"資訊"}>
          <a className="page-link" href="#">
            隱私權政策
          </a>
          <a className="page-link" href="#">
            Cookie
          </a>
          <a className="page-link" href="#">
            GDPR
          </a>
        </FooterSection>
        <FooterSection sectionTitle={"追蹤 ALPHA Shop"}>
          <div className="tel-info">+886 02123-45678</div>
          <div className={`social-icon-group ${styles.socialIconGroup}`}>
            <img
              className="social-icon cursor-point"
              src={facebook}
              alt="facebook.svg"
            />
            <img
              className="social-icon cursor-point"
              src={instagram}
              alt="instagram.svg"
            />
            <img
              className="social-icon cursor-point"
              src={whatsapp}
              alt="whatsapp.svg"
            />
          </div>
        </FooterSection>
      </div>
    </footer>
  );
}
