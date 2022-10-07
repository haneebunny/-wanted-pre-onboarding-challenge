import { useRouter } from "../common/hooks/useRouter";

export default function AboutPage() {
  const { push } = useRouter();
  const onClickButton = () => {
    push("/");
  };

  return (
    <div>
      <h1>About</h1>
      <button onClick={onClickButton}>Main</button>
    </div>
  );
}
