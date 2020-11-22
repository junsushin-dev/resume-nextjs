import { IIntroduce } from '../component/introduce/IIntroduce';
import { author, lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: true,

  contents: [
    '\'같이 일하고 싶은 개발자\'를 지향합니다.'
  ],
  // sign: 'Junsu shin',
  sign: author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
