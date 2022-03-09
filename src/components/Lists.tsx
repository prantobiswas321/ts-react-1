import React from 'react';
import List from "../components/List";

const lists = () => {
    const items: string[] = ["Pranto", "Biswas"];
    const onClick = (text: string): void => alert(text);
    return (
        <div>
            <List items={items} onClick={onClick} />
        </div>
    );
};

export default lists;