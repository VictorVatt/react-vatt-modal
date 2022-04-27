# modal component library
A library of React components created using `create-react-app`.## Installation

Run the following command:

`npm install react-vatt-modal`
or
`yarn add react-vatt-modal`

There is only one usable component for this module.

### An exemple of simple use: ### 

```html
import { Modal } from "react-vatt-modal/dist/Modal/Modal.js"

function ValidationModal() {
    const [isOpen, setIsOpen] = useState(false)

    return (
    <Modal isOpened={isOpened} content={"New Modal"} handleCloseModal={() => setIsOpen(!isOpen)} buttonContent={"Close button"}/>
    )
}
```

If you don't add a style props a default style is used !!

### Exemple of style: ###

    {
        overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
                content: {
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    position: 'absolute',
                    color: 'red',
                    top: '40px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    background: '#fff',
                    overflow: 'auto',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px',
                    margin: "500px 400px",
                }
        }

Precision for props : 

- isOpenedIs is a boolean
- content is a string
- style is an object with 2 properties : overlay and content
- handleCloseModal is a fucntion
- buttonContent is a string

Package created by Victor Vatt : https://github.com/VictorVatt