-- -- Tạo database nếu chưa tồn tại
-- CREATE DATABASE IF NOT EXISTS mydb;

-- -- Sử dụng database
-- USE mydb;

-- Tạo bảng todos nếu chưa tồn tại
CREATE TABLE IF NOT EXISTS todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Thêm dữ liệu mẫu vào bảng todos
INSERT INTO todos (text) VALUES ('Learn Docker');
INSERT INTO todos (text) VALUES ('Master Next.js');
INSERT INTO todos (text) VALUES ('Build awesome apps');
