interface Props {
  subs: Array<{
    nick: string;
    subMonts: number;
    avatar: string;
    description?: string;
  }>;
}

const List = ({ subs }: Props) => {
  return (
    <ul>
      {subs.map((sub) => {
        return (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar from ${sub.nick}`} />
            <h4>{sub.nick}</h4>
            <small>{sub.subMonts}</small>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
