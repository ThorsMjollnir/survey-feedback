import {environment} from '../environments/environment';

export class AppConfig {

  private static get windowRef(): any {
    return window;
  }

  static readonly apiBaseUrl: string = environment.production ? `${AppConfig.windowRef.apiBaseUrl}/` : "http://localhost:9001/";
  static readonly surveyId: string = environment.production ? AppConfig.windowRef.surveyId : "demo";
  // static readonly apiBaseUrl: string = "http://api-test.intake24.co.uk/";
  // static readonly surveyId: string = "newcastle-can";
  static readonly surveyPath: string = `/surveys/${AppConfig.surveyId}`;
  static readonly privacyUrl: string = "https://intake24.co.uk/info/privacy";
  static readonly termsUrl: string = "https://intake24.co.uk/info/terms";

}
