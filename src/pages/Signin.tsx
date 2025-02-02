import Quote from "../components/Quote";
import SignupForm from "../components/UserForm";

export default function Signin() {
  return (
    <div className="grid grid-cols-2">
      <SignupForm formType="signin" />
      <div className="invisible lg:visible">
        <Quote />
      </div>
    </div>
  );
}
