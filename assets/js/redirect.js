function submitForm() {

  var demoForm = document.getElementById("demo-form");

  name = encodeURIComponent(demoForm.name.value);
  email = encodeURIComponent(demoForm.email.value);
  company = encodeURIComponent(demoForm.company.value);
  budget = encodeURIComponent(demoForm.budget.value);

  data = [name, email, company, budget];
  console.log(data);

  redirectURL = "https://go.oncehub.com/ANRDiscoveryCall?soskip=1&name=" + name + "&email=" + email + "&company=" + company + "&budget=" + budget
  console.log(redirectURL);
  window.open(redirectURL, '_blank');
};
