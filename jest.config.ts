import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: ".", // ensures Jest looks from project root
  testMatch: ["<rootDir>/tests/**/*.spec.ts"],
  moduleFileExtensions: ["ts", "js", "json"],
};

export default config;