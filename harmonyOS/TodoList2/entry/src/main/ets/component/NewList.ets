@Component
export default  struct NewsList{
  private currentIndex:string='国际'

  build(){
    if(this.currentIndex=='国际'){
      Text('国际新闻')
    }else if(this.currentIndex=='国内'){
      Text('国内新闻')
    }else if(this.currentIndex=='军事'){
      Text('军事新闻')
    }else{
      Text('科技新闻')
    }

  }
}