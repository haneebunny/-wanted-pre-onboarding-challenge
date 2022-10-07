import { useRouter } from "../common/hooks/useRouter";

export default function MainPage() {
  const { push } = useRouter();
  const onClickButton = () => {
    push("/about");
  };

  return (
    <div>
      <h1>Main</h1>
      <button onClick={onClickButton}>About</button>
    </div>
  );
}
