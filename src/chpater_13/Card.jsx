// 하위 컴포넌트를 감싸서 카드 형태로 보여주는 컴포넌트.
// 카드 컴포넌트는 범용적으로 재사용이 가능한 컴포넌트인데, 이것을 사용하여 프로필 카드 컴포넌트를 만들어 보곘슴.
function Card(props) {
    const { title, backgroundColor, children} = props;

    return (
        <div 
            style= {{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {/* specialization */}
            {title && <h1>{title}</h1>}
            {/* containment */}
            {children}
        </div>
    )
}

export default Card;