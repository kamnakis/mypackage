declare module 'mypackage' {
  interface ConfigurationOptions {
    endpoint: string
  }

  function mypackage(options: ConfigurationOptions): void
}