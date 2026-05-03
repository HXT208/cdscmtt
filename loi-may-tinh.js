const pcErrors = [
    {
        // Lỗi 1: Không lên nguồn (No Power)
        keywords: [
            "không lên nguồn",
            "laptop không bật được",
            "pc bấm nút nguồn không lên",
            "máy tính không khởi động",
            "quạt cpu không quay khi bật",
            "nhấn nguồn không có phản hồi",
            "máy im re không lên",
            "pc mất nguồn đột ngột",
            "bấm nút nguồn không thấy gì"
        ],
        name: "Không lên nguồn (No Power)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Nhấn nút nguồn không có tín hiệu. Quạt không quay, đèn LED báo nguồn không sáng.", 
        ],
        diagnosisSteps: [
            "Kiểm tra ổ cắm, dây cáp nguồn.",
            "Desktop: công tắc nguồn, kiểm tra nguồn",
            "Laptop: kiểm tra pin, đo nguồn sạc ",
            "Kiểm tra IC nguồn trên Mainboard.",
        ],
        fix: [
            "Cắm lại cáp, đổi ổ điện.",
            "Tháo pin hoặc rút điện, nhấn giữ nút nguồn 30s để xả tĩnh điện, cắm điện thử lại.",
            "Thay bộ nguồn hoặc sạc khác.",
            "Rút điện hoàn toàn trước khi mở thùng máy tính. Không tự ý mở hộp nguồn (PSU) vì tụ điện bên trong lưu điện áp cao có thể giật chết người.",
            "Desktop: Thử chập dây xanh lá và dây đen trên jack 24-pin để kiểm tra nguồn sống hay chết.",
            "Laptop: Nếu xả tĩnh điện không được, có thể do chập nguồn tụ gốm hoặc IC nguồn, cần mang ra trung tâm có máy khò hàn.",
        ],
        image: "hinh-anh/L1.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 2: Có nguồn nhưng không lên hình ảnh
        keywords: [
            "có nguồn không lên hình",
            "quạt quay màn hình đen",
            "đèn nguồn sáng không hiển thị",
            "laptop không ra hình",
            "pc có điện nhưng đen màn hình",
            "boot không lên màn hình",
            "màn hình đen hoàn toàn có nguồn",
            "không xuất tín hiệu ra màn hình"
        ],
        name: "Có nguồn nhưng không lên hình ảnh",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Máy chạy có tiếng quạt quay, đèn nguồn sáng nhưng màn hình đen, không hiện logo.",
        ],
        diagnosisSteps: [
            "Chờ 1-2 phút xem có xuất hình chậm không.",
            "Nhìn đèn phím Capslock/Numlock có sáng khi nhấn không.",
            "Kiểm tra cáp xuất hình ảnh.",
            "Kiểm tra RAM, VGA.",
        ],
        fix: [
            "Rút cáp nguồn, tháo RAM dùng tẩy chà sạch chân đồng, lắp lại vào mainboard.",
            "Tháo pin CMOS, đợi vài phút để reset BIOS rồi lắp lại",
            "Tháo VGA rời, cắm cáp màn hình vào cổng onboard.",
            "Nếu bấm Capslock đèn bàn phím sáng/tắt bình thường tức là máy đã boot vào Win nhưng hỏng cáp màn hoặc vỡ panel (thường gặp ở Laptop).",
        ],
        image: "hinh-anh/L2.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 3: Màn hình xanh chết chóc (BSOD)
        keywords: [
            "màn hình xanh bsod",
            "màn hình xanh laptop",
            "lỗi màn hình xanh chết chóc",
            "máy tự restart màn hình xanh",
            "critical process died",
            "laptop stop code lỗi",
            "bsod cách khắc phục",
            "blue screen of death sửa"
        ],
        name: "Màn hình xanh chết chóc (BSOD)",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Đang dùng thì hiện màn hình xanh chữ trắng (kèm mã lỗi như CRITICAL_PROCESS_DIED), máy tự khởi động lại.",
        ],
        diagnosisSteps: [
            "Ghi lại mã lỗi Stop Code để tra lỗi.",
            "Nhớ lại phần mềm/driver vừa cài đặt.",
            "Kiểm tra nhiệt độ máy.",
            "Quét lỗi ổ cứng & RAM.",
        ],
        fix: [
            "Boot vào Safe Mode, gỡ driver/ứng dụng vừa cài.",
            "Mở CMD (Run as Admin) chạy lệnh sfc /scannow để sửa file hệ thống.",
            "Dùng Windows Memory Diagnostic kiểm tra RAM.",
            "Cài lại Windows nếu do lỗi hệ diều hành nặng.",
            "Lỗi do phần cứng (RAM/SSD) hỏng thì cài lại Win vẫn sẽ bị màn hình xanh.",
        ],
        image: "hinh-anh/L3.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 4: Máy quá nhiệt, tự sập nguồn
        keywords: [
            "máy quá nhiệt tự tắt",
            "laptop nóng tự sập nguồn",
            "pc tắt đột ngột khi chơi game",
            "nhiệt độ cpu cao tự shutdown",
            "quạt rú to máy sập",
            "laptop render bị tắt nguồn",
            "cpu gpu quá nhiệt xử lý",
            "máy nóng ran tự tắt"
        ],
        name: "Máy quá nhiệt, tự sập nguồn",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Máy chạy các tác vụ nặng (game, render) một lúc thì tiếng quạt rú to, máy rất nóng và đột ngột tắt.",
        ],
        diagnosisSteps: [
            "Dùng các phần mềm hỗ trợ xem nhiệt độ như HWMonitor, CoreTemp (CPU/GPU > 90°C là báo động).",
            "Kiểm tra khe tản nhiệt có bụi bẩn không.",
            "Áp tai vào thùng máy tính nghe quạt có đang quay không.",
        ],
        fix: [
            "Tắt máy, tháo nắp lưng.",
            "Dùng chổi lông và bóng thổi bụi để làm sạch khe tản nhiệt, các cánh quạt.",
            "Lau sạch keo tản nhiệt cũ, tra keo tản nhiệt mới. Tra keo tản nhiệt vừa đủ để tránh tràn ra bo mạch.",
            "Desktop: Xử lý dễ dàng, có thể lắp thêm quạt tản nhiệt cho thùng máy.",
            "Laptop: Phức tạp hơn do ốc vít nhỏ, ngầm.",
        ],
        image: "hinh-anh/L4.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 5: Không nhận ổ cứng (Boot Device Not Found)
        keywords: [
            "không nhận ổ cứng",
            "no bootable device",
            "insert boot media lỗi",
            "pc không tìm thấy ổ cứng",
            "ổ cứng không hiện trong bios",
            "laptop báo boot device not found",
            "máy không vào được windows",
            "hdd ssd không được nhận"
        ],
        name: "Không nhận ổ cứng (Boot Device Not Found)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Khởi động máy hiện dòng chữ 'No Bootable Device' hoặc 'Insert Boot Media'.",
        ],
        diagnosisSteps: [
            "Vào BIOS kiểm tra xem mainboard có nhận tên ổ cứng không.",
            "Kiểm tra chế độ boot (UEFI/Legacy).",
            "Kiểm tra cáp kết nối vật lý (SATA).",
        ],
        fix: [
            "Chuyển lại chuẩn Boot (UEFI/Legacy) trong BIOS cho đúng với chuẩn cài Win cũ.",
            "Tháo nắp máy, cắm lại cáp SATA/Nguồn hoặc tháo lắp lại ổ NVMe/M.2.",
            "Thay ổ cứng mới và cài lại hệ điều hành nếu ổ cứng cũ đã hỏng.",
            "Nếu trong BIOS nhận ổ cứng nhưng không boot được, hãy dùng USB WinPE để nạp lại MBR/EFI Boot loader.",
        ],
        image: "hinh-anh/L5.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 6: Lỗi Full Disk 100% máy chậm, giật lag
        keywords: [
            "disk 100% máy chậm lag",
            "laptop ổ cứng chạy 100% giật",
            "task manager disk 100 cách sửa",
            "máy chậm do full disk",
            "ổ cứng hoạt động 100% liên tục",
            "hdd 100% giải pháp",
            "ssd disk 100 phần trăm"
        ],
        name: "Lỗi Full Disk 100% máy chậm, giật lag",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Khởi động lâu, thao tác mở các ứng dụng chậm chạp, Task Manager hiển thị 100% Disk.",
        ],
        diagnosisSteps: [
            "Mở Task Manager kiểm tra tiến trình nào ngốn Disk/CPU.",
            "Kiểm tra dung lượng trống ổ cứng.",
            "Kiểm tra tình trạng sức khỏe ổ cứng.",
        ],
        fix: [
            "Nâng cấp từ ổ HDD lên ổ SSD.",
            "Nâng cấp ổ cứng lên dung lượng cao hơn",
            "Tắt các dịch không cần thiết hoặc ít sử dụng trong trong services.msc.",
            "Tắt các ứng dụng khởi động cùng Windows (Startup).",
            "Lỗi này 90% xảy ra trên các máy tính cũ vẫn dùng ổ HDD chạy Windows 10/1 Dùng phần mềm CrystalDiskInfo để kiểm tra xem ổ cứng có bị Bad Sector/Caution không.",
        ],
        image: "hinh-anh/L6.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 7: Không nhận bàn phím hoặc loạn phím
        keywords: [
            "bàn phím không nhận phím",
            "laptop phím gõ sai ký tự",
            "keyboard loạn phím",
            "bấm phím không ra chữ",
            "bàn phím gõ ra chữ khác",
            "không nhận bàn phím usb",
            "phím laptop liệt hết"
        ],
        name: "Không nhận bàn phím hoặc loạn phím",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Gõ một phím ra phím khác, máy kêu tít tít liên tục khi khởi động, hoặc liệt một số phím cụ thể.",
        ],
        diagnosisSteps: [
            "Cắm thử bàn phím rời qua cổng USB xem có bị không (để loại trừ lỗi do hệ điều hành).",
            "Boot vào WinPE hoặc BIOS để test phím môi trường ngoài.",
            "Kiểm tra cáp tín hiệu bàn phím.",
        ],
        fix: [
            "Cập nhật hoặc xóa driver bàn phím trong Device Manager và khởi động lại.",
            "Tháo cáp bàn phím (laptop) lau sạch chân tiếp xúc bằng cồn 90 độ và cắm lại.",
            "Thay nguyên cụm bàn phím nếu bị chập/đứt mạch.",
            "Laptop: Phím liệt/chập đa số do môi trường ẩm ướt hoặc bị đổ nước. Gặp tình trạng này phải thay phím mới, chi phí sửa mạch phím cao và thường không bền.",
            "Desktop: Lắp thử bàn phím khác để kiểm tra"
        ],
        image: "hinh-anh/L7.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 8: Mất kết nối mạng hoặc không thấy Wi-Fi
        keywords: [
            "mất kết nối wifi",
            "không thấy mạng wifi",
            "laptop mất sóng wifi",
            "pc không bắt được wifi",
            "wifi biến mất không hiện",
            "mạng chập chờn mất liên tục",
            "không kết nối internet được"
        ],
        name: "Mất kết nối mạng hoặc không thấy Wi-Fi",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Biểu tượng mạng có dấu X đỏ, không tìm thấy bất kỳ mạng Wi-Fi nào, mất luôn icon Wi-Fi.",
        ],
        diagnosisSteps: [
            "Kiểm tra phím cứng/công tắc bật-tắt Wi-Fi (Chế độ máy bay).",
            "Kiểm tra driver trong Device Manager (có dấu chấm than vàng không).",
            "Kiểm tra router/modem nhà mạng.",
        ],
        fix: [
            "Tắt/bật lại chế độ máy bay",
            "Chọn wifi -> Forget (Quên) và nhập lại mật khẩu.",
            "Tải driver Wi-Fi (LAN) chuẩn từ trang chủ hãng và cài đặt lại.",
            "Tháo lắp lại card Wi-Fi, vệ sinh hai đầu dây anten.",
            "Có trường hợp Windows tự update làm xung đột driver card mạng. Dùng tính năng Network Reset trong Settings của Windows 10/11 rất hiệu quả.",
        ],
        image: "hinh-anh/L8.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 9: Màn hình sọc ngang dọc, nhòe màu
        keywords: [
            "màn hình có sọc ngang dọc",
            "màn hình nhòe màu",
            "sọc màn hình laptop",
            "điểm màu lạ trên màn hình",
            "màn hình bị sọc sau va đập",
            "artifact màn hình vga lỗi",
            "màn hình hiện sọc xanh đỏ"
        ],
        name: "Màn hình sọc ngang dọc, nhòe màu",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Màn hình có các đường kẻ sọc, màu sắc hiển thị sai (chỉ có màu hồng/xanh), hình ảnh bị xé (artifacts).",
        ],
        diagnosisSteps: [
            "Lấy tay ấn nhẹ vào viền màn hình xem sọc có thay đổi không.",
            "Xuất hình ra màn hình rời (Tivi/Monitor) qua cổng VGA/HDMI.",
        ],
        fix: [
            "Nếu xuất hình ra màn rời hình ảnh BÌNH THƯỜNG -> Lỗi do màn hình chính hoặc cáp tín hiệu -> Thay cáp hoặc thay màn hình mới.",
            "Nếu xuất màn rời cũng bị sọc -> Lỗi VGA.",
            "Cảnh báo: Không tự đóng/hấp lại chip VGA bằng máy sấy tóc, sẽ làm hỏng mainboard.",
            "Lỗi VGA thường yêu cầu kỹ thuật viên có máy đóng chip BGA chuyên dụng. Lỗi sọc màn (chết điểm ảnh/đứt rập) không thể sửa, bắt buộc phải thay màn hình mới.",
        ],
        image: "hinh-anh/L9.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 10: Thiết bị ngoại vi (USB, chuột) chập chờn
        keywords: [
            "usb chuột chập chờn",
            "thiết bị ngoại vi không nhận ổn định",
            "cắm usb không nhận",
            "chuột bàn phím ngắt kết nối",
            "thiết bị usb bị ngắt liên tục",
            "usb không nhận khi cắm vào"
        ],
        name: "Thiết bị ngoại vi (USB, chuột) chập chờn",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Cắm USB, chuột, tai nghe vào máy nhưng không có phản hồi hoặc máy báo 'USB Device Not Recognized'.",
        ],
        diagnosisSteps: [
            "Đổi cổng USB khác (chuyển từ cổng trước ra cổng sau mainboard).",
            "Cắm thiết bị đó sang máy tính khác xem có chạy không.",
            "Kiểm tra cổng vật lý có bị gỉ sét, cong vênh không.",
        ],
        fix: [
            "Rút ra cắm lại từ từ, đảm bảo tiếp xúc tốt.",
            "Vào Device Manager, tìm mục Universal Serial Bus controllers, chọn Uninstall Device, sau đó Restart máy.",
            "Desktop: Các cổng USB mặt trước case thường hay hỏng cáp nối hoặc tụt áp, nên ưu tiên cắm các cổng USB phía sau Mainboard. Nếu thiết bị sang máy khác vẫn lỗi thì thay thiết bị mới.",
        ],
        image: "hinh-anh/L10.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 11: Sai ngày giờ hệ thống liên tục (Lỗi pin CMOS)
        keywords: [
            "đồng hồ máy tính sai giờ",
            "ngày giờ reset về 2000",
            "sai giờ hệ thống liên tục",
            "pin cmos hỏng thay pin cmos",
            "bios mất cài đặt sau tắt máy",
            "máy báo sai ngày tháng mỗi lần bật"
        ],
        name: "Sai ngày giờ hệ thống liên tục (Lỗi pin CMOS)",
        category: "Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Khởi động máy hiện cảnh báo 'CMOS Checksum Error' hoặc yêu cầu bấm F1/F2 để tiếp tục. Ngày giờ trên Windows luôn bị lùi về quá khứ, không truy cập được nhiều trang web (trình duyệt báo lỗi chứng chỉ bảo mật SSL).",
        ],
        diagnosisSteps: [
            "Chỉnh lại đúng ngày giờ trong Windows.",
            "Tắt máy, rút hẳn dây điện (hoặc tháo pin laptop) khoảng 10 phút.",
            "Cắm điện bật lại xem giờ có bị sai tiếp không.",
        ],
        fix: [
            "Mở nắp thùng máy.",
            "Tìm viên pin cmos (CR2032) trên Mainboard.",
            "Dùng móng tay hoặc vật vát mỏng nẩy nhẹ lẫy kim loại để lấy pin cũ ra.",
            "Lắp pin cmos mới vào. Bật máy, vào BIOS cài đặt lại ngày giờ và lưu lại (Save & Exit).",
            "Desktop: Rất dễ tự thay.",
            "Laptop: Tùy dòng máy, có dòng phải tháo toàn bộ mainboard mới thấy.",
        ],
        image: "hinh-anh/L11.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 12: Treo cứng máy (Freeze) không hiện màn hình xanh
        keywords: [
            "máy treo cứng đột ngột",
            "freeze không làm gì được",
            "máy đứng hình phải tắt nguồn",
            "windows đơ cứng không ctrl alt del",
            "màn hình đứng không di chuột được",
            "máy bị treo không có màn hình xanh"
        ],
        name: "Treo cứng máy (Freeze) không hiện màn hình xanh",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Đang sử dụng bình thường thì hình ảnh đứng im, chuột không di chuyển được, bấm phím Capslock/Numlock đèn không sáng tắt, âm thanh (nếu đang phát) bị kẹt lại kêu 'rè rè' kéo dài vô tận.",
        ],
        diagnosisSteps: [
            "Chờ 1-2 phút xem máy có tự thoát treo không.",
            "Kiểm tra nhiệt độ CPU/VGA xem có quá ngưỡng không.",
            "Kiểm tra sức khỏe ổ cứng (Bad Sector).",
            "Kiểm tra lại RAM.",
        ],
        fix: [
            "Nhấn giữ nút nguồn (Power) 5-10 giây để ép máy tắt (Hard reset), sau đó bật lại.",
            "Nếu do quá nhiệt: Vệ sinh máy, tra keo tản nhiệt.",
            "Nếu do RAM: Tháo RAM ra vệ sinh chân cắm.",
            "Nếu do ổ cứng: Sao lưu dữ liệu ngay lập tức và thay ổ mới.",
            "Khác với lỗi BSOD (thường do xung đột phần mềm/driver), lỗi treo cứng này 80% liên quan đến phần cứng đang xuống cấp, đặc biệt là ổ cứng bị Bad Sector vật lý nặng khiến hệ thống không thể đọc/ghi dữ liệu.", 
        ],
        image: "hinh-anh/L12.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 13: Mất âm thanh hoặc loa bị rè (cần âm thanh)
        keywords: [
            "mất âm thanh laptop pc",
            "không có tiếng loa",
            "loa bị rè tiếng",
            "âm thanh biến mất windows",
            "không nghe thấy âm thanh",
            "loa kêu rè khi mở volume",
            "sound card lỗi không có tiếng"
        ],
        name: "Mất âm thanh hoặc loa bị rè",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Biểu tượng loa có dấu x đỏ báo 'No Audio Output Device is installed' hoặc có âm thanh nhưng nghe lẹt xẹt, xè xè rất chói tai.",
        ],
        diagnosisSteps: [
            "Cắm tai nghe (jack 3.5mm) vào xem tai nghe có tiếng không. Nếu tai nghe có mà loa ngoài không có -> Hỏng loa ngoài.",
            "Nếu biểu tượng loa gạch chéo -> Kiểm tra Driver hoặc Audio Service.",
        ],
        fix: [
            "Chuột phải vào biểu tượng loa -> Chọn Troubleshoot sound problems để Windows tự sửa lỗi service.",
            "Vào Device Manager, gỡ driver Realtek High Definition Audio (hoặc tương tự) và khởi động lại máy để nạp lại.",
            "Nếu loa bị rè vật lý: Mở máy và kiểm tra xem có mạt sắt/bụi dính vào màng loa không.",
            "Laptop: Lỗi rách màng loa cực kỳ phổ biến do thói quen mở Max Volume (100%) trong thời gian dài. Rách màng thì bắt buộc phải thay cụm loa mới, giải pháp tạm thời là dùng tai nghe hoặc loa Bluetooth.",
        ],
        image: "hinh-anh/L13.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 14: Cắm sạc nhưng không vào pin (Plugged in, not charging)
        keywords: [
            "cắm sạc không vào pin",
            "plugged in not charging",
            "sạc không tăng pin",
            "laptop cắm điện pin không sạc",
            "sạc vào không lên pin",
            "cục sạc có đèn nhưng pin không tăng"
        ],
        name: "Cắm sạc nhưng không vào pin (Plugged in, not charging)",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Chỉ xuất hiện trên Laptop. Biểu tượng pin ở góc màn hình nhận sạc nhưng phần trăm pin đứng im, rút cáp sạc ra là máy tắt ngay lập tức.",
        ],
        diagnosisSteps: [
            "Thử dùng một củ sạc cùng hãng (đủ công suất) khác để cắm vào.",
            "Dùng phần mềm BatteryMon hoặc lệnh powercfg /batteryreport để xem độ chai pin (Wear Level).",
            "Kiểm tra xem máy có đang dùng phần mềm giới hạn ngưỡng sạc của hãng (như ASUS Battery Health Charging, Lenovo Vantage) không.",
        ],
        fix: [
            "Vào Device Manager -> Batteries -> Chuột phải vào Microsoft ACPI-Compliant Control Method Battery -> Uninstall Device. Sau đó Restart máy để Windows nhận diện lại pin.",
            "Nếu mạch pin khóa hoặc cell pin đã chết (Wear Level > 80%): Bắt buộc thay pin mới.",
            "Nhiều trường hợp không hỏng pin mà hỏng mạch sạc trên Mainboard, yêu cầu cần mang đến kỹ thuật viên.",
            "Tuyệt đối không đâm, chọc hay bóp méo viên pin nếu thấy nó có dấu hiệu phồng rộp đẩy bung vỏ máy (nguy cơ cháy nổ cực cao).",
        ],
        image: "hinh-anh/L14.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 15: Quạt tản nhiệt kêu lạch cạch, rú to bất thường
        keywords: [
            "quạt tản nhiệt kêu lạch cạch",
            "quạt cpu rú to bất thường",
            "tiếng quạt kêu lạ trong máy",
            "quạt laptop kêu vo vo liên tục",
            "quạt máy tính ồn bất thường",
            "fan laptop kêu to không tắt"
        ],
        name: "Quạt tản nhiệt kêu lạch cạch, rú to bất thường",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Quạt kêu rất to ngay cả khi không chạy ứng dụng nặng, kèm theo âm thanh lạch cạch hoặc rít lên như động cơ. Máy có dấu hiệu rung nhẹ.",
        ],
        diagnosisSteps: [
            "Nghiêng nhẹ máy, nếu tiếng lạch cạch thay đổi âm lượng/tần số -> Trục quạt đã mòn hoặc rụng bi.",
            "Nhìn vào khe tản nhiệt xem có rác, tóc mây hay côn trùng lọt vào cạ vào cánh quạt không.",
        ],
        fix: [
            "Tháo nắp lưng máy.",
            "Tháo ốc cố định quạt, nhấc cụm quạt ra.",
            "Nên mua quạt mới để thay thế cho quạt cũ.",  
        ],
        image: "hinh-anh/L15.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 16: Mất Bluetooth hoặc kết nối chập chờn
        keywords: [
            "mất bluetooth laptop",
            "bluetooth không bật được",
            "kết nối bluetooth chập chờn",
            "bluetooth biến mất khỏi device manager",
            "không tìm thấy thiết bị bluetooth",
            "bluetooth ngắt kết nối liên tục"
        ],
        name: "Mất Bluetooth hoặc kết nối chập chờn",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Nút bật tắt Bluetooth trong Action Center biến mất. Kết nối tai nghe không dây hoặc chuột thỉnh thoảng bị khựng, đứt quãng.",
        ],
        diagnosisSteps: [
            "Tắt, bật lại tai nghe/chuột.",
            "Kiểm tra xem có thiết bị phát sóng mạnh nào (như lò vi sóng, router Wi-Fi 2.4GHz) đặt quá gần máy không (gây nhiễu sóng).",
            "Vào Device Manager kiểm tra driver Bluetooth có bị ẩn hoặc báo lỗi chấm than vàng không.",
        ],
        fix: [
            "Vào Windows Services (services.msc), tìm Bluetooth Support Service, chuột phải chọn Restart và đổi Startup type thành Automatic.",
            "Lên trang chủ của hãng laptop (hoặc hãng mainboard), tải driver Bluetooth tương ứng cài vào.",
            "Card Bluetooth và card Wi-Fi thường được tích hợp chung trên một linh kiện vật lý (Card M.2 hoặc chuẩn PCIe). Nếu máy tính của bạn mất đồng thời cả Wi-Fi lẫn Bluetooth, 99% lỗi nằm ở phần cứng (card bị lỏng hoặc đã hỏng), cần tháo máy để vệ sinh chân đồng hoặc thay card mới.",
        ],
        image: "hinh-anh/L16.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 17: Màn hình tối mờ
        keywords: [
            "màn hình tối không sáng",
            "đèn nền màn hình tắt",
            "màn hình laptop mờ hẳn",
            "backlight chết màn hình đen",
            "chỉnh độ sáng không được",
            "màn hình quá tối dù chỉnh max"
        ],
        name: "Màn hình tối mờ (Chết đèn nền / Lỗi cao áp)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Màn hình tưởng chừng như màu đen (không lên hình), nhưng nếu lấy đèn pin điện thoại rọi sát vào màn hình thì vẫn thấy mờ mờ các icon và chuột đang di chuyển bên trong.",
        ],
        diagnosisSteps: [
            "Dùng đèn pin rọi vào góc màn hình để xác nhận có hình ảnh chìm bên trong không.",
            "Cắm xuất hình ra màn hình phụ (Tivi/Monitor), nếu màn phụ lên hình bình thường thì chắc chắn lỗi ở cụm màn hình chính.",
        ],
        fix: [
            "Kiểm tra lại cáp tín hiệu từ Mainboard lên Panel màn hình xem có lỏng/đứt gập không.",
            "Sửa mạch LED driver trên bo mạch (yêu cầu đo đạc linh kiện).",
            "Thay thế toàn bộ cụm Panel màn hình mới nếu bóng LED bên trong đã cháy.",
            "Lỗi này rất dễ bị chẩn đoán nhầm thành Chết VGA hoặc Không lên hình.", 
        ],
        image: "hinh-anh/L17.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 18: Vòng lặp khởi động
        keywords: [
            "vòng lặp khởi động liên tục",
            "máy tự restart mãi không vào win",
            "automatic repair loop không thoát",
            "boot loop windows 10 11",
            "máy khởi động lại liên tục không dừng",
            "bị kẹt vòng lặp sửa chữa tự động"
        ],
        name: "Vòng lặp khởi động (Boot Loop / Automatic Repair)",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Máy vừa lên logo Windows hoặc xoay vòng chấm bi được vài giây thì tự động tắt và khởi động lại. Hoặc máy liên tục hiện dòng chữ Preparing Automatic Repair nhưng chạy mãi không xong, rồi lại reset.",
        ],
        diagnosisSteps: [
            "Rút toàn bộ USB, ổ cứng di động, thẻ nhớ ra khỏi máy (tránh máy boot nhầm thiết bị).",
            "Đưa máy vào môi trường WinPE (qua USB Boot) hoặc Windows Recovery Environment (WinRE).",
        ],
        fix: [
            "Trong WinRE, chọn Troubleshoot -> Advanced Options -> Uninstall Updates (nếu lỗi xảy ra ngay sau khi Windows tự update).",
            "Mở Command Prompt trong WinRE, chạy các lệnh sửa boot: bootrec /fixmbr, bootrec /fixboot, bootrec /rebuildbcd.",
            "Nếu file hệ thống hỏng quá nặng, tiến hành Cài lại Windows (nhớ dùng WinPE copy cứu dữ liệu ở ổ C trước).",
            "80% nguyên nhân do quá trình Windows Update đang diễn ra thì máy bị mất điện, hết pin sập nguồn, hoặc người dùng nôn nóng bấm nút nguồn ép máy tắt.", 
        ],
        image: "hinh-anh/L18.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 19: Touchpad bị liệt, bấm không ăn
        keywords: [
            "touchpad không dùng được",
            "chuột cảm ứng laptop liệt",
            "touchpad bấm không ăn",
            "bàn di chuột laptop không hoạt động",
            "touchpad không di chuyển được",
            "fn f9 touchpad không bật lại được"
        ],
        name: "Touchpad bị liệt, bấm không được (Laptop)",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Không thể dùng tay di chuột trên Touchpad, click trái/phải không có tác dụng. Cắm chuột dây qua cổng USB thì vẫn dùng bình thường.",
        ],
        diagnosisSteps: [
            "Nhìn kỹ phím hàng F (F1-F12) xem có biểu tượng Touchpad bị gạch chéo không.",
            "Vào Device Manager kiểm tra driver Mice and other pointing devices.",
            "Đặt máy trên mặt phẳng, nhìn ngang xem thân máy (khu vực kê tay) có bị cong vênh lên không.",
        ],
        fix: [
            "Bấm tổ hợp phím Fn + F(x) (phím có hình Touchpad) để mở khóa. Một số dòng HP chạm đúp vào góc trái trên cùng của Touchpad để mở.",
            "Gỡ driver Touchpad hiện tại và khởi động lại máy để Windows nạp lại.",
            "Nếu pin bị phồng đội lên Touchpad: Tháo ngay pin ra.",
            "Khi pin phồng đẩy cứng Touchpad từ bên dưới, tuyệt đối không dùng tay ấn mạnh xuống Touchpad. Việc này có thể làm thủng cell pin gây cháy nổ lập tức.",
            "Lên trang chủ hãng tải đúng driver tùy theo các model máy sẽ khắc phục triệt để lỗi phần mềm."
        ],
        image: "hinh-anh/L19.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 20: Lỗi kẹt lệnh in hoặc không tìm thấy máy in LAN
        keywords: [
            "máy in không in được",
            "kẹt lệnh in trong print queue",
            "lệnh in bị treo xóa không được",
            "không tìm thấy máy in lan",
            "printer spooler lỗi",
            "xóa lệnh in không được cách xử lý"
        ],
        name: "Lỗi kẹt lệnh in hoặc không tìm thấy máy in LAN",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Bấm lệnh in (Ctrl+P) bình thường, không báo lỗi nhưng máy in im lìm. Hoặc biểu tượng máy in trong máy tính bị mờ xám (Offline).",
        ],
        diagnosisSteps: [
            "Xem đèn báo trên máy in có nháy đỏ không (hết giấy, kẹt giấy, hết mực).",
            "Ping địa chỉ IP của máy in xem máy tính có thông mạng với máy in không.",
            "Kiểm tra hàng đợi lệnh in (Print Queue) xem có file nào đang báo Error cản đường các file sau không.",
        ],
        fix: [
            "Xóa lệnh in bị kẹt: Mở cửa sổ Print Queue -> Printer -> Cancel All Documents.",
            "Khởi động lại dịch vụ in: Bấm Win+R gõ services.msc, tìm đến Print Spooler, chuột phải chọn Restart. Tắt máy in đi bật lại.",
            "Đặt IP tĩnh (Static IP) cho máy in để tránh tình trạng modem đổi IP máy in mỗi ngày.",
        ],
        image: "hinh-anh/L20.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 21: Máy nhiễm Malware hoặc Adware quảng cáo
        keywords: [
            "máy nhiễm virus quảng cáo",
            "adware bật quảng cáo liên tục",
            "malware trên máy tính",
            "trình duyệt tự mở trang lạ",
            "diệt malware adware windows",
            "máy chạy chậm do virus quảng cáo"
        ],
        name: "Máy nhiễm Malware hoặc Adware quảng cáo",
        category: "Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Trình duyệt web (Chrome/Edge) tự động nhảy sang trang web lạ (bet, cờ bạc, quảng cáo), góc phải màn hình liên tục hiện thông báo rác. CPU và RAM luôn ở mức cao dù không mở gì. Trình diệt virus có sẵn bị vô hiệu hóa.",
        ],
        diagnosisSteps: [
            "Vào phần Tiện ích mở rộng (Extensions) của trình duyệt xem có add-on lạ nào không thể xóa không.",
            "Mở Task Manager tìm các tiến trình tên lạ, tốn nhiều tài nguyên.",
        ],
        fix: [
            "Ngắt kết nối mạng ngay lập tức để chặn mã độc tải thêm dữ liệu hoặc gửi thông tin ra ngoài.",
            "Khởi động máy vào Safe Mode.",
            "Cài đặt các công cụ chuyên dụng như Malwarebytes Anti-Malware hoặc Kaspersky Virus Removal Tool (tải từ máy khác copy sang qua USB) để quét toàn bộ ổ cứng.",
            "Reset lại thiết lập mặc định của trình duyệt web.",
            "Nếu dính biến thể nặng nhất là Ransomware (mã hóa toàn bộ file Word, Excel, JPG thành đuôi lạ và đòi tiền chuộc), KHÔNG nên chuyển tiền vì 99% sẽ mất cả tiền lẫn dữ liệu. Việc duy nhất có thể làm là cài lại trắng Windows và format ổ cứng.", 
        ],
        image: "hinh-anh/L21.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 22: Gãy bản lề, bung chân ốc
        keywords: [
            "gãy bản lề laptop",
            "bản lề màn hình bị bung",
            "ốc bản lề bị gãy chân",
            "màn hình laptop bị bung ra",
            "sửa bản lề laptop bị vỡ",
            "vỏ laptop nứt gần bản lề"
        ],
        name: "Gãy bản lề, bung chân ốc (Laptop)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Gập mở màn hình máy tính cảm thấy rất nặng, cứng hoặc lỏng lẻo bất thường. Nghe tiếng lách cách nhựa gãy bên trong. Khu vực góc màn hình hoặc mép tản nhiệt bị bung hở hoác, thấy rõ bản lề sắt trồi lên",
        ],
        diagnosisSteps: [
            "Ngừng ngay lập tức việc cố sức gập/mở màn hình thêm nữa để tránh cáp màn hình bị đứt hoặc bể luôn kính màn hình.",
            "Quan sát các góc cạnh máy xem nhựa vỏ máy đã vỡ vụn chưa.",
        ],
        fix: [
            "Tháo toàn bộ vỏ máy.",
            "Dùng kìm nới lỏng nhẹ ốc hãm của trục bản lề sắt (để màn hình gập mở nhẹ tay hơn).",
            "Dùng keo AB (Keo Epoxy) chuyên dụng trộn lẫn để đúc và tạo hình lại các chân ốc nhựa đã bị nhổ rễ trên vỏ máy. Chờ cho keo chết cứng rồi mới bắt ốc lại.",
            "Nếu vỏ vỡ nát, bắt buộc phải đặt mua mặt vỏ (Mặt A, B, C, D) tương ứng để thay thế.",
            "TUYỆT ĐỐI không dùng keo 502 (keo dán sắt) đổ trực tiếp vào khe hở bản lề. Keo 502 có tính giòn, không chịu lực xoắn được, đồng thời khi chảy lan vào bo mạch sẽ làm cháy chập linh kiện vĩnh viễn.", 
        ],
        image: "hinh-anh/L22.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 23: Màn hình nhấp nháy, giật rung
        keywords: [
            "màn hình nhấp nháy liên tục",
            "màn hình giật rung screen flickering",
            "screen flickering cách sửa",
            "màn hình chớp tắt liên tục",
            "laptop bị giật màn hình",
            "màn hình rung khi di chuyển"
        ],
        name: "Màn hình nhấp nháy, giật rung (Screen Flickering)",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Màn hình chớp tắt liên tục, icon trên desktop bị rung, hoặc có các dải sáng mờ chạy ngang màn hình.",
        ],
        diagnosisSteps: [
            "Bấm tổ hợp phím Ctrl + Shift + Esc để mở Task Manager.",
            "Nếu cửa sổ Task Manager CŨNG nhấp nháy -> Lỗi do cáp màn hình, panel màn hình hoặc Card VGA (phần cứng).",
            "Nếu cửa sổ Task Manager KHÔNG nhấp nháy mà phần nền phía sau nháy -> Lỗi do Driver VGA hoặc phần mềm không tương thích (phần mềm).",
        ],
        fix: [
            "Vào Device Manager, tìm Display adapters, chuột phải vào card đồ họa chọn Roll Back Driver (nếu vừa update bị lỗi) hoặc Update Driver.",
            "Nhấp chuột phải vào Desktop -> Display settings -> Advanced display, thử chỉnh lại Tần số quét (Refresh Rate) về 60Hz.",
            "Nếu do cáp hoặc phần cứng: Cần tháo máy vệ sinh đầu cáp tín hiệu hoặc thay cáp mới.",
            "Đây là lỗi của Windows 10/11 khi hệ điều hành tự động cập nhật sai phiên bản driver VGA.",
        ],
        image: "hinh-anh/L23.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 24: Laptop bị đổ nước hoặc chất lỏng
        keywords: [
            "laptop bị đổ nước",
            "máy tính dính nước chất lỏng",
            "laptop ướt nước phải làm gì",
            "đổ nước vào bàn phím laptop",
            "laptop bị nước vào xử lý",
            "cứu laptop bị đổ nước"
        ],
        name: "Laptop bị đổ nước hoặc chất lỏng",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Nước lọc, cà phê, trà vô tình đổ trực tiếp lên bàn phím hoặc khe tản nhiệt của laptop đang hoạt động.",
        ],
        diagnosisSteps: [
            "Không được bật máy! Mọi thao tác cấp nguồn lúc này đều dẫn đến chập cháy linh kiện ngay lập tức.",
        ],
        fix: [
            "Rút cáp sạc ngay lập tức.",
            "Nhấn và giữ lì nút Nguồn (Power) trong khoảng 10 giây để tắt nóng máy.",
            "Tháo pin ra khỏi máy (nếu là dạng pin tháo rời bên ngoài).",
            "Lật úp máy tính xuống theo hình chữ V (như túp lều) để nước chảy ngược ra ngoài, dùng khăn khô thấm phần nước đọng.",
            "Mang máy đến trung tâm sửa chữa sớm nhất để kỹ thuật viên tháo mainboard ra sấy chuyên dụng và rửa bằng dung dịch tẩy cặn mốc.", 
            "TUYỆT ĐỐI KHÔNG dùng máy sấy tóc thổi hơi nóng vào bàn phím. Gió nóng sẽ làm chảy teo các màng mạch nhựa bên dưới phím và thổi nước lọt sâu hơn vào CPU/VGA. Không bỏ máy vào thùng gạo vì bụi gạo lọt vào khe tản nhiệt sẽ gây hại thêm.", 
        ],
        image: "hinh-anh/L24.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 25: Quên mật khẩu đăng nhập Windows hoặc quên mất mã PIN
        keywords: [
            "quên mật khẩu đăng nhập windows",
            "quên pin windows không vào được",
            "bypass mật khẩu windows 10 11",
            "reset password windows không có usb",
            "không nhớ mật khẩu tài khoản microsoft",
            "xóa mật khẩu windows"
        ],
        name: "Quên mật khẩu đăng nhập Windows hoặc quên mất mã PIN",
        category: "Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Bật máy lên nhưng không thể vào màn hình Desktop do quên Password/PIN, nhập sai nhiều lần máy yêu cầu chờ 2 tiếng.",
        ],
        diagnosisSteps: [
            "Nhìn dưới ô nhập mật khẩu xem đó là tài khoản Local (tài khoản cục bộ) hay Microsoft Account (cần email @outlook/gmail).",
            "Nếu là Microsoft Account, chỉ cần dùng điện thoại truy cập trang chủ Microsoft để Forgot Password và đổi mật khẩu mới (máy tính phải đang có mạng).",
        ],
        fix: [
            "Dùng một máy tính khác tạo USB Boot (WinPE).",
            "Cắm USB vào máy bị khóa, boot vào môi trường WinPE.",
            "Mở công cụ Password Changer hoặc NTPWEdit (có sẵn trong WinPE), chọn file SAM của ổ C, tìm đến tên user bị khóa và chọn Clear Password hoặc Unlock.",
            "Khởi động lại máy, Windows sẽ cho phép vào thẳng mà không cần pass.",
            "Thao tác dùng USB Boot xóa pass chỉ có tác dụng khi ổ cứng KHÔNG bị mã hóa BitLocker. Nếu ổ cứng đã bị khóa BitLocker mà không nhớ cả Key lẫn Pass thì mất 100% dữ liệu, bắt buộc cài lại Windows trắng.",
        ],
        image: "hinh-anh/L25.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 26: Micro không hoạt động hoặc đầu dây bên kia không nghe thấy tiếng nói
        keywords: [
            "micro không hoạt động",
            "đầu dây bên kia không nghe thấy tiếng",
            "microphone không nhận âm",
            "gọi video không có tiếng nói",
            "mic bị tắt không bật được",
            "microphone không được nhận trong windows"
        ],
        name: "Micro không hoạt động hoặc đầu dây bên kia không nghe thấy tiếng nói",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Gọi Zalo, Google Meet, Zoom nhưng người khác không nghe thấy bạn nói gì, hoặc tiếng rất bé hoặc rè.",
        ],
        diagnosisSteps: [
            "Nhìn trên bàn phím (hàng F1-F12) xem có phím nào biểu tượng Micro bị sáng đèn không (đang bị Mute cứng).",
            "Kiểm tra phần Sound settings -> mục Input xem thanh âm lượng có nhảy khi bạn nói không.",
        ],
        fix: [
            "Mở Settings -> Privacy & security -> Microphone. Bật On phần Microphone access và Let apps access your microphone.",
            "Trong phần mềm gọi điện (Zalo/Zoom), vào mục Cài đặt thiết bị -> Đảm bảo chọn đúng tên thiết bị Micro (vd: Microphone Array) thay vì thiết bị ảo.",
            "Cài lại driver Audio.",
            "Windows 10/11 có cơ chế bảo mật tự động chặn quyền dùng Micro của ứng dụng. Phần lớn người dùng tưởng hỏng phần cứng nhưng thực tế chỉ cần gạt nút On trong Privacy là xong.",
        ],
        image: "hinh-anh/L26.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 27: Cắm tai nghe 3.5mm nhưng loa ngoài vẫn kêu
        keywords: [
            "cắm tai nghe loa ngoài vẫn kêu",
            "cắm headphone không tắt loa",
            "cổng 3.5mm không nhận tai nghe",
            "loa máy tính không tắt khi cắm tai nghe",
            "jack audio hỏng không nhận tai nghe"
        ],
        name: "Cắm tai nghe 3.5mm nhưng loa ngoài vẫn kêu",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Đã cắm jack tai nghe vào lỗ 3.5mm nhưng âm thanh vẫn phát bô bô từ loa ngoài laptop, hoặc tai nghe và loa phát song song cùng lúc.",
        ],
        diagnosisSteps: [
            "Rút tai nghe ra, cắm lại dứt khoát một lần nữa. Xoay nhẹ chân jack cắm.",
            "Cắm thử tai nghe sang điện thoại xem tai nghe có hỏng không.",
        ],
        fix: [
            "Mở phần mềm Realtek Audio Console (hoặc các phần mềm khác tùy theo hãng). Tìm biểu tượng hình bánh răng (Settings), chọn mục Disable front panel jack detection hoặc tick vào Mute the rear output device, when a front headphone plugged in.",
            "Cập nhật lại driver Audio qua trang chủ hãng.",
            "Dùng tăm bông nhỏ nhúng cồn 90 độ ngoáy nhẹ vào trong lỗ cắm 3.5mm để làm sạch tiếp điểm.",
            "Lỗi này rất thường gặp do lẫy đồng (công tắc ngắt mạch vật lý) bên trong lỗ cắm 3.5mm bị kẹt/dính mạt bụi không nẩy lên được, khiến máy tính không nhận diện được hành động cắm tai nghe của người dùng.",
        ],
        image: "hinh-anh/L27.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 28: Chuột bị lỗi click đúp hoặc lăn chuột bị loạn
        keywords: [
            "chuột tự click đúp",
            "double click lỗi chuột",
            "click một lần ra hai lần",
            "lăn chuột loạn nhảy",
            "chuột cuộn page tự chạy ngược",
            "chuột bị lỗi click chính xác"
        ],
        name: "Chuột bị lỗi click đúp (Double-click) hoặc lăn chuột bị loạn",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Nhấn chuột trái 1 lần để chọn file nhưng máy tự hiểu là 2 lần (m mở luôn file). Cuộn con lăn chuột xuống dưới nhưng trang web lại nảy giật lên trên.",
        ],
        diagnosisSteps: [
            "Cắm chuột sang một máy tính khác để thử, nếu vẫn bị thì chắc chắn lỗi vật lý của chuột.",
            "Vào Mouse Settings trên Windows kiểm tra xem tốc độ Double-click speed có đang bị kéo nhanh quá mức không.",
        ],
        fix: [
            "Tháo ốc dưới gầm chuột, mở vỏ. Nhỏ 1 giọt dung dịch RP7 (hoặc cồn) vào khe nhỏ của nút bấm (Switch) và bộ phận lăn (Encoder). Bấm/lăn liên tục 50 lần để đánh bay rỉ sét bám trên lá đồng.",
            "Mua Switch và bộ Encoder mới, dùng mỏ hàn chì nhổ chân linh kiện cũ ra và thay thế vào bo mạch chuột.",
            "Đây là lỗi vật lý do lá tiếp điểm bằng đồng bên trong chuột bị ô-xi hóa, thường xảy ra ở mọi loại chuột từ văn phòng đến gaming đắt tiền.",
        ],
        image: "hinh-anh/L28.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 29: USB hoặc thẻ nhớ báo lỗi The disk is write protected
        keywords: [
            "usb bị khóa write protected",
            "thẻ nhớ báo lỗi write protected",
            "không copy được vào usb",
            "xóa file trong usb không được",
            "usb chỉ đọc không ghi được",
            "gỡ write protection usb"
        ],
        name: "USB hoặc thẻ nhớ báo lỗi The disk is write protected",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Cắm USB vào máy, đọc/copy dữ liệu ra thì được, nhưng xóa file, format hay copy file mới vào thì máy báo lỗi Write protected (Bảo vệ chống ghi).",
        ],
        diagnosisSteps: [
            "Kiểm tra trên thân USB hoặc vỏ thẻ nhớ SD có nút gạt vật lý (Lock) bị gạt nhầm không.",
            "Quét virus toàn bộ USB.",
        ],
        fix: [
            "Mở CMD (dưới quyền Admin), gõ lần lượt các lệnh: diskpart -> list disk -> select disk (số thứ tự USB) -> attributes disk clear readonly -> exit.",
            "Nhấn Win + R, gõ regedit. Tìm đến đường dẫn HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\StorageDevicePolicies và điều chỉnh giá trị WriteProtect thành 0.",
            "Nếu bạn đã dùng lệnh Diskpart và cả các phần mềm Low-Level Format nhưng USB vẫn báo Write protected, điều đó có nghĩa là chip nhớ NAND Flash bên trong đã hỏng. Chip nhớ có tính năng tự động khóa (chỉ đọc) khi phát hiện sắp chết để bảo vệ dữ liệu còn lại bên trong. Lúc này bắt buộc phải mua USB mới.",
        ],
        image: "hinh-anh/L29.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 30: Máy in, in ra giấy trắng tinh hoặc sọc đen vệt dài
        keywords: [
            "máy in ra giấy trắng tinh",
            "in ra giấy bị sọc đen",
            "mực in không ra giấy",
            "đầu phun máy in bị tắc",
            "hộp mực đầy nhưng không in được",
            "máy in mờ sọc thiếu mực"
        ],
        name: "Máy in, in ra giấy trắng tinh hoặc sọc đen vệt dài",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Có lệnh in, máy kéo giấy ra bình thường nhưng tờ giấy trắng tinh không có hạt mực nào. Hoặc bản in ra bị một vệt đen xì, đậm kéo dài từ trên xuống dưới tờ giấy.",
        ],
        diagnosisSteps: [
            "Mở nắp máy in, rút hộp mực (Cartridge) ra ngoài kiểm tra.",
            "Kiểm tra xem hộp mực còn mực hay không.",
        ],
        fix: [
            "Bản in trắng tinh: Nguyên nhân thường do mất tiếp mát trục từ, hoặc đứt cáp/hộp quang không bắn được tia laser. Thử thay một hộp mực khác để loại trừ.",
            "Bản in có sọc đen kéo dài: 100% do xước Trống in (Drum - thanh nhôm hình trụ màu xanh lá/xanh dương) hoặc gạt mực bị mẻ/rách. Cần mua Trống mới thay vào hộp mực.",
            "Việc tự tháo hộp mực máy in laser đòi hỏi sự khéo léo, nếu không sẽ làm bung lò xo hoặc làm đổ bột mực thải ra ngoài rất độc hại. Khuyến nghị người dùng chỉ nên tự xử lý bằng cách mua hộp mực thay thế, còn việc sửa chữa sâu nên giao cho kỹ thuật viên máy in.",
        ],
        image: "hinh-anh/L30.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 31: Không xuất được hình ra máy chiếu hoặc màn hình ngoài
        keywords: [
            "không xuất hình ra máy chiếu",
            "laptop không nhận màn hình ngoài",
            "hdmi không có tín hiệu",
            "fn f4 không chuyển màn hình",
            "màn hình ngoài không nhận tín hiệu",
            "extend display không được"
        ],
        name: "Không xuất được hình ra máy chiếu hoặc màn hình ngoài",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Cắm cáp HDMI/VGA từ máy tính sang máy chiếu hoặc màn hình phụ nhưng bên kia báo No Signal. Máy tính không có hiện tượng chớp nhận màn hình.",
        ],
        diagnosisSteps: [
            "Kiểm tra máy chiếu đã chọn đúng cổng Input (Source) chưa (Ví dụ: Cắm HDMI 1 nhưng máy chiếu đang để HDMI 2). ",
            "Nhấn tổ hợp phím xuất hình của Windows.",
            "Thử đổi sợi cáp khác để loại trừ lỗi đứt cáp ngầm.",
        ],
        fix: [
            "Bấm tổ hợp phím Windows + P, chọn Duplicate (nhân bản) hoặc Extend (mở rộng).",
            "Rút cáp ra, dùng cồn vệ sinh sạch các chân đồng ở cổng HDMI/VGA trên máy tính rồi cắm lại dứt khoát.",
            "Vào Display Settings, nếu thấy 2 màn hình nhưng màn số 2 bị nhỏ lại, hãy chỉnh lại độ phân giải (Resolution) cho phù hợp với máy chiếu.",
        ],
        image: "hinh-anh/L31.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 32: Laptop vỏ nhôm hoặc vỏ máy bị rò điện, giật tê tay
        keywords: [
            "laptop vỏ bị rò điện",
            "cầm máy tính thấy giật tê tay",
            "vỏ nhôm laptop bị điện",
            "máy tính gây điện giật nhẹ",
            "rò điện từ laptop ra tay",
            "cảm giác tê tay khi cầm laptop cắm điện"
        ],
        name: "Laptop vỏ nhôm hoặc vỏ máy bị rò điện, giật tê tay",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Chạm tay vào bề mặt kim loại của desktop hoặc laptop (như MacBook, Dell XPS, HP Envy) có cảm giác rung râm ran, tê tê như kiến bò, đặc biệt là ở chỗ kê tay. Rút sạc ra thì hết.",
        ],
        diagnosisSteps: [
            "Chân bạn có đang chạm trực tiếp xuống nền đất gạch hay nền xi măng không?",
            "Củ sạc đang dùng là loại phích cắm 2 chấu hay 3 chấu?",
        ],
        fix: [
            "Đảo ngược chiều phích cắm điện của cục sạc vào ổ cắm. Mang dép xốp hoặc lót thảm cao trên dưới chân khi sử dụng máy.",
            "Thay phích cắm sạc sang loại 3 chấu (nếu củ sạc hỗ trợ thay dây) và cắm vào ổ điện có lỗ tiếp địa.",
            "Có thể tự chế dây tiếp địa bằng cách buộc 1 sợi dây đồng vào ốc vít trên thân máy/vỏ case, đầu còn lại đóng đinh ghim xuống tường/đất.",
            "Đây không phải là lỗi của máy, mà chỉ là hiện tượng dòng rò điện từ (EMI) trên các thiết bị vỏ kim loại không được tiếp địa. Nguồn điện lưới Việt Nam đa số dùng ổ 2 chấu không có dây tiếp địa nên hiện tượng này cực kỳ phổ biến.",
        ],
        image: "hinh-anh/L32.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 33: Mạng dây LAN báo Unidentified Network
        keywords: [
            "mạng lan báo unidentified network",
            "có dây mạng nhưng không internet",
            "ethernet vàng chấm hỏi",
            "lan không lên internet dù cắm dây",
            "limited connectivity mạng dây",
            "không nhận dhcp từ router"
        ],
        name: "Mạng dây LAN báo Unidentified Network",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Cổng LAN trên máy sáng đèn chớp nháy bình thường, nhưng biểu tượng mạng hình máy tính ở góc phải có dấu chấm than vàng, báo No Internet Access.",
        ],
        diagnosisSteps: [
            "Kiểm tra xem các máy tính khác cắm chung cục switch/modem đó có vào được mạng không (loại trừ lỗi nhà mạng).",
            "Kiểm tra xem máy có đang bị set IP tĩnh (Static IP) sai dải mạng không.",
        ],
        fix: [
            "Chuột phải icon mạng -> Network & Internet Settings -> Change adapter options -> Chuột phải vào cổng Ethernet chọn Properties -> Chọn IPv4. Đảm bảo đang để tích ở ô Obtain an IP address automatically (Nhận IP động).",
            "Mở CMD quyền Admin, chạy các lệnh làm mới mạng: ipconfig /release -> ipconfig /renew -> netsh winsock reset -> Khởi động lại máy tính.",
            "Lỗi này do máy tính không nhận được IP từ cục Router cấp phát (lỗi DHCP)",
        ],
        image: "hinh-anh/L33.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 34: Camera hoặc webcam bị đen hoặc báo lỗi 0xA00F4244
        keywords: [
            "webcam bị đen không lên hình",
            "camera báo lỗi 0xa00f4244",
            "camera laptop không hoạt động",
            "zoom teams không nhận camera",
            "webcam bị chiếm dụng bởi ứng dụng khác",
            "camera device not found"
        ],
        name: "Camera hoặc webcam bị đen hoặc báo lỗi 0xA00F4244",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Mở phần mềm Camera trên Win hoặc dùng Zoom/Meet thì màn hình camera đen thui, có hình máy ảnh gạch chéo, hoặc báo lỗi we can't find your camera",
        ],
        diagnosisSteps: [
            "Nhìn kỹ ngay trên mắt Camera vật lý xem có Lẫy gạt bảo mật (Privacy Shutter) đang che lại không (dấu hiệu: thấy một chấm màu đỏ hoặc cam che trước ống kính).",
            "Tìm trên bàn phím (F1-F12) xem có phím tắt đang bật/tắt Camera cứng không.",
        ],
        fix: [
            "Gạt mở nắp che vật lý (thường gặp ở Lenovo ThinkPad, HP, Dell đời mới).",
            "Bấm tổ hợp Fn + Phím có hình Camera.",
            "Vào Settings -> Privacy & security -> Camera -> Bật On dòng Camera access.",
            "Vào Device Manager, tìm Cameras hoặc Imaging devices, chuột phải chọn Update driver.",
        ],
        image: "hinh-anh/L34.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 35: Màn hình cảm ứng tự nhảy lung tung (Ghost Touch)
        keywords: [
            "màn hình cảm ứng tự nhảy",
            "ghost touch màn hình tự bấm",
            "touchscreen tự chạm loạn",
            "màn hình cảm ứng bị nhiễu",
            "tự động bấm màn hình không ai chạm"
        ],
        name: "Màn hình cảm ứng tự nhảy lung tung (Ghost Touch)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Laptop có màn hình cảm ứng tự động click liên tục vào một góc màn hình dù không có ai chạm vào. Chuột bị giật liên tục về một điểm khiến người dùng không thể làm việc.",
        ],
        diagnosisSteps: [
            "Lau sạch màn hình bằng khăn mềm và cồn chuyên dụng xem có hết không (loại trừ do mồ hôi/bụi ẩm).",
            "Nếu lau sạch vẫn bị, chắc chắn lớp cảm ứng (Touch Glass) đã bị lỗi điểm.",
        ],
        fix: [
            "Vô hiệu hóa tính năng cảm ứng. Bấm Win+X -> Device Manager -> Mở rộng mục Human Interface Devices -> Chuột phải vào HID-compliant touch screen -> Chọn Disable device. (Sau khi Disable, máy sẽ dùng như laptop không cảm ứng bình thường).",
            "Thay cụm màn hình kính cảm ứng mới (Chi phí thường rất đắt đỏ).",
            "Đây là lỗi phổ biến trên các dòng máy cảm ứng mỏng nhẹ (Dell XPS, Surface, HP Spectre) khi bị cấn móp nhẹ viền màn hình tạo áp lực lên mặt kính. Đa số người dùng chọn giải pháp Disable để tiết kiệm chi phí.",
        ],
        image: "hinh-anh/L35.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 36: Hệ điều hành đòi mã khóa BitLocker
        keywords: [
            "máy hỏi mã khóa bitlocker",
            "bitlocker recovery key không có",
            "windows đòi nhập mã bitlocker",
            "quên mã bitlocker không vào được win",
            "tìm key bitlocker ở đâu",
            "bỏ qua bitlocker khi khởi động"
        ],
        name: "Hệ điều hành đòi mã khóa BitLocker",
        category: "Phần mềm",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Bật máy lên không vào được Windows, hiện ngay một màn hình màu xanh dương có dòng chữ BitLocker yêu cầu nhập một dãy số Recovery Key dài 48 chữ số.",
        ],
        diagnosisSteps: [
            "Xác định xem máy vừa được mang đi nâng cấp phần cứng (thay main, đổi TPM) hay vừa cập nhật BIOS xong không.",
            "Hỏi người dùng xem họ có nhớ tài khoản Microsoft (Email) đang đăng nhập trên máy tính này không.",
        ],
        fix: [
            "Lấy điện thoại hoặc máy tính khác, đăng nhập vào trang account.microsoft.com/devices/recoverykey bằng tài khoản Microsoft của người dùng đó.",
            "Tìm đúng tên máy tính, lấy dãy số 48 số nhập vào màn hình BitLocker.",
            "Tính năng mã hóa ổ cứng của Windows 11 thường TỰ ĐỘNG BẬT ẩn. Nếu người dùng không có mã khóa và không nhớ tài khoản Microsoft, DỮ LIỆU SẼ MẤT VĨNH VIỄN 100%, không một kỹ thuật viên nào có thể bẻ khóa. Bắt buộc phải xóa sạch ổ cứng cài lại Win.",
        ],
        image: "hinh-anh/L36.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 37: Lỗi Virtual Disk Service Không gộp hay chia được ổ cứng
        keywords: [
            "không chia được ổ cứng",
            "không gộp phân vùng được",
            "lỗi virtual disk service",
            "disk management không chỉnh được",
            "extend volume bị mờ không bấm được",
            "shrink volume lỗi"
        ],
        name: "Lỗi Virtual Disk Service Không gộp hay chia được ổ cứng",
        category: "Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Vào Disk Management để chia thêm ổ D, nhưng khi bấm Shrink Volume hoặc Extend Volume thì các nút này bị mờ xám không bấm được, hoặc báo lỗi Virtual Disk Service error.",
        ],
        diagnosisSteps: [
            "Kiểm tra xem trên ổ đĩa có phân vùng Recovery xen giữa phân vùng C và vùng trống không.",
            "Kiểm tra System Protection có đang bật và chiếm dụng dung lượng làm file Pagefile/Hibernate không.",
        ],
        fix: [
            "Dùng phần mềm quản lý phân vùng chuyên dụng bên thứ 3 (như MiniTool Partition Wizard hoặc AOMEI Partition Assistant) để thay thế trình Disk Management mặc định của Windows.",
            "Nếu Shrink bị giới hạn do file hệ thống: Tắt System Restore, tắt Hibernate (powercfg -h off trong CMD), tắt Pagefile, sau đó khởi động lại và Shrink lại.",
        ],
        image: "hinh-anh/L37.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 38: Quạt tản nhiệt quay 100% tốc độ nhưng nhiệt độ máy mát
        keywords: [
            "quạt quay 100% máy không nóng",
            "fan spin full speed máy bình thường",
            "quạt không giảm tốc dù nhiệt thấp",
            "laptop quạt rú dù cpu mát",
            "fan control bị lỗi không điều chỉnh được"
        ],
        name: "Quạt tản nhiệt quay 100% tốc độ nhưng nhiệt độ máy mát",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Bật nguồn máy lên là quạt tản nhiệt lập tức rú lên ở tốc độ 100% ồn ào không ngừng nghỉ. Tuy nhiên sờ vào vỏ máy và khe tản nhiệt thì gió thổi ra rất mát, kiểm tra phần mềm HWMonitor báo nhiệt CPU chỉ 40-50 độ.",
        ],
        diagnosisSteps: [
            "Cập nhật thử phiên bản BIOS mới nhất xem có vá lỗi quạt không.",
            "Kiểm tra xem máy có bị rơi rớt làm lỏng giắc cắm cảm biến nhiệt (Thermal Sensor) trên mainboard không.",
        ],
        fix: [
            "Vào BIOS, tìm mục Fan Control hoặc Cooling Policy, chuyển thử sang chế độ Quiet hoặc Balanced.",
            "Nếu lỗi do phần cứng, lỗi này thường do chết cảm biến nhiệt trên Mainboard, hoặc lỗi chip SIO (Super I/O) khiến máy hiểu nhầm là đang quá nhiệt nên kích ép quạt quay max tốc để bảo vệ. Cần đưa ra trung tâm để kỹ thuật viên đo đạc và thay chip I/O.",
            "Một số dòng laptop Dell, nếu bạn cắm sạc pin không chính hãng (không nhận diện được công suất trong BIOS), máy cũng có tính năng tự động cho quạt quay max tốc độ và hạ xung nhịp CPU xuống thấp nhất để phòng cháy nổ.",
        ],
        image: "hinh-anh/L38.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 39: Màn hình bị hở sáng cạnh viền
        keywords: [
            "màn hình hở sáng cạnh viền",
            "backlight bleeding góc màn hình",
            "ánh sáng rò ra cạnh màn hình",
            "viền màn hình bị sáng lạ",
            "ips glow cạnh màn hình laptop"
        ],
        name: "Màn hình bị hở sáng cạnh viền (Backlight Bleeding)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Khi hiển thị hình nền màu đen (hoặc khi xem phim có dải đen trên/dưới), các góc cạnh viền màn hình xuất hiện các vệt sáng rực lên không đều nhau.",
        ],
        diagnosisSteps: [
            "Đưa máy vào phòng tối, mở một bức ảnh đen toàn màn hình.",
            "Dùng ngón tay ấn nhẹ vào viền màn hình khu vực bị sáng. Nếu ánh sáng thay đổi hoặc biến mất, nguyên nhân là do viền máy ép quá chặt vào panel.",
        ],
        fix: [
            "Giảm độ sáng màn hình (Brightness) xuống mức vừa phải.",
            "Thay màn hình mới sẽ khắc phục triệt để hoặc tiếp tục sử dụng màn hình cũ với lỗi đó",
            "Lỗi hở sáng hầu như không ảnh hưởng đến tuổi thọ máy. Rất nhiều dòng Laptop Gaming sử dụng tấm nền IPS đều mắc bệnh này, hãng thường từ chối bảo hành nếu hở sáng ở mức độ nhẹ.",
        ],
        image: "hinh-anh/L39.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 40: Bấm 1 phím ra nhiều ký tự / Dính phím
        keywords: [
            "bấm phím ra nhiều ký tự",
            "dính phím gõ bị lặp",
            "key chattering bàn phím cơ",
            "gõ một phím ra hai ba chữ",
            "phím bị liệt gõ không dứt",
            "keyboard ra liên tiếp ký tự"
        ],
        name: "Bấm 1 phím ra nhiều ký tự / Dính phím (Key Chattering)",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            " Gõ chữ A một lần nhưng trên màn hình hiện ra AA hoặc AAA. Xảy ra ở cả bàn phím cơ Desktop lẫn phím trên Laptop.",
        ],
        diagnosisSteps: [
            "Mở trang web keyboardtester.com để test chính xác phím nào đang bị kẹt đúp.",
            "Tháo keycap của phím đó ra kiểm tra xem có kẹt vụn bánh, tóc hay bụi rác bên dưới lẫy không.",
        ],
        fix: [
            "Sửa bằng phần mềm: Vào Windows Settings -> Accessibility -> Keyboard -> Bật Filter Keys để Windows tự động bỏ qua các nhịp gõ phím quá nhanh do chập mạch.",
            "Sửa phần cứng: Dùng cồn 90 độ hoặc dung dịch tẩy rửa tiếp điểm xịt vào switch (phím cơ) rồi bấm liên tục để làm sạch lá đồng. Với laptop, dùng bóng thổi bụi và chổi lông cứng quét sạch ngàm phím.",
            "Nếu phím cơ loại Hotswap thì chỉ cần nhổ switch cũ thay switch mới là xong trong 5 giây. Nếu phím Laptop bị lỗi này ở nhiều phím cùng lúc, 90% là do ẩm mạch màng carbon, cần thay toàn bộ cụm phím.",
        ],
        image: "hinh-anh/L40.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 41: Cắm RAM không cùng tốc độ gây xung đột (cần âm thanh)
        keywords: [
            "cắm ram không cùng tốc độ",
            "ram xung đột không nhận đủ",
            "máy không nhận hai thanh ram",
            "cắm thêm ram máy không lên",
            "ram incompatible xung đột",
            "mix ram ddr4 3200 2666 lỗi"
        ],
        name: "Cắm RAM không cùng tốc độ gây xung đột",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Máy tính thường xuyên bị treo hoặc xuất hiện màn hình xanh (BSOD) với mã lỗi liên quan đến Memory Management.",
            "Máy tính bị khởi động lại đột ngột khi đang xử lý tác vụ nặng.",
            "Máy không lên hình, phát ra tiếng kêu bíp liên tục khi khởi động.",
            "Kiểm tra trong Task Manager hoặc CPU-Z thấy tốc độ RAM thấp hơn thông số của thanh RAM cao cấp nhất đang cắm."
        ],
        diagnosisSteps: [
            "Sử dụng phần mềm CPU-Z, kiểm tra tab Memory và SPD để xem thông số bus và độ trễ (latency) của từng thanh RAM.",
            "Tháo bớt một thanh RAM và chạy thử để xem máy có còn hiện tượng treo/lag hay không.",
            "Đổi vị trí các khe cắm RAM (Swap slots) để kiểm tra xem lỗi do khe cắm hay do sự không tương thích giữa các thanh RAM.",
            "Kiểm tra phiên bản BIOS của Mainboard; đôi khi BIOS cũ không hỗ trợ tốt việc cân bằng thông số giữa các thanh RAM khác loại."
        ],
        fix: [
            "Vào BIOS/UEFI, thiết lập thủ công (Manual) thông số Bus và Timing của các thanh RAM về mức chung thấp nhất mà cả hai đều hỗ trợ.",
            "Cập nhật BIOS lên phiên bản mới nhất để cải thiện khả năng nhận diện và tương thích phần cứng.",
            "Thay thế các thanh RAM khác loại bằng một bộ RAM cùng cặp (Kit) có cùng dung lượng, tốc độ và thương hiệu để đạt hiệu suất Dual Channel tối đa.",
            "Nếu buộc phải dùng khác loại, hãy ưu tiên cắm thanh RAM có tốc độ thấp hơn vào khe ưu tiên (thường là khe 1) để Mainboard tự động nhận diện mức sàn cho các thanh còn lại."
        ],
        image: "hinh-anh/L41.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 42: Bật máy đòi Password BIOS nền đen 
        keywords: [
            "bật máy đòi mật khẩu bios",
            "bios locked không vào được",
            "quên password bios",
            "bios password reset cách phá",
            "không vào được bios bị khóa"
        ],
        name: "Bật máy đòi Password BIOS nền đen (BIOS Locked)",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Vừa bấm nút nguồn, máy hiện logo hãng rồi chuyển ngay sang một màn hình đen/xanh dương, yêu cầu nhập System Password hoặc Administrator Password mới cho boot vào Windows.",
        ],
        diagnosisSteps: [
            "Hỏi chủ máy xem họ hoặc trẻ nhỏ có vô tình vào BIOS đặt mật khẩu không.",
            "Gõ sai 3 lần xem máy có cung cấp một đoạn mã Code (System Disable Code) hay không.",
        ],
        fix: [
            "Desktop: Rút điện, tháo nắp máy, tìm viên Pin CMOS tròn và tháo ra khoảng 15 phút. Hoặc tìm Jumper ghi chữ CLR_CMOS trên Mainboard và chập 2 chân lại với nhau vài giây để xóa pass.",
            "Laptop: Thử vào trang bios-pw.org, nhập đoạn mã Code báo lỗi (sau khi gõ sai 3 lần) để lấy Master Password nhập ngược lại.",
            "Việc tháo pin CMOS để xóa pass chỉ hiệu quả với Desktop. Các dòng Laptop Business (ThinkPad, Dell Latitude) bảo mật pass BIOS bằng một con chip eeprom riêng, tháo pin CMOS không có tác dụng, phải mang ra tiệm dùng máy khò nhổ chip nạp lại ROM.",
        ],
        image: "hinh-anh/L42.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 43: Lỗi USB Device Over Current Status Detected
        keywords: [
            "lỗi usb device over current",
            "usb over current detected",
            "cắm usb máy tự shutdown",
            "usb gây ngắt nguồn máy",
            "overcurrent usb port hỏng"
        ],
        name: "Lỗi USB Device Over Current Status Detected",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Khởi động máy bàn (Desktop), hiện logo Mainboard kèm dòng chữ USB Device Over Current Status Detected !! System Will Shut Down After 15 Seconds. Sau 15 giây máy tắt, không thể vào BIOS cũng không vào được Win.",
        ],
        diagnosisSteps: [
            "Rút toàn bộ các thiết bị đang cắm vào cổng USB (chuột, phím, tai nghe, máy in).",
            "Dùng đèn pin soi vào tất cả các lỗ USB trên máy tính xem có mạt sắt, nhíp kim loại, hoặc các chân tiếp xúc (lá đồng) bên trong cổng USB có bị gãy gập chập vào nhau (chạm mass) không.",
        ],
        fix: [
            "Bật máy tính lên lại (khi không cắm bất kỳ USB nào), nếu máy qua được lỗi -> Một trong các thiết bị ngoại vi bị chập mạch.",
            "Nếu vẫn báo lỗi, tháo nắp hông case, rút bỏ sợi cáp ghi chữ USB (cáp nối cổng USB mặt trước case vào Mainboard). 90% nguyên nhân là do vỉ USB mặt trước vỏ case bị rỉ sét ẩm ướt gây đoản mạch.",
            "Tính năng này của Mainboard sinh ra để chống cháy nổ. Nếu các bước trên không giải quyết được, thì IC bảo vệ nguồn USB trên Mainboard đã hỏng, cần tháo mainboard giao cho kỹ thuật viên xử lý.",
        ],
        image: "hinh-anh/L43.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 44: Nhận không đủ dung lượng RAM
        keywords: [
            "ram nhận không đủ dung lượng",
            "hardware reserved chiếm ram",
            "cài 16gb ram chỉ nhận 8gb",
            "ram bị cắt bởi system",
            "usable ram ít hơn ram cắm",
            "bios không nhận đủ ram"
        ],
        name: "Nhận không đủ dung lượng RAM (Hardware Reserved)",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Lắp RAM 8GB (hoặc 16GB) vào máy, vào phần Properties của My Computer thấy hiện: Installed RAM: 8.00 GB (3.9 GB usable). Máy chạy đa nhiệm rất kém do thiếu RAM thực tế.",
        ],
        diagnosisSteps: [
            "Nhấn Ctrl + Shift + Esc mở Task Manager -> Tab Performance -> Memory. Nhìn xuống góc phải dưới xem mục Hardware reserved có đang ăn mất vài GB không.",
            "Kiểm tra Windows đang cài là bản 32-bit hay 64-bit (Bản 32-bit chỉ nhận tối đa gần 4GB RAM).",
        ],
        fix: [
            "Nhấn Win + R gõ msconfig -> Tab Boot -> Advanced options. Đảm bảo mục Maximum memory KHÔNG bị tích chọn. Khởi động lại máy.",
            "Vào BIOS, tìm mục UMA Frame Buffer Size hoặc Share Memory Size, giảm mức chia sẻ xuống (chỉ chia 128MB hoặc 256MB cho đồ họa tích hợp nếu bạn đã có Card rời).",
            "Tháo thanh RAM ra, chà sạch chân đồng, vệ sinh khe cắm RAM trên mainboard rồi cắm lại thật chặt.",
        ],
        image: "hinh-anh/L44.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 45: Màn hình bị lưu ảnh, bóng mờ
        keywords: [
            "màn hình bị lưu ảnh bóng mờ",
            "burn-in oled màn hình",
            "image retention màn hình laptop",
            "bóng ảnh cũ còn trên màn hình",
            "hiện tượng lưu bóng màn hình"
        ],
        name: "Màn hình bị lưu ảnh, bóng mờ (Image Retention / Burn-in)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Đang xem phim toàn màn hình hoặc mở file Word trắng, nhưng vẫn thấy mờ mờ hình ảnh của thanh Taskbar, icon Desktop hoặc một bảng tính Excel đã mở trước đó hằn lên nền màn hình.",
        ],
        diagnosisSteps: [
            "Khởi động lại máy vào màn hình BIOS (nền xám/đen), nếu vẫn thấy cái bóng màn đó xuất hiện thì 100% là lỗi vật lý của tấm nền màn hình.",
            "Xác định công nghệ màn hình là IPS/LCD hay là OLED.",
        ],
        fix: [
            "Đối với màn hình IPS/LCD, tắt máy tính để màn hình nghỉ ngơi vài tiếng. Hoặc lên YouTube tìm các video LCD Burn-in Fix (video nhấp nháy nhiều màu sắc chói lọi) và bật toàn màn hình trong 2-3 tiếng để kích thích các tinh thể lỏng hoạt động lại bình thường.",
            "Đối với màn hình OLED (Burn-in - Vĩnh viễn): Sự suy thoái của bóng LED hữu cơ là không thể đảo ngược. Cách duy nhất là thay nguyên cụm màn hình mới.",
        ],
        image: "hinh-anh/L45.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 46: Ứng dụng tự động văng
        keywords: [
            "ứng dụng tự tắt đột ngột",
            "app văng ra desktop",
            "phần mềm đóng không báo lỗi",
            "crash to desktop game",
            "force close app windows",
            "ứng dụng crash liên tục"
        ],
        name: "Ứng dụng tự động văng (Crash to Desktop / Force Close)",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Đang chơi game nặng, thiết kế đồ họa hoặc làm video thì cửa sổ ứng dụng đột ngột biến mất, văng thẳng ra màn hình Desktop. Không có thông báo lỗi màn hình xanh, máy tính vẫn dùng bình thường.",
        ],
        diagnosisSteps: [
            "Mở Event Viewer của Windows -> Windows Logs -> Application. Tìm các dòng có dấu chấm than màu đỏ (Error) trùng với khung giờ ứng dụng bị văng để xem mã lỗi.",
            "Kiểm tra nhiệt độ VGA/CPU khi đang chạy ứng dụng nặng.",
        ],
        fix: [
            "Lỗi thư viện: Cài đặt lại hoặc bổ sung bộ thư viện nền tảng: DirectX, Visual C++ Redistributable, và .NET Framework. Rất nhiều game bị văng vì thiếu file .dll.",
            "Xung đột RAM (Memory Leak): Tăng dung lượng bộ nhớ ảo (Pagefile) cho Windows.",
            "Nếu báo lỗi liên quan đến Display Driver (nvlddmkm): Dùng phần mềm DDU (Display Driver Uninstaller) để xóa sạch driver Card màn hình cũ rồi cài lại bản mới nhất từ trang chủ Nvidia/AMD.",
            "Ghi chú : Nếu văng app kèm theo quạt rú lên rồi hạ xuống đột ngột, rất có thể bộ nguồn (PSU) của bạn không cung cấp đủ điện dòng 12V cho Card đồ họa hoạt động tối đa (Peak load), dẫn đến VGA tự sập tiến trình.",
        ],
        image: "hinh-anh/L46.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 47: Sai định dạng ngày tháng, hiển thị font chữ ô vuông
        keywords: [
            "font chữ hiện ô vuông",
            "sai định dạng ngày tháng windows",
            "chữ bị hiện hình hộp vuông",
            "thiếu font tiếng việt",
            "ngày tháng sai định dạng",
            "ô vuông thay chữ unicode"
        ],
        name: "Sai định dạng ngày tháng, hiển thị font chữ ô vuông",
        category: "Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Gõ chữ tiếng Việt trong các phần mềm gõ văn bản bị biến thành ô vuông hoặc ký tự giun dế. Xuất file Excel bị đảo ngược ngày và tháng (Ví dụ: 05/12/2026 máy tự hiểu là ngày 12 tháng 5).",
        ],
        diagnosisSteps: [
            "Kiểm tra bộ gõ Unikey xem đã bật chế độ gõ Tiếng Việt và chọn đúng bảng mã (Unicode/TCVN3) chưa.",
            "Mở Control Panel -> Clock and Region để kiểm tra định dạng phân vùng.",
        ],
        fix: [
            "Lỗi ngày tháng: Trong Region -> Formats, đổi Format về English (United Kingdom) hoặc Vietnamese. Trong phần Additional settings, chỉnh tab Date phần Short date thành dd/MM/yyyy.",
            "Lỗi font chữ: Lên mạng tải các bộ font Tiếng Việt đầy đủ (Font VNI, Font TCVN3, Font Roboto), giải nén, bôi đen toàn bộ chuột phải chọn Install. Khởi động lại phần mềm/máy tính.",
        ],
        image: "hinh-anh/L47.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 48: Không thể Format USB / Ổ đĩa báo ‘Windows was unable to...’
        keywords: [
            "không format được usb",
            "windows was unable to complete the format",
            "format thẻ nhớ bị lỗi",
            "usb không format được cách sửa",
            "diskpart format usb lỗi"
        ],
        name: "Không thể Format USB / Ổ đĩa báo Windows was unable to...",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Cắm USB hoặc ổ cứng ngoài vào, máy nhận biểu tượng ổ đĩa nhưng bấm vào thì bắt Format. Khi ấn Format, thanh chạy được 1 lúc thì báo lỗi Windows was unable to complete the format.",
        ],
        diagnosisSteps: [
            "Kiểm tra xem USB/Ổ cứng có đang bị phần mềm diệt virus quét ngầm không (chiếm quyền điều khiển đọc/ghi).",
            "Cắm thử sang cổng USB khác ở mặt sau Mainboard (ưu tiên cổng USB 3.0 màu xanh).",
        ],
        fix: [
            "Mở CMD (Quyền Admin), dùng công cụ Diskpart. Gõ lệnh: diskpart -> list disk -> select disk X (X là số của USB) -> clean. Sau đó mở Disk Management để tạo lại phân vùng mới (New Simple Volume).",
            "Nếu Diskpart báo lỗi I/O Device Error hoặc Data error (cyclic redundancy check): Chip nhớ của USB đã chết hoặc cơ ổ cứng HDD ngoài đã hỏng.",
            "Nhiều trường hợp USB bị rút ra đột ngột khi đang copy dữ liệu dẫn đến lỗi bảng phân vùng định dạng (RAW partition). Các công cụ format mặc định của Windows sẽ bó tay, bắt buộc phải dùng lệnh CMD diskpart - clean hoặc các phần mềm chia ổ đĩa để ép cấu trúc lại.",
        ],
        image: "hinh-anh/L48.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 49: Mạng LAN có dây báo đèn cam, rớt tốc độ
        keywords: [
            "mạng lan đèn cam rớt tốc độ",
            "đèn port switch màu cam vàng",
            "lan 100mbps thay vì 1gbps",
            "tốc độ mạng bị giới hạn",
            "gigabit lan chỉ nhận 100m"
        ],
        name: "Mạng LAN có dây báo đèn cam, rớt tốc độ",
        category: "Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Đã kéo cáp mạng LAN từ Modem cắm thẳng vào máy tính nhưng mạng tải rất chậm. Kiểm tra phần Ethernet Status thấy thông số Speed chỉ báo 100.0 Mbps hoặc 10.0 Mbps thay vì 0 Gbps. Đèn báo hiệu ở lỗ cắm mạng nháy màu Cam thay vì màu Xanh lá.",
        ],
        diagnosisSteps: [
            "Kiểm tra loại dây cáp mạng đang dùng là CAT5, CAT5e hay CAT6 (thường in chữ dọc thân dây).",
            "Nhìn kỹ hạt mạng (đầu RJ45) bằng nhựa trong suốt xem có đủ 8 sợi dây đồng chạm vào lẫy tiếp xúc không.",
        ],
        fix: [
            "Do dây cáp bị đứt 1-2 lõi bên trong hoặc do bấm đầu mạng chỉ bấm 4 sợi (để tiết kiệm) sẽ làm tốc độ mạng bị ép rớt xuống ngưỡng 100Mbps. Cần bấm lại hạt mạng chuẩn 8 lõi hoặc thay dây cáp CAT5e/CAT6 loại tốt.",
            "Vào Device Manager -> Network adapters -> Chuột phải vào Card mạng LAN chọn Properties -> Tab Advanced. Tìm mục Speed & Duplex, chuyển giá trị từ Auto Negotiation sang 0 Gbps Full Duplex.",
        ],
        image: "hinh-anh/L49.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 50: Cắm nhầm điện áp 220V cho thiết bị điện 110V
        keywords: [
            "cắm nhầm điện áp 220v 110v",
            "thiết bị 110v bị cháy",
            "nhầm nguồn điện hỏng đồ",
            "máy cháy do sai điện áp",
            "adapter bị khói khét do cắm sai volt"
        ],
        name: "Cắm nhầm điện áp 220V cho thiết bị điện 110V",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Bạn mang một thùng máy tính (Desktop) hoặc màn hình từ Nhật Bản, Mỹ (các quốc gia dùng điện lưới 100V - 110V) về Việt Nam. Vừa cắm thẳng phích cắm vào ổ điện 220V ở nhà, nghe một tiếng nổ Đoàng hoặc Bụp lớn, kèm theo tia lửa chớp sáng sau thân máy và mùi khét lẹt bốc lên. Máy tính chết hoàn toàn.",
        ],
        diagnosisSteps: [
            "Không cần kiểm tra nữa, tụ chống sét bảo vệ quá áp bên trong bộ nguồn (PSU) đã nổ tung.",
        ],
        fix: [
            "Rút ngay phích cắm ra khỏi ổ điện. TUYỆT ĐỐI không thử bật công tắc nguồn máy tính thêm lần nào nữa để tránh dòng điện rò tàn phá lên Mainboard và các linh kiện khác.",
            "Mở case máy tính, tháo bỏ toàn bộ khối nguồn (PSU).",
            "Mang bộ nguồn đi sửa (thợ sẽ thay tụ lọc, cầu chì và điện trở mồi) hoặc mua một bộ nguồn 220V mới có cùng công suất lắp thay thế vào.",
            "Không được tò mò tháo nắp hộp kim loại của bộ nguồn (PSU) ra xem. Tụ điện lớn bên trong vẫn có thể tích trữ dòng điện hàng trăm Volt gây nguy hiểm đến tính mạng dù đã rút điện.",
            "Hầu hết các bộ nguồn xịn (có chứng nhận 80 Plus, dải điện áp Auto-Volt 100-240V) sẽ tự chuyển đổi an toàn. Lỗi nổ này thường gặp ở các máy bộ đồng bộ nội địa (như Dell, HP dòng văn phòng nhỏ gọn) sử dụng nguồn chỉ hỗ trợ duy nhất mức 110V. Rất may mắn là các bộ nguồn này thường thiết kế cầu chì và linh kiện bảo vệ (Varistor) chốt chặn ngay đầu vào, khi nổ nó sẽ ngắt mạch ngay, nên 95% trường hợp Mainboard, CPU, Ổ cứng bên trong vẫn an toàn vô sự.",
        ],
        image: "hinh-anh/L50.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 51: Thanh Taskbar đơ, nháy liên tục (Explorer Loop)
        keywords: [
            "taskbar đơ nháy liên tục",
            "explorer loop windows",
            "thanh taskbar bị treo",
            "windows explorer restart liên tục",
            "taskbar biến mất không hiện",
            "start menu không mở được"
        ],
        name: "Thanh Taskbar đơ, nháy liên tục (Explorer Loop)",
        category: "Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            " Giao diện Desktop nháy chớp liên tục, mất hết icon trên thanh Taskbar. Mỗi lần click chuột vào thanh dưới cùng là màn hình lại load lại từ đầu, không thể bấm được nút Start.",
        ],
        diagnosisSteps: [
            "Nhấn Ctrl + Shift + Esc để mở Task Manager.",
            "Kiểm tra xem tiến trình Windows Explorer có đang chiếm CPU cao và tự động restart không.",
            "Nhớ lại xem gần đây có cài phần mềm đổi giao diện (như TranslucentTB, StartAllBack) không.",
        ],
        fix: [
            "Trong Task Manager, chọn File -> Run new task, gõ cmd (nhớ tích chọn chạy quyền Admin).",
            "Gõ lệnh sfc /scannow để Windows tự sửa file hệ thống bị hỏng.",
            "Nếu không được, vào Safe Mode để gỡ cài đặt các phần mềm can thiệp giao diện bên thứ 3 hoặc gỡ bản cập nhật Windows Update gần nhất.",
        ],
        image: "hinh-anh/L51.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 53: Pin tụt nhanh, sập nguồn ảo
        keywords: [
            "pin tụt nhanh sập nguồn ảo",
            "pin laptop hết nhanh bất thường",
            "sập nguồn dù còn pin",
            "pin hiện 30% tự tắt máy",
            "calibrate pin laptop",
            "pin không chính xác tụt đột ngột"
        ],
        name: "Pin tụt nhanh, sập nguồn ảo (Laptop)",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Máy đang báo còn 30% - 40% pin, nhưng vừa rút sạc ra dùng được 5 phút thì máy tự động tắt phụp (sập nguồn đen thui). Bật lại báo hết pin.",
        ],
        diagnosisSteps: [
            "Mở CMD, gõ lệnh powercfg /batteryreport để xuất file báo cáo sức khỏe pin.",
            "Kiểm tra sự chênh lệch giữa Design Capacity (Dung lượng gốc) và Full Charge Capacity (Dung lượng thực tế hiện tại).",
        ],
        fix: [
            "Calibrate (Cân chỉnh) lại mạch pin: Cắm sạc đầy 100%, sau đó vào BIOS (để máy không tự tắt) và để máy chạy đến khi cạn sạch pin sập nguồn. Đợi máy nguội rồi cắm sạc liên tục lên lại 100% không bật máy.",
            "Nếu cân chỉnh xong vẫn bị sập ảo: Cell pin bên trong đã chai phồng lệch nhau, bắt buộc phải thay viên pin mới.",
            "Ghi chú : Mạch điều khiển của pin laptop đôi khi đếm sai dung lượng thực tế còn lại, dẫn đến báo ảo. Việc Calibrate giúp reset lại IC đếm dung lượng này.",
        ],
        image: "hinh-anh/L53.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 55: Cổng Tai nghe có tiếng rột rẹt, nhiễu tĩnh điện (cần âm thanh)
        keywords: [
            "cổng tai nghe có tiếng rột rẹt",
            "nhiễu tĩnh điện loa tai nghe",
            "tiếng xì xào trong tai nghe",
            "ground loop hum loa máy tính",
            "audio nhiễu khi cắm sạc",
            "tiếng ù trong tai nghe"
        ],
        name: "Cổng Tai nghe có tiếng rột rẹt, nhiễu tĩnh điện",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Cắm tai nghe vào lỗ 3.5mm, nghe nhạc thì có tiếng lạch cạch, lẹt xẹt phía sau. Đặc biệt, mỗi khi di chuột hoặc máy đang tải nặng (chơi game) thì tiếng rè/rít trong tai nghe càng rõ hơn.",
        ],
        diagnosisSteps: [
            "Cắm thử tai nghe sang điện thoại xem tai nghe có hỏng không.",
            "Desktop: Rút cáp tai nghe từ cổng phía trước (Front Panel) cắm ra cổng màu xanh lá cây ở phía sau Mainboard xem có hết nhiễu không.",
        ],
        fix: [
            "Bắt một sợi dây điện từ vỏ sắt của thùng máy nối xuống đất hoặc đinh đóng vào tường để triệt tiêu dòng rò.",
            "Nếu Mainboard rẻ tiền, khu vực Audio không được cách ly chống nhiễu tốt: Chuyển sang mua một chiếc tai nghe dùng cổng USB, hoặc mua một chiếc USB Sound Card (DAC rời) để lấy tín hiệu kỹ thuật số, sẽ loại bỏ 100% tiếng xè xè.",
        ],
        image: "hinh-anh/L55.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 56: Tụt FPS, giật khựng (Stuttering) khi chơi game
        keywords: [
            "fps giảm đột ngột khi chơi game",
            "giật khựng stuttering game",
            "game lag spike bất ngờ",
            "fps không ổn định lên xuống",
            "micro stutter game pc",
            "chơi game bị khựng không mượt"
        ],
        name: "Tụt FPS, giật khựng (Stuttering) khi chơi game",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Cấu hình máy tính rất mạnh nhưng khi chơi game lại gặp hiện tượng khung hình (FPS) đang rất cao đột ngột rớt thẳng xuống 10-20 FPS trong khoảng 1 giây rồi lại bình thường, lặp đi lặp lại tạo cảm giác giật cục (lag).",
        ],
        diagnosisSteps: [
            "Dùng phần mềm MSI Afterburner bật tính năng OSD để theo dõi khi bị giật cục thì thông số nào thay đổi: CPU 100%, VGA giảm xung nhịp, hay VRAM (bộ nhớ card hình) bị đầy.",
            "Kiểm tra xem game đang cài trên ổ cứng HDD cơ học hay SSD.",
        ],
        fix: [
            "Tắt tính năng quay video ngầm của Windows: Mở Settings -> Gaming -> Captures -> Tắt Record what happened.",
            "Chuyển cài đặt game sang ổ SSD. (Tốc độ đọc chậm của HDD khiến game không load kịp kết cấu hình ảnh gây khựng).",
            "Giảm mức thiết lập Texture (Kết cấu bề mặt) trong game xuống 1 nấc để tránh làm tràn VRAM của Card màn hình.",
        ],
        image: "hinh-anh/L56.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 57: Cắm sai vị trí RAM làm giảm hiệu năng
        keywords: [
            "cắm sai khe ram giảm hiệu năng",
            "ram chạy single channel thay dual",
            "không kích hoạt dual channel ram",
            "cắm ram sai vị trí mainboard",
            "ram không chạy dual channel kiểm tra"
        ],
        name: "Cắm sai vị trí RAM làm giảm hiệu năng (Desktop)",
        category: "Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Máy lắp 16GB RAM (2 thanh 8GB) đắt tiền nhưng chơi game FPS rất thấp, máy chạy không mượt.",
            "Màn hình khởi động của BIOS có thể hiện cảnh báo Memory modules are in non-optimized slots."
        ],
        diagnosisSteps: [
            "Mở nắp kính case máy tính.",
            "Nhìn vào khu vực cắm RAM bên cạnh CPU (thường có 4 khe cắm).",
            "Quan sát xem 2 thanh RAM đang cắm sát rạt vào nhau (Khe 1-2 hoặc 3-4) hay cắm cách nhau 1 khe."
        ],
        fix: [
            "Tắt máy, rút điện hoàn toàn.",
            "Tháo 1 thanh RAM ra, cắm lại vào đúng theo nguyên tắc Dual Channel: Ưu tiên cắm vào các khe có màu giống nhau (Thường là khe số 2 và khe số 4 tính từ CPU đếm ra.",
            "Luôn ấn thanh RAM xuống với lực đều hai đầu cho đến khi nghe tiếng tách của lẫy khóa. Cắm lỏng nửa vời khi bật máy sẽ làm chập cháy tiếp điểm RAM ngay lập tức.",
        ],
        image: "hinh-anh/L57.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 58: Trình duyệt báo lỗi "Your clock is behind/ahead"
        keywords: [
            "trình duyệt báo your clock is behind",
            "ssl certificate lỗi do sai giờ",
            "không vào web do sai ngày giờ",
            "your clock is ahead lỗi",
            "trang web báo lỗi chứng chỉ do giờ sai"
        ],
        name: "Trình duyệt báo lỗi Your clock is behind/ahead",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Trình duyệt bị chặn bởi màn hình báo lỗi Your connection is not private kèm dòng chữ báo đồng hồ chạy sai hoặc lỗi NET::ERR_CERT_DATE_INVALID."
        ],
        diagnosisSteps: [
            "Nhìn xuống góc phải màn hình xem ngày, tháng, năm có đúng với thực tế hiện tại không.",
            "Ví dụ: Năm hiện tại là năm thực tế nhưng máy đang báo một năm trong quá khứ."
        ],
        fix: [
            "Chuột phải vào đồng hồ góc phải dưới -> Adjust date/time.",
            "Bật On tính năng Set time automatically và nhấn nút Sync now để máy tính tự cập nhật giờ chuẩn từ máy chủ Microsoft.",
            "Nếu sau khi tắt máy rút điện mà giờ lại bị sai, hãy kiểm tra và thay viên pin CMOS (CR2032) trên mainboard.",
        ],
        image: "hinh-anh/L58.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 61: Lỏng Card đồ họa do cong xệ
        keywords: [
            "card đồ họa bị cong xệ",
            "vga sag lỏng khe pcie",
            "card màn hình bị võng xuống",
            "đỡ card đồ họa nặng bị cong",
            "gpu sag gây tiếp xúc kém"
        ],
        name: "Lỏng Card đồ họa do cong xệ",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Thùng máy tính bị xê dịch hoặc va chạm nhẹ là màn hình tắt phụp (No Signal), quạt VGA rú rầm rĩ hoặc máy bị treo cứng."
        ],
        diagnosisSteps: [
            "Mở nắp kính thùng máy, quan sát xem phần đuôi của Card đồ họa (loại 2-3 quạt) có bị chúi hẳn xuống so với phương ngang không.",
            "Dùng ngón tay nhấc nhẹ đuôi Card lên xem có bị rơ lỏng ở khe cắm PCIe trên Mainboard không."
        ],
        fix: [
            "Tắt máy rút điện. Tháo hẳn Card đồ họa ra, dùng cồn lau sạch chân đồng PCIe và cắm cẩn thận lại vào khe, siết chặt ốc giữ ở sườn case.",
            "Bắt buộc trang bị Giá đỡ VGA (VGA Holder). Có thể mua giá đỡ nhôm vặn ren, hoặc dùng vật cứng cách điện tự chế chống từ đáy case lên đuôi Card.",
        ],
        image: "hinh-anh/L61.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 63: Cảnh báo "CPU Fan Error!" khi vừa bật máy
        keywords: [
            "cảnh báo cpu fan error bios",
            "quạt cpu lỗi khi bật máy",
            "bios báo fan error không vào được",
            "cpu fan error press f1",
            "quạt không quay bios cảnh báo"
        ],
        name: "Cảnh báo CPU Fan Error! khi vừa bật máy",
        category: "Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Vừa nhấn nút nguồn, máy hiện màn hình đen với dòng chữ CPU Fan Error! Press F1 to Run SETUP và không vào được Windows."
        ],
        diagnosisSteps: [
            "Mở nắp thùng máy, quan sát xem quạt tản nhiệt nằm trên CPU có quay hay không.",
            "Kiểm tra xem dây cắm của quạt có đang cắm đúng vào chân có chữ 'CPU_FAN' trên Mainboard hay không (hay đang cắm nhầm sang SYS_FAN/CHA_FAN)."
        ],
        fix: [
            "Nếu quạt vẫn quay bình thường nhưng máy vẫn báo lỗi: Vào BIOS -> Monitor -> Tìm mục CPU Fan Speed và chọn 'Ignore' để máy bỏ qua việc kiểm tra tốc độ quạt.",
            "Nếu quạt không quay, kiểm tra xem có dây điện nào vướng vào cánh quạt không, hoặc thử cắm lại jack nguồn của quạt thật chặt.",
        ],
        image: "hinh-anh/L63.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 64: Lỗ cắm tai nghe mặt trước vỏ case không có tiếng
        keywords: [
            "cổng tai nghe mặt trước case không có tiếng",
            "front panel audio không hoạt động",
            "cắm tai nghe trước thùng không tiếng",
            "hd audio header không cắm đúng",
            "front audio jack im lặng"
        ],
        name: "Lỗ cắm tai nghe mặt trước vỏ case không có tiếng",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Cắm tai nghe vào lỗ mặt trước vỏ case không có tiếng và không nhận thiết bị, trong khi cắm mặt sau vẫn nghe bình thường."
        ],
        diagnosisSteps: [
            "Tháo nắp kính hông case, kiểm tra cụm dây của vỏ case ghi chữ HD AUDIO đã được cắm vào chân JAUD1 (hoặc F_AUDIO) trên mainboard chưa."
        ],
        fix: [
            "Cắm đúng chân HD AUDIO lên mainboard.",
        ],
        image: "hinh-anh/L64.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 66: Màn hình đen chỉ có con trỏ chuột (Black Screen with Cursor)
        keywords: [
            "màn hình đen có con trỏ chuột",
            "black screen with cursor windows",
            "vào win chỉ thấy cursor nền đen",
            "desktop không hiện màn hình đen",
            "explorer không load sau đăng nhập"
        ],
        name: "Màn hình đen chỉ có con trỏ chuột (Black Screen with Cursor)",
        category: "Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Sau khi đăng nhập, máy chỉ hiện một màu đen thui và con trỏ chuột trắng, không hiển thị icon hay thanh Taskbar."
        ],
        diagnosisSteps: [
            "Bấm thử phím Capslock xem đèn báo trên bàn phím có phản hồi không để khẳng định máy chưa bị treo cứng."
        ],
        fix: [
            "Bấm tổ hợp phím Ctrl + Shift + Esc (hoặc Ctrl + Alt + Del) để gọi Task Manager, nhấn File -> Run new task gõ explorer.exe vào ô trống và nhấn Enter để màn hình Desktop hiện ra.",
            "Mở CMD (Run as Admin) gõ lệnh 'sfc /scannow' để khôi phục file hệ thống bị lỗi.",
        ],
        image: "hinh-anh/L66.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 67: Phân vùng ổ cứng biến thành định dạng RAW
        keywords: [
            "phân vùng ổ cứng bị raw",
            "ổ cứng chuyển thành raw không mở được",
            "format raw partition cách sửa",
            "chkdsk raw drive",
            "mất dữ liệu do raw file system"
        ],
        name: "Phân vùng ổ cứng biến thành định dạng RAW",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Ổ đĩa báo lỗi You need to format the disk khi mở, File System báo định dạng RAW và dung lượng hiển thị 0 Bytes."
        ],
        diagnosisSteps: [
            "Nhớ lại xem trước đó có bị cúp điện đột ngột hoặc rút ổ cứng ngoài không an toàn (Safely Remove) không.",
            "Xác định xem dữ liệu bên trong có quan trọng hay không trước khi tiến hành các bước tiếp theo."
        ],
        fix: [
            "Nếu không cần dữ liệu, tiến hành Format disk để ổ cứng hoạt động lại bình thường.",
            "Nếu cần dữ liệu (Tuyệt đối không Format): Chạy CMD quyền Admin, gõ lệnh 'chkdsk X: /f /r' (X là tên ổ bị lỗi) để sửa bảng phân vùng.",
            "Nếu lệnh CMD không làm được, hãy sử dụng phần mềm như EaseUS Data Recovery hoặc MiniTool Power Data Recovery để quét sâu và lấy dữ liệu ra ổ đĩa khác trước khi Format.",
        ],
        image: "hinh-anh/L67.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 68: Nút nguồn (Power Button) bị liệt, chập chờn
        keywords: [
            "nút nguồn bị liệt chập chờn",
            "power button không phản hồi",
            "bấm nguồn phải nhấn nhiều lần",
            "nút on off laptop hỏng",
            "power button chập tự bật máy"
        ],
        name: "Nút nguồn (Power Button) bị liệt, chập chờn",
        category: "Phần cứng",
        difficulty: "Dễ (Desktop) / Khó (Laptop)",
        estimatedCost: "---",
        symptoms: [
            "Bấm nút nguồn không tác dụng, phải ấn thật sâu hoặc đang dùng máy tự động hiện Shutting down rồi tắt ngấm."
        ],
        diagnosisSteps: [
            "Loại trừ nguyên nhân do nguồn điện (kiểm tra cáp sạc, PSU).",
            "Cảm nhận phản hồi vật lý của nút: Bấm có còn độ nảy không hay bị lún tụt hẳn vào trong."
        ],
        fix: [
            "Desktop: Tháo nắp case, rút cặp dây POWER SW và cắm cặp dây RESET SW vào thay thế để bật máy bằng nút Reset.",
            "Laptop: Nếu nút nguồn rời thì thay cáp mạch mới; nếu tích hợp trên bàn phím thì bắt buộc phải thay toàn bộ cụm bàn phím.",
        ],
        image: "hinh-anh/L68.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 71: Lỗi trùng địa chỉ IP trong mạng LAN (IP Conflict)
        keywords: [
            "trùng địa chỉ ip mạng lan",
            "ip conflict windows thông báo",
            "hai máy trùng ip không vào net",
            "cấu hình ip tĩnh bị xung đột",
            "address already in use ip"
        ],
        name: "Lỗi trùng địa chỉ IP trong mạng LAN (IP Conflict)",
        category: "Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Mất mạng đột ngột, biểu tượng mạng có chấm than vàng và hiện thông báo Windows has detected an IP address conflict."
        ],
        diagnosisSteps: [
            "Kiểm tra xem máy có đang thiết lập IP tĩnh thủ công không.",
            "Xác định xem có thiết bị mới (di động, máy in) vừa kết nối vào mạng gây tranh chấp IP hay không."
        ],
        fix: [
            "Tạm thời giải phóng IP, mở CMD (Admin), gõ lệnh 'ipconfig /release' sau đó gõ ipconfig /renew để xin cấp IP mới. Khởi động lại máy.",
            "Khắc phục cấu hình: Vào Network Connections -> Card mạng -> Properties -> IPv4 -> Chọn Obtain an IP address automatically (DHCP).",
        ],
        image: "hinh-anh/L71.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 72: Tràn keo tản nhiệt kim loại lỏng (Liquid Metal) gây chập Mainboard
        keywords: [
            "keo tản nhiệt kim loại lỏng tràn",
            "liquid metal gây chập mainboard",
            "conductonaut tràn ra bo mạch",
            "kim loại lỏng chập điện mainboard",
            "thermal grizzly liquid metal lỗi"
        ],
        name: "Tràn keo tản nhiệt kim loại lỏng (Liquid Metal) gây chập Mainboard",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Sau khi tự tra keo tản nhiệt và lắp lại, máy bật lên bị xẹt lửa, quạt quay vài giây rồi tắt lịm hoặc có mùi cháy khét."
        ],
        diagnosisSteps: [
            "Xác định loại keo vừa tra có phải dạng dung dịch lấp lánh như thủy ngân (Liquid Metal) hay không.",
            "Tháo tản nhiệt, dùng kính lúp soi các tụ điện quanh chip CPU/GPU xem có giọt kim loại lỏng nào nhỏ ra gây chạm mạch không."
        ],
        fix: [
            "Tuyệt đối không dùng giấy lau, phải dùng bông tăm xịt cồn 90 độ chấm và lăn nhẹ để hút dần các giọt kim loại lỏng ra.",
            "Nếu máy đã bị chập, mang ra trung tâm để kỹ thuật viên đo đạc cứu chip (tỉ lệ sống sót thường rất thấp).",
            "Keo kim loại lỏng dẫn điện cực tốt. Người dùng phổ thông chỉ nên dùng keo gốc gốm/silicon (như MX-4) không dẫn điện để đảm bảo an toàn.",
        ],
        image: "hinh-anh/L72.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 73: Thiếu thư viện .DLL (VCRUNTIME140.dll, MSVCP140.dll)
        keywords: [
            "thiếu file dll lỗi",
            "vcruntime140.dll not found",
            "msvcp140.dll missing",
            "cài visual c++ redistributable",
            "the program cant start because dll is missing",
            "lỗi thiếu thư viện dll khi mở game"
        ],
        name: "Thiếu thư viện .DLL (VCRUNTIME140.dll, MSVCP140.dll)",
        category: "Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Mở phần mềm hoặc game thì hiện thông báo lỗi System Error: 'The program can't start because [Tên_file].dll is missing from your computer'."
        ],
        diagnosisSteps: [
            "Khẳng định hệ điều hành Windows đang thiếu bộ thư viện nền tảng C++ hoặc DirectX mà phần mềm yêu cầu."
        ],
        fix: [
            "Tải bộ Visual C++ Redistributable Runtimes All-in-One trên Google, cài đặt toàn bộ các phiên bản C++ từ 2005 đến nay.",
            "Tải và cài đặt DirectX End-User Runtime Web Installer từ trang chủ Microsoft, sau đó khởi động lại máy.",
            "Tuyệt đối không tải từng file .dll lẻ từ các trang web lạ để tránh bị nhiễm mã độc (Trojan) chiếm quyền điều khiển máy tính."
        ],
        image: "hinh-anh/L73.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 74: Cắm nhầm cổng xuất hình (Cắm vào Mainboard thay vì Card rời)
        keywords: [
            "cắm nhầm hdmi vào mainboard thay vì card rời",
            "không lên hình dù có card vga",
            "hdmi cắm sai cổng không ra hình",
            "xuất hình qua onboard thay vì gpu",
            "bios disable igpu không ra hình"
        ],
        name: "Cắm nhầm cổng xuất hình (Cắm vào Mainboard thay vì Card rời)",
        category: "Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Máy tính có Card đồ họa rời nhưng chơi game bị giật lag (FPS thấp) hoặc bật máy quạt quay nhưng màn hình báo 'No Signal'."
        ],
        diagnosisSteps: [
            "Nhìn ra mặt sau thùng máy và quan sát sợi dây tín hiệu màn hình (HDMI/DisplayPort) đang được cắm vào khu vực nào."
        ],
        fix: [
            "Nếu dây màn hình đang cắm ở cụm cổng dọc phía trên (chung với USB, LAN) thì bạn đã cắm sai vào Card Onboard của CPU.",
            "Tắt máy, rút dây màn hình ra và cắm thẳng vào cụm cổng nằm ngang ở phía dưới (cổng của Card đồ họa rời). Khởi động lại máy.",
        ],
        image: "hinh-anh/L74.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 75: Máy tính báo lỗi bằng tiếng bíp (Beep Codes)
        keywords: [
            "máy kêu bíp liên tục khi bật",
            "beep code lỗi phần cứng",
            "tiếng bíp bíp khi bật máy",
            "bios beep 3 tiếng lỗi ram",
            "máy tính kêu bíp không lên hình"
        ],
        name: "Máy tính báo lỗi bằng tiếng bíp (Beep Codes)",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Bật nguồn máy không lên hình nhưng thùng máy phát ra tiếng kêu 'tít... tít' theo nhịp điệu lặp lại liên tục."
        ],
        diagnosisSteps: [
            "Đếm số lượng và độ dài tiếng bíp để đối chiếu với chuẩn BIOS (Ví dụ: Bíp liên tục là lỗi RAM; 1 dài 2 ngắn là lỗi VGA).",
            "Kiểm tra xem Mainboard có cắm loa Buzzer Speaker hoặc có đèn LED Debug (CPU-DRAM-VGA-BOOT) để bắt bệnh không."
        ],
        fix: [
            "Tắt máy rút điện để đảm bảo an toàn.",
            "Tháo RAM hoặc VGA ra, dùng tẩy cao su chà sạch chân đồng tiếp xúc và dùng bóng thổi bụi xịt sạch khe cắm trên Mainboard.",
            "Cắm lại linh kiện thật chặt tay cho đến khi nghe tiếng 'Tách' của lẫy khóa.",
            "Mỗi hãng Mainboard có chuẩn mã bíp khác nhau. Các dòng Main đời cao hiện nay thường dùng đèn LED Debug thay cho loa bíp truyền thống."
        ],
        image: "hinh-anh/L75.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 76: Lỗi "DNS_PROBE_FINISHED_NXDOMAIN"
        keywords: [
            "lỗi dns probe finished nxdomain",
            "không vào được web dns lỗi",
            "dns_probe_finished_nxdomain chrome",
            "thay đổi dns server 8.8.8.8",
            "flush dns windows lỗi"
        ],
        name: "Lỗi DNS_PROBE_FINISHED_NXDOMAIN",
        category: "Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Biểu tượng mạng vẫn bình thường, Zalo vẫn nhắn tin được nhưng trình duyệt không vào được website và báo lỗi DNS_PROBE_FINISHED_NXDOMAIN."
        ],
        diagnosisSteps: [
            "Thử lấy điện thoại kết nối cùng Wi-Fi; nếu điện thoại vào được web thì lỗi nằm ở bộ phân giải tên miền (DNS) trên máy tính."
        ],
        fix: [
            "Mở CMD (Quyền Admin), gõ lệnh làm mới DNS: 'ipconfig /flushdns' và nhấn Enter.",
            "Mở Network Connections -> Card mạng -> Properties -> Chọn Internet Protocol Version 4 (TCP/IPv4) -> Properties, chọn 'Use the following DNS server addresses' và nhập: Preferred DNS (8.8.8.8) và Alternate DNS (1.1.1.1) rồi bấm OK và tải lại trang web.",
        ],
        image: "hinh-anh/L76.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 77: Cong/gãy chân kim Socket CPU (Chuẩn LGA)
        keywords: [
            "cong gãy chân socket cpu lga",
            "chân kim cpu bị cong",
            "bent pin socket intel",
            "lắp cpu bị cong chân không bật",
            "cpu pin lga1700 bị cong cách nắn"
        ],
        name: "Cong/gãy chân kim Socket CPU (Chuẩn LGA)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Máy không lên nguồn, hoặc lên nhưng không nhận đủ khe RAM, liên tục sập nguồn và báo lỗi đèn CPU sau khi tháo lắp vệ sinh."
        ],
        diagnosisSteps: [
            "Nhấc CPU ra khỏi Mainboard, dùng đèn Flash soi nghiêng hàng ngàn chân kim dưới rãnh Socket để tìm chân bị nằm rạp, lệch hàng hoặc đổi màu phản quang."
        ],
        fix: [
            "Chỉ khi cong nhẹ 1-2 chân), dùng kính lúp và kim tiêm hoặc nhíp siêu mảnh để nhẹ nhàng nắn chân kim thẳng lại theo đúng hàng lối.",
            "Gãy rời chân, bắt buộc mang Mainboard ra trung tâm bảo hành để đóng lại đế Socket mới bằng máy khò nhiệt chuyên dụng.",
            "Chân kim rất giòn, nếu nắn sai lực sẽ gãy rụng hoàn toàn hoặc gây chập điện nổ CPU. Nếu không tự tin, tuyệt đối đừng thử nắn.",
        ],
        image: "hinh-anh/L77.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 79: Điểm ảnh chết (Dead Pixel) và Điểm ảnh kẹt (Stuck Pixel)
        keywords: [
            "điểm ảnh chết dead pixel",
            "điểm ảnh kẹt stuck pixel",
            "màn hình có chấm đen cố định",
            "pixel bị kẹt một màu liên tục",
            "test và sửa dead pixel màn hình"
        ],
        name: "Điểm ảnh chết (Dead Pixel) và Điểm ảnh kẹt (Stuck Pixel)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Màn hình xuất hiện chấm đen cố định hoặc một chấm nhỏ luôn sáng rực màu đỏ/xanh dù đang ở nền tối."
        ],
        diagnosisSteps: [
            "Truy cập deadpixelcheck.com, chuyển màn hình qua các dải màu cơ bản (Trắng, Đen, Đỏ, Xanh) để xác định vị trí và loại điểm lỗi."
        ],
        fix: [
            "Điểm chết bóng LED đã cháy hoàn toàn và không thể sửa. Chỉ có thể sống chung hoặc thay Panel màn hình mới.",
        ],
        image: "hinh-anh/L79.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 80: Thông báo "Activate Windows" góc màn hình
        keywords: [
            "thông báo activate windows góc màn hình",
            "windows chưa kích hoạt",
            "bỏ watermark activate windows",
            "windows 10 11 chưa activate cách ẩn",
            "kích hoạt windows bản quyền"
        ],
        name: "Thông báo Activate Windows góc màn hình",
        category: "Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Dòng chữ 'Activate Windows' hiện mờ ở góc màn hình và các tính năng cá nhân hóa như đổi hình nền, màu sắc bị khóa."
        ],
        diagnosisSteps: [
            "Vào Settings -> System -> Activation để kiểm tra xem lỗi do chưa nhập Key hay do thay đổi phần cứng (Mainboard) làm mất bản quyền số."
        ],
        fix: [
            "Nhập Key bản quyền hợp lệ mua từ Microsoft và copy chuỗi mã 25 ký tự vừa tìm được dán vào mục Activation để kích hoạt lại Windows vĩnh viễn.",
            "Bản quyền số (Digital License) thường đi kèm với ID của Mainboard, do đó khi thay Mainboard mới, hệ thống sẽ coi đó là một máy tính khác và yêu cầu kích hoạt lại."
        ],
        image: "hinh-anh/L80.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 82: Kẹt nút gạt "Chế độ máy bay"
        keywords: [
            "kẹt chế độ máy bay không tắt được",
            "airplane mode bật không tắt",
            "wifi bluetooth mất do flight mode",
            "tắt chế độ máy bay bị đơ",
            "nút máy bay bị greyed out mờ"
        ],
        name: "Kẹt nút gạt Chế độ máy bay (Airplane Mode Greyed Out)",
        category: "Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Laptop mất Wi-Fi/Bluetooth, nút Airplane Mode bị sáng xanh nhưng bị mờ (greyed out) không thể click chuột để tắt."
        ],
        diagnosisSteps: [
            "Kiểm tra xem trên bàn phím có công tắc gạt vật lý nào đang khóa Wi-Fi không.",
            "Thử nhấn tổ hợp phím Fn + phím có hình máy bay để xem có ép tắt được chế độ này không."
        ],
        fix: [
            "Mở Services (services.msc), tìm 'Radio Management Service', chuyển Startup type sang 'Automatic' và bấm Start.",
            "Mở Device Manager -> Network adapters -> Chuột phải vào Card Wi-Fi chọn Disable, chờ 5 giây rồi chọn Enable lại.",
            "Kiểm tra lại Action Center, lúc này nút Chế độ máy bay sẽ hết bị mờ để bạn có thể tắt đi.",
        ],
        image: "hinh-anh/L82.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 83: Gập màn hình laptop nhưng máy vẫn chạy, nóng ran
        keywords: [
            "gập màn hình laptop vẫn chạy nóng",
            "đóng nắp laptop không ngủ",
            "laptop không sleep khi gập máy",
            "lid close action không hibernate",
            "gập màn hình quạt vẫn quay nóng"
        ],
        name: "Gập màn hình laptop nhưng máy vẫn chạy, nóng ran",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Gập nắp máy cất vào balo nhưng máy không ngủ, dẫn đến tình trạng nóng ran, quạt kêu to và cạn kiệt pin."
        ],
        diagnosisSteps: [
            "Vào Power Options -> 'Choose what closing the lid does' để đảm bảo mục 'When I close the lid' đang đặt là Sleep.",
            "Nếu thiết lập đúng mà máy không ngủ, kiểm tra cảm biến nam châm (Hall Sensor) hoặc xung đột tính năng Modern Standby."
        ],
        fix: [
            "Vào Power & battery -> Đặt 'Network connection in standby' thành Never hoặc Managed by Windows.",
            "Dùng thanh nam châm nhỏ lướt dọc chiếu nghỉ tay xem màn hình có tự tắt không; nếu không thì do đứt cáp cảm biến Hall.",
            "Máy chạy liên tục trong balo kín có thể gây nóng chảy vỏ nhựa, hỏng màn hình và phồng pin. Hãy tập thói quen bấm Sleep/Shut down thủ công trước khi gập.",
            "Luôn kiểm tra đèn báo nguồn hoặc tiếng quạt đã tắt hẳn chưa trước khi cho máy vào túi chống sốc."
        ],
        image: "hinh-anh/L83.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 85: Lỗi "Ethernet doesn't have a valid IP configuration"
        keywords: [
            "lỗi ethernet doesnt have valid ip",
            "ethernet vàng chấm than invalid ip",
            "mạng dây không lấy được ip",
            "ipconfig renew lỗi ethernet",
            "không kết nối được dù cắm dây mạng"
        ],
        name: "Lỗi Ethernet doesn't have a valid IP configuration",
        category: "Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Máy tính cắm dây mạng LAN báo chấm than vàng và tính năng Troubleshoot hiện thông báo Ethernet doesn't have a valid IP configuration."
        ],
        diagnosisSteps: [
            "Xác định Card mạng vẫn giao tiếp tốt với Router nhưng không nhận được địa chỉ IP hợp lệ từ dịch vụ DHCP."
        ],
        fix: [
            "Rút điện Router/Modem, chờ 30 giây rồi cắm lại để khởi động lại dịch vụ cấp phát IP (DHCP server).",
            "Mở CMD (Admin), gõ lệnh netsh winsock reset rồi netsh int ip reset sau đó khởi động lại máy tính.",
        ],
        image: "hinh-anh/L85.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 86: Máy bật lên 1 giây rồi tắt, lặp lại liên tục
        keywords: [
            "máy bật lên 1 giây rồi tắt liên tục",
            "pc bật tắt lặp lại không dừng",
            "short circuit máy tính",
            "nguồn bật tắt liên tục đoản mạch",
            "máy khởi động không lên"
        ],
        name: "Máy bật lên 1 giây rồi tắt, lặp lại liên tục (Short Circuit)",
        category: "Phần cứng",
        difficulty: "Khó",
        estimatedCost: "---",
        symptoms: [
            "Máy kích nguồn quạt quay 1-2 giây rồi tắt phụp, sau đó tự động lặp lại chu kỳ này liên tục cho đến khi rút điện."
        ],
        diagnosisSteps: [
            "Xác định đây là tính năng bảo vệ ngắn mạch (Short Circuit Protection) của bộ nguồn khi phát hiện chạm Mass trên linh kiện.",
            "Rút lần lượt VGA, ổ cứng và đặc biệt là dây cấp nguồn CPU (4-pin/8-pin) để test.",
            "Kiểm tra xem các ốc đồng kê Mainboard (Standoff) có bị bắt sai vị trí gây chạm mạch vào vỏ case không bằng cách bỏ main ra ngoài hộp giấy để kích nguồn."
        ],
        fix: [
            "Nếu rút dây nguồn CPU mà máy chạy không tắt, Mainboard đã bị chập cháy dàn tụ/Mosfet cấp nguồn CPU, cần mang đi sửa mạch.",
            "Nếu do chạm Mass vỏ case, bắt lại các ốc kê Mainboard đúng vị trí lỗ định vị trên bo mạch.",
            "Tuyệt đối không dùng dây đồng ép nguồn chạy khi đang đoản mạch (vô hiệu hóa chip bảo vệ), vì có thể gây cháy nổ tụ điện và bốc hỏa.",
        ],
        image: "hinh-anh/L86.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 87: Màn hình chớp đen báo Display driver stopped responding
        keywords: [
            "display driver stopped responding",
            "màn hình chớp đen liên tục",
            "lỗi tdr failure vga",
            "card màn hình bị treo reset",
            "màn hình đen 2 giây rồi lên lại",
            "driver vga bị crash"
        ],
        name: "Màn hình chớp đen báo Display driver stopped responding",
        category: "Phần cứng/Phần mềm",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Màn hình chớp tắt đen khoảng 2-3 giây rồi hiện lại kèm thông báo Display driver stopped responding and has recovered."
        ],
        diagnosisSteps: [
            "Xác định đây là hiện tượng Card đồ họa bị quá tải hoặc treo tạm thời, khiến Windows phải tự động reset lại driver.",
            "Kiểm tra xem nguyên nhân do driver bị lỗi, VGA quá nóng hay bộ nguồn cung cấp thiếu điện cho khe PCIe."
        ],
        fix: [
            "Vào trong chế độ Safe Mode, dùng phần mềm để gỡ sạch driver cũ, sau đó cài lại bản mới nhất hoặc bản cũ ổn định.",
            "Vào Power Options trong Control Panel, chuyển sang chế độ 'High Performance' để đảm bảo nguồn điện ổn định cho khe PCIe.",
        ],
        image: "hinh-anh/L87.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 88: Xé hình (Screen Tearing) khi chơi game / xem video
        keywords: [
            "xé hình khi chơi game",
            "screen tearing sọc ngang hình ảnh",
            "bật v-sync chống xé hình",
            "fps không đồng bộ hz màn hình",
            "hình bị cắt đôi khi di chuyển nhanh"
        ],
        name: "Xé hình (Screen Tearing) khi chơi game hoặc xem video",
        category: "Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Hình ảnh bị cắt làm đôi hoặc làm ba khúc trượt ngang, không khớp nhau khi nhân vật di chuyển nhanh hoặc máy quay lia ngang."
        ],
        diagnosisSteps: [
            "Xác định đây không phải lỗi vật lý mà là do Card màn hình render khung hình (FPS) không đồng bộ với Tần số quét (Hz) của màn hình."
        ],
        fix: [
            "Khắc phục đối với phần mềm, vào Settings đồ họa của Game, tìm và BẬT tính năng V-Sync (Đồng bộ dọc) để khóa FPS khớp với tần số quét màn hình.",
        ],
        image: "hinh-anh/L88.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 89: Máy quá nhiệt 100°C do quên bóc nilon tản nhiệt
        keywords: [
            "quên bóc nilon tản nhiệt cpu",
            "nhiệt độ vọt 100 độ máy mới lắp",
            "seal tản nhiệt chưa bóc",
            "thermal pad dày quá ép hổng",
            "vrm m.2 quá nhiệt do thiếu thermal pad",
            "tản nhiệt mới lắp nhưng máy vẫn nóng"
        ],
        name: "Máy quá nhiệt 100°C do quên bóc nilon trên tản nhiệt",
        category: "Phần cứng",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Máy mới lắp ráp nhưng vừa bật lên nhiệt độ CPU đã vọt lên 90°C - 100°C, quạt rú to và máy tự sập nguồn bảo vệ."
        ],
        diagnosisSteps: [
            "Xác định lỗi nằm ở bề mặt tiếp xúc giữa CPU và tản nhiệt nếu nhiệt độ chạm ngưỡng tối đa ngay từ khi ở trong BIOS.",
            "Kiểm tra xem bơm tản nhiệt nước (nếu có) đã hoạt động chưa hoặc tản nhiệt đã được bắt chặt chưa."
        ],
        fix: [
            "Tháo khối tản nhiệt CPU ra và kiểm tra mặt đế đồng tiếp xúc.",
            "Bóc bỏ miếng seal nilon trong suốt (thường có dòng chữ Warning: Please remove before installation) vẫn còn dính trên mặt đế.",
            "Lau sạch lớp keo cũ, tra lớp keo tản nhiệt mới và lắp lại tản nhiệt thật chặt.",
        ],
        image: "hinh-anh/L89.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 90: Màn hình PC chớp tắt khi bật/tắt bóng đèn, quạt trần
        keywords: [
            "màn hình chớp khi bật tắt đèn quạt",
            "nhiễu điện từ emi cáp hdmi",
            "cáp displayport bị nhiễu",
            "thiết bị điện gây chớp màn hình",
            "thay cáp hdmi chất lượng cao chống nhiễu",
            "ferrite bead chống nhiễu cáp"
        ],
        name: "Màn hình PC chớp tắt khi bật/tắt bóng đèn, quạt trần",
        category: "Phần cứng",
        difficulty: "Trung bình",
        estimatedCost: "---",
        symptoms: [
            "Màn hình máy tính nháy đen khoảng 2 giây rồi lên lại mỗi khi có người bật/tắt đèn tuýp, quạt trần hoặc các thiết bị điện có cuộn cảm trong nhà."
        ],
        diagnosisSteps: [
            "Xác định sự trùng hợp giữa thời điểm chớp màn hình và việc đóng ngắt các thiết bị điện công suất lớn trong cùng hệ thống điện.",
            "Kiểm tra chất lượng cáp tín hiệu (HDMI/DisplayPort) đang dùng có mỏng hoặc không có thương hiệu (hàng tặng kèm giá rẻ) hay không."
        ],
        fix: [
            "Nguyên nhân do xung nhiễu điện từ (EMI) phóng ra từ thiết bị điện truyền vào sợi cáp không có lớp chống nhiễu, làm gián đoạn tín hiệu kỹ thuật số.",
            "Khắc phục triệt để bằng cách thay thế sợi cáp DisplayPort hoặc HDMI loại chất lượng cao (thân dây to, bọc lưới chống nhiễu nhiều lớp).",
            "Ưu tiên chọn loại cáp có tích hợp cục chống nhiễu Ferrite Bead (hình trụ tròn) ở hai đầu dây.",
        ],
        image: "hinh-anh/L90.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 93: Pin sạc chỉ lên 60% hoặc 80% là báo "Plugged in, not charging"
        keywords: [
            "pin sạc dừng 60% hoặc 80%",
            "plugged in not charging bảo vệ pin",
            "battery health charging asus",
            "conservation mode lenovo tắt",
            "sạc không lên 100% bình thường",
            "giới hạn sạc pin kéo tuổi thọ"
        ],
        name: "Pin sạc chỉ lên 60% hoặc 80% là báo Plugged in, not charging",
        category: "Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Cắm sạc laptop nhưng pin dừng lại ở mức 60% hoặc 80% và báo 'Plugged in, not charging' thay vì sạc đầy 100%."
        ],
        diagnosisSteps: [
            "Xác định đây là tính năng bảo vệ pin (Battery Health) nhằm kéo dài tuổi thọ cell pin, tránh tình trạng điện áp cao liên tục.",
            "Phân biệt với lỗi phần cứng: Nếu pin vẫn sạc ổn định đến mức giới hạn này thì cell pin và IC sạc vẫn hoạt động tốt."
        ],
        fix: [
            "Với Asus: Mở MyAsus -> Customization -> Battery Health Charging -> Chuyển sang 'Full Capacity Mode'.",
            "Với Lenovo: Mở Lenovo Vantage -> Power -> Tắt tính năng 'Conservation Mode'.",
            "Với Dell: Mở Dell Power Manager -> Battery Setting -> Đổi từ 'Custom' hoặc 'Primarily AC Use' sang 'Standard'.",
            "Ghi chú: Việc khóa pin ở mức 60-80% giúp pin không bị phồng hay chai sau nhiều năm nếu bạn thường xuyên cắm điện sử dụng như máy bàn.",
            "Mẹo: Chỉ nên chuyển sang chế độ sạc 100% khi bạn chuẩn bị mang máy ra ngoài và không có nguồn điện sạc trong thời gian dài."
        ],
        image: "hinh-anh/L93.jpg",
        audio: "",
        video: ""
    },
    {
        // Lỗi 94: Kẹt phím Shift/Ctrl ngầm gây loạn thao tác chuột
        keywords: [
            "kẹt phím shift ctrl ngầm",
            "click chuột bôi đen nhiều file cùng lúc",
            "lăn chuột giữa zoom màn hình thay cuộn trang",
            "on-screen keyboard kiểm tra phím kẹt",
            "phím modifier bị kẹt ngầm",
            "ctrl shift stuck không gỡ được"
        ],
        name: "Kẹt phím Shift/Ctrl ngầm gây loạn thao tác chuột",
        category: "Phần cứng/Phần mềm",
        difficulty: "Dễ",
        estimatedCost: "---",
        symptoms: [
            "Click chuột bị bôi đen hàng loạt file hoặc lăn chuột giữa gây phóng to/thu nhỏ màn hình thay vì cuộn trang."
        ],
        diagnosisSteps: [
            "Mở bàn phím ảo (On-Screen Keyboard) để kiểm tra xem phím Ctrl hoặc Shift có đang bị sáng viền xanh (trạng thái đang nhấn) hay không."
        ],
        fix: [
            "Desktop: Gõ mạnh vài lần vào phím bị kẹt để gỡ lò xo hoặc tháo keycap vệ sinh bụi bẩn.",
            "Laptop: Nếu kẹt do mạch màng carbon (ẩm/nước), cần Uninstall driver trong Device Manager để dùng phím rời hoặc mang đi thay cụm phím mới.",
        ],
        image: "hinh-anh/L94.jpg",
        audio: "",
        video: ""
    },
];