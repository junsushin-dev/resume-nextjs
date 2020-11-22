import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '고려대학교',
      subTitle: '경영학과 / 컴퓨터학과(이중전공) 학사 졸업',
      startedAt: '2012-03',
      endedAt: '2019-08',
    },
    {
      title: 'The University of British Columbia (UBC)',
      subTitle: 'Exchange Student in Business School / Computer Science Dept.',
      startedAt: '2018-09',
      endedAt: '2018-12',
    },
    {
      title: '대원외국어고등학교',
      subTitle: '졸업',
      startedAt: '2008-03',
      endedAt: '2011-02',
    },
  ],
};

export default education;
