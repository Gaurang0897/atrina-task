type Props = {
  msg: string | undefined;
};
export default function ErrorComponent(props: Props) {
  const { msg } = props;
  return <h3 className="error">{msg}</h3>;
}
