

export const verifyUserGoogleTokenQuery= graphql(`#graphql
query VerifyUserGoogleToken($token:String!){
  verifyGoogleToken(token: $token)
}
`);




