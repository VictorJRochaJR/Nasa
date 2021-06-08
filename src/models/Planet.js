export class Planet {
  constructor(data) {
    this.date = data.date
    this.explanation = data.explanation
    this.title = data.title
    this.imgUrl = data.url || data.hdurl
  }
}
