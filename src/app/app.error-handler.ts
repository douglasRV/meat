import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

export class ErrorHandler {
  static handleError(error: Response | any) {
    let errorMessage;

    if (error instanceof Response) {
      errorMessage = {
        status: error.status,
        urlError: error.url,
        message: error.statusText
      };
    } else {
      errorMessage = error.toString();
    }
    return Observable.throw(errorMessage);
  }
}
