const templatePrepper = (event, template) => {
  const [name, company] = event.target;
  const content = template
    .replaceAll("#NAME", name.value)
    .replaceAll("#COMPANY", company.value);
  return content;
};

export default templatePrepper;
