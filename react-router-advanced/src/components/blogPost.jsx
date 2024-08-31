//dynamic routing for handling variable paths like blogpost and user profiles

import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      {/* Fetch and display blog post content based on the ID */}
    </div>
  );
}

export default BlogPost;
