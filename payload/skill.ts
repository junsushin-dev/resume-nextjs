import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
    },
    {
      title: 'Express.js',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'Sequelize',
    },
    {
      title: 'Passport.js',
    },
    {
      title: 'Naver Cloud Platform',
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'JavaScript(ES6)',
    },
    {
      title: 'React',
    },
    {
      title: 'Sass',
    },
    {
      title: 'HTML/CSS',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Git / GitHub',
    },
    {
      title: 'GitHub Actions CI/CD',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, frontend, etc],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
  tooltip: '사용할 수 있는 기술 스택을 정리한 섹션입니다.'
};

export default skill;
