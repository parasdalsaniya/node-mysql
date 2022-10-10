declare global {
  namespace NodeJS {
    interface ProcessEnv {
        JWT_PRIVATE_KEY: string;
    }
  }
}

export {};
