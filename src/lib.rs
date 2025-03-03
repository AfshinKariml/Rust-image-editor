use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;
use image::{load_from_memory, ImageFormat};
use std::io::Cursor;
use base64::{engine::general_purpose, Engine as _};

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
    log(&"Grayscale Called".into());

    let base64_to_vector = general_purpose::STANDARD.decode(encoded_file).unwrap();
    log(&"Image Decoded".into());

    let mut img = load_from_memory(&base64_to_vector).unwrap();
    log(&"Image Loaded".into());

    img = img.grayscale();
    log(&"Grayscale Effect Applied".into());

    let mut buffer = Cursor::new(Vec::new());
    img.write_to(&mut buffer, ImageFormat::Png).unwrap();

    let encoded_image = general_purpose::STANDARD.encode(buffer.into_inner());

    let data_url = format!("data:image/png;base64,{}", encoded_image);
    return data_url;
}
