import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '부스트캠프 멤버십 2020 과정',
      position: '네이버 커넥트재단',
      startedAt: '2020-08',
      descriptions: [],
      // skillKeywords: ['Node.js', 'TypeScript', 'Express.js', 'NCP'],
    },
    {
      title: '부스트캠프 챌린지 2020 과정 (4주)',
      position: '네이버 커넥트재단',
      startedAt: '2020-07',
      endedAt: '2020-08',
      descriptions: [
        '소프트웨어 공학 지식을 요구하는 문제를 매일 정해진 시간 내에 JavaScript(ES6) 기반 코드로 해결',
        '매주 금요일 다른 프로젝트를 이어받아 개발하는 \'릴레이 프로젝트\' 수행',
        '구현 기능: 사용자 프로필사진에 기반한 동물상 분석',
        '기술 스택: Google Teachable Machine'
      ],
      skillKeywords: ['Node.js', 'MySQL', 'JavaScript'],
    },
    {
      title: '삼성SDS 2019년 동계 대학생 알고리즘 특강 (2주)',
      position: '삼성SDS',
      startedAt: '2019-01',
      endedAt: '2019-01',
      descriptions: [
        '자료구조, 그래프, 정수론, 조합론, 동적계획법에 대한 이론 학습',
        '위 학습 이론에 기반한 알고리즘 문제를 Baekjoon Online Judge를 사용하여 풀이',
        '교육 이수 후 삼성SDS SW역량테스트 Professional Level 응시'
      ],
      skillKeywords: ['Java', 'Data Structures', 'Algorithms', 'Problem Solving'],
    },
  ],
};

export default experience;
