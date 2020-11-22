import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'GitHub Issue Tracker Clone 프로젝트',
      startedAt: '2020-10',
      endedAt: '2020-11',
      where: '부스트캠프 멤버십 2020 과정',
      descriptions: [
        { content: 'Passport.js & JWT 기반 로그인 API 구현' },
        {
          content: 'React 기반의 사용자 페이지 구현',
          descriptions: [
            { content: 'Context API & Hooks 기반의 재사용 가능 Sidebar 컴포넌트 구현' },
          ],
        },
        {
          content: 'GitHub Actions 기반의 CI/CD 환경 구축',
          descriptions: [
            { content: 'eslint를 이용한 정적 코드분석' },
            {
              content: 'ssh 접속과 GitHub Secrets를 이용한 자동배포',
            },
          ],
        },
        { content: 'iOS & Web Client 범용 API 개발' },
      ],
    },
    {
      title: 'KOSDAQ Overnight 자동매매 서버 프로젝트',
      startedAt: '2019-04',
      endedAt: '2019-06',
      where: '고려대학교 금융빅데이터 학회 FBA',
      descriptions: [
        { content: 'Overnight 전략에 따른 주식 매매 알고리즘 구현' },
        { content: '대신증권 Creon API를 기반으로 매수 / 매도 자동화' },
        { content: 'AWS EC2, Windows Server 2012 R2를 기반으로 한 서버 구축' },
      ],
    },
  ],
};

export default project;
