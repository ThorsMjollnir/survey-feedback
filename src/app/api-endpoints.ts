export class ApiEndpoints {
    static readonly baseUrl = "http://api-test.intake24.co.uk/";
    // static readonly baseUrl = "http://localhost:9000/";

    static refreshUserToken(): string {
        return ApiEndpoints.baseUrl + "refresh"
    };

    static demographicGroups(): string {
        return ApiEndpoints.baseUrl + "admin/demographic-groups";
    };

    static nutrientTypes(): string {
        return ApiEndpoints.baseUrl + "admin/nutrient-types";
    };

    static henryCoefficients(): string {
        return ApiEndpoints.baseUrl + "admin/henry-coefficients";
    };

    static mySurveyResults(surveyId: string): string {
        return ApiEndpoints.baseUrl + `user/surveys/${surveyId}/my-submissions`;
    }
}
