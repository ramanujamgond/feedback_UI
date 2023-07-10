import React from 'react';

function App() {
    return (
        // <div>This is the section from APP</div>
        React.createElement('div', { className: 'wrapper' },
            React.createElement('div', { className: 'child_wrapper' },
                React.createElement('h1', {}, 'Hello World!')
            )
        ),

        React.createElement('div', {},
            React.createElement('a', { href: 'https://www.google.com', target: '_blank' },
                React.createElement('ol', {},
                    React.createElement('li', {}, 'List Item 1'),
                    React.createElement('li', {}, 'List Item 2'),
                    React.createElement('li', {}, 'List Item 3'),
                    React.createElement('li', {}, 'List Item 4'),
                )
            )
        )
    )
}

export default App;