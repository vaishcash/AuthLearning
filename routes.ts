/**  an array of public routes ,
 *  these do not need authentification to access
 * @type {string[]}
 */
export const publicRoutes = ["/",
    "/auth/new-verification",
];

/**  an array of private routes ,
 *  these do  need authentification to access
 * @type {string[]}
 */

export const authRoutes = ["/auth/login",
     "/auth/register" ,
      "/auth/error",
      "/auth/reset",
    "/auth/new-password",];

/** the prifix for API authrntication routes,
 * Routes that start with this prifix are used for API authentification purposes
 * @type {string}
 */

export const apiAuthPrefix = ["/api/auth"];

/** the default redirect path after login or register login

* @type {string}
*/

export const DEFAULT_LOGIN_REDIRECT = "/settings";
