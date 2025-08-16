import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import MultipleChoice from "./components/MultipleChoice.js";
import AdditionalInfo from "./components/AdditionalInfo.js";
import AssignmentChecker from "./components/AssignmentChecker.js";
import MarkDone from "./components/MarkDone.js";
import Sandbox from "./components/Sandbox.js";
import Slideshow from "./components/Slideshow.js";

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    MultipleChoice,
    AdditionalInfo,
    AssignmentChecker,
    MarkDone,
    Sandbox,
    Slideshow,
    ...components,
  };
}
