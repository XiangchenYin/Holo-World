#!/bin/bash
# 多种打开页面的方式

echo "=== Holo-World 页面访问方式 ==="
echo ""

# 方法1：直接文件访问
FILE_PATH="file:///home/liuzj/code/HoloWorld/index.html"
echo "方法1：直接打开HTML文件（推荐）"
echo "复制以下地址到浏览器地址栏："
echo "$FILE_PATH"
echo ""

# 方法2：使用xdg-open（如果有桌面环境）
echo "方法2：命令行打开（需要桌面环境）"
echo "运行命令："
echo "xdg-open /home/liuzj/code/HoloWorld/index.html"
echo "或者："
echo "firefox /home/liuzj/code/HoloWorld/index.html"
echo "或者："
echo "google-chrome /home/liuzj/code/HoloWorld/index.html"
echo ""

# 方法3：HTTP服务器（不同端口）
echo "方法3：使用不同端口的HTTP服务器"
echo "运行命令："
echo "cd /home/liuzj/code/HoloWorld && python3 -m http.server 8888"
echo "然后访问: http://localhost:8888"
echo ""

# 方法4：使用PHP内置服务器
echo "方法4：PHP内置服务器（如果安装了PHP）"
echo "运行命令："
echo "cd /home/liuzj/code/HoloWorld && php -S localhost:9000"
echo "然后访问: http://localhost:9000"
echo ""

echo "=== 诊断建议 ==="
echo "如果浏览器显示空白，按 F12 打开开发者工具："
echo "1. 查看 Console 标签是否有错误（红色文字）"
echo "2. 查看 Network 标签是否有加载失败的资源"
echo "3. 尝试强制刷新：Ctrl+Shift+R"
