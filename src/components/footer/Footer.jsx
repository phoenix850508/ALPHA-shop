import logo from "../../assets/icons/logo.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
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
          <img className={styles.navIcon} src={logo} alt="logo.svg" />
        </div>
        <FooterSection sectionTitle={"客戶服務"}>
          {/* eslint-disable-next-line */}
          <a className="page-link" href="#">
            運送說明
          </a>
          {/* eslint-disable-next-line */}
          <a className="page-link" href="#">
            退換貨相關
          </a>
          {/* eslint-disable-next-line */}
          <a className="page-link" href="#">
            付款資訊
          </a>
          {/* eslint-disable-next-line */}
          <a className="page-link" href="#">
            FAQ
          </a>
        </FooterSection>
        <FooterSection sectionTitle={"關於我們"}>
          {/* eslint-disable-next-line */}
          <a className="page-link" href="#">
            品牌故事
          </a>
          {/* eslint-disable-next-line */}
          <a className="page-link" href="#">
            媒體聯繫
          </a>
          {/* eslint-disable-next-line */}
          <a className="page-link" href="#">
            Press kit
          </a>
        </FooterSection>
        <FooterSection sectionTitle={"資訊"}>
          {/* eslint-disable-next-line */}
          <a className="page-link" href="#">
            隱私權政策
          </a>
          {/* eslint-disable-next-line */}
          <a className="page-link" href="#">
            Cookie
          </a>
          {/* eslint-disable-next-line */}
          <a className="page-link" href="#">
            GDPR
          </a>
        </FooterSection>
        <FooterSection sectionTitle={"追蹤 ALPHA Shop"}>
          <div className="tel-info">+886 02123-45678</div>
          <div className={`social-icon-group ${styles.socialIconGroup}`}>
            <img
              className={styles.socialIcon}
              src={facebook}
              alt="facebook.svg"
            />
            <img
              className={styles.socialIcon}
              src={instagram}
              alt="instagram.svg"
            />
            <img
              className={styles.socialIcon}
              src={whatsapp}
              alt="whatsapp.svg"
            />
          </div>
        </FooterSection>
      </div>
    </footer>
  );
}
