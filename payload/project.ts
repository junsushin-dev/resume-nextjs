import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'GitHub IssueTracker Clone 프로젝트',
      startedAt: '2020-10',
      endedAt: '2020-11',
      where: '부스트캠프 멤버십 2020 과정',
      descriptions: [
        { 
          content: '링크: https://github.com/junsushin-dev/IssueTracker-13',
          href: 'https://github.com/junsushin-dev/IssueTracker-13'
        },
        { content: '개발환경: JavaScript(ES6), Node.js, React' },
        { content: '주요기술: Passport.js, Sequelize, GitHub Actions, React Context API & Hooks' },
        { 
          content: '담당역할',
          descriptions: [
            { content: 'Passport.js & JWT 기반 로그인 API 구현' },
            { content: 'iOS & Web Client 동시 대응 및 협업' },
            { content: 'React Context API & Hooks 기반의 재사용 가능 Sidebar 컴포넌트 구현' },
            {
              content: 'GitHub Actions 기반의 CI/CD 환경 구축',
              descriptions: [
                { content: 'Eslint를 이용한 정적 코드분석' },
                {
                  content: 'SSH 접속과 Encrypted secrets를 이용한 자동배포',
                },
              ],
            },
          ]
        },
      ],
    },
    {
      title: 'KOSDAQ Overnight 자동매매 서버 프로젝트',
      startedAt: '2019-04',
      endedAt: '2019-06',
      where: '고려대학교 금융빅데이터 학회 FBA',
      descriptions: [
        { 
          content: '링크: https://github.com/junsushin-dev/kosdaq_overnight',
          href: 'https://github.com/junsushin-dev/kosdaq_overnight'
        },
        { content: '개발환경: Python' },
        { content: '주요기술: 대신증권 API, AWS EC2, Windows Server 2012, pywinauto'},
        { 
          content: '담당역할',
          descriptions: [
            { content: 'Overnight 전략에 따른 주식 매매 알고리즘 구현' },
            { content: '대신증권 Creon API를 기반으로 매수 / 매도 자동화' },
            { content: 'AWS EC2, Windows Server 2012 R2를 기반으로 한 서버 구축' },
          ]
        }
      ],
    },
  ],
};

export default project;
