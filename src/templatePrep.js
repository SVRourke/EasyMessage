const templatePrepper = (event, template) => {
  const [name, company] = event.target;
  const content = template
    .replace("#NAME", name.value)
    .replace("#COMPANY", company.value);
  return content;
};

export default templatePrepper;
