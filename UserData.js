class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar />
        <Label />
        <ScreenName />
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={{
    name: 'Nick Martinez',
    img: 'https://avatars2.githubusercontent.com/u/14083180?s=460&v=4',
    username: 'nmartinez23'
  }} />,
  document.getElementById('app')
);
