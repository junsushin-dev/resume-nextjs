import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'RESUME of Junsu Shin';
const description = 'This is a simple web resume for Junsu Shin.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '준수',
        lastName: '신',
        username: 'junsushin-dev',
        gender: 'male',
      },
    },
  },
};
