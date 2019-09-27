import posts from '../models/posts';

class PostController {
  static async getPosts(request, response) {
    return response.json({
      data: posts,
    });
  }
}

export default PostController;
