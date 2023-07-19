import { Environments } from "./elevate/environments.enum";
import { ErrorSeverityLevel } from "./elevate/error-severity-level.enum";
import { HumanAPIDataEndPoints } from "./elevate/human-api-data-endpoints.enum";
import { NavigationRoutesForRouter } from "./elevate/navigation-routes-for-router.enum";
import { SessionVariables } from "./elevate/session-variable-names.enum";

export class Enums {
  static Environments = Environments;
  static ErrorSeverityLevel = ErrorSeverityLevel;
  static NavigationRoutesForRouter = NavigationRoutesForRouter;
  static HumanAPIDataEndPoints = HumanAPIDataEndPoints
  static SessionVariables = SessionVariables
}
