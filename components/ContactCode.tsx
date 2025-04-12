import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'bryanwills.dev',
    href: 'https://bryanwills.dev',
  },
  {
    social: 'email',
    link: 'bryanwi09@gmail.com',
    href: 'mailto:bryanwi09@gmail.com',
  },
  {
    social: 'github',
    link: 'bryanwills',
    href: 'https://github.com/bryanwills',
  },
  {
    social: 'linkedin',
    link: 'bryan-wills',
    href: 'https://www.linkedin.com/in/bryan-wills/',
  },
  {
    social: 'twitter',
    link: 'iamnitinr',
    href: 'https://www.twitter.com/iamnitinr',
  },
  {
    social: 'telegram',
    link: 'bryan_wills',
    href: 'https://t.me/bryan_wills',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
