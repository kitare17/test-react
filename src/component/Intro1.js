function Intro1(props) {
    return (
        <div className="blog-post-intro">
           <p>Họ và tên: {props.name}</p>
           <p>Lớp: {props.class}</p>
           <p>Trường: {props.school}</p>
        </div>
    );
};
export default Intro1;