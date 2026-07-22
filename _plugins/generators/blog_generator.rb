module Axomiya
  class BlogGenerator < Jekyll::Generator
    priority :high
    safe true
    
    def generate(site)
      @site = site
      @config = site.config['blog_generator'] || {}
      
      generate_category_pages if @config['auto_categories']
      generate_author_pages if @config['auto_authors']
      generate_related_posts if @config['related_posts']
    end
    
    private
    
    def generate_category_pages
      categories = {}
      @site.posts.docs.each do |post|
        next unless post.data['categories']
        Array(post.data['categories']).each do |category|
          categories[category] ||= []
          categories[category] << post
        end
      end
      
      categories.each do |category, posts|
        page = Jekyll::PageWithoutAFile.new(@site, @site.source, 'blog/category', "#{category}.html")
        page.data['title'] = "Category: #{category}"
        page.data['posts'] = posts
        page.data['layout'] = 'category'
        page.content = "{% include sections/category_posts.html %}"
        @site.pages << page
      end
    end
    
    def generate_author_pages
      authors = {}
      @site.posts.docs.each do |post|
        next unless post.data['author']
        authors[post.data['author']] ||= []
        authors[post.data['author']] << post
      end
      
      authors.each do |author, posts|
        page = Jekyll::PageWithoutAFile.new(@site, @site.source, 'blog/author', "#{author}.html")
        page.data['title'] = "Posts by #{author}"
        page.data['posts'] = posts
        page.data['layout'] = 'author'
        page.content = "{% include sections/author_posts.html %}"
        @site.pages << page
      end
    end
    
    def generate_related_posts
      @site.posts.docs.each do |post|
        related = @site.posts.docs.select do |other|
          other != post && 
          other.data['categories'] && post.data['categories'] &&
          (Array(other.data['categories']) & Array(post.data['categories'])).any?
        end
        post.data['related_posts'] = related.take(5)
      end
    end
  end
end