import "../globals.css";


export default function langLayout({ children }) {
    return (
        <div>
            <body>{children}</body>
        </div>
    );
}