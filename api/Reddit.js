export class Reddit {
  static async get(tag) {
    try {
      const response = await fetch(
        `https://www.reddit.com/subreddits/search.json?q=${tag}`
      );
      const responseJson = await response.json();
      return responseJson.data.children;
    } catch (e) {
      throw e;
    }
  }
}
