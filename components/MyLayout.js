import Header from './Header';

const layouStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = props => {
    return (
        <div style={layouStyle}>
            <Header />
            {props.children}
        </div>
    );
};

export default Layout;
