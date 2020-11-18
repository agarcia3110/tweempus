export class Author {

  private _id: string;
  private _url: string;
  private _fullName: string;
  private _image: string;

  constructor(id: string, url: string, fullName: string, image: string) {
    this._id = id;
    this._url = url;
    this._fullName = fullName;
    this._image = image;
  }

  get id(): string {
    return this._id;
  }

  get url(): string {
    return this._url;
  }

  get fullName(): string {
    return this._fullName;
  }

  get image(): string {
    return this._image;
  }

  set id(id: string) {
    this._id = id;
  }

  set url(url: string) {
    this._url = url;
  }

  set fullName(fullName: string) {
    this._fullName = fullName;
  }

  set image(image: string) {
    this._image = image;
  }
}
