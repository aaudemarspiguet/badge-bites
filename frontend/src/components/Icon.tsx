import icon from "../assets/icon.png"

type Props = {
    children: React.ReactNode;
}

const Icon = ({ children }: Props) => {
    return (
        <div className="flex items-center">
            <img src = {icon} style={{ width: '50px', height: '50px' }} className="object-cover mr-3" alt="icon" />
        {children}</div>
    );
};

export default Icon;