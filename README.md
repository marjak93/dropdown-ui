# Dropdown UI

Dropdown UI is a simple React component library that implements one component - Dropdown.

## Installation

Add the library to your project by running one of the following commands:

```bash
npm install @marjak93/dropdown-ui
```

or

```bash
yarn add @marjak93/dropdown-ui
```

## Usage

Dropdown has two parts - `Select` and `Option`. The syntax is inspired by the classic `<select>` and `<option>` tags in HTML.

```jsx
import { Dropdown } from "@marjak93/dropdown-ui";

const MyDropdown = () => {
  const handleChange = () => {
    // Do something here...
  };

  return (
    <Dropdown.Select label="Age" onChange={handleChange}>
      <Dropdown.Option value="10">10</Dropdown.Option>
      <Dropdown.Option value="20">20</Dropdown.Option>
      <Dropdown.Option value="30">30</Dropdown.Option>
    </Dropdown.Select>
  );
};
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
