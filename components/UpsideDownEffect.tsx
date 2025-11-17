import React from 'react';

const UpsideDownEffect: React.FC = () => {
    return (
        <div 
            className="fixed inset-0 z-[10000] pointer-events-none upside-down-glitch bg-red-900/50"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23ff0000' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='100' height='1'/%3E%3Crect x='0' y='2' width='100' height='1'/%3E%3Crect x='0' y='5' width='100' height='1'/%3E%3Crect x='0' y='9' width='100' height='1'/%3E%3Crect x='0' y='14' width='100' height='1'/%3E%3Crect x='0' y='20' width='100' height='1'/%3E%3Crect x='0' y='27' width='100' height='1'/%3E%3Crect x='0' y='35' width='100' height='1'/%3E%3Crect x='0' y='44' width='100' height='1'/%3E%3Crect x='0' y='54' width='100' height='1'/%3E%3Crect x='0' y='65' width='100' height='1'/%3E%3Crect x='0' y='77' width='100' height='1'/%3E%3Crect x='0' y='90' width='100' height='1'/%3E%3C/g%3E%3C/svg%3E")`
            }}
        >
        </div>
    );
};

export default UpsideDownEffect;
