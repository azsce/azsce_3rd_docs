import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type CourseItem = {
  title: string;
  image: string;
  uri: string;
};

const CourseList: CourseItem[] = [
  {
    title: 'مجسات ومحولات قدرة',
    image: '/img/sesnors.png',
    uri: '/docs/مجسات%20ومحولات%20طااقة/sensors_intro',
  },
];

function CourseCard({title, image, uri}: Readonly<CourseItem>) {
  const imageUrl = useBaseUrl(image);
  
  return (
    <div className={clsx('col col--4')}>
      <Link to={uri} className={styles.courseCard}>
        <div className={styles.courseImageContainer}>
          <img src={imageUrl} alt={title} className={styles.courseImage} />
        </div>
        <div className={styles.courseContent}>
          <Heading as="h3">{title}</Heading>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CourseList.map((props, idx) => (
            <CourseCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
