import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({
    config: {
      url: 'http://localhost:8380/auth',
      realm: 'zoo',
      clientId: 'zoo-ui'
    },
    initOptions: {
      // onLoad: 'login-required',
      checkLoginIframe: false
    },
    enableBearerInterceptor: true
  });
}
