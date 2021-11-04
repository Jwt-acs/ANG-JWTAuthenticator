export class AppSettings {
  furl :any;
  static getUrl() {

    this.furl = 'http://localhost/jwtapi'; 
    //throw new Error("Method not implemented.");
    return this.furl
  }
  static furl: any;
  
   public static get BASE_URL(): string { 
     this.getUrl();
     return this.furl;
     }
     public static get AUTH_URL(): string { 
     
      return 'https://jwtauth.jwtechinc.com/';
      } 

}




