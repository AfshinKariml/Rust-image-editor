# 🖼️ Image Editor - Rust WebAssembly Image Processing

A lightning-fast image processing web application powered by Rust WebAssembly. This project demonstrates how to leverage the performance of Rust for browser-based image manipulation.

## ✨ Features

- **Grayscale Conversion**: Instantly convert colored images to grayscale
- **Blazing Fast Performance**: Image processing performed natively with Rust compiled to WebAssembly
- **Modern UI**: Clean, responsive interface with animated background
- **Client-side Processing**: All operations performed locally in the browser - no server uploads required

## 🚀 Technology Stack

- **Backend**: Rust + WebAssembly
- **Frontend**: JavaScript, HTML5, CSS3
- **Styling**: Tailwind CSS
- **Build Tools**: Webpack, wasm-pack
- **Dependencies**: 
  - `image` crate for Rust image processing
  - `base64` for encoding/decoding
  - `wasm-bindgen` for Rust/JS interoperability

## 🛠️ Installation

1. **Prerequisites**:
   - Rust and Cargo ([install](https://www.rust-lang.org/tools/install))
   - Node.js and npm ([install](https://nodejs.org/))
   - wasm-pack ([install](https://rustwasm.github.io/wasm-pack/installer/))

2. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/image-editor.git
   cd image-editor
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Build and run the development server**:
   ```bash
   npm run serve
   ```

5. **Open your browser**:
   Navigate to `http://localhost:8080`

## 📝 Usage

1. Click the "Upload PNG Image" button
2. Select a PNG image from your device
3. The application will automatically process the image to grayscale
4. The processed image will appear below the upload button

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The compiled files will be located in the `dist` directory.

## 🧩 Project Structure

```
image-editor/
├── public/
│   ├── index.html      # Main HTML template
│   └── main.js         # JavaScript entry point
├── src/
│   └── lib.rs          # Rust code with image processing functions
├── package.json        # Node.js dependencies and scripts
└── webpack.config.js   # Webpack configuration
```

## 🔧 How It Works

1. User uploads a PNG image through the web interface
2. The image is converted to a base64 string in JavaScript
3. The base64 string is passed to Rust functions via WebAssembly
4. The Rust code processes the image (applying grayscale effect)
5. The processed image is returned as a base64 data URL
6. JavaScript displays the processed image in the browser

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📜 License

This project is licensed under the ISC License.
