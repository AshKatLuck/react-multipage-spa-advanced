import NewsLetterSignup from "../components/NewsLetterSignup";
import PageContent from "../components/PageContent";

function NewsLetterPage() {
  return (
    <PageContent title="Join our Awesome Newsletter!!">
      <NewsLetterSignup />
    </PageContent>
  );
}

export default NewsLetterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");
  console.log(email);
  //sending email to backend
  return { message: "Signup Successful!!" };
}
