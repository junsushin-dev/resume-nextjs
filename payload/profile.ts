import { faBirthdayCake, faBookmark, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '신준수',
    small: '(Junsu Shin)',
  },
  contact: [
    {
      title: '1993.02.03',
      icon: faBirthdayCake,
    },
    // {
    //   title: 'junsushin4546@gmail.com',
    //   link: 'mailto:junsushin4546@gmail.com',
    //   icon: faEnvelope,
    // },
    // {
    //   title: 'Please contact me by email',
    //   icon: faPhone,
    //   badge: true,
    // },
    {
      title: 'https://github.com/junsushin-dev',
      link: 'https://github.com/junsushin-dev',
      icon: faGithub,
    },
    {
      link: 'https://junsushin.tistory.com',
      icon: faBookmark,
    },
  ],
  notice: {
    title: "자세한 포트폴리오는 'https://github.com/junsushin-dev'를 방문해 주시기 바랍니다.",
    icon: faBell,
  },
};

export default profile;
