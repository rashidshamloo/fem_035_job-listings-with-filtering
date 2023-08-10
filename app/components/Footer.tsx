// styled components
import {
  FooterContainer,
  FooterList,
  FooterInfo,
} from './styled/Footer.styled';

// icons
import {
  BsGithub,
  BsFillBriefcaseFill,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { BiLogoDevTo } from 'react-icons/bi';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <p>
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          .
        </p>
        <p>Coded by Rashid Shamloo.</p>
      </FooterInfo>
      <FooterList>
        <li>
          <a
            href="https://www.rashidshamloo.ir"
            title="Portfolio"
            target="_blank"
          >
            <BsFillBriefcaseFill />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rashidshamloo"
            title="GitHub"
            target="_blank"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rashid-shamloo/"
            title="LinkedIn"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/rashidshamloo"
            title="Twitter"
            target="_blank"
          >
            <BsTwitter />
          </a>
        </li>
        <li>
          <a href="https://dev.to/rashidshamloo" title="Blog" target="_blank">
            <BiLogoDevTo size={21} />
          </a>
        </li>
      </FooterList>
    </FooterContainer>
  );
};

export default Footer;
