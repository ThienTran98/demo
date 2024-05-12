## Directory structure
```plaintext
├── public/
│   ├── index.html        # Main HTML file of the React application
│   └── favicon.ico       # Website favicon
└── src/
    ├── assets/           # Resources like images, videos, and other asset files
    │   ├── images/       # Directory containing images
    │   │   ├── logo.png      # Application logo
    │   │   └── background.jpg    # Background image for the website
    │   ├── videos/       # Directory containing videos
    │   │   └── intro.mp4         # Introduction video for the application
    │   └── others/       # Other resources like fonts, icons, etc.
    │       └── font.ttf          # Custom font file
    ├── modules/          # Main modules of the application
    │   ├── auth/         # Module handling login and registration
    │   │   ├── components/    # UI components related to login and registration
    │   │   ├── hooks/         # Custom hooks related to login and registration
    │   │   ├── lib/           # Library and utility functions for this module
    │   │   ├── services/      # Logic for data handling and server interaction
    │   │   ├── states/        # State management and actions related to login and registration
    │   │   │   ├── actions/       # Redux actions
    │   │   │   ├── reducers/      # Redux reducers
    │   │   │   ├── selectors/     # Selectors to extract data from the store
    │   │   │   └── store/         # Initializing and configuring the Redux store
    │   │   └── utils/         # Utilities and helper functions for this module
    │   └── core/         # Module containing common components and logic for the entire application
    │       ├── components/    # Common UI components like header, footer, etc.
    │       ├── design-system/ # Directory containing components of the design system
    │       ├── hooks/         # Common custom hooks for the entire application
    │       ├── lib/           # Common library and utility functions
    │       └── utils/         # Common utilities and helper functions
    ├── components/       # UI components not belonging to any specific module
    ├── contexts/         # React Contexts and Providers
    ├── hooks/            # Common custom React hooks
    ├── icons/            # SVG icons for inline usage
    ├── lib/              # Common library and utility functions
    ├── pages/            # Components serving as entry points for pages
    ├── routes/           # Defining the routes of the application
    │   ├── AppRouter.tsx       # Component containing all the Routes of the application
    │   └── index.ts             # File containing the Route configurations
    ├── services/         # Logic for data handling and server interaction
    ├── states/           # State management and Redux actions
    ├── styles/           # CSS or CSS-in-JS styles
    ├── tests/            # Unit tests and other types of tests for your code
    ├── types/            # General TypeScript types, enums, and interfaces
    ├── api/              # Logic for server communication
    │   └── apiClient.ts       # Client for sending HTTP requests to the API
    ├── configs/          # Configuration for the application
    │   ├── env.ts              # File containing environment variables
    │   └── axiosConfig.ts      # Configuring axios for API communication
    ├── constants/        # Constants with unchanged values
    └── utils/            # Common utilities and helper functions
```


## Cấu Trúc Thư Mục

```plaintext
├── public/
│   ├── index.html        # Tệp HTML chính của ứng dụng React
│   └── favicon.ico       # Biểu tượng trang web
└── src/
    ├── assets/           # Tài nguyên như hình ảnh, video, và các tệp tài nguyên khác
    │   ├── images/       # Thư mục chứa hình ảnh
    │   │   ├── logo.png      # Logo của ứng dụng
    │   │   └── background.jpg    # Hình nền cho trang web
    │   ├── videos/       # Thư mục chứa video
    │   │   └── intro.mp4         # Video giới thiệu ứng dụng
    │   └── others/       # Các tài nguyên khác như font, biểu tượng, vv.
    │       └── font.ttf          # Font chữ tùy chỉnh
    ├── modules/          # Các module chính của ứng dụng
    │   ├── auth/         # Module quản lý đăng nhập và đăng ký
    │   │   ├── components/    # Các thành phần UI liên quan đến đăng nhập và đăng ký
    │   │   ├── hooks/         # Các hooks custom liên quan đến đăng nhập và đăng ký
    │   │   ├── lib/           # Thư viện và tiện ích hỗ trợ cho module này
    │   │   ├── services/      # Logic xử lý dữ liệu và tương tác với server
    │   │   ├── states/        # Quản lý trạng thái và hành động liên quan đến đăng nhập và đăng ký
    │   │   │   ├── actions/       # Các hành động Redux
    │   │   │   ├── reducers/      # Reducers Redux
    │   │   │   ├── selectors/     # Các selector để trích xuất dữ liệu từ store
    │   │   │   └── store/         # Khởi tạo và cấu hình Redux store
    │   │   └── utils/         # Các tiện ích và hàm phụ trợ cho module này
    │   └── core/         # Module chứa các thành phần và logic chung cho toàn bộ ứng dụng
    │       ├── components/    # Các thành phần UI chung như header, footer, vv.
    │       ├── design-system/ # Thư mục chứa các thành phần của hệ thống thiết kế
    │       ├── hooks/         # Các hooks custom chung cho toàn bộ ứng dụng
    │       ├── lib/           # Thư viện và tiện ích hỗ trợ chung
    │       └── utils/         # Các tiện ích và hàm phụ trợ chung
    ├── components/       # Các thành phần UI không thuộc bất kỳ module cụ thể nào
    ├── contexts/         # Các Contexts và Providers của React
    ├── hooks/            # Các custom React hooks chung
    ├── icons/            # Biểu tượng SVG để sử dụng inline
    ├── lib/              # Thư viện và tiện ích hỗ trợ chung
    ├── pages/            # Các component là điểm vào cho các trang
    ├── routes/           # Định nghĩa các đường dẫn của ứng dụng
    │   ├── AppRouter.tsx       # Component chứa tất cả các Route của ứng dụng
    │   └── index.ts             # File chứa các cấu hình Route
    ├── services/         # Logic xử lý dữ liệu và tương tác với server
    ├── states/           # Quản lý trạng thái và hành động Redux
    ├── styles/           # CSS hoặc CSS-in-JS styles
    ├── tests/            # Các unit test và các loại test khác cho mã của bạn
    ├── types/            # Các loại TypeScript chung, enums và giao diện
    ├── api/              # Logic liên lạc với máy chủ
    │   └── apiClient.jsx       # Client để gửi yêu cầu HTTP đến API
    ├── configs/          # Cấu hình cho ứng dụng
    │   ├── .env              # File chứa các biến môi trường
    │   └── axiosConfig.jsx      # Cấu hình axios cho giao tiếp với API
    └── constants/        # Các hằng số không thay đổi
    └── utils/            # Các tiện ích và hàm phụ trợ chung
```