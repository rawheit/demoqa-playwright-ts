interface EnvironmentConfig {
    baseUrl: string;
    apiUrl: string;
  }
  
  const environments: Record<string, EnvironmentConfig> = {
    development: {
      baseUrl: 'https://demoqa.com/',
      apiUrl: 'https://demoqa.com/api',
    },
    // staging: {
    //   baseUrl: 'https://staging.yourapp.com',
    //   apiUrl: 'https://staging-api.yourapp.com',
    // },
    // production: {
    //   baseUrl: 'https://www.yourapp.com',
    //   apiUrl: 'https://api.yourapp.com',
    // },
  };
  
  export function getConfig(env: string = process.env.TEST_ENV || 'development'): EnvironmentConfig {
    return environments[env];
  }