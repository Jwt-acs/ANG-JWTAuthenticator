import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { AppSettings } from "./constants";

@Injectable()
export class LoginServiceService {
  isloggedin: boolean = false;
  handleError: any;
  constructor(private http: HttpClient) {}

  ValidateUser(username: string, password: string) {
    var headers = new Headers();
    headers.append("Content-Type", "application/X-www-form=urlencoded");
    let body = JSON.stringify({ username: username, password: password });
    debugger;
    return this.http.post(
      AppSettings.BASE_URL + "/ws_an_login.php",
      body
    ); /*.pipe(
        map((res) => {
          this.users=res['data'];
          return this.users;
      }),
      catchError(this.handleError));*/
  }
  sendcode(username: string, applicationname: string) {
    var headers = new Headers();
    headers.append("Content-Type", "application/X-www-form=urlencoded");
    let body = JSON.stringify({ email: username, appname: applicationname });
    debugger;
    return this.http.post(
      AppSettings.AUTH_URL + "/ws_getAppUniqID.php",
      body
    ); /*.pipe(
        map((res) => {
          this.users=res['data'];
          return this.users;
      }),
      catchError(this.handleError));*/
  }
  registeruser(
    username: string,
    userlastname: string,
    useremail: string,
    password: string
  ) {
    var headers = new Headers();
    headers.append("Content-Type", "application/X-www-form=urlencoded");
    let body = JSON.stringify({
      username: username,
      userlastname: userlastname,
      useremail: useremail,
      password: password,
    });
    debugger;
    return this.http.post(
      AppSettings.BASE_URL + "/ws_an_register.php",
      body
    );
  }
  updateprofile(
    uid: string,
    username: String,
    lastname: string,
    email: string
  ) {
    var headers = new Headers();
    headers.append("Content-Type", "application/X-www-form=urlencoded");
    let body = JSON.stringify({
      uid: uid,
      username: username,
      lastname: lastname,
      email: email,
    });
    debugger;
    return this.http.post(
      AppSettings.BASE_URL + "/ws_an_updateprofile.php",
      body
    ); /*.pipe(
        map((res) => {
          this.users=res['data'];
          return this.users;
      }),
      catchError(this.handleError));*/
  }

  getdeviceuniqid(email: string,applicationname:String) {
    var headers = new Headers();
    headers.append("Content-Type", "application/X-www-form=urlencoded");
    debugger;
    //let options = new RequestOptions({ header: headers });
    let body = JSON.stringify({ email: email,appname:applicationname });

    return this.http.post(AppSettings.AUTH_URL + "ws_getAppUniqID.php", body);
    //.catch(this._errorhandler);
  }

  verifyCode(authcode: string, userid: string, q: number) {
    var headers = new Headers();
    headers.append("Content-Type", "application/X-www-form=urlencoded");
    let body = JSON.stringify({
      authcode: authcode,
      deviceuniqid: userid,
      q: q,
    });
    debugger;

    return this.http.post(AppSettings.AUTH_URL + "/ws_checkCode.php", body);
  }
  authdata(uid: string, authnumber: string, q: Number) {
    var headers = new Headers();
    headers.append("Content-Type", "application/X-www-form=urlencoded");
    debugger;
    //let options = new RequestOptions({ header: headers });
    let body = JSON.stringify({ uid: uid, authnumber: authnumber, q: q });
    return this.http.post(AppSettings.BASE_URL + "/ws_an_jwauth.php", body);
    //.catch(this._errorhandler);
  }
  noauthdata(uid: string, q: Number) {
    var headers = new Headers();
    headers.append("Content-Type", "application/X-www-form=urlencoded");
    debugger;
    //let options = new RequestOptions({ header: headers });
    let body = JSON.stringify({ uid: uid, q: q });
    return this.http.post(AppSettings.BASE_URL + "/ws_an_jwauth.php", body);
    //.catch(this._errorhandler);
  }
}
