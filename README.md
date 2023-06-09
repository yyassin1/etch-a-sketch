# Dynamic Grid Creator

This is a JavaScript program that dynamically creates a grid of cells using the DOM manipulation. Each cell in the grid can be colored by hovering over it, and the grid can be cleared by clicking a button.

## Usage

To use this program, follow these steps:

1. Clone the repository or download the source code.
2. Open the `index.html` file in your web browser.

## Functionality

The program provides the following functionality:

### `makeRows(rows, cols)`

This function creates a grid of cells with the specified number of rows and columns. It takes two parameters: `rows` and `cols`. It dynamically sets the CSS variables `--grid-rows` and `--grid-cols` to define the grid layout.

### Event Listeners

The program adds event listeners to each cell in the grid:

- `mouseover` event: When the mouse hovers over a cell, the cell's background color is changed to black, simulating coloring.
- `click` event: When the "Clear" button is clicked, the cell's background color is changed back to white, effectively clearing the grid.

## Customization

You can customize the program by modifying the following variables:

### `box`

The `box` variable represents the container element where the grid will be appended. You can change the ID or select a different element by modifying this variable.

### `rows` and `cols`

The `rows` and `cols` variables determine the number of rows and columns in the grid, respectively. Modify these variables to adjust the size of the grid as per your requirements.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
