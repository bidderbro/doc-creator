import templates from "../templates";

export function getTemplate(templateKey, data) {
  const templateFn = templates[templateKey];

  if (!templateFn) {
    return null;
  }

  return templateFn(data);
}
