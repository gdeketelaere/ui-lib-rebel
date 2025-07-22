import { register } from "@tokens-studio/sd-transforms";
import { StyleDictionary } from "style-dictionary-utils";
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from "style-dictionary/enums";
import fs from "fs";
import path from "path";

await register(StyleDictionary);

const tokens = JSON.parse(fs.readFileSync("./tokens/tokens.json", "utf-8"));
const globalTokens = tokens["global"];

StyleDictionary.registerFormat({
  name: "css/variables-clean",
  format: function (dictionary) {
    const variables = [];

    dictionary.allTokens.forEach(token => {
      const cssVarName = `--${token.name}`;
      let value = token.value;

      if (typeof value === "string") {
        value = value;
      } else if (typeof value === "number") {
        value = value;
      } else if (typeof value === "object") {
        if (token.type === "typography") {
          variables.push(
            `  --font-${token.name}-family: ${value.fontFamily || "inherit"};`
          );
          variables.push(
            `  --font-${token.name}-size: ${value.fontSize || "inherit"};`
          );
          variables.push(
            `  --font-${token.name}-weight: ${value.fontWeight || "inherit"};`
          );
          variables.push(
            `  --font-${token.name}-line-height: ${value.lineHeight || "inherit"};`
          );
          if (value.textCase) {
            variables.push(
              `  --font-${token.name}-text-case: ${value.textCase};`
            );
          }
          return;
        } else {
          value = JSON.stringify(value);
        }
      }

      variables.push(`  ${cssVarName}: ${value};`);
    });

    return `/**
 * Do not edit directly, this file was auto-generated.
 */

:root {
${variables.join("\n")}
}`;
  },
});

StyleDictionary.registerFormat({
  name: "typescript/css-variables-declarations",
  format: function (dictionary) {
    const typeLines = [];
    const toCssVar = jsName =>
      "--" +
      jsName
        .replace(/([A-Z])/g, "-$1")
        .replace(/^-/, "")
        .replace(/([0-9]+)/g, "-$1")
        .toLowerCase()
        .replace(/--+/g, "-")
        .replace(/-([0-9]+)-/g, "-$1-")
        .replace(/-$/, "");

    dictionary.allTokens.forEach(token => {
      const kebabName = toCssVar(token.name);
      typeLines.push(`  '${kebabName}': string;`);
    });

    return `export type CSSVariables = {\n${typeLines.join("\n")}\n};\n`;
  },
});

StyleDictionary.registerFormat({
  name: "typescript/css-variables-values",
  format: function (dictionary) {
    const variables = [];

    dictionary.allTokens.forEach(token => {
      const cssVarName = `--${token.name}`;
      let value = token.value;

      if (typeof value === "string") {
        value = `'${value}'`;
      } else if (typeof value === "number") {
        value = value;
      } else if (typeof value === "object") {
        value = `'${JSON.stringify(value).replace(/"/g, "")}'`;
      }

      variables.push(`  '${cssVarName}': ${value}`);
    });

    return `export const CSSTheme = {\n${variables.join(",\n")}\n} as const;`;
  },
});

const buildTokens = async () => {
  const sd = new StyleDictionary({
    tokens: globalTokens,
    log: {
      warnings: logWarningLevels.warn,
      verbosity: logVerbosityLevels.verbose,
      errors: {
        brokenReferences: logBrokenReferenceLevels.throw,
      },
    },
    platforms: {
      css: {
        expand: {
          include: ["typography", "border", "spacing", "color"],
        },
        transforms: ["name/kebab", "attribute/cti"],
        transformGroup: "css",
        buildPath: path.resolve("./lib/styles/") + "/",
        files: [
          {
            destination: "variables.css",
            format: "css/variables-clean",
          },
        ],
      },
      typescript: {
        transformGroup: "js",
        buildPath: path.resolve("./lib/types/") + "/",
        files: [
          {
            destination: "css-variables.d.ts",
            format: "typescript/css-variables-declarations",
          },
          {
            destination: "css-variables-values.ts",
            format: "typescript/css-variables-values",
          },
        ],
      },
    },
  });

  sd.registerTransform({
    type: "value",
    name: "boxShadow",
    filter: (token, options) => {
      return token.type === "boxShadow";
    },
    transform: token => {
      const { x, y, blur, spread, color, type } = token.value;
      const inset = type === "innerShadow" ? "inset " : "";

      return `${inset}${x}px ${y}px ${blur}px ${spread}px ${color}`;
    },
  });

  await sd.buildAllPlatforms();

  console.log("✅ Youhou ! Tokens generated successfully");
  console.log("📁 CSS: lib/styles/variables.css");
  console.log("📁 TypeScript: lib/types/");
};

await buildTokens();
