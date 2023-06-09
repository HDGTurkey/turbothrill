import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import BlogDetailContainer from '../../app/Components/Blogs/BlogDetailContainer';
import BlogClassicData from '../../app/data/blog/BlogClassic.json';
import { useRouter } from 'next/router';

interface Blog {
  slug_title: string;
}

const BlogDetail: React.FC = () => {
  //const { title } = useParams<{ title: string }>();
  const router = useRouter();
  const lowercaseTitle = router.query.slug?.toString().toLowerCase();
  console.log(lowercaseTitle);
  
  const data = BlogClassicData.filter((blog: Blog) => blog.slug_title === lowercaseTitle);

  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
  });

  useEffect(() => {
    
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <animated.div style={animationProps}>
      <BlogDetailContainer blogData={data[0]} />
    </animated.div>
  );
}

export default BlogDetail;
